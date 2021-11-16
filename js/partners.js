const cardsRestaurants = document.querySelector('.cards-restaurants')

const renderItems = (data) => {
  data.forEach(item => {
    const a = document.createElement('a')

    a.setAttribute('href', '/restaurant.html')
    a.classList.add('card')
    a.classList.add('card-restaurant"')

    a.innerHTML = `
      <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image" />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">Пицца плюс</h3>
                  <span class="card-tag tag">50 мин</span>
                </div>
                <div class="card-info">
                  <div class="rating">
                    4.5
                  </div>
                  <div class="price">От 900 ₽</div>
                  <div class="category">Пицца</div>
                </div>
              </div>
    `

    console.log(a);
  });
}

fetch('https://delivery-a05e1-default-rtdb.firebaseio.com/db/partners.json')
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
    console.log(error);
  })