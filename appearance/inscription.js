// SCRIPT OPEN MENU-BURGER / HIDDEN SCROLLING-TEXT
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
// SCRIPT OPEN MENU-BURGER / HIDDEN SCROLLING-TEXT

// AFFICHAGE TEXTE RGPD
// Sélection des boutons radio
const radioButtons = document.querySelectorAll('input[name="user-type"]');
// Sélection du texte RGPD
const textRGPD = document.getElementById('text_rgpd');
// Fonction pour afficher ou masquer le texte RGPD en fonction de la sélection du bouton radio
function toggleTextRGPD() {
 if (document.getElementById('professionnel').checked) {
     textRGPD.style.display = 'block';
 } else {
     textRGPD.style.display = 'none';
 }
}
// Ajout d'un écouteur d'événements à chaque bouton radio
radioButtons.forEach(function (radioButton) {
 radioButton.addEventListener('change', toggleTextRGPD);
});
// Appel initial pour assurer que le texte RGPD est caché par défaut
toggleTextRGPD();
// AFFICHAGE TEXTE RGPD

// AFFICHAGE SECTEUR ACTIVITÉ
const particulierRadioButton = document.getElementById('particulier');
const professionnelRadioButton = document.getElementById('professionnel');
const radioProfessionnalContainer = document.querySelector('.radio_professionnal');

professionnelRadioButton.addEventListener('change', function () {
 if (this.checked) {
     radioProfessionnalContainer.style.display = 'block';
 } else {
     radioProfessionnalContainer.style.display = 'none';
 }
});
particulierRadioButton.addEventListener('change', function () {
 if (this.checked) {
     radioProfessionnalContainer.style.display = 'none';
 }
});
// AFFICHAGE SECTEUR ACTIVITÉ
