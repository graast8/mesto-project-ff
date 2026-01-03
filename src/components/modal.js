

// Функция открытия модального окна
export function openModal(modal) {
    modal.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalByEsc);
}

// Функция закрытия модального окна
export function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalByEsc);
}

// Закрытие по клику на оверлей
export function closeModalByOverlay(e) {
    if (e.target === e.currentTarget) {
        closeModal(e.currentTarget);
    }
}

// Закрытие по клавише Escape
const closeModalByEsc = (e) => {
    if (e.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closeModal(openedPopup);
        }
    }
};