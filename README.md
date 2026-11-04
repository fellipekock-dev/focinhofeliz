# Focinho Feliz 🐾

Página institucional da **Focinho Feliz**, um pet shop voltado ao cuidado de cães e gatos. A página apresenta a história da marca, seus diferenciais, o centro de distribuição e os canais de contato.

## O que você encontra na página

- **Nossa História** reúne a apresentação da marca e do centro de distribuição em Vila Velha, ES.
- **Diferenciais** lista os serviços e benefícios apresentados pelo pet shop.
- **Rodapé** reúne contatos, links de redes sociais e a localização no mapa.
- **Menu** leva às seções da página e oferece um atalho para voltar ao topo. O JavaScript destaca a seção selecionada, inclusive ao voltar ou avançar pelo histórico do navegador.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| HTML5 | Estrutura, conteúdo e navegação entre as seções. |
| CSS3 | Tipografia, cores, organização visual e destaque do menu. |
| JavaScript | Atualização do item ativo no menu com `aria-current`. |

## Estrutura do projeto

```text
FocinhoFeliz/
├── index.html
├── README.md
├── css/
│   └── sobre.css
├── img/
│   ├── centro-distribuicao.png
│   ├── logo-rodape.png
│   └── pet-destaque.png
└── js/
    └── sobre.js
```

O `index.html` é o ponto de entrada. A página carrega `css/sobre.css`, `js/sobre.js` e as imagens da pasta `img/` por caminhos relativos à raiz do projeto.

## Como abrir no seu computador

1. Extraia o ZIP ou baixe os arquivos do repositório.
2. Abra `index.html` no navegador.
3. Use o menu para navegar entre as seções e conferir o destaque do link selecionado.

O projeto roda diretamente no navegador, sem instalação de dependências.

## Como colocar no GitHub

1. Crie um repositório vazio. O nome sugerido é `focinho-feliz`.
2. Envie o conteúdo da pasta `FocinhoFeliz`, deixando `index.html`, `README.md` e as pastas `css/`, `img/` e `js/` na raiz do repositório.
3. Faça o primeiro commit na branch `main`.

### Publicação opcional no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Source**, selecione **Deploy from a branch**.
3. Selecione `main` e `/(root)` e clique em **Save**. Depois da publicação, o endereço aparecerá nas configurações do Pages.

[Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Descrição para o repositório

> Página institucional da Focinho Feliz, um pet shop para cães e gatos, desenvolvida com HTML, CSS e JavaScript.
