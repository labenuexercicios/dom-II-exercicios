
const container = document.getElementById("container")

function adicionaItem(event){
    event.preventDefault()
    const newarticle = document.createElement("article")
    newarticle.classList.add("item")
    container.appendChild(newarticle)
    container.insertAdjacentElement("beforeend", newarticle)

}

const removeItem = (event) => {
    event.target.remove()
}