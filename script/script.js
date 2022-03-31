function Popup() {
    let popup = document.querySelector('.popup');
    let popupCloseBtn = document.querySelector('.popup__close');
    let popupForm = document.querySelector('.form');
    let popupSubmitForm = document.querySelector('.form-submit');
    let popupSubmitBtn = document.querySelector('.button-popup');
    

    let popupOpen = () => {
        popup.classList.remove('popup-none');
    }

    let popupClose = () => {
        popupCloseBtn.addEventListener('click', function(){
            popup.classList.add('popup-none');
        })
    }

    let submitForm = () => {
        popupSubmitBtn.addEventListener('click', function(){
            let textarea = document.querySelector('.textarea');
            textarea.value = '';
            
            popupForm.classList.add('popup-none');
            popupSubmitForm.classList.remove('popup-none');
        })
    }

    setTimeout(popupOpen, 1000);
    submitForm();
    popupClose();
}

function burgerMenu() {
    let burgerBtn = document.querySelector('.menu-burger');
    let menuBurger = document.querySelector('.navigation-mobile');

    //переменные отвечают за смену кнопки на крестик
    let burgerBtnSpan = document.querySelector('.menu__button-label');
    let burgerBtnAfter = document.querySelector('.menu__button_after');
    let burgerBtnBefore = document.querySelector('.menu__button_before');

    let burgerShow = () => {
        burgerBtn.addEventListener('click', function(){
            let checkClass = menuBurger.classList.contains('popup-none');
            if (checkClass) {
                menuBurger.classList.remove('popup-none');
                burgerBtnAfter.style.display = 'none';
                burgerBtnSpan.style.transform = 'rotate(45deg)';
                burgerBtnBefore.style.transform = 'rotate(135deg)';
                burgerBtnBefore.style.top = '40%';
            } else {
                menuBurger.classList.add('popup-none');
                burgerBtnAfter.style.display = 'block';
                burgerBtnSpan.style.transform = null;
                burgerBtnBefore.style.transform = null;
                burgerBtnBefore.style.top = '0';
            }
        })
    }

    burgerShow();
}

function upButton() {
    let upButton = document.querySelector('.up-button');

    window.onscroll = function () {
        if (window.pageYOffset > 200) {
            upButton.classList.remove('popup-none');
        } else {
            upButton.classList.add('popup-none');
        }
    };

    upButton.onclick = function () {
    window.scrollTo(0, 0);
    };
}

Popup();
burgerMenu();
upButton();
