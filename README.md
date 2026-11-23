# Meu Mural de Publicações

Projeto feito para praticar HTML, CSS e JavaScript, usando a API JSONPlaceholder.

## Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta no VS Code.
3. Abra o arquivo `index.html` no navegador. Também dá para usar a extensão Live Server.
4. Clique em **Carregar publicações** para buscar os dados.

## O que o projeto faz

- Busca seis publicações na JSONPlaceholder usando `fetch()`.
- Mostra o ID, o título e o conteúdo de cada publicação.
- Filtra as publicações pelo título sem fazer outra requisição.
- Mostra uma mensagem enquanto carrega e quando acontece algum erro.
- Adapta a interface para telas menores.

## Perguntas do desafio

**1. O que é uma API e por que usamos fetch()?**

Uma API permite que sistemas troquem informações. Usamos `fetch()` para fazer uma requisição e buscar os dados que serão mostrados no site.

**2. Qual é o papel de resposta.json()?**

O `resposta.json()` transforma o conteúdo da resposta em dados JavaScript, para podermos acessar as informações recebidas.

**3. Qual a diferença entre filtrar o array localmente e fazer uma nova requisição?**

Filtrar localmente usa os dados que já estão guardados no JavaScript, sem acessar a internet novamente. Uma nova requisição faz outro pedido à API para receber dados.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Fetch API
- JSONPlaceholder
