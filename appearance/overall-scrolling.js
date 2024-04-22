// SCRIPT OPEN MENU-BURGER / HIDDEN SCROLLING-TEXT
document.addEventListener("DOMContentLoaded", function () {
// Récupérer les éléments du menu burger et du menu burger lui-même
const burgerMenuButton = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');

// Ajouter un gestionnaire d'événements pour l'ouverture et la fermeture du menu burger
burgerMenuButton.addEventListener('click', function () {
    burgerMenu.classList.toggle('open');
    
    // Récupérer tous les conteneurs de texte de défilement
    const scrollingTextContainers = document.querySelectorAll('.scrolling-text-container');

    // Masquer ou afficher les conteneurs de texte de défilement en fonction de l'état du menu burger
    scrollingTextContainers.forEach(container => {
        if (burgerMenu.classList.contains('open')) {
            container.style.display = 'none'; // Masquer le conteneur de texte de défilement lorsque le menu burger est ouvert
        } else {
            container.style.display = 'flex'; // Afficher le conteneur de texte de défilement avec display flex lorsque le menu burger est fermé
        }
    });

    // Ajouter ou retirer la balise i pour la croix du bouton close
    const isOpen = burgerMenu.classList.contains('open');
    if (isOpen) {
        burgerMenuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        burgerMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Réinitialiser le contenu du menu-burger
    }
});

// Récupérer les éléments de la barre de navigation
const navLinks = document.querySelectorAll('.links a');

// Ajouter un gestionnaire d'événements pour la fermeture du menu burger lorsque l'utilisateur clique sur un lien de navigation
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        burgerMenu.classList.remove('open');
        // Récupérer tous les conteneurs de texte de défilement
        const scrollingTextContainers = document.querySelectorAll('.scrolling-text-container');
        // Afficher les conteneurs de texte de défilement avec display flex lorsque l'utilisateur clique sur un lien de navigation
        scrollingTextContainers.forEach(container => {
            container.style.display = 'flex';
        });
        // Réinitialiser le contenu du menu-burger
        burgerMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});
});
// SCRIPT OPEN MENU-BURGER / HIDDEN SCROLLING-TEXT


// Autre solution :
// // SCRIPT OPEN MENU-BURGER / HIDDEN SCROLLING-TEXT
// document.addEventListener("DOMContentLoaded", function () {
//     // Récupérer les éléments du menu burger et du menu burger lui-même
//     const burgerMenuButton = document.querySelector('.burger-menu-button');
//     const burgerMenu = document.querySelector('.burger-menu');
//     const containerHomepage = document.querySelector('.container_homepage'); 

//     // Ajouter un gestionnaire d'événements pour l'ouverture et la fermeture du menu burger
//     burgerMenuButton.addEventListener('click', function () {
//         burgerMenu.classList.toggle('open');
        
//         // Masquer ou afficher la div contenant toute la page en fonction de l'état du menu burger
//         if (burgerMenu.classList.contains('open')) {
//             containerHomepage.style.display = 'none'; // Masquer la div contenant toute la page lorsque le menu burger est ouvert
//             burgerMenuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Modifier le contenu du bouton pour afficher la croix
//         } else {
//             containerHomepage.style.display = 'block'; // Afficher la div contenant toute la page lorsque le menu burger est fermé
//             burgerMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Modifier le contenu du bouton pour afficher les barres du menu
//         }
//     });

//     // Récupérer les éléments de la barre de navigation
//     const navLinks = document.querySelectorAll('.links a');

//     // Ajouter un gestionnaire d'événements pour la fermeture du menu burger lorsque l'utilisateur clique sur un lien de navigation
//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             burgerMenu.classList.remove('open');
//             containerHomepage.style.display = 'block'; // Réafficher la div contenant toute la page lorsque le menu burger est fermé
//             burgerMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Réinitialiser le contenu du bouton pour afficher les barres du menu
//         });
//     });
// });
// // SCRIPT OPEN MENU-BURGER / HIDDEN SCROLLING-TEXT