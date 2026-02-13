# Plataforma de Lancamento JP Freitas - Codigo dos Cortes
## Product Requirements Document (PRD)

**Versao:** 1.0
**Data:** 2026-02-12
**Autor:** Morgan (PM Agent)
**Status:** Draft

---

## 1. Goals and Background Context

### Goals

- Consolidar o ecossistema digital do JP Freitas em uma plataforma unificada de lancamento
- Lancar o produto "Codigo dos Cortes" (curso online + mentoria) para profissionais da beleza
- Gerar receita de R$200k-500k no primeiro lancamento
- Construir um funil de vendas automatizado e escalavel (captacao -> nurturing -> conversao -> upsell)
- Estabelecer JP Freitas como a principal autoridade em cabelos cacheados, crespos e ondulados no Brasil
- Atingir 500+ novos alunos no primeiro ciclo de lancamento

### Background Context

JP Freitas e um cabeleireiro com 20+ anos de experiencia, reconhecido como "Brabo dos Cachos e Crespos". Ja formou mais de 2.000 alunos atraves da JP Hair Education e inaugurou o JP6 Studio em Sao Paulo. O ecossistema atual esta fragmentado em multiplos dominios (jpfreitas.com.br, jp.haireducation.com.br, ocodigo.vercel.app, jphairschool.com.br) o que dilui autoridade de SEO e confunde o publico.

O novo produto "Codigo dos Cortes" representa uma evolucao da oferta educacional, combinando curso online completo com mentoria para profissionais que desejam se especializar em cabelos texturizados. O mercado de beleza para cabelos naturais esta em crescimento acelerado no Brasil, com demanda crescente por profissionais qualificados.

### Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-02-12 | 1.0 | Criacao inicial do PRD | Morgan (PM) |

---

## 2. Requirements

### Functional Requirements

- **FR1:** O sistema deve possuir landing page de captura com formulario de lead (nome, email, WhatsApp) integrada a ferramenta de email marketing
- **FR2:** O sistema deve possuir pagina de vendas (VSL + copy) com checkout integrado para pagamento via cartao, PIX e boleto
- **FR3:** O sistema deve implementar sequencia automatizada de emails (pre-lancamento, abertura, carrinho aberto, fechamento, pos-venda)
- **FR4:** O sistema deve possuir area de membros para entrega do curso com modulos, aulas em video e materiais complementares
- **FR5:** O sistema deve integrar comunidade exclusiva (Comunidade BRABA) para alunos ativos
- **FR6:** O sistema deve possuir dashboard de metricas (leads, conversoes, receita, NPS) para acompanhamento em tempo real
- **FR7:** O sistema deve implementar sistema de upsell automatico (curso -> mentoria) no pos-venda
- **FR8:** O sistema deve possuir pagina de checkout com order bump e garantia de 7 dias
- **FR9:** O sistema deve implementar remarketing via Meta Pixel e Google Ads para visitantes que nao converteram
- **FR10:** O sistema deve possuir integracao com WhatsApp para atendimento comercial e suporte
- **FR11:** O sistema deve implementar webinar/masterclass ao vivo como evento de lancamento com integracao a plataforma de streaming
- **FR12:** O sistema deve possuir sistema de depoimentos e prova social (video + texto) integrado as paginas de venda
- **FR13:** O sistema deve implementar programa de afiliados para alunos indicarem novos alunos
- **FR14:** O sistema deve possuir timer de escassez real (abertura e fechamento de carrinho) com redirecionamento pos-fechamento

### Non-Functional Requirements

- **NFR1:** Landing pages devem carregar em menos de 3 segundos (Core Web Vitals otimizados)
- **NFR2:** O checkout deve suportar 1.000+ transacoes simultaneas sem degradacao
- **NFR3:** A area de membros deve suportar streaming de video em HD sem buffering para 2.000+ usuarios simultaneos
- **NFR4:** O sistema deve estar em conformidade com LGPD (Lei Geral de Protecao de Dados)
- **NFR5:** Uptime minimo de 99.5% durante periodos de lancamento
- **NFR6:** O sistema deve ser mobile-first (70%+ do trafego vem de dispositivos moveis)
- **NFR7:** Integracao com gateway de pagamento deve suportar parcelamento em ate 12x
- **NFR8:** Emails transacionais devem ter taxa de entrega superior a 95%
- **NFR9:** O sistema deve suportar rastreamento completo (UTM, Pixel, GA4, Clarity) para atribuicao de conversao

---

## 3. User Interface Design Goals

### Overall UX Vision

Interface limpa, moderna e profissional que transmita autoridade e confianca. O design deve refletir a identidade visual do JP Freitas (cores, tipografia, elementos visuais associados a cabelos texturizados). Experiencia mobile-first com foco em conversao.

### Key Interaction Paradigms

- **Landing page:** Scroll linear com CTA repetido (captura de lead)
- **Pagina de vendas:** Long-form sales page com VSL no topo, beneficios, depoimentos, FAQ, CTA multiplos
- **Checkout:** Processo simplificado em 1-2 etapas (dados + pagamento)
- **Area de membros:** Navegacao por modulos com progresso visual
- **Webinar:** Player ao vivo com chat lateral e CTA flutuante

### Core Screens and Views

1. **Landing Page de Captura** - Formulario de lead com isca digital
2. **Pagina de Vendas (VSL)** - Video de vendas + copy persuasiva + checkout
3. **Checkout** - Dados pessoais + pagamento + order bump
4. **Pagina de Obrigado** - Confirmacao + proximos passos + upsell
5. **Area de Membros** - Dashboard do aluno + modulos + aulas
6. **Sala do Webinar** - Player ao vivo + chat + CTA
7. **Dashboard Admin** - Metricas de lancamento em tempo real

### Accessibility

WCAG AA - Garantir que o conteudo seja acessivel em dispositivos moveis e para usuarios com necessidades especiais basicas.

### Branding

- Identidade visual existente do JP Freitas (cores, logo, tipografia)
- Elementos visuais que remetam a cabelos texturizados e diversidade
- Fotos e videos profissionais do JP e seus alunos/resultados
- Tom de comunicacao: autoridade + proximidade + transformacao

### Target Device and Platforms

Web Responsive (Mobile-First) - 70%+ do publico acessa via smartphone.

---

## 4. Technical Assumptions

### Repository Structure

Monorepo - Centralizar landing pages, area de membros e dashboard admin em um unico repositorio para facilitar deploy e manutencao.

### Service Architecture

**Abordagem hibrida - Plataformas SaaS + Desenvolvimento custom:**

- **Checkout/Pagamento:** Hotmart ou Kiwify (ecossistema brasileiro, programa de afiliados nativo, split de pagamento)
- **Email Marketing:** ActiveCampaign ou Mailchimp (automacoes, segmentacao, sequencias)
- **Landing Pages:** Next.js no Vercel (ja utilizado em ocodigo.vercel.app, equipe ja domina)
- **Area de Membros:** Hotmart Club ou plataforma propria (Next.js)
- **Comunidade:** Circle.so ou Discord
- **Webinar:** YouTube Live ou StreamYard integrado ao site
- **WhatsApp:** Wati ou Z-API para automacao
- **Analytics:** GA4 + Meta Pixel + Microsoft Clarity (ja implementados)
- **CRM:** HubSpot Free ou ActiveCampaign

### Testing Requirements

- Testes de carga no checkout durante periodos de lancamento
- Testes de email deliverability antes do lancamento
- Testes de UX (Clarity heatmaps) nas landing pages
- Testes A/B de headlines e CTAs
- Smoke tests nas integracoes (pagamento, email, WhatsApp)

### Additional Technical Assumptions

- Dominio principal: jpfreitas.com.br (consolidar todos os subdominos)
- SSL obrigatorio em todas as paginas
- CDN para entrega de videos (Vimeo OTT ou Bunny.net)
- Backup automatico de dados de alunos
- Sistema de tags para segmentacao de leads (origem, interesse, estagio do funil)

---

## 5. Epic List

### Epic 1: Infraestrutura de Captacao e Funil de Vendas
Estabelecer a base do funil de vendas: landing page de captura, sequencias de email, e integracao com ferramentas de trafego pago (Pixel, GA4).

### Epic 2: Plataforma de Vendas e Checkout
Criar a pagina de vendas completa (VSL + copy), checkout otimizado com order bump, gateway de pagamento, e sistema de escassez real.

### Epic 3: Area de Membros e Entrega de Conteudo
Implementar a area de membros com modulos do curso, streaming de video, materiais complementares, e integracao com comunidade BRABA.

### Epic 4: Evento de Lancamento e Automacoes
Configurar o webinar/masterclass ao vivo, automacoes de remarketing, sistema de upsell pos-venda, e programa de afiliados.

### Epic 5: Dashboard de Metricas e Otimizacao
Criar dashboard admin com metricas de lancamento em tempo real, testes A/B, e ferramentas de otimizacao de conversao.

---

## 6. Epic Details

### Epic 1: Infraestrutura de Captacao e Funil de Vendas

**Goal:** Construir toda a infraestrutura de captacao de leads que alimentara o lancamento, incluindo landing pages otimizadas, sequencias de email automatizadas e rastreamento completo de conversoes. Ao final deste epic, o time tera capacidade de captar e nutrir leads de forma automatizada.

#### Story 1.1: Landing Page de Captura com Isca Digital

> Como profissional de marketing do JP Freitas,
> Eu quero uma landing page otimizada para captura de leads,
> Para que possamos construir uma lista qualificada de profissionais interessados no Codigo dos Cortes.

**Acceptance Criteria:**
1. Landing page responsiva (mobile-first) com formulario de captura (nome, email, WhatsApp)
2. Integracao com ActiveCampaign/Mailchimp para armazenamento automatico de leads
3. Isca digital (PDF/video gratuito) entregue automaticamente apos cadastro
4. Meta Pixel, GA4 e Clarity implementados com eventos de conversao
5. Pagina carrega em menos de 3 segundos (Core Web Vitals green)
6. Pagina de obrigado com instrucoes de proximos passos
7. UTM tracking funcional para atribuicao de campanhas

#### Story 1.2: Sequencias de Email Pre-Lancamento

> Como gerente de marketing,
> Eu quero sequencias de email automatizadas para nutrir os leads captados,
> Para que os leads cheguem ao dia do lancamento aquecidos e prontos para comprar.

**Acceptance Criteria:**
1. Sequencia de boas-vindas (3 emails) configurada e testada
2. Sequencia de aquecimento (5-7 emails com conteudo de valor) agendada
3. Templates de email com identidade visual do JP Freitas
4. Taxa de entrega superior a 95% validada com teste
5. Segmentacao por engajamento (abriu/clicou/nao abriu) funcionando
6. Link de cancelamento de inscricao funcional (LGPD)

#### Story 1.3: Configuracao de Trafego Pago e Rastreamento

> Como gestor de trafego,
> Eu quero ter todas as integracoes de rastreamento e publicos configurados,
> Para que possamos rodar campanhas de captacao com atribuicao precisa.

**Acceptance Criteria:**
1. Meta Pixel configurado com eventos customizados (Lead, ViewContent, InitiateCheckout, Purchase)
2. Google Ads conversion tracking implementado
3. Publicos de remarketing criados (visitou LP, preencheu form, nao converteu)
4. Lookalike audiences configurados a partir da base de alunos existente
5. GA4 com funis de conversao mapeados
6. UTM builder padronizado para todas as campanhas

---

### Epic 2: Plataforma de Vendas e Checkout

**Goal:** Criar a experiencia completa de vendas, desde a pagina de vendas persuasiva com VSL ate o checkout otimizado, garantindo uma jornada de compra fluida e com alta taxa de conversao. Este epic representa o motor de receita do lancamento.

#### Story 2.1: Pagina de Vendas com VSL

> Como potencial aluno (profissional de beleza),
> Eu quero uma pagina de vendas clara e convincente sobre o Codigo dos Cortes,
> Para que eu entenda o valor da formacao e tome a decisao de compra.

**Acceptance Criteria:**
1. Video Sales Letter (VSL) no topo da pagina com player customizado
2. Copy persuasiva com beneficios, transformacao, e diferenciais
3. Secao de depoimentos em video e texto de alunos reais
4. FAQ com as principais objecoes respondidas
5. Multiplos CTAs ao longo da pagina direcionando para checkout
6. Timer de escassez real (data de fechamento do carrinho)
7. Responsiva e otimizada para mobile
8. Velocidade de carregamento inferior a 3 segundos

#### Story 2.2: Checkout Otimizado com Order Bump

> Como comprador interessado,
> Eu quero um processo de checkout simples e seguro,
> Para que eu consiga finalizar minha compra rapidamente sem fricao.

**Acceptance Criteria:**
1. Checkout em 1-2 etapas (dados pessoais + pagamento)
2. Opcoes de pagamento: cartao (ate 12x), PIX (desconto), boleto
3. Order bump configurado (produto complementar na pagina de checkout)
4. Garantia de 7 dias visivel no checkout
5. Selo de seguranca e prova social no checkout
6. Integracao com gateway (Hotmart/Kiwify/PagarMe)
7. Emails transacionais automaticos (confirmacao, acesso, nota fiscal)
8. Redirect para pagina de obrigado com upsell imediato

#### Story 2.3: Sistema de Escassez e Controle de Carrinho

> Como time de marketing,
> Eu quero controlar abertura e fechamento do carrinho com escassez real,
> Para que possamos maximizar a urgencia e conversao durante o periodo de vendas.

**Acceptance Criteria:**
1. Timer countdown sincronizado (servidor) em todas as paginas
2. Carrinho abre e fecha em datas pre-definidas automaticamente
3. Apos fechamento, pagina redireciona para lista de espera
4. Notificacao por email 48h e 24h antes do fechamento
5. Dashboard com vendas em tempo real durante o periodo aberto

---

### Epic 3: Area de Membros e Entrega de Conteudo

**Goal:** Entregar uma experiencia de aprendizado excepcional para os alunos, com area de membros intuitiva, conteudo em video de alta qualidade, e acesso a comunidade BRABA. Este epic garante retencao, satisfacao e gera prova social para futuros lancamentos.

#### Story 3.1: Area de Membros com Modulos do Curso

> Como aluno do Codigo dos Cortes,
> Eu quero acessar os modulos do curso de forma organizada e intuitiva,
> Para que eu possa aprender no meu ritmo e acompanhar meu progresso.

**Acceptance Criteria:**
1. Login seguro com email/senha cadastrados no checkout
2. Dashboard do aluno com progresso geral e por modulo
3. Modulos organizados sequencialmente com aulas em video
4. Player de video com qualidade HD e sem buffering
5. Materiais complementares (PDFs, checklists) disponiveis para download
6. Marcacao de aula concluida com barra de progresso
7. Responsivo para acesso via smartphone

#### Story 3.2: Integracao com Comunidade BRABA

> Como aluno ativo,
> Eu quero ter acesso a comunidade exclusiva de profissionais,
> Para que eu possa trocar experiencias, tirar duvidas e fazer networking.

**Acceptance Criteria:**
1. Acesso automatico a comunidade apos confirmacao de compra
2. Integracao com plataforma de comunidade (Circle.so/Discord)
3. Categorias organizadas (duvidas, resultados, networking, avisos)
4. JP Freitas com presenca ativa (posts semanais ou lives)
5. Notificacao de novos conteudos e eventos na comunidade

---

### Epic 4: Evento de Lancamento e Automacoes

**Goal:** Executar o evento de lancamento (webinar/masterclass) e configurar todas as automacoes de pos-venda, incluindo upsell para mentoria, remarketing de nao-compradores, e programa de afiliados. Este epic maximiza a receita por cliente e prepara o proximo ciclo.

#### Story 4.1: Webinar/Masterclass ao Vivo

> Como lead aquecido,
> Eu quero participar de um evento ao vivo gratuito com o JP Freitas,
> Para que eu conheca o metodo dele ao vivo e decida se quero me matricular.

**Acceptance Criteria:**
1. Pagina de inscricao do webinar com formulario de registro
2. Sequencia de lembretes (email + WhatsApp) 24h, 1h e 15min antes
3. Sala do webinar com player ao vivo (YouTube Live/StreamYard)
4. Chat ao vivo durante a transmissao
5. CTA flutuante com link para checkout durante o evento
6. Replay disponivel por 48h apos o evento
7. Sequencia de follow-up para quem assistiu mas nao comprou

#### Story 4.2: Automacoes de Pos-Venda e Upsell

> Como time comercial,
> Eu quero automacoes que maximizem o valor por cliente apos a compra,
> Para que possamos aumentar o ticket medio com upsell para mentoria.

**Acceptance Criteria:**
1. Sequencia de onboarding (3 emails) com orientacoes de inicio
2. Oferta de upsell para mentoria BRABA 7 dias apos a compra
3. Pesquisa NPS automatica 30 dias apos a compra
4. Recuperacao de carrinho abandonado (email + WhatsApp)
5. Segmentacao automatica: comprou / abandonou / expirou garantia

#### Story 4.3: Programa de Afiliados

> Como aluno satisfeito,
> Eu quero indicar o curso para outros profissionais e ganhar comissao,
> Para que eu possa monetizar minha rede de contatos profissionais.

**Acceptance Criteria:**
1. Sistema de afiliados ativo (via plataforma de checkout)
2. Link de indicacao unico por aluno
3. Dashboard do afiliado com cliques, vendas e comissoes
4. Comissao automatica creditada apos periodo de garantia
5. Materiais de divulgacao (criativos, copys) disponiveis para afiliados

---

### Epic 5: Dashboard de Metricas e Otimizacao

**Goal:** Fornecer visibilidade completa sobre a performance do lancamento com metricas em tempo real, permitindo decisoes rapidas de otimizacao durante o periodo de vendas.

#### Story 5.1: Dashboard de Metricas do Lancamento

> Como gestor do projeto,
> Eu quero um dashboard com metricas de lancamento em tempo real,
> Para que eu possa tomar decisoes rapidas e otimizar campanhas durante o lancamento.

**Acceptance Criteria:**
1. Metricas de captacao: leads/dia, custo por lead, taxa de conversao da LP
2. Metricas de vendas: vendas/dia, receita total, ticket medio, taxa de conversao
3. Metricas de email: taxa de abertura, clique, descadastro por sequencia
4. Metricas de webinar: inscritos, presentes, taxa de presenca, vendas do evento
5. Comparativo com metas definidas (leads, vendas, receita)
6. Atualizacao automatica a cada 15 minutos

---

## 7. Checklist Results Report

_A ser preenchido apos execucao do pm-checklist._

---

## 8. Next Steps

### UX Expert Prompt

> @ux-design-expert: Revise este PRD e crie o design system e wireframes para as paginas de lancamento do JP Freitas (Codigo dos Cortes). Foco em: landing page de captura, pagina de vendas com VSL, checkout, area de membros. O design deve ser mobile-first, transmitir autoridade e confianca, e otimizado para conversao. Identidade visual existente do JP Freitas.

### Architect Prompt

> @architect: Revise este PRD e defina a arquitetura tecnica para a plataforma de lancamento do JP Freitas. Considere a abordagem hibrida (SaaS + custom Next.js), integracoes com Hotmart/Kiwify, ActiveCampaign, Meta Pixel, GA4, WhatsApp API. Foco em: performance durante lancamento (picos de trafego), seguranca de dados (LGPD), e escalabilidade para futuros lancamentos.
