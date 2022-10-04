function adicionaItem(event) {
    let container = document.getElementById("container")
    let newElement = document.createElement("article")

    newElement.innerHTML = "qualquer"
    container.insertAdjacentElement('beforeend', newElement)
    newElement.classList.add("item")

    newElement.setAttribute("onclick", "removeItem(event)")
    //newElement.onclick = (event) => removeItem(event)
}

function removeItem(event) {
    event.target.remove()
}