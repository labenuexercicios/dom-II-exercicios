function adicionaItem(event) {

    // Cria div
    const newelement = document.createElement("article")
    // Adiciona o item na div
    newelement.classList.add("item")
    // Da esse novo atributo pra div
    newelement.setAttribute("onclick", "removeItem(event)");
    // Cria nova frase
    const newtext = document.createTextNode("Fala doido");
    // Adiciona nova frase na div
    newelement.appendChild(newtext);
    // Pega o id do botao
    const pegaidbase = document.getElementById("botao")
    // Coloca a nova div dentro da div do botao
    pegaidbase.insertAdjacentElement('afterend' , newelement)

}

function removeItem(event) {
    // O event.target pega o id que retorna do event o .remote() so remove esse id.
    event.target.remove()

}
