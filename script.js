function adicionaItem(event) {
    let container = document.getElementById("container");


    let novoItem = document.createElement("article");

    novoItem.innerHTML = "novo item"

    novoItem.classList.add("item");

    novoItem.setAttribute("onclick", "removeItem(event)");

    container.appendChild(novoItem);
}

function removeItem(event) {
    event.target.remove();
}
