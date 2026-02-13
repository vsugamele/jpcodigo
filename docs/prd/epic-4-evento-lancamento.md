# Epic 4: Evento de Lancamento e Automacoes

**Status:** Draft
**Tipo:** Greenfield
**Prioridade:** ALTA
**Estimativa:** 2 semanas
**Depende de:** Epic 1 (lista de leads), Epic 2 (checkout pronto)

---

## Epic Goal

Executar o evento de lancamento (webinar/masterclass gratuita) que sera o principal conversor de leads em compradores, e configurar todas as automacoes de pos-venda que maximizam a receita por cliente (upsell para mentoria, remarketing de nao-compradores, programa de afiliados). Este epic e o motor de conversao e expansao do lancamento.

---

## Stories

### Story 4.1: Webinar/Masterclass ao Vivo

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [streaming_test, reminder_sequence_test, cta_tracking, replay_setup]
```

> Como lead aquecido,
> Eu quero participar de um evento ao vivo gratuito com o JP Freitas,
> Para que eu conheca o metodo dele ao vivo e decida se quero me matricular.

**Tasks:**

- [ ] 4.1.1 Criar pagina de inscricao do webinar
  - [ ] Headline sobre o tema da masterclass
  - [ ] Data, horario e duracao do evento
  - [ ] Formulario de registro (nome, email, WhatsApp)
  - [ ] Contador regressivo para o evento
  - [ ] Biografia resumida do JP Freitas
- [ ] 4.1.2 Configurar sequencia de lembretes
  - [ ] Email de confirmacao de inscricao (imediato)
  - [ ] Email lembrete 24h antes
  - [ ] Email lembrete 1h antes
  - [ ] WhatsApp lembrete 15min antes (se opt-in)
  - [ ] Adicionar evento ao Google Calendar (link .ics)
- [ ] 4.1.3 Configurar sala do webinar
  - [ ] Player ao vivo (YouTube Live / StreamYard / Zoom Webinar)
  - [ ] Chat ao vivo integrado
  - [ ] CTA flutuante com link para checkout
  - [ ] Banner de oferta especial exclusiva para participantes
  - [ ] Moderacao de chat (filtro de spam/links)
- [ ] 4.1.4 Configurar replay
  - [ ] Replay disponivel por 48h apos o evento
  - [ ] Pagina de replay com CTA de compra
  - [ ] Timer de expiracxao do replay
  - [ ] Email avisando que replay esta disponivel
- [ ] 4.1.5 Configurar follow-up pos-evento
  - [ ] Email para quem assistiu e NAO comprou (D+0)
  - [ ] Email de escassez (D+1): "Carrinho fecha em X horas"
  - [ ] Email para quem se inscreveu e NAO assistiu (com replay)
- [ ] 4.1.6 Tracking do evento
  - [ ] Evento de registro no Pixel e GA4
  - [ ] Taxa de presenca (inscritos vs presentes)
  - [ ] Cliques no CTA durante o evento
  - [ ] Vendas atribuidas ao evento

**Acceptance Criteria:**

1. Pagina de inscricao funcional com formulario
2. Sequencia de lembretes (email + WhatsApp) funcionando
3. Sala do webinar com player ao vivo e chat
4. CTA flutuante com link para checkout
5. Replay disponivel por 48h
6. Follow-up automatico para quem nao comprou
7. Tracking completo de registros e vendas do evento

---

### Story 4.2: Automacoes de Pos-Venda e Upsell

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [email_sequence_test, upsell_flow_test, segmentation_validation]
```

> Como time comercial,
> Eu quero automacoes que maximizem o valor por cliente apos a compra,
> Para que possamos aumentar o ticket medio com upsell para mentoria.

**Tasks:**

- [ ] 4.2.1 Configurar sequencia de upsell para mentoria
  - [ ] Email D+7: Apresentacao da mentoria BRABA
  - [ ] Email D+10: Case de sucesso de mentorado
  - [ ] Email D+14: Oferta exclusiva para alunos (desconto)
  - [ ] Email D+21: Ultima chance de desconto de aluno
- [ ] 4.2.2 Configurar recuperacao de carrinho abandonado
  - [ ] Email 30min apos abandono
  - [ ] Email 24h apos abandono (com depoimento)
  - [ ] WhatsApp 2h apos abandono (se opt-in)
  - [ ] Email 48h apos abandono (ultima chance)
- [ ] 4.2.3 Configurar recuperacao de boleto nao pago
  - [ ] Email lembrete D+1 apos geracao do boleto
  - [ ] Email lembrete D+2 com urgencia
  - [ ] WhatsApp D+1 com link do boleto
- [ ] 4.2.4 Configurar segmentacao automatica
  - [ ] Tag: comprou (aluno ativo)
  - [ ] Tag: abandonou carrinho
  - [ ] Tag: boleto nao pago
  - [ ] Tag: comprou + upsell mentoria
  - [ ] Tag: dentro da garantia / expirou garantia
  - [ ] Tag: pediu reembolso
- [ ] 4.2.5 Configurar alertas para equipe comercial
  - [ ] Alerta de carrinho abandonado (> R$500)
  - [ ] Alerta de boleto proximo do vencimento
  - [ ] Alerta de pedido de reembolso

**Acceptance Criteria:**

1. Sequencia de upsell para mentoria configurada (4 emails)
2. Recuperacao de carrinho abandonado ativa (email + WhatsApp)
3. Recuperacao de boleto nao pago funcionando
4. Segmentacao automatica por status do cliente
5. Alertas para equipe comercial configurados

---

### Story 4.3: Programa de Afiliados

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [affiliate_link_test, commission_calculation_test, dashboard_validation]
```

> Como aluno satisfeito,
> Eu quero indicar o curso para outros profissionais e ganhar comissao,
> Para que eu possa monetizar minha rede de contatos profissionais.

**Tasks:**

- [ ] 4.3.1 Ativar programa de afiliados na plataforma
  - [ ] Configurar comissao (20-30% sugerido)
  - [ ] Definir cookie duration (30-60 dias)
  - [ ] Definir regras de pagamento (apos periodo de garantia)
- [ ] 4.3.2 Criar pagina de afiliados
  - [ ] Explicacao do programa
  - [ ] Quanto pode ganhar (simulador de comissao)
  - [ ] Como funciona (3 passos simples)
  - [ ] Formulario de cadastro de afiliado
- [ ] 4.3.3 Preparar kit de materiais para afiliados
  - [ ] 5-10 criativos para Instagram (stories + feed)
  - [ ] 3-5 textos de copy prontos para usar
  - [ ] Swipe file de emails para afiliados enviarem
  - [ ] Video tutorial de como divulgar
- [ ] 4.3.4 Configurar dashboard do afiliado
  - [ ] Link unico de indicacao
  - [ ] Metricas: cliques, vendas, comissao acumulada
  - [ ] Historico de pagamentos
- [ ] 4.3.5 Automatizar convite para alunos se tornarem afiliados
  - [ ] Email D+30 apos compra: convite para programa de afiliados
  - [ ] Condicao: aluno com NPS 9-10 (promotor)

**Acceptance Criteria:**

1. Programa de afiliados ativo na plataforma
2. Link de indicacao unico por afiliado
3. Dashboard com metricas (cliques, vendas, comissoes)
4. Kit de materiais de divulgacao disponivel
5. Convite automatico para alunos promotores (NPS 9-10)
6. Comissao creditada apos periodo de garantia

---

### Story 4.4: Remarketing para Nao-Compradores

```yaml
executor: "@devops"
quality_gate: "@dev"
quality_gate_tools: [audience_validation, ad_tracking_test, email_sequence_test]
```

> Como gestor de trafego,
> Eu quero campanhas de remarketing para leads que nao compraram,
> Para que possamos converter leads indecisos em futuros lancamentos.

**Tasks:**

- [ ] 4.4.1 Segmentar leads nao-compradores
  - [ ] Assistiu webinar + nao comprou
  - [ ] Visitou pagina de vendas + nao comprou
  - [ ] Abandonou carrinho
  - [ ] Gerou boleto + nao pagou
- [ ] 4.4.2 Configurar sequencia de nurturing pos-lancamento
  - [ ] Conteudo de valor (sem vender)
  - [ ] Cases de sucesso de alunos
  - [ ] Aviso de proximo lancamento / lista de espera
- [ ] 4.4.3 Criar publicos de remarketing no Meta Ads
  - [ ] Custom audience de cada segmento
  - [ ] Criativos especificos por segmento
- [ ] 4.4.4 Configurar lista de espera para proximo lancamento
  - [ ] Pagina de lista de espera apos fechamento
  - [ ] Formulario simples (email + WhatsApp)
  - [ ] Sequencia de aquecimento para proximo ciclo

**Acceptance Criteria:**

1. Leads segmentados por comportamento (4 segmentos)
2. Sequencia de nurturing pos-lancamento ativa
3. Publicos de remarketing no Meta Ads criados
4. Lista de espera funcional para proximo lancamento

---

## Risk Mitigation

- **Primary Risk:** Webinar com problemas tecnicos ao vivo (streaming cai)
  - **Mitigation:** Backup de plataforma (YouTube + StreamYard), teste de banda 24h antes, video pre-gravado como fallback
- **Secondary Risk:** Baixa taxa de presenca no webinar (<30%)
  - **Mitigation:** Lembretes multi-canal (email + WhatsApp), bonus exclusivo para quem assiste ao vivo
- **Rollback Plan:** Se webinar falhar, enviar replay pre-gravado como "masterclass exclusiva"

## Definition of Done

- [ ] Webinar executado com sucesso (ou replay configurado)
- [ ] Automacoes de pos-venda e upsell ativas
- [ ] Recuperacao de carrinho abandonado funcionando
- [ ] Programa de afiliados operacional
- [ ] Remarketing segmentado para nao-compradores
- [ ] Lista de espera para proximo lancamento ativa
