

function adicionaItem(event){
    const container  = document.getElementById("container")
    const item = document.querySelectorAll(".item")
    const addItem = document.createElement("article")

    addItem.innerHTML += ""


    container.insertAdjacentElement('beforeend',addItem)
    addItem.classList.add("item")
    addItem.onclick = (evento) => removeItem(evento)

}


function removeItem(event){

    // addItem.classList.remove("item")
    event.target.remove()
}