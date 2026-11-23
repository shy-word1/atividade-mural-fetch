const URL = "https://jsonplaceholder.typicode.com/posts?_limit=6";

const botao = document.querySelector("#btn-carregar");
const filtro = document.querySelector("#filtro");
const mensagem = document.querySelector("#mensagem");
const painel = document.querySelector("#lista-posts");
const contador = document.querySelector("#contador");

let publicacoes = [];

function mostrarMensagem(texto, tipo = "") {
  mensagem.textContent = texto;
  mensagem.className = "mensagem";

  if (tipo) {
    mensagem.classList.add(tipo);
  }
}

function renderizarPublicacoes(lista) {
  painel.replaceChildren();

  lista.forEach((publicacao) => {
    const cartao = document.createElement("article");
    cartao.classList.add("cartao");

    const topo = document.createElement("div");
    topo.classList.add("cartao-topo");

    const numero = document.createElement("span");
    numero.classList.add("cartao-numero");
    numero.textContent = "PUBLICAÇÃO";

    const id = document.createElement("span");
    id.classList.add("cartao-id");
    id.textContent = `#${publicacao.id}`;

    const titulo = document.createElement("h3");
    titulo.textContent = publicacao.title;

    const texto = document.createElement("p");
    texto.textContent = publicacao.body;

    topo.append(numero, id);
    cartao.append(topo, titulo, texto);
    painel.append(cartao);
  });

  contador.textContent = `${lista.length} ${lista.length === 1 ? "publicação encontrada" : "publicações encontradas"}`;
}

function aplicarFiltro() {
  const termo = filtro.value.trim().toLowerCase();

  const encontradas = publicacoes.filter((item) => {
    return item.title.toLowerCase().includes(termo);
  });

  renderizarPublicacoes(encontradas);

  if (encontradas.length === 0) {
    mostrarMensagem("Nenhuma publicação encontrada com esse título.");
  } else if (termo) {
    mostrarMensagem(`Resultado da busca por: "${filtro.value.trim()}"`, "sucesso");
  } else {
    mostrarMensagem("Publicações carregadas com sucesso.", "sucesso");
  }
}

function carregarPublicacoes() {
  mostrarMensagem("Carregando publicações...");
  botao.disabled = true;
  botao.textContent = "Carregando...";

  fetch(URL)
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
      }

      return resposta.json();
    })
    .then((dados) => {
      publicacoes = dados;
      aplicarFiltro();
    })
    .catch((erro) => {
      console.error(erro);
      publicacoes = [];
      painel.replaceChildren();
      contador.textContent = "Não foi possível carregar";
      mostrarMensagem("Não foi possível carregar as publicações. Verifique sua conexão e tente novamente.", "erro");
    })
    .finally(() => {
      botao.disabled = false;
      botao.innerHTML = "<span aria-hidden=\"true\">↻</span> Carregar publicações";
    });
}

botao.addEventListener("click", carregarPublicacoes);
filtro.addEventListener("input", () => {
  if (publicacoes.length > 0) {
    aplicarFiltro();
  }
});
