# Epic 1: Infraestrutura de Captacao e Funil de Vendas

**Status:** Draft
**Tipo:** Greenfield
**Prioridade:** CRITICA (Fundacao do lancamento)
**Estimativa:** 2-3 semanas

---

## Epic Goal

Construir toda a infraestrutura de captacao de leads que alimentara o lancamento do "Codigo dos Cortes". Ao final deste epic, o time tera capacidade de captar leads atraves de landing pages otimizadas, nutri-los com sequencias de email automatizadas, e rastrear todas as conversoes com precisao para otimizacao de campanhas.

---

## Existing System Context

- **Dominio principal:** jpfreitas.com.br (ativo, site institucional)
- **Stack existente:** Next.js no Vercel (ocodigo.vercel.app)
- **Tracking ja implementado:** Meta Pixel, GA4, Microsoft Clarity (no site ocodigo)
- **Base de alunos:** 2.000+ alunos na JP Hair Education
- **Redes sociais:** Instagram @jpfreitas06 (audiencia ativa)

## Enhancement Details

- **O que sera construido:** Landing page de captura, integracao com email marketing, sequencias automatizadas, tracking completo
- **Como se integra:** Usa dominio existente (jpfreitas.com.br), expande tracking ja implementado, conecta com base existente de leads
- **Criterios de sucesso:** Landing page publicada, sequencias de email ativas, tracking funcional com eventos de conversao

---

## Stories

### Story 1.1: Landing Page de Captura com Isca Digital

```yaml
executor: "@dev"
quality_gate: "@architect"
quality_gate_tools: [performance_validation, seo_check, mobile_responsiveness]
```

> Como profissional de marketing do JP Freitas,
> Eu quero uma landing page otimizada para captura de leads,
> Para que possamos construir uma lista qualificada de profissionais interessados no Codigo dos Cortes.

**Tasks:**

- [ ] 1.1.1 Configurar projeto Next.js com dominio jpfreitas.com.br/codigo (ou subdominio)
- [ ] 1.1.2 Desenvolver layout responsivo mobile-first da landing page
  - [ ] Hero section com headline principal e sub-headline
  - [ ] Formulario de captura (nome, email, WhatsApp)
  - [ ] Secao de beneficios da isca digital
  - [ ] Social proof (numeros: 2000+ alunos, 20+ anos experiencia)
  - [ ] Footer com termos de uso e politica de privacidade (LGPD)
- [ ] 1.1.3 Integrar formulario com ActiveCampaign/Mailchimp via API
  - [ ] Criar lista especifica "Codigo dos Cortes - Leads"
  - [ ] Configurar tags automaticas (origem, data de captura)
  - [ ] Testar fluxo completo de captura
- [ ] 1.1.4 Configurar entrega automatica da isca digital
  - [ ] Email automatico com link para download/acesso
  - [ ] Pagina de obrigado com instrucoes de proximos passos
- [ ] 1.1.5 Implementar tracking completo
  - [ ] Meta Pixel com evento Lead customizado
  - [ ] GA4 com evento de conversao
  - [ ] Microsoft Clarity para heatmaps
  - [ ] UTM parameter tracking
- [ ] 1.1.6 Otimizar performance (Core Web Vitals < 3s)
- [ ] 1.1.7 Testes em dispositivos (iPhone, Android, Desktop)

**Acceptance Criteria:**

1. Landing page responsiva publicada em producao
2. Formulario captura e armazena leads no email marketing
3. Isca digital entregue automaticamente apos cadastro
4. Todos os pixels de tracking disparam corretamente
5. Pagina carrega em menos de 3 segundos
6. Pagina de obrigado exibida apos cadastro
7. UTM tracking funcional para atribuicao de campanhas

**Dev Notes:**
- Utilizar Next.js App Router (ja dominado pela equipe)
- Deploy no Vercel (infraestrutura ja existente)
- Considerar uso de Server Actions para o formulario
- Imagens otimizadas com next/image
- Fontes otimizadas com next/font

---

### Story 1.2: Sequencias de Email Pre-Lancamento

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [email_deliverability_test, copy_review, lgpd_compliance]
```

> Como gerente de marketing,
> Eu quero sequencias de email automatizadas para nutrir os leads captados,
> Para que os leads cheguem ao dia do lancamento aquecidos e prontos para comprar.

**Tasks:**

- [ ] 1.2.1 Configurar conta de email marketing (ActiveCampaign ou Mailchimp)
  - [ ] Configurar dominio de envio (SPF, DKIM, DMARC)
  - [ ] Validar deliverability com teste
- [ ] 1.2.2 Criar templates de email com identidade visual JP Freitas
  - [ ] Template base responsivo
  - [ ] Header com logo
  - [ ] Footer com links de descadastro (LGPD)
- [ ] 1.2.3 Criar sequencia de boas-vindas (3 emails)
  - [ ] Email 1 (imediato): Entrega da isca digital + apresentacao do JP
  - [ ] Email 2 (D+2): Conteudo de valor sobre cabelos texturizados
  - [ ] Email 3 (D+4): Case de sucesso de aluno + antecipacao do lancamento
- [ ] 1.2.4 Criar sequencia de aquecimento (5-7 emails)
  - [ ] Conteudo educativo intercalado com storytelling
  - [ ] Antecipacao do evento de lancamento
  - [ ] Convite para webinar/masterclass
- [ ] 1.2.5 Configurar segmentacao por engajamento
  - [ ] Tag: abriu email / clicou / nao abriu
  - [ ] Automacao de re-engajamento para inativos
- [ ] 1.2.6 Testar todas as sequencias (preview + envio de teste)
- [ ] 1.2.7 Validar taxa de entrega > 95%

**Acceptance Criteria:**

1. Sequencia de boas-vindas (3 emails) configurada e testada
2. Sequencia de aquecimento (5-7 emails) agendada
3. Templates com identidade visual do JP Freitas
4. Taxa de entrega superior a 95% validada
5. Segmentacao por engajamento funcionando
6. Link de cancelamento funcional em todos os emails

**Dev Notes:**
- Priorizar ActiveCampaign pela robustez de automacoes
- Se orcamento limitado, Mailchimp Free ate 500 contatos
- Agendar envios para 10h da manha (melhor taxa de abertura no nicho)

---

### Story 1.3: Configuracao de Trafego Pago e Rastreamento

```yaml
executor: "@devops"
quality_gate: "@dev"
quality_gate_tools: [tracking_validation, pixel_verification, utm_audit]
```

> Como gestor de trafego,
> Eu quero ter todas as integracoes de rastreamento e publicos configurados,
> Para que possamos rodar campanhas de captacao com atribuicao precisa.

**Tasks:**

- [ ] 1.3.1 Configurar Meta Pixel com eventos customizados
  - [ ] PageView (todas as paginas)
  - [ ] Lead (formulario de captura)
  - [ ] ViewContent (pagina de vendas)
  - [ ] InitiateCheckout (inicio do checkout)
  - [ ] Purchase (compra concluida)
- [ ] 1.3.2 Configurar Google Ads conversion tracking
  - [ ] Tag de conversao para leads
  - [ ] Tag de conversao para vendas
- [ ] 1.3.3 Criar publicos de remarketing
  - [ ] Visitou landing page (ultimos 30 dias)
  - [ ] Preencheu formulario (leads)
  - [ ] Visitou pagina de vendas mas nao comprou
  - [ ] Compradores (exclusao de campanhas de captacao)
- [ ] 1.3.4 Configurar Lookalike audiences
  - [ ] Lookalike de compradores (base de 2000+ alunos)
  - [ ] Lookalike de leads engajados
- [ ] 1.3.5 Mapear funis de conversao no GA4
  - [ ] Funil: LP -> Lead -> Webinar -> Checkout -> Compra
- [ ] 1.3.6 Criar UTM builder padronizado
  - [ ] Convencao de nomenclatura para campanhas
  - [ ] Planilha/ferramenta de geracao de UTMs
- [ ] 1.3.7 Validar todos os eventos com ferramentas de debug
  - [ ] Meta Pixel Helper
  - [ ] GA4 DebugView
  - [ ] Google Tag Assistant

**Acceptance Criteria:**

1. Meta Pixel com todos os eventos customizados funcionando
2. Google Ads tracking implementado
3. Publicos de remarketing criados e populando
4. Lookalike audiences configurados
5. GA4 com funis de conversao mapeados
6. UTM builder padronizado e documentado

---

## Compatibility Requirements

- [x] Dominio existente (jpfreitas.com.br) mantido funcional
- [ ] Tracking existente (ocodigo.vercel.app) nao pode ser quebrado
- [ ] Base de alunos existente na JP Hair Education nao sera afetada
- [ ] SEO do site institucional preservado

## Risk Mitigation

- **Primary Risk:** Deliverability de emails (risco de cair no spam)
  - **Mitigation:** Configurar SPF/DKIM/DMARC, aquecer dominio de envio, testar com Mail-Tester
- **Secondary Risk:** Performance da landing page em picos de trafego
  - **Mitigation:** Vercel Edge Network (CDN global), ISR/SSG para paginas estaticas
- **Rollback Plan:** Landing page no Vercel permite rollback instantaneo para versao anterior

## Quality Assurance Strategy

- **Pre-Commit:** Validacao de performance (Lighthouse), responsividade, tracking
- **Pre-Deploy:** Teste de formulario end-to-end, validacao de emails, teste de tracking
- **Post-Deploy:** Monitoramento de Core Web Vitals, taxas de conversao, deliverability

---

## Definition of Done

- [ ] Landing page publicada e funcional em producao
- [ ] Sequencias de email configuradas e testadas
- [ ] Tracking completo validado (Pixel + GA4 + Clarity)
- [ ] Publicos de remarketing criados
- [ ] Taxa de entrega de email > 95%
- [ ] Performance < 3 segundos (mobile)
- [ ] Documentacao de UTMs e convencoes criada

---

## Handoff to Story Manager

> @sm: Desenvolva user stories detalhadas para este epic de infraestrutura de captacao do lancamento "Codigo dos Cortes" de JP Freitas. Key considerations:
>
> - Stack: Next.js no Vercel + ActiveCampaign/Mailchimp + Meta Pixel + GA4
> - Integracao com dominio existente jpfreitas.com.br
> - Mobile-first (70%+ do trafego)
> - LGPD compliance obrigatorio
> - Base existente de 2000+ alunos para Lookalike audiences
> - Cada story deve ser completavel por um agente em uma sessao focada
