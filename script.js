function adicionaItem() {
    let container = document.getElementById("container")

    let article = document.createElement("article")

    container.appendChild(article)

    article.classList.add("item")
    article.setAttribute("onclick", "removeItem(event)")
    
    container += article
}

function removeItem(event) {
    event.target.remove()
}

