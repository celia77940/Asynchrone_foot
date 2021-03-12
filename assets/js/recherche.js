const text = document.getElementById("text");
const datalist = document.getElementById("equipefff");
const button = document.querySelector("button");

text.addEventListener("input", function (e) {

  e.preventDefault();

  const formData = new FormData(form);

  if (text.value !== "") {
    fetch("recherche.php", {
        method: "POST",
        body: formData,
      })

      .then(response => response.json())
      .then(datas => {

        datalist.innerHTML = ""

        datas.forEach(function (item) {

          const option = document.createElement('option');

          option.value = item["nom_prenom"];

          option.innerText = item["nom_prenom"];

          datalist.appendChild(option);
          // console.log(datalist)

        });

        const options = document.querySelectorAll("option");

        options.forEach(option =>{

          if(text.value == option.innerText){
            
            datalist.innerHTML = "";
            button.click();
          }
          
          // option.addEventListener("click", function(){
          //   console.log(option)
          // })
        })
      });
  };
});