

const adicionaItem = (event) => {

const main = document.getElementById('container')
const newArticle = document.createElement('article')
main.insertAdjacentElement('beforeend', newArticle);
newArticle.classList.add('item')

}

const removeItem = () => {

event.target.remove()

}