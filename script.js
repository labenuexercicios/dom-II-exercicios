// <!-- # Exercício 1
// Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização. -->

// # Exercício 2
// Altere a função criada no exercício 1 para que agora o clique no botão faça a **estilização** do novo item

// # Exercício 3

// Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. Esta função deve **remover** o elemento clicado.

// **Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.

function adicionaItem(event) {
  const novoItem = document.createElement("item");
  novoItem.setAttribute("class", "item"); //coloquei ele na classe item, que tá estilizado no css
  novoItem.setAttribute("onclick", "removeItem(event)");
  container.insertAdjacentElement("beforeend", novoItem);
}

function removeItem(event) {
  event.target.remove();
}
