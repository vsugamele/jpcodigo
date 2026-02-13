interface ContactData {
  name: string
  email: string
  phone: string
  tags: string[]
  utmData?: Record<string, string>
}

interface ActiveCampaignError {
  message: string
  status?: number
}

const API_URL = process.env.ACTIVECAMPAIGN_API_URL
const API_KEY = process.env.ACTIVECAMPAIGN_API_KEY
const LIST_ID = process.env.ACTIVECAMPAIGN_LIST_ID || '1'

async function acRequest(endpoint: string, method: string, body?: unknown) {
  if (!API_URL || !API_KEY) {
    console.warn('ActiveCampaign not configured. Skipping API call.')
    return null
  }

  const url = `${API_URL}/api/3/${endpoint}`
  const response = await fetch(url, {
    method,
    headers: {
      'Api-Token': API_KEY,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const error: ActiveCampaignError = {
      message: `ActiveCampaign API error: ${response.status}`,
      status: response.status,
    }
    throw error
  }

  return response.json()
}

export async function createActiveCampaignContact(data: ContactData): Promise<void> {
  if (!API_URL || !API_KEY) {
    console.warn('ActiveCampaign not configured. Lead data:', {
      email: data.email,
      name: data.name,
    })
    return
  }

  try {
    // Create or update contact
    const contactPayload = {
      contact: {
        email: data.email,
        firstName: data.name.split(' ')[0],
        lastName: data.name.split(' ').slice(1).join(' ') || '',
        phone: data.phone,
        fieldValues: [
          ...(data.utmData
            ? Object.entries(data.utmData)
                .filter(([, v]) => v)
                .map(([k, v]) => ({ field: k, value: v }))
            : []),
        ],
      },
    }

    const contactResult = await acRequest('contact/sync', 'POST', contactPayload)

    if (!contactResult?.contact?.id) {
      throw new Error('Failed to create contact')
    }

    const contactId = contactResult.contact.id

    // Add to list
    await acRequest('contactLists', 'POST', {
      contactList: {
        list: LIST_ID,
        contact: contactId,
        status: 1, // subscribed
      },
    })

    // Add tags
    for (const tagName of data.tags) {
      if (!tagName) continue
      try {
        // Find or create tag
        const tagSearch = await acRequest(
          `tags?search=${encodeURIComponent(tagName)}`,
          'GET'
        )
        let tagId: string

        if (tagSearch?.tags?.length > 0) {
          tagId = tagSearch.tags[0].id
        } else {
          const newTag = await acRequest('tags', 'POST', {
            tag: { tag: tagName, tagType: 'contact', description: '' },
          })
          tagId = newTag.tag.id
        }

        await acRequest('contactTags', 'POST', {
          contactTag: { contact: contactId, tag: tagId },
        })
      } catch (tagError) {
        console.warn(`Failed to add tag "${tagName}":`, tagError)
      }
    }
  } catch (error) {
    console.error('ActiveCampaign integration error:', error)
    throw new Error('Falha ao registrar lead. Tente novamente.')
  }
}
