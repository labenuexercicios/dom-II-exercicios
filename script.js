
    
 function adicionaItem() {
const container = document.getElementById("container")
let NovoItem = document.createElement("article")
NovoItem.setAttribute("class", "item")
NovoItem.setAttribute('onclick', 'removeItem(event)')
container.insertAdjacentElement('beforeend', NovoItem)
 }
 function removeItem (event) {
let div = event.target 
div.remove()


 }




