const wrapper_container = document.querySelector("#root");

function getProducts() {
  let url = "https://dummyjson.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => render(data.products));
}

getProducts();

function render(array) {
  for (let elem of array) {

    const cardElem = document.createElement("div");
    const imageElem = document.createElement("img");
    const NameElem = document.createElement("p");
    const PriceElem = document.createElement("p");
    const RatingElem = document.createElement('div')
    
    cardElem.className = "card_container";

    imageElem.src = elem.thumbnail;
    NameElem.innerText = `Title: ${elem.title}`;
    PriceElem.innerText = `Price: ${elem.price}$`;
    RatingElem.innerHTML = renderRating(elem.rating)

    wrapper_container.append(cardElem);
    cardElem.append(imageElem, NameElem, PriceElem, RatingElem);
  }
}

function renderRating(rating) {
    const roundedRating = Math.round(rating);
    let stars = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            stars += '<span class="fa fa-star active"></span>';
        } else {
            stars += '<span class="fa fa-star"></span>';
        }
    }

    return stars;
}

