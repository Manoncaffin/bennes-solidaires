// SCRIPT SELECT MATERIAL
const classificationSelect = document.getElementById('classification-select');
const materialGeoSelect = document.getElementById('material-geo-select');
const materialBioSelect = document.getElementById('material-bio-select');
const materialGeoLabel = document.querySelector('.material-select-geo');
const materialBioLabel = document.querySelector('.material-select-bio');

classificationSelect.addEventListener('change', function () {
    if (this.value === 'Matériau géo-sourcé') {
        materialGeoSelect.style.display = 'block';
        materialBioSelect.style.display = 'none';
        materialGeoLabel.style.display = 'block';
        materialBioLabel.style.display = 'none';
    } else if (this.value === 'Matériau bio-sourcé') {
        materialGeoSelect.style.display = 'none';
        materialBioSelect.style.display = 'block';
        materialGeoLabel.style.display = 'none';
        materialBioLabel.style.display = 'block';
    } else {
        materialGeoSelect.style.display = 'none';
        materialBioSelect.style.display = 'none';
        materialGeoLabel.style.display = 'none';
        materialBioLabel.style.display = 'none';
    }
});
// SCRIPT SELECT MATERIAL

// SCRIPT QUANTITY
const select = document.getElementById("quantity-select");
const maxNumber = 1000; // Spécifiez ici le nombre maximum souhaité

for (let i = 1; i <= maxNumber; i++) {
    const option = document.createElement("option");
    option.text = i;
    option.value = i;
    select.appendChild(option);
}
// SCRIPT QUANTITY

// AJOUTER UN MATÉRIAU
// Fonction pour basculer entre les options de matériaux bio-sourcés et géo-sourcés
function toggleMaterialSelect() {
    const classificationSelect = document.getElementById("classification-select");
    const materialBioSelect = document.getElementById("material-bio-select");
    const materialGeoSelect = document.getElementById("material-geo-select");
    const newMaterialInput = document.getElementById("new-material");

    if (classificationSelect.value === "Matériau bio-sourcé") {
        materialBioSelect.style.display = "block";
        materialGeoSelect.style.display = "none";
    } else if (classificationSelect.value === "Matériau géo-sourcé") {
        materialBioSelect.style.display = "none";
        materialGeoSelect.style.display = "block";
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
materialBioSelect.addEventListener("change", function () {
    if (materialBioSelect.value === "add-an-material-bio") {
        showCustomMaterialInput();
        toggleMaterialElements(true);
    } else {
        toggleMaterialElements(false);
    }
});

materialGeoSelect.addEventListener("change", function () {
    if (materialGeoSelect.value === "add-an-material-geo") {
        showCustomMaterialInput();
        toggleMaterialElements(true);
    } else {
        toggleMaterialElements(false);
    }
});

// Appeler la fonction toggleMaterialSelect au chargement de la page
toggleMaterialSelect();

// AJOUTER UN MATÉRIAU

// GÉRER LE BOUTTON ADD MATERIAL
// Fonction pour afficher ou masquer la div add-material en fonction de la sélection de l'utilisateur
function toggleAddMaterialDiv(show) {
    const addMaterialDiv = document.querySelector('.add-material');
    addMaterialDiv.style.display = show ? 'block' : 'none';
    const addButton = document.querySelector('.add-material input[type="submit"]');
    addButton.style.display = show ? 'block' : 'none';
}

// Fonction pour gérer l'affichage de la div add-material lorsque l'utilisateur sélectionne "Ajouter un matériau" dans les listes déroulantes
function handleMaterialSelectChange(selectElement) {
    if (selectElement.value === "add-an-material-bio" || selectElement.value === "add-an-material-geo") {
        toggleAddMaterialDiv(true);
    } else {
        toggleAddMaterialDiv(false);
    }
}

// Ajouter des écouteurs d'événements pour les changements de sélection dans les listes déroulantes
materialBioSelect.addEventListener("change", function () {
    handleMaterialSelectChange(this);
});

materialGeoSelect.addEventListener("change", function () {
    handleMaterialSelectChange(this);
});
// GÉRER LE BOUTTON ADD MATERIAL


// SEARCH CITY
let searchTimeout;

document.getElementById("geographical").addEventListener("input", function () {
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
                        document.getElementById("geographical").value = city;
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
    }, 600); // Délai de 500 millisecondes avant de déclencher la recherche
});
// SEARCH CITY