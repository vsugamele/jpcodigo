---
id: story-1.3
title: Configuracao de Trafego Pago e Rastreamento
epic: Epic 1 - Infraestrutura de Captacao e Funil de Vendas
status: Ready for Dev
executor: "@devops"
quality_gate: "@dev"
quality_gate_tools: [tracking_validation, pixel_verification, utm_audit]
priority: ALTA
estimated_effort: 1 dia
depends_on: story-1.1
---

# Story 1.3: Configuracao de Trafego Pago e Rastreamento

## Story

> Como gestor de trafego,
> Eu quero ter todas as integracoes de rastreamento e publicos configurados,
> Para que possamos rodar campanhas de captacao com atribuicao precisa.

## Acceptance Criteria

1. Meta Pixel configurado com eventos customizados (Lead, ViewContent, InitiateCheckout, Purchase)
2. Google Ads conversion tracking implementado
3. Publicos de remarketing criados (visitou LP, preencheu form, nao converteu)
4. Lookalike audiences configurados a partir da base de alunos existente
5. GA4 com funis de conversao mapeados
6. UTM builder padronizado para todas as campanhas

## Tasks

- [ ] 1.3.1 Configurar Meta Pixel com eventos
  - [ ] PageView (todas as paginas)
  - [ ] Lead (submit do formulario de captura)
  - [ ] ViewContent (pagina de vendas)
  - [ ] InitiateCheckout (clique no botao de compra)
  - [ ] Purchase (webhook do checkout - valor dinamico)
  - [ ] Testar com Meta Pixel Helper

- [ ] 1.3.2 Configurar Google Ads
  - [ ] Tag de conversao para Lead
  - [ ] Tag de conversao para Purchase (com valor)
  - [ ] Enhanced conversions (se aplicavel)

- [ ] 1.3.3 Criar publicos de remarketing (Meta)
  - [ ] Visitou LP nos ultimos 30 dias
  - [ ] Preencheu formulario (leads)
  - [ ] Visitou pagina de vendas
  - [ ] Iniciou checkout mas nao comprou
  - [ ] Compradores (para exclusao)

- [ ] 1.3.4 Configurar Lookalike audiences
  - [ ] Upload da base de 2000+ alunos existentes
  - [ ] Lookalike 1% de compradores
  - [ ] Lookalike 1% de leads engajados

- [ ] 1.3.5 Mapear funis no GA4
  - [ ] Funil: LP -> Lead -> Pagina Vendas -> Checkout -> Purchase
  - [ ] Configurar como exploration report

- [ ] 1.3.6 Criar UTM builder padronizado
  - [ ] Convencao: utm_source / utm_medium / utm_campaign / utm_content
  - [ ] Documento com exemplos por canal
  - [ ] Planilha ou ferramenta de geracao

- [ ] 1.3.7 Validacao final
  - [ ] Testar todos os eventos com ferramentas de debug
  - [ ] Confirmar que publicos estao populando
  - [ ] Documentar setup completo

## Dev Notes

- Usar componente de tracking centralizado (components/tracking/)
- Meta Pixel via next/script (strategy="afterInteractive")
- GA4 via gtag.js ou @next/third-parties
- Eventos server-side via Conversions API do Meta (bonus - melhora atribuicao)

## Dev Agent Record

### Debug Log
_(Preenchido durante desenvolvimento)_

### Completion Notes
_(Preenchido ao completar)_

### Change Log
| Date | Change | Files |
|------|--------|-------|

### File List
_(Atualizado durante desenvolvimento)_
