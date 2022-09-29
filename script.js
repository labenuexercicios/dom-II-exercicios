function adicionaItem(e) {
    let elementoNovo = document.createElement("article")
    elementoNovo.setAttribute("class", "item")
    elementoNovo.onclick = removeItem
    document.getElementById("container").appendChild(elementoNovo)   
}

function removeItem(e) {
    e.target.remove()
}