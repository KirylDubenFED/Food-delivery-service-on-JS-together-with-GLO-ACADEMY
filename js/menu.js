const restourant = 'tanuki';
const cardsMenu = document.querySelector('.cards-menu')

const renderItems = (data) => {
    const card = document.createElement('div')

    card.classList.add('card')
    
    card.innerHTML = `
        <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">Пицца Везувий</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
                    «Халапенье», соус «Тобаско», томаты.
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">545 ₽</strong>
                </div>
                </div>`
}

fetch(`./db/${restourant}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
        
    })
    .catch((error) => {
        // console.log(error);
    })