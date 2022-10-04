function adicionaItem()
{
    const container = document.getElementById("container")
    novoArticle = document.createElement("article") // Criando uma tag Article
    novoArticle.setAttribute("onclick", "removeItem(event)") // adiciona a função removeItem(event) ao onclink
    container.appendChild(novoArticle)
    container.insertAdjacentElement('afterend', container)
    // 2 adcionando classe item 
    novoArticle.classList.add("item")
}

function removeItem(event)
{
    event.target.remove()
}

