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

        joueurs.innerHTML = "";

        datas.forEach(data => {

        joueurs.innerHTML += `
        <div class="total_card">
            <div class="display_card ">
                <div>
                    <img src="${data.img_joueurs}" height="400em" alt="">
                </div>
                <div class="cards">
                    <div class="card_etoile">
                        <div class="border_card"></div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-star-fill etoile" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-star-fill etoile" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </div>
                        <div class="border_card"></div>
                    </div>
                    <div>
                        <h3>${data.nom_prenom}</h3>
                    </div>
                    <div class="display_ac">
                        <div class="display_age">
                            <div class="picto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-calendar-event color" viewBox="0 0 16 16">
                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                            </div>
                            <div>
                                <p>${data.age} ans</p>
                            </div>
                        </div>
                        <div class="display_club">
                            <div class="picto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-shield color" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                            </svg>
                            </div>
                            <div>
                                <p>${data.club}</p>
                            </div>
                        </div>
                    </div>
                    <div class="para">
                        <p>${data.description}</p>
                    </div>
                    <div class="border_lien"></div>
                    <div class="lien">
                        <p>Lien pour en savoir +</p>
                    </div>
                    <div class="wiki">
                        <a href="${data.lien}">Wikipédia ${data.nom_prenom}</a>
                    </div>           
                </div>
            </div>
        </div>
        `   
        });
        
    });
});