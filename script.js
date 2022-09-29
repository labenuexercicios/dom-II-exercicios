const mainContainer = document.getElementById("container")
const btn = document.getElementById("botao")

function adcItem() {
    let quadrado = document.createElement("article");
    quadrado.classList.add("item");
    quadrado.addEventListener("click", (e) => {
        e.target.remove();
    })
    container.append(quadrado);
}

const removeItem = (event) => {
    let deleted = event.target;
    deleted.remove();
}