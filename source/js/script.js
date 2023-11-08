const modalForm = document.querySelector('.modal__form');
const promoBtn = document.querySelector('.promo__btn');
const modal = document.querySelector('.modal');
const mainNav = document.querySelector('.main-nav');
const menuToggleButton = document.querySelector('.main-nav__toggle');
const cartButton = document.querySelectorAll('.product__to-cart');

mainNav.classList.add('main-nav--js');
mainNav.classList.add('main-nav--closed');


if (cartButton) {
    cartButton.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modal--closed');
        })
    })
}


if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.add('modal--closed');
    });
}

if (promoBtn) {
    promoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--closed');
    })
}

if(menuToggleButton) {
    menuToggleButton.addEventListener('click', () => {
        mainNav.classList.toggle('main-nav--closed');
    })
}
