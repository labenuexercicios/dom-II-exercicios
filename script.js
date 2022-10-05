// Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, 
// um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização.
//  Ele pode ter apenas um texto, para facilitar sua visualização.

function adicionaItem (event){
    let novoItem = document.createElement('article')
    console.log(novoItem)
    let textoNovoItem =document.createTextNode("Oi, eu sou um texto")
    novoItem.onclick=removeItem
    novoItem.appendChild(textoNovoItem)
    let insereNaLista = document.getElementById("container")
    insereNaLista.insertAdjacentElement("beforeend",novoItem)
    novoItem.classList.add("item")

    
    
}
adicionaItem()

function removeItem (event){
    event.target.remove()
}

