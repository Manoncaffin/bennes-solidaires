//  SCRIPT OPEN MENU-BURGER / HIDDEN SCROLLING-TEXT
// Récupérer les éléments du menu burger et du menu burger lui-même
document.addEventListener("DOMContentLoaded", function() {
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

// SCRIPT SELECT MATÉRIAU
const classificationSelect = document.getElementById('classification-select');
const materiauGeoSelect = document.getElementById('materiau-geo-select');
const materiauBioSelect = document.getElementById('materiau-bio-select');
const materiauGeoLabel = document.querySelector('.materiau-select-geo');
const materiauBioLabel = document.querySelector('.materiau-select-bio');

classificationSelect.addEventListener('change', function () {
    if (this.value === 'Matériau géo-sourcé') {
        materiauGeoSelect.style.display = 'block';
        materiauBioSelect.style.display = 'none';
        materiauGeoLabel.style.display = 'block';
        materiauBioLabel.style.display = 'none';
    } else if (this.value === 'Matériau bio-sourcé') {
        materiauGeoSelect.style.display = 'none';
        materiauBioSelect.style.display = 'block';
        materiauGeoLabel.style.display = 'none';
        materiauBioLabel.style.display = 'block';
    } else {
        materiauGeoSelect.style.display = 'none';
        materiauBioSelect.style.display = 'none';
        materiauGeoLabel.style.display = 'none';
        materiauBioLabel.style.display = 'none';
    }
});
// SCRIPT SELECT MATÉRIAU

// AJOUTER UN MATÉRIAU
// Fonction pour basculer entre les options de matériaux bio-sourcés et géo-sourcés
function toggleMaterialSelect() {
    const classificationSelect = document.getElementById("classification-select");
    const materiauBioSelect = document.getElementById("materiau-bio-select");
    const materiauGeoSelect = document.getElementById("materiau-geo-select");
    const newMaterialInput = document.getElementById("new-material");

    if (classificationSelect.value === "Matériau bio-sourcé") {
        materiauBioSelect.style.display = "block";
        materiauGeoSelect.style.display = "none";
    } else if (classificationSelect.value === "Matériau géo-sourcé") {
        materiauBioSelect.style.display = "none";
        materiauGeoSelect.style.display = "block";
    }

    // Cacher le champ d'entrée de matériau personnalisé
    newMaterialInput.style.display = "none";
}

// Fonction pour afficher le champ d'entrée pour ajouter un nouveau matériau
function showCustomMaterialInput() {
    const newMaterialInput = document.getElementById("new-material");
    newMaterialInput.style.display = "block";
}

// Fonction pour basculer l'affichage de l'élément "Ajouter un matériau" en fonction de la sélection
function toggleMaterialElements(show) {
    const addDiv = document.querySelector('.add');
    addDiv.style.display = show ? 'block' : 'none';
}

// Ajouter des écouteurs d'événements pour les options "Ajouter un matériau" 
materiauBioSelect.addEventListener("change", function () {
    if (materiauBioSelect.value === "ajouter-un-materiau-bio") {
        showCustomMaterialInput();
        toggleMaterialElements(true);
    } else {
        toggleMaterialElements(false);
    }
});

materiauGeoSelect.addEventListener("change", function () {
    if (materiauGeoSelect.value === "ajouter-un-materiau-geo") {
        showCustomMaterialInput();
        toggleMaterialElements(true);
    } else {
        toggleMaterialElements(false);
    }
});

//  Appeler la fonction toggleMaterialSelect au chargement de la page
toggleMaterialSelect();

// AJOUTER UN MATÉRIAU 

//  GÉRER LE BOUTTON ADD MATERIAL
// Fonction pour afficher ou masquer la div add-material en fonction de la sélection de l'utilisateur 
function toggleAddMaterialDiv(show) {
    const addMaterialDiv = document.querySelector('.add-material');
    addMaterialDiv.style.display = show ? 'block' : 'none';
    const addButton = document.querySelector('.add-material input[type="submit"]');
    addButton.style.display = show ? 'block' : 'none';
}

// Fonction pour gérer l'affichage de la div add-material lorsque l'utilisateur sélectionne "Ajouter un matériau" dans les listes déroulantes 
function handleMaterialSelectChange(selectElement) {
    const newMaterialInput = document.getElementById("new-material");
    if (selectElement.value === "ajouter-un-materiau-bio" || selectElement.value === "ajouter-un-materiau-geo") {
        newMaterialInput.style.display = "block";
    } else {
        newMaterialInput.style.display = "none";
    }
}

// Ajouter des écouteurs d'événements pour les changements de sélection dans les listes déroulantes 
materiauBioSelect.addEventListener("change", function () {
    handleMaterialSelectChange(this);
});

materiauGeoSelect.addEventListener("change", function () {
    handleMaterialSelectChange(this);
});
// GÉRER LE BOUTTON ADD MATERIAL


// SCRIPT MAP 
const map = L.map('map').setView([48.8566, 2.3522], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Déclarer une variable pour stocker la référence au marqueur précédent
let previousMarker = null;

function searchAddress() {
    const address = document.getElementById("address-input").value;
    const url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(address);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;

                const myIcon = L.icon({
                    iconUrl: '../images/marker.png',
                    iconSize: [50, 50],
                    iconAnchor: [22, 94],
                    popupAnchor: [3, -76],
                });

                // Créer un marqueur aux coordonnées trouvées
                const marker = L.marker([lat, lon], {
                    icon: myIcon
                }).addTo(map);

                // Si un marqueur précédent existe, le supprimer de la carte
                if (previousMarker !== null) {
                    map.removeLayer(previousMarker);
                }

                // Assigner le nouveau marqueur à la variable previousMarker
                previousMarker = marker;

                // Construire le contenu HTML du popup avec les informations de la publication
                const popupContent = `
    <div>
        <h6>Bottes de paille</h6>
        <p>Date: 01/05/2024</p>
        <p>Bonjour, je donne 3 bottes de paille de blé destinés à la construction mais elles ont un taux d’humidité trop haut pour les utiliser.</p>
        <a href="./annonce-detail.html"><p>Voir l'annonce</p></a>
    </div>
    `;

                // Ajouter une popup au marqueur pour afficher l'adresse
                marker.bindPopup(popupContent, {
                    className: 'custom-popup',
                });

                // Définir un gestionnaire d'événements pour ouvrir le popup lors du clic sur le marqueur
                marker.on('click', function () {
                    this.openPopup();
                });

                // Centrer la carte sur le marqueur
                map.setView([lat, lon], 13);
            } else {
                alert("Adresse non trouvée");
            }
        })
        .catch(error => {
            console.error('Erreur lors de la recherche d\'adresse :', error);
            alert("Une erreur s'est produite lors de la recherche d'adresse");
        });
}
// SCRIPT MAP

// SEARCH CITY 
let searchTimeout;

document.getElementById("address-input").addEventListener("input", function () {
    const postalCode = this.value.trim();
    clearTimeout(searchTimeout); // Pour éviter les requêtes multiples pendant la saisie

    // Attendez un court délai après la saisie avant de déclencher la recherche
    searchTimeout = setTimeout(() => {
        if (postalCode.length === 5 && /^\d+$/.test(postalCode)) { // Vérifie si le code postal est valide
            const url = 'https://nominatim.openstreetmap.org/search?format=json&postalcode=' + encodeURIComponent(postalCode);

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data && data.length > 0) {
                        const city = data[0].display_name;
                        // Remplir le champ avec la ville trouvée
                        document.getElementById("address-input").value = city;

                        // Effectuer automatiquement la recherche dans la carte une fois que le code postal est saisi
                        searchAddress();
                    } else {
                        alert("Aucune ville trouvée pour ce code postal");
                    }
                })
                .catch(error => {
                    console.error('Erreur lors de la recherche de ville par code postal :', error);
                    alert("Une erreur s'est produite lors de la recherche de ville par code postal");
                });
        } else {
            // Code postal invalide, afficher un prompt d'erreur
            alert("Veuillez entrer un code postal valide (5 chiffres).");
        }
    }, 600); // Délai de 600 millisecondes avant de déclencher la recherche
});
});
// SEARCH CITY
