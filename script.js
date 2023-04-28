const container = document.getElementById(`container`)

const botao = document.getElementById(`botao`)

const adicionaItem = (event) => {
    const novoItem = document.createElement(`article`)
    novoItem.classList.add(`item`)
    novoItem.innerHTML = botao.value

    container.appendChild(novoItem)

    novoItem.onclick = removeItem

}

const removeItem = (event) => {
    event.preventDefault()
    const itemClicado = event.target
    itemClicado.remove()
}

