// SCRIPT MAP 
document.addEventListener("DOMContentLoaded", function () {
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
});
// SCRIPT MAP