# Epic 5: Dashboard de Metricas e Otimizacao

**Status:** Draft
**Tipo:** Greenfield
**Prioridade:** MEDIA
**Estimativa:** 1-2 semanas
**Depende de:** Epics 1-4 (dados de todas as fontes)

---

## Epic Goal

Fornecer visibilidade completa sobre a performance do lancamento com metricas em tempo real, permitindo decisoes rapidas durante o periodo de vendas. O dashboard consolida dados de captacao, vendas, email, webinar e afiliados em uma unica interface, com alertas automaticos e comparativos contra metas.

---

## Stories

### Story 5.1: Dashboard Consolidado de Lancamento

```yaml
executor: "@dev"
quality_gate: "@architect"
quality_gate_tools: [api_integration_test, performance_validation, data_accuracy_test]
```

> Como gestor do projeto,
> Eu quero um dashboard com metricas de lancamento em tempo real,
> Para que eu possa tomar decisoes rapidas e otimizar campanhas durante o lancamento.

**Tasks:**

- [ ] 5.1.1 Definir stack do dashboard
  - [ ] Opcao A: Next.js + Recharts (custom, controle total)
  - [ ] Opcao B: Google Data Studio/Looker (rapido, sem codigo)
  - [ ] Opcao C: Metabase (open-source, poderoso)
  - [ ] Decisao baseada em timeline e necessidade de real-time
- [ ] 5.1.2 Integrar dados de captacao
  - [ ] API do email marketing: leads/dia, taxa de crescimento
  - [ ] Custo por lead (via Meta Ads API ou manual)
  - [ ] Taxa de conversao da landing page
  - [ ] Leads por origem (organico, pago, afiliado)
- [ ] 5.1.3 Integrar dados de vendas
  - [ ] API da plataforma de checkout: vendas, receita, ticket medio
  - [ ] Vendas por dia/hora (grafico temporal)
  - [ ] Vendas por meio de pagamento
  - [ ] Taxa de conversao (leads -> vendas)
  - [ ] Receita acumulada vs meta
- [ ] 5.1.4 Integrar dados de email marketing
  - [ ] Taxa de abertura por sequencia
  - [ ] Taxa de clique por sequencia
  - [ ] Taxa de descadastro
  - [ ] Emails entregues vs bounced
- [ ] 5.1.5 Integrar dados do webinar
  - [ ] Inscritos totais
  - [ ] Taxa de presenca (inscritos vs presentes)
  - [ ] Vendas atribuidas ao evento
  - [ ] Engajamento (tempo medio assistido)
- [ ] 5.1.6 Integrar dados de afiliados
  - [ ] Top 10 afiliados por vendas
  - [ ] Comissoes acumuladas
  - [ ] Cliques e taxa de conversao por afiliado
- [ ] 5.1.7 Implementar comparativo contra metas
  - [ ] Meta de leads: 5.000
  - [ ] Meta de vendas: 500 alunos
  - [ ] Meta de receita: R$200k-500k
  - [ ] Meta de NPS: 8+
  - [ ] Indicador visual: verde/amarelo/vermelho
- [ ] 5.1.8 Configurar atualizacao automatica
  - [ ] Refresh a cada 15 minutos (ou real-time via webhooks)
  - [ ] Ultimo update visivel no dashboard

**Acceptance Criteria:**

1. Metricas de captacao: leads/dia, custo por lead, taxa de conversao
2. Metricas de vendas: vendas/dia, receita total, ticket medio
3. Metricas de email: abertura, clique, descadastro
4. Metricas de webinar: inscritos, presentes, vendas
5. Metricas de afiliados: top afiliados, comissoes
6. Comparativo com metas (visual verde/amarelo/vermelho)
7. Atualizacao automatica a cada 15 minutos

---

### Story 5.2: Alertas e Notificacoes Automaticas

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [alert_trigger_test, notification_delivery_test]
```

> Como gestor do lancamento,
> Eu quero receber alertas automaticos sobre eventos criticos,
> Para que eu possa reagir rapidamente a problemas ou oportunidades.

**Tasks:**

- [ ] 5.2.1 Configurar alertas de vendas
  - [ ] Alerta: vendas caem 50%+ vs hora anterior
  - [ ] Alerta: meta diaria atingida
  - [ ] Alerta: receita total atingiu meta do lancamento
- [ ] 5.2.2 Configurar alertas de problemas
  - [ ] Alerta: checkout com erro (taxa de falha > 5%)
  - [ ] Alerta: email bouncing acima de 5%
  - [ ] Alerta: site fora do ar (uptime check)
- [ ] 5.2.3 Configurar alertas de oportunidade
  - [ ] Alerta: afiliado com alta conversao (oportunidade de parceria)
  - [ ] Alerta: segmento com alta conversao (oportunidade de escalar)
- [ ] 5.2.4 Definir canais de notificacao
  - [ ] Email para equipe gestora
  - [ ] WhatsApp para alertas criticos
  - [ ] Slack/Discord para equipe tecnica (se houver)

**Acceptance Criteria:**

1. Alertas de vendas (queda, meta atingida) funcionando
2. Alertas de problemas (checkout, email, uptime) ativos
3. Notificacoes via email e WhatsApp configuradas
4. Alertas testados com cenarios simulados

---

### Story 5.3: Relatorio Pos-Lancamento

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [data_accuracy_test, report_completeness]
```

> Como time de gestao,
> Eu quero um relatorio completo pos-lancamento,
> Para que possamos analisar resultados, aprender e planejar o proximo ciclo.

**Tasks:**

- [ ] 5.3.1 Criar template de relatorio pos-lancamento
  - [ ] Resumo executivo (receita, alunos, ROI)
  - [ ] Funil completo (leads -> webinar -> checkout -> venda)
  - [ ] Performance por canal (organico, pago, afiliado, email)
  - [ ] Top criativos e copys (o que performou melhor)
  - [ ] Principais aprendizados
  - [ ] Recomendacoes para proximo lancamento
- [ ] 5.3.2 Automatizar coleta de dados para relatorio
  - [ ] Exportar dados de todas as fontes
  - [ ] Consolidar em planilha ou banco de dados
- [ ] 5.3.3 Gerar relatorio PDF/Notion compartilhavel

**Acceptance Criteria:**

1. Template de relatorio pos-lancamento criado
2. Dados de todas as fontes consolidados
3. Relatorio geravel em formato compartilhavel
4. Secao de aprendizados e recomendacoes incluida

---

## Risk Mitigation

- **Primary Risk:** APIs de terceiros com rate limit ou indisponibilidade
  - **Mitigation:** Cache local, fallback para dados manuais, retry com backoff
- **Secondary Risk:** Dados inconsistentes entre plataformas
  - **Mitigation:** Definir fonte de verdade por metrica, reconciliacao diaria
- **Rollback Plan:** Se dashboard custom falhar, usar Google Sheets + Data Studio como fallback

## Definition of Done

- [ ] Dashboard consolidado funcional com todas as integracoes
- [ ] Metricas atualizando automaticamente
- [ ] Comparativo contra metas visivel
- [ ] Alertas automaticos configurados e testados
- [ ] Template de relatorio pos-lancamento criado
