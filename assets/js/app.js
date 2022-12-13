window.addEventListener('DOMContentLoaded', function(){
    const hamburger_menu = document.querySelector('.side-menu-close');
    const menu = document.querySelector('.side-menu-wrap');

    hamburger_menu.addEventListener('click', () => {
        hamburger_menu.classList.toggle('closed');
        menu.classList.toggle('open');
    });
});