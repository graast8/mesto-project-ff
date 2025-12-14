import '../index.css'

import avatarImage from '../images/avatar.jpg';
import logoImage from '../images/logo.svg';
import card1Image from '../images/card_1.jpg';
import card2Image from '../images/card_2.jpg';
import card3Image from '../images/card_3.jpg';

import { initialCards, createCardFromTemplate, deleteCard, handleLike } from './cards.js';
import { openModal, closeModal, closeModalByOverlay, allPopups } from './modal.js';

 const logo = document.querySelector('.header__logo');
    if (logo) {
        logo.src = logoImage;
    }

const profileImage = document.querySelector('.profile__image');
    if (profileImage) {
        profileImage.style.backgroundImage = `url(${avatarImage})`;
    }

// @todo: DOM узлы
const template = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');
const closeImageButton = imagePopup.querySelector('.popup__close');

// @todo: Функция создания карточки
function renderCards(cardsArray) {
    cardsArray.forEach(cardData => {
        const cardElement = createCardFromTemplate(cardData, deleteCard, handleLike, openImagePopup);
        placesList.appendChild(cardElement);
    });
}


// Инициализация модальных окон
function initModals() {
    allPopups.forEach(popup => {
        popup.classList.add('popup_is-animated');
        popup.addEventListener('click', closeModalByOverlay);
    });
}


// @todo: Вывести карточки на страницу
document.addEventListener('DOMContentLoaded', () => {
    
    initModals();

    renderCards(initialCards);
});

function closeImagePopup() {
    closeModal(imagePopup);
}



closeImageButton.addEventListener('click', closeImagePopup);

function openImagePopup(cardData) {
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    openModal(imagePopup);
}

// Находим форму в DOM
const formElementPopup = document.querySelector('.popup_type_edit .popup__form');    // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name') // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_description') // Воспользуйтесь инструментом .querySelector()

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

function fillFormWithCurrentData() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleEditFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    

    // Выберите элементы, куда должны быть вставлены значения полей

    profileTitle.textContent = nameValue;
    profileDescription.textContent = jobValue;

    closeModal(editProfile);


    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementPopup.addEventListener('submit', handleEditFormSubmit);



const newCardPopup = document.querySelector('.popup_type_new-card')
const addButton = document.querySelector('.profile__add-button')
const closeButton = newCardPopup.querySelector('.popup__close')

addButton.addEventListener('click', () => {
    openModal(newCardPopup);
})

closeButton.addEventListener('click', () => {
    closeModal(newCardPopup)
});

const editProfile = document.querySelector('.popup_type_edit');
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = editProfile.querySelector('.popup__close');

editButton.addEventListener('click', () => {
    openModal(editProfile);
    fillFormWithCurrentData();
});

closeEditButton.addEventListener('click', () => {
    closeModal(editProfile);
});

const newCardForm = document.querySelector('form[name="new-place"]');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_url');

// Обработчик формы добавления карточки
function handleNewCardSubmit(evt) {
    evt.preventDefault();

    const cardName = cardNameInput.value;
    const cardUrl = cardUrlInput.value;

    // Создаем новую карточку
    const newCardData = {
        name: cardName,
        link: cardUrl
    };

    // Создаем элемент карточки и добавляем в начало списка
    const cardElement = createCardFromTemplate(newCardData, deleteCard, handleLike, openImagePopup);
    placesList.prepend(cardElement);

    // Очищаем форму
    newCardForm.reset();
    
    // Закрываем модальное окно
    closeModal(newCardPopup);
}

// Добавляем обработчик для формы новой карточки
newCardForm.addEventListener('submit', handleNewCardSubmit);