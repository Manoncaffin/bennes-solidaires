// SEARCH CITY
document.addEventListener("DOMContentLoaded", function () {
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
});
// SEARCH CITY