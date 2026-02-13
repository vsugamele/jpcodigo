# Epic 2: Plataforma de Vendas e Checkout

**Status:** Draft
**Tipo:** Greenfield
**Prioridade:** ALTA
**Estimativa:** 2-3 semanas
**Depende de:** Epic 1 (tracking deve estar funcional)

---

## Epic Goal

Criar a experiencia completa de vendas, desde a pagina de vendas persuasiva com VSL ate o checkout otimizado, garantindo uma jornada de compra fluida e com alta taxa de conversao. Este epic representa o motor de receita do lancamento e deve suportar picos de 1.000+ transacoes simultaneas.

---

## Stories

### Story 2.1: Pagina de Vendas com VSL

```yaml
executor: "@dev"
quality_gate: "@architect"
quality_gate_tools: [performance_validation, seo_check, mobile_responsiveness, conversion_tracking]
```

> Como potencial aluno (profissional de beleza),
> Eu quero uma pagina de vendas clara e convincente sobre o Codigo dos Cortes,
> Para que eu entenda o valor da formacao e tome a decisao de compra.

**Tasks:**

- [ ] 2.1.1 Criar estrutura da pagina de vendas (Next.js)
  - [ ] Hero section com VSL player (Vimeo/YouTube embed otimizado)
  - [ ] Secao "Para quem e" (profissionais de beleza)
  - [ ] Secao de beneficios e transformacao
  - [ ] Secao de modulos do curso (o que vai aprender)
  - [ ] Secao de bonus exclusivos
  - [ ] Secao de depoimentos (video + texto)
  - [ ] Secao de garantia de 7 dias
  - [ ] FAQ com objecoes respondidas
  - [ ] Secao de preco com CTA principal
  - [ ] Footer com termos e politica de privacidade
- [ ] 2.1.2 Implementar player de VSL customizado
  - [ ] Autoplay muted com CTA de ativar som
  - [ ] Barra de progresso customizada
  - [ ] CTA aparece apos X minutos de video
- [ ] 2.1.3 Implementar secao de depoimentos
  - [ ] Carousel de depoimentos em video
  - [ ] Grid de depoimentos em texto com foto
  - [ ] Numeros de resultados (antes/depois)
- [ ] 2.1.4 Implementar CTAs multiplos ao longo da pagina
  - [ ] Botao sticky no mobile (fixed bottom)
  - [ ] CTAs apos cada secao principal
  - [ ] Scroll tracking para analytics
- [ ] 2.1.5 Implementar timer de escassez
  - [ ] Countdown sincronizado com servidor
  - [ ] Banner fixo no topo com tempo restante
  - [ ] Redirect automatico apos fechamento
- [ ] 2.1.6 Otimizar para SEO e performance
  - [ ] Meta tags, OG tags, structured data
  - [ ] Lazy loading de imagens e videos
  - [ ] Core Web Vitals < 3s
- [ ] 2.1.7 Testes cross-browser e dispositivos

**Acceptance Criteria:**

1. VSL player funcional no topo com autoplay muted
2. Copy persuasiva com beneficios, transformacao e diferenciais
3. Minimo 6 depoimentos (video + texto) de alunos reais
4. FAQ com 8+ perguntas frequentes
5. 5+ CTAs distribuidos ao longo da pagina
6. Timer de escassez real sincronizado
7. Responsivo e otimizado para mobile
8. Carregamento inferior a 3 segundos

---

### Story 2.2: Checkout Otimizado com Order Bump

```yaml
executor: "@dev"
quality_gate: "@architect"
quality_gate_tools: [security_scan, payment_integration_test, mobile_checkout_test]
```

> Como comprador interessado,
> Eu quero um processo de checkout simples e seguro,
> Para que eu consiga finalizar minha compra rapidamente sem fricao.

**Tasks:**

- [ ] 2.2.1 Configurar produto na plataforma de checkout
  - [ ] Criar produto "Codigo dos Cortes" no Hotmart/Kiwify
  - [ ] Configurar precos: a vista (PIX com desconto) e parcelado (ate 12x)
  - [ ] Configurar garantia de 7 dias
  - [ ] Configurar email de confirmacao de compra
- [ ] 2.2.2 Criar pagina de checkout customizada (ou usar checkout da plataforma)
  - [ ] Formulario em 1-2 etapas
  - [ ] Campos: nome, email, CPF, telefone
  - [ ] Opcoes de pagamento: cartao, PIX, boleto
  - [ ] Parcelamento em ate 12x sem juros
- [ ] 2.2.3 Implementar order bump
  - [ ] Produto complementar na pagina de checkout
  - [ ] Checkbox simples "Adicionar por apenas R$XX"
  - [ ] Descricao curta do beneficio do bump
- [ ] 2.2.4 Implementar elementos de confianca no checkout
  - [ ] Selo de garantia 7 dias
  - [ ] Selos de seguranca (SSL, plataforma)
  - [ ] Depoimento resumido / prova social
  - [ ] Logo do JP Freitas
- [ ] 2.2.5 Configurar emails transacionais
  - [ ] Confirmacao de compra com dados de acesso
  - [ ] Nota fiscal / recibo
  - [ ] Boas-vindas a area de membros
- [ ] 2.2.6 Implementar tracking de conversao no checkout
  - [ ] Evento InitiateCheckout no Pixel
  - [ ] Evento Purchase com valor no Pixel e GA4
  - [ ] Conversao no Google Ads
- [ ] 2.2.7 Testar fluxo completo de compra (todos os meios de pagamento)

**Acceptance Criteria:**

1. Checkout funcional com cartao, PIX e boleto
2. Parcelamento em ate 12x disponivel
3. Order bump configurado e funcional
4. Garantia de 7 dias visivel no checkout
5. Selos de seguranca e prova social presentes
6. Emails transacionais disparando corretamente
7. Eventos de conversao (Pixel + GA4) funcionando
8. Pagina de obrigado com upsell imediato

---

### Story 2.3: Sistema de Escassez e Controle de Carrinho

```yaml
executor: "@dev"
quality_gate: "@pm"
quality_gate_tools: [timer_sync_test, redirect_validation, email_trigger_test]
```

> Como time de marketing,
> Eu quero controlar abertura e fechamento do carrinho com escassez real,
> Para que possamos maximizar a urgencia e conversao durante o periodo de vendas.

**Tasks:**

- [ ] 2.3.1 Implementar API de controle de carrinho
  - [ ] Endpoint para verificar status (aberto/fechado)
  - [ ] Configuracao de datas de abertura e fechamento
  - [ ] Timezone correto (America/Sao_Paulo)
- [ ] 2.3.2 Implementar timer countdown
  - [ ] Sincronizado com servidor (nao manipulavel pelo usuario)
  - [ ] Exibido na pagina de vendas e checkout
  - [ ] Formatacao: dias, horas, minutos, segundos
- [ ] 2.3.3 Implementar redirect pos-fechamento
  - [ ] Pagina de "carrinho fechado" com lista de espera
  - [ ] Formulario para receber aviso na proxima abertura
- [ ] 2.3.4 Configurar notificacoes de urgencia
  - [ ] Email 48h antes do fechamento
  - [ ] Email 24h antes do fechamento
  - [ ] Email "ultimas horas" (6h antes)
  - [ ] WhatsApp (se lead deu opt-in)
- [ ] 2.3.5 Implementar dashboard de vendas em tempo real
  - [ ] Total de vendas e receita
  - [ ] Grafico de vendas por hora
  - [ ] Meios de pagamento mais usados

**Acceptance Criteria:**

1. Timer countdown sincronizado com servidor
2. Carrinho abre e fecha nas datas configuradas
3. Redirect automatico apos fechamento para pagina de lista de espera
4. Emails de urgencia disparados nos horarios corretos
5. Dashboard com vendas em tempo real funcional

---

## Risk Mitigation

- **Primary Risk:** Checkout fora do ar durante pico de lancamento
  - **Mitigation:** Usar Hotmart/Kiwify (infraestrutura propria para picos), teste de carga previo
- **Secondary Risk:** Fraude em compras com cartao
  - **Mitigation:** Antifraude nativo da plataforma de pagamento
- **Rollback Plan:** Pagina de vendas no Vercel (rollback instantaneo), checkout na plataforma (infraestrutura gerenciada)

## Definition of Done

- [ ] Pagina de vendas publicada com VSL e copy completa
- [ ] Checkout funcional com todos os meios de pagamento
- [ ] Order bump configurado e testado
- [ ] Timer de escassez sincronizado e funcional
- [ ] Tracking de conversao validado (Pixel + GA4)
- [ ] Emails transacionais testados
- [ ] Performance < 3s em mobile
