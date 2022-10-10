function adicionaItem(event) {
    //criando uma nova tag article
    let item = document.createElement("article")

    //criando o texto 
    let conteudo = document.createTextNode("Conteúdo adicionado!!")

    //adicionando conteúdo no article
    item.appendChild(conteudo)

    //definindo a referencia 
    let referencia = document.getElementById("container")

    //adicionando na tela 
    referencia.insertAdjacentElement("beforeend",item)

    //adicionando uma classe no article
    item.classList.add("item")

    //ouvindo o evento de click e adicionando a função
    item.addEventListener("click", removeItem)
}

function removeItem(event) {
    event.target.remove()
}