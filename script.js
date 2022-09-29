function adicionaItem(event) {
    event.preventdefault()
    const main = document.getElementById("container")
    const novoArticle = document.createElement("article")
    novoArticle.innerHTML = "OI MUNDO"
    main.appendChild(novoArticle)
    novoArticle.insertAdjacentElement("beforeend")
}

function adicionaItem(event) {
    event.preventDefault()
    const main = document.getElementById("container")
    const novoArticle = document.createElement("article")
    novoArticle.onclick = function removeItem(event) {
        event.target.remove()
    }
    novoArticle.classList.add("item")
    novoArticle.innerHTML = "Olá, Mundo"
    main.appendChild(novoArticle)
    novoArticle.insertAdjacentElement("beforeend")
}

function removeItem(event) {
    event.target.remove()
}