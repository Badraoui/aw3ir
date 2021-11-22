var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var email = document.getElementById("email").value;
var adresse = document.getElementById("adresse").value;
var dateNaissance = document.getElementById("datede").value;
var message ="";
var message1 ="tous les champs sont obligatoires";
var message2 ="La taille du nom doit avoir 5 caractères minimum";
var message3 ="la date indiquée ne doit pas etre superieure à la date actuelle";
var message4 ="Veuillez respecter le format d'une adresse mail";
var vide = new Boolean("false");
var shortvariable = new Boolean("false");
var dateERR = new Boolean("false");
var mailERR = new Boolean("false");




 if(nom.length < 5 ) {
  
   if(nom.length =0){
       vide = true;

      

   }else{
     shortvariable = true;
     
   }

 }else if(prenom.length < 5){
     if(nom.length =0){
         vide = true;
        
  
     }else{
         shortvariable = true;
     
     }
     
   
     
    
 }else if(adresse.length <5){
     if(nom.length =0){
         vide = true;
       
  
     }else{
         shortvariable = true;
     
     }

 }else if(!validateEmail(email)){
  

     mailERR =true;
     
 }else if(Date.parse(dateNaissance)> Date.now()){
     dateERR = true;
 }
//-------------------------------------------------------------------------------------------------------------------------------
 if(vide){
     message = message +" "+message1;
    
     document.querySelector(".modal-body").innerHTML = message;  
 }else if (shortvariable) {
     message = message +" " + message2;
     document.getElementById("modal-body").innerHTML = message; 
     
 }else if(dateERR){
     message = message +" "+message3;
     document.getElementById("modal-body").innerHTML = message; 

 }else if(mailERR){
     message = message +" "+message4;
     document.getElementById("modal-body").innerHTML = message; 

 }