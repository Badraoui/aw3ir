

function ValiderFormulaire()
 {

    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var adresse = document.getElementById("adresse").value;
    var modal = document.getElementById("myModal");

     if((nom.length < 5) || (nom.length > 20 )) {
         
        document.getElementById("modalBody").innerHTML = "La saisie du nom est obligatoire";
        modal.style.display = "block";
     }else if((prenom.length < 5) || (prenom.length > 20 )){
        document.getElementById("modalBody").innerHTML = "La saisie du prénom est obligatoire";
        modal.style.display = "block";
     }else if((adresse.length <5) || (adresse.length >50 )){
        document.getElementById("modalBody").innerHTML = "La saisie de l'adresse est obligatoire";
        modal.style.display = "block";

     }else if(!validateEmail(email)){

        document.getElementById("modalBody").innerHTML = "Veuillez respecter le format d'une adresse e-mail";
        modal.style.display = "block";
     }else{

        
        document.getElementById("modalBody").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
        modal.style.display = "block";

     };
    
    
 }

 function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}


var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(function () {

    $('.datepicker').datepicker({
        clearBtn: true,
        format: "dd/mm/yyyy"
    });

});