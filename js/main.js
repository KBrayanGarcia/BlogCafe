const menu = document.querySelector(".menu");
const burguerButton = document.querySelector("#burguer-menu");

burguerButton.addEventListener('click', hideShowMenu);

function hideShowMenu() {
    if (menu.classList.contains('menu-visible')) {
        menu.classList.remove('menu-visible');
    } else {
        menu.classList.add('menu-visible');
    }
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
    }

}
