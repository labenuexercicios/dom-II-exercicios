
 /*Modo 1

 function adicionaItem() {
     const seleciona = document.getElementById("container")
     const novoTexto = document.createElement("article")  
     novoTexto.innerHTML += "Item adicionado!" 
    seleciona.appendChild(novoTexto)
    novoTexto.insertAdjacentElement("beforeend")
 }

 function adicionaItem() {
    const seleciona = document.getElementById("container")
    const novoTexto = document.createElement("article") 
    novoTexto.onclick = function removeItem(event){
        event.target.remove()
    }
    novoTexto.classList.add("item")
    novoTexto.innerHTML += "item adicionado!"
    seleciona.appendChild(novoTexto)
    novoTexto.insertAdjacentElement("beforeend")
}
*/

//Modo 2

const adicionaItem = () => {
    const texto = document.getElementById("container")
    const novoArt = document.createElement("article")
    novoArt.innerHTML = "ITEM ADD!"
    texto.insertAdjacentElement("beforeend", novoArt)
    novoArt.setAttribute("onclick", "removeItem(event)")
    novoArt.classList.add("item")
    //P/ mudar de cor a cada click:
    novoArt.setAttribute("class", "novasCores")
    novoArt.style.backgroundColor = "rgb(" + (Math.random() * 122) + "," + (Math.random() * 215) + "," + (Math.random() * 255)
    novoArt.style.color = "white"
}

function removeItem(event){
    event.target.remove()
}