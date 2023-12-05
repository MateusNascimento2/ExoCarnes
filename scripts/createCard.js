export const createCard = (meat) => {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('c-card-wrapper');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('l-meat-card-imageWrapper');

    const img = document.createElement('img');
    img.setAttribute('src', meat.imageSrc);
    img.classList.add('c-card-img');
    imageWrapper.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.classList.add('c-card-content');

    const h3 = document.createElement('h3');
    h3.classList.add('c-content-title');
    h3.textContent = meat.name;

    const price = document.createElement('p');
    price.classList.add('c-content-price');
    price.textContent = `R$ ${meat.price}`;

    const buttonBuy = document.createElement('a');
    buttonBuy.classList.add('c-content-buy-button');
    buttonBuy.textContent = "COMPRE AGORA";
    buttonBuy.setAttribute('href', '#');


    cardContent.appendChild(h3);
    cardContent.appendChild(price);
    cardContent.appendChild(buttonBuy);
    cardWrapper.appendChild(imageWrapper);
    cardWrapper.appendChild(cardContent);

    return cardWrapper;
}