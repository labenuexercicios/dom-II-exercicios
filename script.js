const main = document.querySelector(".container")

const adicionaItem = (event) => {
    const newContent = document.createElement("article")
    newContent.setAttribute("class", "item")
    newContent.innerHTML = "New"
    
    newContent.addEventListener("click", removeItem(event))
    main.appendChild(newContent)
}

const removeItem = (event) => {
    if(event.target.innerHTML != "Adicionar mais um item"){
    const bloco = event.target
    bloco.remove()
    console.log(event.target)
}}

// Não consigo apagar as caixas novas que criei