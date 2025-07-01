// @todo: Темплейт карточки
function createCardFromTemplate(cardData) {
    const card = template.content.cloneNode(true);
    const deleteButton = card.querySelector('.card__delete-button');
    const cardElement = card.querySelector('.card');
    
    card.querySelector('.card__image').src = cardData.link;
    card.querySelector('.card__title').textContent = cardData.name;

    deleteButton.addEventListener('click', () => deleteCard(cardElement));

    return card;
}

// @todo: DOM узлы
const template = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function renderCards(cardsArray) {
    cardsArray.forEach(cardData => {
        const cardElement = createCardFromTemplate(cardData);
        placesList.appendChild(cardElement);
    });
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {  
    cardElement.remove();
}


// @todo: Вывести карточки на страницу
document.addEventListener('DOMContentLoaded', () => {
    renderCards(initialCards);
});

