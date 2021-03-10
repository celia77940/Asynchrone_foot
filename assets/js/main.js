const joueurs = document.getElementById("joueurs");
const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Crée un nouvel objet / form -> L'objet est rempli avec les clé/valeurs du formulaire
    const formData = new FormData(form);

    // Permet de récupéré des ressources à travers le réseau en méthode asynchrone
    fetch("main.php",
    {
        method: "POST",
        body : formData
    })

    // Promise : Utiliser pour réaliser des traitement de façon asynchrone
    // Méthode then renvoie un objet Promise

    .then(response => response.json())

    .then(data => {
        console.log(data);

        joueurs.innerHTML = ` Il a ${data[0].age} ans et il s'apelle ${data[0].nom_prenom} `
    });

});