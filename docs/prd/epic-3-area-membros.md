# Epic 3: Area de Membros e Entrega de Conteudo

**Status:** Draft
**Tipo:** Greenfield
**Prioridade:** ALTA
**Estimativa:** 2-3 semanas
**Depende de:** Epic 2 (checkout deve estar funcional para liberar acesso)

---

## Epic Goal

Entregar uma experiencia de aprendizado excepcional para os alunos do Codigo dos Cortes, com area de membros intuitiva, conteudo em video de alta qualidade, materiais complementares e acesso a comunidade BRABA. Este epic garante retencao, satisfacao (NPS 8+), taxa de conclusao de 60%+ e gera prova social organica para futuros lancamentos.

---

## Stories

### Story 3.1: Area de Membros com Modulos do Curso

```yaml
executor: "@dev"
quality_gate: "@architect"
quality_gate_tools: [video_streaming_test, mobile_responsiveness, security_audit, performance_validation]
```

> Como aluno do Codigo dos Cortes,
> Eu quero acessar os modulos do curso de forma organizada e intuitiva,
> Para que eu possa aprender no meu ritmo e acompanhar meu progresso.

**Tasks:**

- [ ] 3.1.1 Definir plataforma de area de membros
  - [ ] Opcao A: Hotmart Club (incluso no Hotmart, zero dev)
  - [ ] Opcao B: Area custom em Next.js (mais controle, mais trabalho)
  - [ ] Decisao baseada em orcamento e timeline
- [ ] 3.1.2 Configurar estrutura de modulos
  - [ ] Modulo 1: Fundamentos - Entendendo texturas capilares
  - [ ] Modulo 2: Ferramentas e produtos essenciais
  - [ ] Modulo 3: Tecnicas de corte para cacheados
  - [ ] Modulo 4: Tecnicas de corte para crespos
  - [ ] Modulo 5: Tecnicas de corte para ondulados
  - [ ] Modulo 6: Finalizacao e styling
  - [ ] Modulo 7: Atendimento e fidelizacao de clientes
  - [ ] Modulo Bonus: Marketing para cabeleireiros
- [ ] 3.1.3 Configurar hospedagem de videos
  - [ ] Upload de videos em HD (Vimeo OTT ou Bunny.net ou Hotmart nativo)
  - [ ] Protecao contra download (DRM basico)
  - [ ] Player responsivo com controle de velocidade
- [ ] 3.1.4 Implementar sistema de progresso
  - [ ] Checkbox de aula concluida
  - [ ] Barra de progresso por modulo
  - [ ] Progresso geral do curso (%)
  - [ ] Certificado de conclusao (PDF gerado automaticamente)
- [ ] 3.1.5 Configurar materiais complementares
  - [ ] PDFs de apoio por modulo
  - [ ] Checklists praticos
  - [ ] Templates de atendimento
  - [ ] Area de downloads organizada
- [ ] 3.1.6 Implementar login seguro
  - [ ] Autenticacao via email/senha (criado no checkout)
  - [ ] Recuperacao de senha
  - [ ] Protecao contra compartilhamento de login (limite de dispositivos)
- [ ] 3.1.7 Testar em dispositivos moveis (foco em smartphone)

**Acceptance Criteria:**

1. Login seguro funcional com email/senha
2. Dashboard do aluno com progresso geral e por modulo
3. 8+ modulos organizados sequencialmente
4. Player de video HD sem buffering
5. Materiais complementares disponiveis para download
6. Marcacao de aula concluida com barra de progresso
7. Certificado de conclusao disponivel ao completar o curso
8. Interface 100% responsiva para smartphone

---

### Story 3.2: Integracao com Comunidade BRABA

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [integration_test, onboarding_flow_test, notification_test]
```

> Como aluno ativo,
> Eu quero ter acesso a comunidade exclusiva de profissionais,
> Para que eu possa trocar experiencias, tirar duvidas e fazer networking.

**Tasks:**

- [ ] 3.2.1 Escolher e configurar plataforma de comunidade
  - [ ] Opcao A: Circle.so (profissional, pago)
  - [ ] Opcao B: Discord (gratuito, familiar)
  - [ ] Opcao C: Grupo Telegram (simples, alto engajamento)
  - [ ] Opcao D: Comunidade nativa do Hotmart
- [ ] 3.2.2 Configurar estrutura de canais/categorias
  - [ ] #boas-vindas - Apresentacoes de novos alunos
  - [ ] #duvidas-tecnicas - Perguntas sobre tecnicas de corte
  - [ ] #resultados - Fotos e videos de resultados dos alunos
  - [ ] #networking - Conexoes profissionais e parcerias
  - [ ] #avisos - Comunicados oficiais do JP e equipe
  - [ ] #lives-exclusivas - Calendario e gravacoes de lives
- [ ] 3.2.3 Automatizar acesso pos-compra
  - [ ] Webhook do checkout envia convite automatico
  - [ ] Email com link de acesso a comunidade
  - [ ] Onboarding automatico (mensagem de boas-vindas + regras)
- [ ] 3.2.4 Configurar presenca do JP Freitas
  - [ ] Agenda de lives semanais/quinzenais
  - [ ] Posts de conteudo exclusivo
  - [ ] Q&A periodico
- [ ] 3.2.5 Configurar notificacoes
  - [ ] Alerta de novas lives
  - [ ] Digest semanal de melhores conteudos
  - [ ] Notificacao de respostas a perguntas

**Acceptance Criteria:**

1. Acesso automatico a comunidade apos confirmacao de compra
2. Estrutura de canais/categorias organizada
3. Onboarding automatico com mensagem de boas-vindas
4. Presenca ativa do JP (lives + posts)
5. Notificacoes de novos conteudos e eventos

---

### Story 3.3: Sistema de Onboarding do Aluno

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [email_sequence_test, journey_mapping, nps_integration]
```

> Como novo aluno,
> Eu quero ser guiado nos meus primeiros passos apos a compra,
> Para que eu saiba exatamente como comecar e aproveitar ao maximo o curso.

**Tasks:**

- [ ] 3.3.1 Criar pagina de "Primeiros Passos"
  - [ ] Video de boas-vindas do JP Freitas
  - [ ] Checklist: 5 primeiras acoes do aluno
  - [ ] Link direto para Modulo 1
  - [ ] Link para comunidade BRABA
- [ ] 3.3.2 Configurar sequencia de onboarding (emails)
  - [ ] Email 1 (imediato): Dados de acesso + video de boas-vindas
  - [ ] Email 2 (D+1): Como aproveitar o curso ao maximo
  - [ ] Email 3 (D+3): Convite para comunidade BRABA + primeira live
  - [ ] Email 4 (D+7): Check-in de progresso + dica do JP
- [ ] 3.3.3 Configurar pesquisa NPS automatica
  - [ ] Envio automatico 30 dias apos compra
  - [ ] Formulario simples (0-10 + comentario)
  - [ ] Segmentacao: promotores (9-10), neutros (7-8), detratores (0-6)
  - [ ] Alerta para detratores (acionar suporte)
- [ ] 3.3.4 Configurar WhatsApp de suporte
  - [ ] Mensagem automatica de boas-vindas
  - [ ] FAQ automatizado (chatbot basico)
  - [ ] Escalacao para atendente humano

**Acceptance Criteria:**

1. Pagina de "Primeiros Passos" acessivel apos login
2. Sequencia de 4 emails de onboarding configurada
3. Pesquisa NPS enviada automaticamente apos 30 dias
4. WhatsApp de suporte com FAQ automatizado
5. Alerta automatico para detratores NPS

---

## Risk Mitigation

- **Primary Risk:** Video buffering/qualidade ruim (causa principal de cancelamento)
  - **Mitigation:** CDN de video dedicada (Vimeo OTT/Bunny), testes de carga previos
- **Secondary Risk:** Baixa taxa de conclusao do curso
  - **Mitigation:** Onboarding estruturado, gamificacao leve (progresso), comunidade ativa
- **Rollback Plan:** Se area custom falhar, migrar para Hotmart Club (backup plan)

## Definition of Done

- [ ] Area de membros funcional com todos os modulos
- [ ] Videos em HD sem buffering
- [ ] Comunidade BRABA configurada e acessivel
- [ ] Onboarding automatico (emails + pagina de primeiros passos)
- [ ] NPS automatico configurado
- [ ] Certificado de conclusao funcional
- [ ] Testes em dispositivos moveis aprovados
