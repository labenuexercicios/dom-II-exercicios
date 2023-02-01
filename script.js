function adicionaItem(event) {
  event.preventDefault()
  const main = document.getElementById("container")  ///tag
  const novoArticle = document.createElement("article") 
  novoArticle.onclick = function removeItem(event) {
    event.target.remove()
}
  novoArticle.classList.add("item")   
  novoArticle.innerHTML = "test"   
  main.appendChild(novoArticle)  // adiciona texto item
  novoArticle.insertAdjacentElement("beforeend")   
}


function removeItem(event) {
  event.target.remove()
}