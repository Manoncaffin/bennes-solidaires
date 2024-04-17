// SCRIPT NAVBAR 
const burgerMenuButton = document.querySelector('.burger-menu-button');
const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i');
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelectorAll('.links a');

burgerMenuButton.onclick = function () {
    burgerMenu.classList.toggle('open');
    const isOpen = burgerMenu.classList.contains('open');
    burgerMenuButtonIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

    // Add or remove the class to hide the scrolling text containers based on the menu state
    scrollingTextContainers.forEach(container => {
        container.classList.toggle('hide-on-menu-open', isOpen);
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('open');
        burgerMenuButtonIcon.classList = 'fa-solid fa-bars';
    });
});
// SCRIPT NAVBAR 