/*
# Exercício 1
Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização.
*/

const main = document.getElementById("container")//pegar o elemento container do HTML.

function adicionaItem(event) { //chamada do onclick para funcao.
    event.preventDefault() //mudar o padrao do botao para nao atualizar a pg.
    let newItem = document.createElement("div")//criar uma nova div no HTML
    let newText = document.createTextNode("Teste") //criar um texto no HTML.
    newItem.appendChild(newText) //colocar como filho da div o texto, para o texto ir para dentro da div.

    main.appendChild(newItem) //excc2 fazer o newItem ser filho da main
    newItem.setAttribute("class", "item") //excc2 aplicar a estilização do css dos outros elementos para esse criado.
    newItem.setAttribute("onclick", "removeItem(event)")
}


/*
# Exercício 2
Altere a função criada no exercício 1 para que agora o clique no botão faça a **estilização** do novo item





# Exercício 3

Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. Esta função deve **remover** o elemento clicado.

**Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.

*/

const removeItem = (event) => { //chamada do evento na funcao

    
    event.preventDefault() //mudar o padrao do browser para nao atualizar a pg
    event.target.remove() // para remover elementos com o click
    console.log(event.target) 
    
    
}








