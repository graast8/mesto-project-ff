import card1Image from '../images/card_1.jpg';
import card2Image from '../images/card_2.jpg';
import card3Image from '../images/card_3.jpg';

export const initialCards = [
    {
      name: "Архыз",
      link: card1Image,
    },
    {
      name: "Челябинская область",
      link: card2Image,
    },
    {
      name: "Иваново",
      link: card3Image,
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

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