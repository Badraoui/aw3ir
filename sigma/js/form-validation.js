
function ValiderFormulaire()
{
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var adresse = document.getElementById("adresse").value;
    var dateNaissance = document.getElementById("datede").value;
    var message ="";
    var message1 ="tous les champs sont obligatoires";
    var message2 ="La taille de chaque champ doit avoir 5 caractères minimum";
    var message3 ="la date indiquée ne doit pas etre superieure à la date actuelle";
    var message4 ="Veuillez respecter le format d'une adresse mail";
    var vide = 0;
    var shortvariable = 0;
    var dateERR = 0;
    var mailERR = 0;
    




 if(nom.length < 5 ) {
  
   if(nom.length =0){
       vide = 1;

      

   }else{
     shortvariable = 1;
     
   }

 } if(prenom.length < 5){
     if(nom.length =0){
         vide = 1;
        
  
     }else{
         shortvariable = 1;
     
     }
     
   
     
    
 }if(adresse.length <5){
     if(nom.length =0){
         vide = 1;
       
  
     }else{
         shortvariable = 1;
     
     }

 }if(!validateEmail(email)){
  

     mailERR =1;    
 }
 if(Date.parse(dateNaissance)> Date.now()){
     dateERR = true;
 }
//-------------------------------------------------------------------------------------------------------------------------------

if(vide ==1){
    message = message +"<br> "+message1;
   
    document.getElementById("messageErreur").innerHTML = message;  
}
if (shortvariable ==1) {
    message = message +" <br>" + message2;
    document.getElementById("messageErreur").innerHTML = message; 
    
}
if(dateERR ==1){
    message = message +"<br> "+message3;
    document.getElementById("messageErreur").innerHTML = message; 

}
if(mailERR ==1){
    message = message +" <br>"+message4;
    document.getElementById("messageErreur").innerHTML = message;  

}

if((vide ==0) && (shortvariable ==0) && (dateERR ==0) && (mailERR ==0)){
    document.getElementById("myModalLabel").innerHTML = "BIENVENUE  " + document.querySelector("#prenom").value;
    document.getElementById("messageSucces").innerHTML = "Vous etes nés le "+document.querySelector("#datede").value+" et vous habitez ";
    document.getElementById("imgDiv").innerHTML = "<a style='width: 641px;' href='https://maps.google.com/maps?q=Paris'><img style='width: 640px;' src='https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg'></a>" ;

}
 



    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
    

   
}
//---------------------------------------------------------------------------------------------------------------------
function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());

}




$(function () {

    $('.datepicker').datepicker({
        clearBtn: true,
        format: "dd/mm/yyyy"
    });

});

