# Arquitetura Tecnica - Plataforma de Lancamento JP Freitas

**Versao:** 1.0
**Data:** 2026-02-12
**Autor:** Architect Agent (via Morgan PM)
**Status:** Draft

---

## 1. Visao Geral da Arquitetura

### Abordagem: Hibrida (SaaS + Custom)

A arquitetura combina plataformas SaaS especializadas (checkout, email, comunidade) com desenvolvimento custom (landing pages, dashboard) para equilibrar velocidade de entrega com controle e personalizacao.

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js / Vercel)              │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │ Landing  │  │ Pagina   │  │ Webinar  │  │ Dashboard │  │
│  │ Page     │  │ Vendas   │  │ Page     │  │ Admin     │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └─────┬─────┘  │
│       │              │              │               │       │
└───────┼──────────────┼──────────────┼───────────────┼───────┘
        │              │              │               │
┌───────┼──────────────┼──────────────┼───────────────┼───────┐
│       ▼              ▼              ▼               ▼       │
│              INTEGRACAO / APIs / WEBHOOKS                    │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │ Hotmart/ │  │ Active   │  │ Meta Ads │  │ WhatsApp  │  │
│  │ Kiwify   │  │ Campaign │  │ + GA4    │  │ API       │  │
│  │(Checkout)│  │ (Email)  │  │(Tracking)│  │ (Wati)    │  │
│  └──────────┘  └──────────┘  └──────────┘  └───────────┘  │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ Vimeo/   │  │ Circle/  │  │ YouTube  │                  │
│  │ Bunny    │  │ Discord  │  │ Live     │                  │
│  │ (Video)  │  │(Comunid.)│  │(Webinar) │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Stack Tecnologico

### Frontend & Deploy

| Tecnologia | Versao | Justificativa |
|-----------|--------|---------------|
| **Next.js** | 14+ (App Router) | Ja utilizado (ocodigo.vercel.app), SSG/ISR para performance |
| **React** | 18+ | Ecossistema robusto, team familiarity |
| **Tailwind CSS** | 3.x | Rapid UI development, mobile-first utilities |
| **Vercel** | - | Deploy automatico, Edge Network global, rollback instantaneo |
| **TypeScript** | 5.x | Type safety, melhor DX |

### Plataformas SaaS

| Servico | Plataforma | Justificativa |
|---------|-----------|---------------|
| **Checkout/Pagamento** | Hotmart ou Kiwify | Ecossistema BR, afiliados nativo, split, antifraude |
| **Email Marketing** | ActiveCampaign | Automacoes avancadas, segmentacao, deliverability |
| **Video Hosting** | Vimeo OTT ou Bunny.net | CDN dedicada, DRM basico, player customizavel |
| **Comunidade** | Circle.so ou Discord | Engajamento, canais, integracao com webhooks |
| **Webinar** | StreamYard + YouTube Live | Qualidade profissional, chat nativo, replay automatico |
| **WhatsApp** | Wati | API oficial, automacoes, templates aprovados |
| **Analytics** | GA4 + Meta Pixel + Clarity | Ja implementados, funil completo |

### Infraestrutura

| Componente | Solucao | Justificativa |
|-----------|---------|---------------|
| **Hosting** | Vercel (Edge) | Zero config, CDN global, SSL automatico |
| **DNS** | Vercel DNS ou Cloudflare | Performance, protecao DDoS |
| **Dominio** | jpfreitas.com.br | Consolidacao em dominio unico |
| **Monitoramento** | Vercel Analytics + UptimeRobot | Performance real-time, alertas de downtime |
| **Banco de dados** | Vercel KV ou Supabase (se necessario) | Para timer de escassez, estado do carrinho |

---

## 3. Decisoes Arquiteturais

### ADR-001: Checkout SaaS vs Custom

**Decisao:** Usar Hotmart/Kiwify (SaaS)
**Alternativas:** Stripe + checkout custom, PagarMe direto
**Justificativa:**
- Programa de afiliados nativo (sem dev)
- Antifraude incluso
- Area de membros basica inclusa (Hotmart Club)
- Suporte a PIX, boleto, cartao nativamente
- Split de pagamento para co-produtores
- **Tradeoff:** Menos controle visual do checkout, taxas da plataforma

### ADR-002: Area de Membros - Hotmart Club vs Custom

**Decisao:** Hotmart Club para MVP, migrar para custom se necessario
**Justificativa:**
- Incluso na plataforma (custo zero adicional)
- Integracao automatica com checkout
- Suficiente para curso com modulos lineares
- **Tradeoff:** Customizacao limitada, sem gamificacao avancada
- **Trigger de migracao:** Se NPS < 7 por causa da plataforma, migrar para custom

### ADR-003: Landing Pages - Next.js Custom

**Decisao:** Desenvolver landing pages em Next.js no Vercel
**Alternativas:** WordPress + Elementor, Unbounce, Hotmart Pages
**Justificativa:**
- Equipe ja domina Next.js (ocodigo.vercel.app)
- Performance superior (SSG, edge caching)
- Controle total de design e UX
- SEO otimizado nativamente
- **Tradeoff:** Mais tempo de desenvolvimento vs page builders

### ADR-004: Timer de Escassez - Server-Side

**Decisao:** Timer sincronizado com servidor (nao client-side)
**Justificativa:**
- Nao pode ser manipulado pelo usuario (inspecionar elemento)
- Consistente entre dispositivos
- API simples: GET /api/cart-status retorna { open: boolean, closesAt: ISO }
- **Implementacao:** Vercel KV ou env variable com data de fechamento

### ADR-005: Dashboard - Google Looker Studio para MVP

**Decisao:** Usar Looker Studio (ex-Data Studio) para dashboard inicial
**Alternativas:** Next.js + Recharts custom, Metabase
**Justificativa:**
- Zero codigo, setup em horas
- Conectores nativos para GA4, Google Sheets
- Dados de Hotmart/email via Google Sheets (webhook -> Sheets)
- **Trigger de migracao:** Se precisar real-time (<5min), migrar para custom

---

## 4. Integracoes

### Fluxo de Dados Principal

```
Lead capturado (LP)
  │
  ├──> ActiveCampaign (via API)
  │     └──> Tags: origem, data, campanha
  │     └──> Sequencia de boas-vindas
  │
  ├──> Meta Pixel (evento Lead)
  │
  └──> GA4 (evento generate_lead)

Compra realizada (Checkout)
  │
  ├──> Hotmart Webhook ──> ActiveCampaign
  │     └──> Tag: comprador
  │     └──> Sequencia de onboarding
  │     └──> Remove de sequencia de vendas
  │
  ├──> Hotmart Webhook ──> Comunidade (convite)
  │
  ├──> Meta Pixel (evento Purchase + valor)
  │
  ├──> GA4 (evento purchase + valor)
  │
  └──> Dashboard (via Sheets/API)

Carrinho abandonado
  │
  ├──> Hotmart/Kiwify Webhook ──> ActiveCampaign
  │     └──> Tag: carrinho_abandonado
  │     └──> Sequencia de recuperacao
  │
  └──> Wati (WhatsApp de recuperacao)
```

### Webhooks Necessarios

| Evento | Origem | Destino | Acao |
|--------|--------|---------|------|
| Lead capturado | Landing Page | ActiveCampaign | Criar contato + tags |
| Compra aprovada | Hotmart/Kiwify | ActiveCampaign | Tag comprador, onboarding |
| Compra aprovada | Hotmart/Kiwify | Comunidade | Convite automatico |
| Carrinho abandonado | Hotmart/Kiwify | ActiveCampaign | Sequencia recuperacao |
| Boleto gerado | Hotmart/Kiwify | ActiveCampaign + Wati | Lembretes de pagamento |
| Reembolso | Hotmart/Kiwify | ActiveCampaign | Tag reembolso, remove acessos |
| NPS respondido | Formulario | ActiveCampaign | Segmentacao promotor/detrator |

---

## 5. Seguranca e Compliance

### LGPD

- [ ] Politica de privacidade em todas as paginas de captura
- [ ] Checkbox de consentimento nos formularios
- [ ] Link de descadastro em todos os emails
- [ ] Formulario de exclusao de dados (direito ao esquecimento)
- [ ] Dados armazenados apenas nas plataformas SaaS (sem banco proprio)

### Seguranca

- [ ] HTTPS em todos os dominios (Vercel SSL automatico)
- [ ] Protecao contra compartilhamento de login (limite de dispositivos no Hotmart)
- [ ] DRM basico nos videos (Vimeo/Bunny)
- [ ] Rate limiting nas APIs customizadas
- [ ] Validacao de webhooks (signature verification)

---

## 6. Performance e Escalabilidade

### Metas de Performance

| Metrica | Meta | Como |
|---------|------|------|
| LCP (Largest Contentful Paint) | < 2.5s | SSG, CDN, image optimization |
| FID (First Input Delay) | < 100ms | Minimal JS, code splitting |
| CLS (Cumulative Layout Shift) | < 0.1 | Reserved space, font loading |
| TTFB (Time to First Byte) | < 200ms | Vercel Edge, ISR |

### Estrategia de Escalabilidade

- **Landing pages:** Estaticas (SSG), servidas pelo Edge (escala infinita)
- **Checkout:** Infraestrutura Hotmart/Kiwify (escala gerenciada)
- **Video:** CDN dedicada (Vimeo/Bunny) com cache global
- **Email:** ActiveCampaign gerencia filas e deliverability
- **Dashboard:** Looker Studio escala automaticamente

### Picos Esperados

| Evento | Trafego esperado | Duracao |
|--------|-----------------|---------|
| Abertura de carrinho | 5.000-10.000 visitas/hora | 2-4 horas |
| Webinar ao vivo | 1.000-3.000 simultaneos | 2 horas |
| Fechamento de carrinho | 3.000-5.000 visitas/hora | 6 horas |

---

## 7. Estrutura do Repositorio

```
jp-freitas-lancamento/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Home / redirect
│   │   ├── captura/            # Landing page de captura
│   │   ├── vendas/             # Pagina de vendas (VSL)
│   │   ├── webinar/            # Pagina do webinar
│   │   ├── obrigado/           # Thank you pages
│   │   ├── espera/             # Lista de espera (pos-fechamento)
│   │   ├── afiliados/          # Pagina do programa de afiliados
│   │   ├── admin/              # Dashboard admin (protegido)
│   │   └── api/                # API Routes
│   │       ├── lead/           # Captura de leads
│   │       ├── cart-status/    # Status do carrinho (aberto/fechado)
│   │       ├── webhook/        # Webhooks de checkout
│   │       └── health/         # Health check
│   ├── components/             # Componentes reutilizaveis
│   │   ├── ui/                 # Botoes, inputs, cards
│   │   ├── sections/           # Hero, Benefits, Testimonials, FAQ
│   │   ├── forms/              # LeadForm, CheckoutForm
│   │   └── tracking/           # Pixel, GA4, Clarity wrappers
│   ├── lib/                    # Utilitarios
│   │   ├── activecampaign.ts   # Client ActiveCampaign API
│   │   ├── hotmart.ts          # Client Hotmart API
│   │   ├── wati.ts             # Client WhatsApp API
│   │   └── analytics.ts        # Tracking helpers
│   └── styles/                 # Global styles
├── public/                     # Assets estaticos
│   ├── images/                 # Fotos JP, alunos, resultados
│   ├── videos/                 # Thumbnails
│   └── docs/                   # PDFs (isca digital, materiais)
├── docs/                       # Documentacao do projeto
│   ├── prd/                    # PRD e Epics
│   ├── architecture/           # Arquitetura
│   └── stories/                # User stories
├── .env.local                  # Variaveis de ambiente (local)
├── .env.example                # Template de variaveis
├── next.config.js              # Configuracao Next.js
├── tailwind.config.js          # Configuracao Tailwind
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencias
```

---

## 8. Variaveis de Ambiente

```env
# Tracking
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
NEXT_PUBLIC_CLARITY_ID=

# Email Marketing
ACTIVECAMPAIGN_API_URL=
ACTIVECAMPAIGN_API_KEY=
ACTIVECAMPAIGN_LIST_ID=

# Checkout
HOTMART_CLIENT_ID=
HOTMART_CLIENT_SECRET=
HOTMART_WEBHOOK_SECRET=

# WhatsApp
WATI_API_URL=
WATI_API_KEY=

# Cart Control
CART_OPEN_DATE=2026-03-15T20:00:00-03:00
CART_CLOSE_DATE=2026-03-22T23:59:59-03:00

# Video
VIMEO_ACCESS_TOKEN=

# General
NEXT_PUBLIC_BASE_URL=https://jpfreitas.com.br
```

---

## 9. Cronograma de Implementacao

| Semana | Epic | Foco |
|--------|------|------|
| 1-2 | Epic 1 | Landing page, email sequences, tracking |
| 3-4 | Epic 2 | Pagina de vendas, checkout, escassez |
| 5-6 | Epic 3 | Area de membros, comunidade, onboarding |
| 7 | Epic 4 | Webinar, automacoes, afiliados |
| 8 | Epic 5 | Dashboard, alertas |
| 9 | QA & Buffer | Testes finais, ajustes, dry run |
| 10 | LANCAMENTO | Go live |

**Total estimado: 8-10 semanas ate lancamento**
