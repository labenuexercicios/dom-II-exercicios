function adicionaItem(event){
    let novoItem = document.createElement("article") 
    let conteudoNovoItem = document.createTextNode("") 
    novoItem.appendChild(conteudoNovoItem) 
    const elementoReferencia = document.getElementById("container") 
    elementoReferencia.insertAdjacentElement("beforeend",novoItem)
    novoItem.classList.add("item")
    novoItem.onclick = removeItem
}

function removeItem (event) {
    event.target.remove()
}