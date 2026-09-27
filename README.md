# Mãos que Criam — Móveis Planejados

Site institucional da **Mãos que Criam Móveis Planejados** (MQC Planejados), marcenaria de móveis sob medida em Ribeirão Preto/SP.

Site de uma página, estático (sem servidor e sem banco de dados), com contato pelo WhatsApp.

Stack: Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion + Lenis (rolagem suave).

## Comandos

```bash
npm install          # instala as dependências
npm run dev          # ambiente local em http://localhost:5173
npm run build        # gera a versão de produção em dist/
npm run preview      # testa o build localmente
npm run images:optimize   # converte PNG/JPG de src/assets/images para WebP
```

Node 20 (veja `.nvmrc`).

## Onde editar cada conteúdo

Todo o texto fica em `src/data/` — não é preciso mexer nos componentes.

| Arquivo | Conteúdo |
| --- | --- |
| `src/data/site.ts` | Nome, WhatsApp, telefone, e-mail, endereço, horário, Instagram, CNPJ, menu |
| `src/data/conteudo.ts` | Hero, Sobre, diferenciais, processo, depoimentos, perguntas frequentes |
| `src/data/projetos.ts` | Ambientes (serviços), portfólio com filtros, antes/depois, vídeos |
| `src/data/formulario.ts` | Opções do formulário de orçamento |
| `index.html` | Título, meta description, dados para o Google (SEO) |

Campos deixados vazios (`''`) em `site.ts` simplesmente não aparecem no site. Quando o cliente informar o e-mail ou o endereço, basta preencher.

## Como funciona o contato pelo WhatsApp

O site não guarda nenhum dado. O visitante preenche o formulário, o site monta a mensagem e abre o WhatsApp da empresa (`wa.me/5516991594713`) com o texto pronto. A pessoa só confere e toca em enviar. A mensagem já traz o telefone do cliente, então dá para retornar mesmo que ele não continue a conversa.

Exemplo do que chega:

```
*Pedido de orçamento — site Mãos que Criam*

*Nome:* Joana Ribeiro
*Telefone:* (16) 98888-7777
*Tipo:* Empresa
*Ambientes:* Cozinha, Escritório / empresa
*Fase da obra:* Em reforma
*Bairro/cidade:* Jardim Botânico

*Detalhes:*
Recepção de 3 m e armários para a copa.
```

Os cards de ambiente também abrem o WhatsApp já citando o ambiente escolhido.

## Origem das imagens e vídeos

**Reais (Instagram @mqc.planejados)**: todas as fotos do portfólio, dos ambientes Cozinhas, Quartos, Closets, Banheiros, Salas e Gourmet, do antes/depois, da equipe e os 6 vídeos. Foram baixadas dos reels públicos do perfil em 27/09/2026. As fotos são quadros extraídos dos vídeos (`scripts/extrair-fotos-instagram.mjs`), com as tarjas pretas recortadas. A foto do closet é o único post de foto do perfil. Os vídeos foram comprimidos para web (540 px, sem áudio) em `public/videos/`.

- As imagens da equipe vêm de um vídeo com a marca d'água **@mayron.f3rr3ira**. O crédito aparece no site.

**Geradas por IA (Higgsfield, modelo Recraft V4.1)**, usadas só como ambientação:

- `hero-cozinha-integrada` — fundo do hero
- `processo-projeto-3d`, `processo-producao` — etapas 2 e 3 do processo (com selo "Imagem ilustrativa")
- `servico-home-office`, `servico-corporativo` — cards de Home office e Escritórios (com selo "Imagem ilustrativa")
- `sobre-acabamento` — detalhe na seção Sobre

**Logo**: recortada da imagem enviada (`fotos-originais/logo-original.png`) com `scripts/gerar-logo.mjs`, em versão clara e escura com fundo transparente.

Quando houver fotos reais de home office, escritórios, oficina ou do projeto 3D, troque os arquivos em `src/assets/images/` mantendo o nome e remova `ilustrativa: true` / `real: false` nos dados.

## Publicação (Render)

O `render.yaml` já configura um site estático. No Render: **New + → Blueprint → escolher o repositório → Apply**. Cada `git push` na branch `main` publica de novo. Site estático no Render não hiberna.

## Pendências (dados que o cliente precisa fornecer)

1. **Depoimentos reais**: os 4 textos atuais são exemplos (o destaque "Feedback" do Instagram não é público). Troque por depoimentos verdadeiros, com autorização do cliente, antes de divulgar o site. Arquivo: `src/data/conteudo.ts`.
2. **História da empresa**: ano de início, quem fundou, trajetória. O texto do Sobre é genérico. Arquivo: `src/data/conteudo.ts`.
3. **Endereço** da marcenaria/showroom (se houver atendimento presencial). Com ele, o mapa passa a mostrar o local exato.
4. **E-mail** comercial.
5. **Horário de atendimento**.
6. **CNPJ e razão social** para o rodapé.
7. **Confirmar**: o projeto 3D é gratuito? Existe garantia (e por quanto tempo)? Qual a área de atendimento fora de Ribeirão Preto? Se confirmados, podem virar destaques no site.
8. **Autorização** do cinegrafista @mayron.f3rr3ira para usar os quadros do vídeo da equipe.
9. **Domínio próprio** (opcional): depois de registrar, configure em Render → Settings → Custom Domains e atualize a URL em `index.html` (canonical, og:image e JSON-LD).
