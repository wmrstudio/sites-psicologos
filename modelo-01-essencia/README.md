# Essência — direção de arte editorial / Estúdio PSI

Modelo 01 independente. Somente esta pasta foi reconstruída. O site continua estático, compatível com GitHub Pages e hospedagens comuns, sem instalação de dependências.

## Arquivos e personalização

- `config.js`: nome, marca, biografia, modalidade, localização, endereço, horários, imagens, WhatsApp e URLs do mapa. Valores são inseridos com `textContent`, sem interpretar HTML.
- `styles.css`: identidade nas variáveis `:root` (cores, tipografia, largura e espaçamentos); componentes e adaptações para celular.
- `index.html`: estrutura semântica, títulos, textos das seções, temas de atendimento, dúvidas, apresentação do consultório, metadados e avisos demonstrativos. Todo componente pode ser editado separadamente. Conteúdo legível sem JavaScript.
- `main.js`: menu, disclosures, dialogs acessíveis, animações e mapa carregado por escolha do visitante.
- `assets/`: fotografias WebP e fontes locais, sem dependência de CDN para renderização.

Copie **a pasta completa**, não apenas `index.html`, para cada novo cliente. Preserve as três outras pastas do catálogo.

## Do exemplo ao consultório real

1. Em `config.js`, substitua dados, fotografias e biografia por informações verificadas do profissional. Edite também os textos estáticos em `index.html`: apresentação, abordagem, público, iniciais, horários, dúvidas, legendas e informações do rodapé.
2. Defina `whatsapp` com país + DDD + número, somente dígitos, e `whatsappMessage`. Troque `demo` para `false` para ativar o link `wa.me`. Enquanto demonstrativo, todos os CTAs de WhatsApp abrem uma janela explicativa e não enviam mensagens.
3. Configure `maps.embed` (URL de incorporação do Google Maps) e `maps.route` (link de rota para o endereço exato). Atualize título do iframe, legendas, informações de privacidade e rótulo do link. O exemplo mostra apenas a cidade de Maringá e um endereço obviamente fictício.
4. Revise nome, público, modalidade, registro e abordagem, remova os avisos de demonstração e inclua o CRP verdadeiro. Não inserir depoimentos, formações ou resultados inventados.
5. Ajuste `<title>`, descrição e título principal para especialidade/cidade reais. A demonstração possui `noindex, follow` para não indexar uma profissional fictícia. Na versão real, remova o `noindex`, configure domínio canônico, imagem social, sitemap e dados estruturados com o endereço verdadeiro. A descoberta local também depende do domínio e do Perfil da Empresa no Google; o layout sozinho não assegura posicionamento.
6. Teste links, mapa, CTA e responsividade no endereço definitivo. Atualize a política de privacidade conforme as integrações utilizadas.

## Direção de arte

Papel claro, oliva e verde lavado; Cormorant Garamond com itálicos e DM Sans; composição editorial assimétrica; fotografia de interiores com luz natural; notas marginais e símbolo botânico original. Variações de ritmo entre apresentação, retrato, temas expansíveis, reflexão, processo, perguntas e informações locais.

Interações com foco visível, menu por teclado/Escape, dialogs nativos, `prefers-reduced-motion`, imagens com texto alternativo, carregamento tardio das fotos abaixo da abertura e mapa sem requisições antes da ativação. Sem bibliotecas JavaScript, cookies ou coleta de relatos.

## Fotografias e fontes

Fotografias ilustrativas do Unsplash (arquivos locais):
- Interior: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0
- Retrato: https://images.unsplash.com/photo-1580489944761-15a19d654956
- Floresta: https://images.unsplash.com/photo-1441974231531-c6227db76b6e

O retrato não representa uma psicóloga real e o interior não é um consultório verificado. Para o cliente, use fotografias próprias/autorizadas do consultório e profissional.

Fontes: Cormorant Garamond e DM Sans, obtidas do Google Fonts, com licenças SIL OFL em `assets/LICENCA-*.txt`. Arquivos WOFF com subconjunto latino para carregamento mais leve. Símbolo botânico desenhado em SVG para este modelo.
