// @todo: Функция создания карточки
export function createCardFromTemplate(cardData, deleteCallback, likeCallback, imageClickCallback) {
    const template = document.querySelector('#card-template');
    const card = template.content.cloneNode(true);
    const deleteButton = card.querySelector('.card__delete-button');
    const cardElement = card.querySelector('.card');
    const likeButton = card.querySelector('.card__like-button');
    const cardImage = card.querySelector('.card__image')
    
    card.querySelector('.card__image').src = cardData.link;
    card.querySelector('.card__title').textContent = cardData.name;

    deleteButton.addEventListener('click', () => deleteCallback(cardElement));

    likeButton.addEventListener('click', likeCallback);

    cardImage.addEventListener('click', ()=> {
        imageClickCallback(cardData);
    });

    return card;
}

// @todo: Функция удаления карточки
export function deleteCard(cardElement) {  
    cardElement.remove();
}

// Функция обработки лайка
export function handleLike(evt) {
    evt.target.classList.toggle('card__like-button_is-active')
}