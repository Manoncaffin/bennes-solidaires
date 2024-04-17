// SCRIPT TABLEAU MATÉRIAUX
document.addEventListener('DOMContentLoaded', function () {
    const toggleItems = document.querySelectorAll('.toggle-table');

    toggleItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const sublistItems = this.parentElement.querySelectorAll('li:not(.toggle-table)');
            sublistItems.forEach(function (subitem) {
                subitem.classList.toggle('hidden');
            });

            // Ajouter ou supprimer la classe show-pointer pour basculer entre les icônes
            this.classList.toggle('show-pointer');
        });
    });
});
// SCRIPT TABLEAU MATÉRIAUX

// SCRIPT MODALE
// Récupérer les éléments DOM nécessaires
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// Ouvrir la modale lorsque le bouton est cliqué
btn.onclick = function () {
    modal.style.display = "block";
}

// Fermer la modale lorsque l'utilisateur clique sur le bouton de fermeture
span.onclick = function () {
    modal.style.display = "none";
}

// Fermer la modale lorsque l'utilisateur clique en dehors de celle-ci
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
// SCRIPT MODALE

// IMAGE HEADER 
// Sélection de l'élément image
const image = document.getElementById('imageChange');

// Tableau contenant les chemins des différentes images
const imagesArray = [
    "../images/brouette.webp",
    "../images/brouette-pleine-droite.webp",
    "../images/remorque.svg",
    "../images/remorque-pleine.png",
];
console.log(imagesArray)

// Index actuel de l'image affichée
let currentIndex = 0;

// Fonction pour changer l'image au survol
function changeImageOnHover() {
    // Incrémenter l'index pour afficher la prochaine image
    currentIndex = (currentIndex + 1) % imagesArray.length;
    // Changer la source de l'image
    image.src = imagesArray[currentIndex];
}

// Attacher un gestionnaire d'événement pour l'événement mouseenter
image.addEventListener('mouseenter', changeImageOnHover);

// Fonction pour réinitialiser l'image à l'originale lorsque la souris quitte l'image
function resetImage() {
    // Réinitialiser l'index pour afficher l'image originale
    currentIndex = 0;
    // Réinitialiser la source de l'image
    image.src = imagesArray[currentIndex];
}

// Attacher un gestionnaire d'événement pour l'événement mouseleave
image.addEventListener('mouseleave', resetImage);
// IMAGE HEADER
