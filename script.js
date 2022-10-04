// # Exercício 1

// Utilize o DOM para adicionar uma função ao clique do botão.
// Ao clicar no botão, um novo item deve ser adicionado ao container.
// Por enquanto, o item não precisa de estilização.
// Ele pode ter apenas um texto, para facilitar sua visualização.

// const adicionaItem = (event) => {
//   let conteiner = document.getElementById("container");

//   let novoItem = document.createElement("article");
//   conteiner.appendChild(novoItem);
//   novoItem.innerHTML = "Olá Mundo";
// }

// # Exercício 2
// Altere a função criada no exercício 1 para que agora o clique no botão
// faça a **estilização** do novo item

const adicionaItem = (event) => {
  let conteiner = document.getElementById("container");
  conteiner.innerHTML += "<article class='item' onclick='removeItem(event)'></article>";
}

// /* # Exercício 3
// Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. 
// Esta função deve **remover** o elemento clicado.
// **Dica**: utilize a propriedade `event.target` para pegar o elemento clicado. */

const removeItem = () => {
let item = document.querySelector(".item")
item.classList.remove("item")

}