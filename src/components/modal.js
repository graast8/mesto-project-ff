// Функция открытия модального окна
export function openModal(modal) {
    modal.classList.add('popup_is-opened');
}

// Функция закрытия модального окна
export function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
}

// Инициализация модальных окон
export function initModals() {
    const allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(popup => {
        popup.classList.add('popup_is-animated');
    });
}