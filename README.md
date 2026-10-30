# ESTÚDIO PSI — Nova coleção autoral

Quatro projetos de sites para Psicologia, criados diretamente neste repositório. Cada modelo é **independente** e funciona como um website estático completo, com HTML, CSS e JavaScript incorporados em seu próprio `index.html`.

## Abrir os projetos
- [Vitrine](./index.html)
- [01 · Essência](./modelo-01-essencia/index.html) — editorial minimalista
- [02 · Conexão](./modelo-02-conexao/index.html) — geométrico contemporâneo
- [03 · Acolher](./modelo-03-acolher/index.html) — orgânico humanizado
- [04 · Autoridade](./modelo-04-autoridade/index.html) — institucional sofisticado

## Publicar com GitHub Pages
Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**, branch `main`, pasta `/(root)` e salve. O endereço esperado da vitrine será https://wmrstudio.github.io/sites-psicologos/.

## Como personalizar para um cliente
1. Copie a pasta do modelo escolhido para um repositório novo, preferencialmente privado enquanto estiver em desenvolvimento.
2. Em `index.html`, edite nome, descrição, título, textos e credenciais reais verificadas.
3. Modifique as variáveis CSS `--surface`, `--accent`, `--ink` para mudar a identidade visual. Todo o CSS está dentro da tag `<style>` e pode ser separado em arquivos futuros.
4. Troque URLs de imagens por fotografias autorizadas do profissional, de preferência hospedadas localmente.
5. Substitua os botões marcados `data-demo` por links reais de WhatsApp com `https://wa.me/55DDDNUMERO?text=...` **somente após confirmação do número**.
6. Altere a URL `iframe` do Google Maps para o endereço verdadeiro do consultório, se atendimento presencial confirmado.
7. Confirme modalidade, formação, abordagem, público, CRP e informações de privacidade antes de publicar.

## Situação atual
- Cinco páginas HTML criadas e confirmadas no repositório.
- Layouts responsivos e animações suaves com suporte a `prefers-reduced-motion`.
- Fotografias remotas de Unsplash usadas como **ilustrações**: dependem de acesso à internet e sua disponibilidade deve ser verificada.
- Personagens e nomes fictícios, sem CRP inventado; não são psicólogos reais.
- Mapa de um local público de Maringá, claramente rotulado como ilustrativo.
- WhatsApp demonstrativo (não envia mensagens, deliberadamente).
- **GitHub Pages ainda depende de habilitação nas configurações.**
- Revisão de aparência final em navegadores e em dispositivos reais ainda recomendada.

## Ética de publicidade
Não atribuir ao personagem fictício registro profissional, credenciais, resultados, avaliações ou depoimentos reais. Para publicar um site de profissional, use somente informações confirmadas e observe as regras do CFP/CRP.
