---
id: story-1.2
title: Sequencias de Email Pre-Lancamento
epic: Epic 1 - Infraestrutura de Captacao e Funil de Vendas
status: Ready for Dev
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [email_deliverability_test, copy_review, lgpd_compliance]
priority: ALTA
estimated_effort: 1-2 dias
depends_on: story-1.1
---

# Story 1.2: Sequencias de Email Pre-Lancamento

## Story

> Como gerente de marketing,
> Eu quero sequencias de email automatizadas para nutrir os leads captados,
> Para que os leads cheguem ao dia do lancamento aquecidos e prontos para comprar.

## Acceptance Criteria

1. Sequencia de boas-vindas (3 emails) configurada e testada
2. Sequencia de aquecimento (5-7 emails com conteudo de valor) agendada
3. Templates de email com identidade visual do JP Freitas
4. Taxa de entrega superior a 95% validada com teste
5. Segmentacao por engajamento (abriu/clicou/nao abriu) funcionando
6. Link de cancelamento de inscricao funcional (LGPD)

## Tasks

- [ ] 1.2.1 Configurar conta ActiveCampaign
  - [ ] Criar conta e configurar dominio de envio
  - [ ] Configurar SPF, DKIM, DMARC no DNS
  - [ ] Validar deliverability com mail-tester.com (score > 8/10)

- [ ] 1.2.2 Criar templates de email
  - [ ] Template base responsivo (HTML) com identidade visual JP
  - [ ] Header: logo JP Freitas
  - [ ] Footer: links sociais + descadastro (LGPD) + endereco

- [ ] 1.2.3 Criar sequencia de boas-vindas (3 emails)
  - [ ] Email 1 (imediato): Entrega da isca digital + apresentacao do JP
  - [ ] Email 2 (D+2): Conteudo de valor (tecnica ou dica pratica)
  - [ ] Email 3 (D+4): Case de sucesso + antecipacao do lancamento

- [ ] 1.2.4 Criar sequencia de aquecimento (5-7 emails)
  - [ ] Email 1 (D+7): Conteudo educativo sobre texturas capilares
  - [ ] Email 2 (D+10): Storytelling - historia do JP Freitas
  - [ ] Email 3 (D+14): Dica pratica com video curto
  - [ ] Email 4 (D+17): Depoimento de aluno transformado
  - [ ] Email 5 (D+21): Antecipacao forte do evento/lancamento
  - [ ] Email 6 (D+24): Convite para webinar/masterclass
  - [ ] Email 7 (D+26): Lembrete do webinar + bonus exclusivo

- [ ] 1.2.5 Configurar segmentacao
  - [ ] Tag: engajado (abriu 3+ emails)
  - [ ] Tag: super_engajado (clicou em 2+ emails)
  - [ ] Tag: frio (nao abriu ultimos 3 emails)
  - [ ] Automacao de re-engajamento para leads frios

- [ ] 1.2.6 Testar tudo
  - [ ] Enviar testes para 3+ emails diferentes
  - [ ] Verificar renderizacao mobile e desktop
  - [ ] Validar todos os links nos emails
  - [ ] Confirmar que automacoes disparam corretamente

## Dev Notes

- Priorizar ActiveCampaign pela robustez de automacoes
- Agendar envios para 10h da manha (melhor taxa de abertura no nicho beleza)
- Subject lines curtas e com emoji (testar A/B depois)
- Conteudo dos emails deve ser fornecido pelo time de conteudo/JP
- Para MVP, copys placeholder sao aceitaveis (marcar com [CONTEUDO PENDENTE])

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
