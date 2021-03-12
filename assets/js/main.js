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
        body: formData
    })

    // Promise : Utiliser pour réaliser des traitement de façon asynchrone
    // Méthode then renvoie un objet Promise

    .then(response => response.json())

    .then(datas => {
        console.log(datas);
        // boucle

        joueurs.innerHTML = "";

        datas.forEach(data => {

        joueurs.innerHTML += `
        <div class="display">
            <div>
                <img src="${data.img_joueurs}" height="400em" alt="">
            </div>
            <div class="cards">
                <div>
                    <h2> ${data.nom_prenom} </h2>
                </div>
                <div>
                    <h3> ${data.age} </h3>
                </div>
                <div>
                    <h3> ${data.club} </h3>
                </div>
                <div>
                    <p> ${data.description} </p>
                </div>
            </div>
        </div>  
        `   
        });
        
    });
});