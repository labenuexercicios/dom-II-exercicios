// ########## EXERCICIO ONE ####################

function adicionaItem(event){

// >>>>Criando um article <<<<<<

    let cliqueBotaoA = document.createElement("article")
    console.log(cliqueBotaoA)
    
// >>>>> Criando um texto novo <<<<<<<<<<

    let cliqueBotaoB = document.createTextNode("Adicionado")
    console.log(cliqueBotaoB)

// >>>>>>> Adicionado na tela <<<<<<<

    cliqueBotaoA.appendChild(cliqueBotaoB)
    console.log(cliqueBotaoA)

// >>>>>> Adicionando outro Container <<<<<<<<<

    const cliqueBotaoC = document.getElementById("container")
    console.log(cliqueBotaoC)

// >>> Adicionando depois das listas do HTML <<<<

    cliqueBotaoC.insertAdjacentElement("beforeend", cliqueBotaoA)

// ################# EXEMPLO COLOCANDO A CIMA ###################


//    const cliqueBotaoC = document.createElement("container")
//    const cliqueBotaoD = document.createTextNode("item")

//    cliqueBotaoC.appendChild(cliqueBotaoD)
//    console.log(cliqueBotaoC)

//    cliqueBotaoB.insertAdjacentElement("beforeend", cliqueBotaoC)

//     elementoBotao.insertAdjacentElement("beforeend", cliqueBotao)

// ##############  Exercicio parte 2 ##############

    cliqueBotaoA.classList.add("item")
    cliqueBotaoA.setAttribute("onclick", "removeItem(event)")

}  

// ###############  Exercicio parte 3 ############

function removeItem(event){
    event.target.remove()
}