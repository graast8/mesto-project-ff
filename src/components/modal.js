export const allPopups = document.querySelectorAll('.popup');

// Функция открытия модального окна
export function openModal(modal) {
    modal.classList.add('popup_is-opened');
}

// Функция закрытия модального окна
export function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
}

export function closeModalByOverlay(e) {
    if (e.target === e.currentTarget) {
        closeModal(e.currentTarget);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
         allPopups.forEach(popup => {
            if (popup.classList.contains('popup_is-opened')) {
                    closeModal(popup);
                }
            });
        }
    });