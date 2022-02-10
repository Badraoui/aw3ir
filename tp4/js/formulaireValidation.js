


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

        

        
                document.querySelector("table tbody").innerHTML =
                document.querySelector("table tbody").innerHTML+
                "<tr> <td>"+
                document.querySelector("#nom").value +
                "</td> <td>" +
                document.querySelector("#prenom").value+
                "</td> <td>" +
                document.querySelector("#datede").value+
                "</td> <td>" +
                document.querySelector("#adresse").value+
                "</td> <td>" +
                document.querySelector("#email").value+
                "</td> </tr>";

        

                document.getElementById("nom").textContent ="";
                document.getElementById("prenom").textContent="";
                document.getElementById("email").textContent="";
                document.getElementById("adresse").textContent="";
                document.getElementById("datede").textContent="";



             /*contactStore.add( document.querySelector("#nom").value, document.querySelector("#prenom").value, document.querySelector("#datede").value, document.querySelector("#adresse").value, document.querySelector("#email").value);

                listeDesContact = [];
                listeDesContact = contactStore.getList();
               
               
                for (var index in listeDesContact) {
                 } 

                 */


    }else{
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();

    }
    
   
}

//---------------------------------------------------------------------------------------------------------------------
function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());

}


function getlocalisation(){
    
    getLocation();
    showPosition;
    
}

