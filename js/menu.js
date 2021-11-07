const restourant = 'tanuki';
const cardsMenu = document.querySelector('.cards-menu')

const renderItems = (data) => {
    const card = document.createElement('div')

    card.classList.add('card')
    console.log(card);
}

fetch(`./db/${restourant}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
        
    })
    .catch((error) => {
        // console.log(error);
    })