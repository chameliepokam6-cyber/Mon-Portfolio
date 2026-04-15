//Exercice 1: création et liaison du fichier script

console.log("Mon fichier script.js est bien lié à mon html");

//EXERCICE 2: VARIABLES ET FONCTIONS 

//TODO 2.1:DECLARATION DES CONSTANTES DE LA PAGE  


const prenom = "Brunelle";
const nom = "POKAM";
const promotion = "Bachelor 1";
const ecole = "Green Up Academy";
const annee = 2026;


//TODO 2.2 : DECLARATION DU TABLEAU DE COMPETENCES  

const competences = [
    "HTML5",
    "CSS3",
    "Flexbox",
    "Responsive design",
    "Javascript",

];



//TODO 2.3 : CREATIO DE LA FONCTION getNomComplet 

function getNomComplet(){
    return prenom + " " + nom;
}

//TODO 2.4 : CREATION DE LA FONCTION afficherBienvue

function afficherBienvenue(){
 const msg = `Bienvenu(e) sur le portfolio de ${getNomComplet()}`;
    console.log(msg);
    console.log(`promotion : ${promotion} - ${ecole} ${annee}`);
}

//TODO 2.5 : CREATION DE LA FONCTION listerCompetences 

function listerCompetences(){
    console.log("Mes compétences de développeuse:");
    for(const c of competences){
        console.log("check" + ":" + c);
    }
}


//TODO 2.6 : APPEL DES FONCTIONS 

afficherBienvenue();
listerCompetences();


//EXERCICE 3 : TOGGLECOMPETENCES 

//TODO 3.1 : AJOUT DU BOUTON DANS LE HTML 

//TODO 3.2 : CREATION DE LA FONCTION

let competencesVisibles = true;

function toggleCompetences(){
    const grille = document.querySelector('#competences .grille-competences');
    const button = document.getElementById("btn-competences");


    if (!grille || !button)
        {
            console.warm(" Grille de competences introuvable ou bouton introuvable" );
            return;
        }

        

    if(competencesVisibles){
        grille.style.display = "none";
        button.textContent = "Afficher les compétences";
        competencesVisibles = false;
    }else{
        grille.style.display = "flex";
        button.textContent = "Masquer les compétences";
        competencesVisibles = true;

    }
    console.log("Compétences visibles:",competencesVisibles);
}






//EXERCICE 4 : VALIDATION DU FORMULAIRE 

//TODO 4.1 : MODIFICATION DU FORMULAIRE 

//TODO 4.2 : CREATION DE LA FONCTION 



function validerFormulaire(){
    //Récupère les valeurs des champs
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const message = document.getElementById("message").value.trim();

    //verifie que nom n´est pas pas vide


    //on collecte toutes les erreurs avant d´alerter

    const error = [];
    if(nom === " "){
        //alert("Merci de saisir votre nom.");
        //return false; //Bloque l´envoi
        error.push(" Le nom est obligatoire");
    }



    //verifie que email n´est pas vide

    if(email === " " || !email.include("@")){
        //alert("Merci de saisir votre adresse email");
        //return false 
        error.push(" Une adresse email valide est requise (avec @)");
    }





    if (tel === " " || telephone.length<10){
    erreurs.push("Le numéro de téléphone est obligatoire");
   
}




 //vérifie que message a au moins 10 caractères

    if(message.lenght<20){
        //alert(" Votre message doit faire au moins dix caractères");
        //return false;  
        error.push(" Message trop court:" + message.length + " 20 Caractères");  
    }

    if(error.length>0){
        alert(" Merci de corriger les erreurs suivantes: \n\n" + error.join(" \n"));
        return false
    }



    //tout est ok
    console.log(" Formulaire valide! Envoi en cours");
    console.log({nom,email,message});
    return true; //<- Autorise l´envoi
}


//EXERCICE 6-COMPTEUR DE COMPETENCES DYNAMIQUE

//TODO 6-1:CREATION DE LA FONCTION resumeCompetences

function resumeCompetences(){
 const total = competences.length;
 console.log("---Mes " + total  + " competences---");
 competences.forEach(function(c,i){
    console.log(" " + (i+1) + "." + c);
 })
}

//TODO 6-2

function ajouterCompetences(nouvelle){
if (competences.includes(nouvelle)) {
  console.log('"' + nouvelle + '" est déjà dans ta liste.');
  return;
}

competences.push(nouvelle);
console.log('"' + nouvelle + '" ajoutée ! Total : ' + competences.length);
}

//TODO 6-3

resumeCompetences();

ajouterCompetences("Git");
ajouterCompetences("HTML5");
ajouterCompetences("Chrome DevTools");

resumeCompetences();


//EXERCICE 7: MESSAGE D´ACCUEIL SELON L´HEURE

//TODO 7-1 CREER LA FONCTION getMoment()
//ELLE RETOURNE LE MOMENT DE LA JOURNEE EN FONCTION DE L´HEURE

function getMoment(){
    const heure = new Date().getHours(); //0-23

    if (heure >= 6 && heure < 12){
        return "matin" ;
    }
    else if(heure >= 12 && heure <18){
        return "après midi" ;
    }
    else if(heure >= 18 && heure < 22){
        return "soirée" ;
    }
    else{
        return "nuit" ;
    }
}

//TODO 7-2 :CREER LA FONCTION afficherAccueil

function afficherAccueil(prenom){
    const moment = getMoment();
    const heure = new Date().getHours();
    //choisir la salutation selon le moment

    let salutation
    if (moment === "matin") salutation = "Bonjour";
    else if(moment === "nuit") salutation = "Bonne nuit";  
    else salutation = "Bonsoir";
    
    //afficher le message
    console.log(salutation + " " + "!");
    console.log("Il est " + heure + "h- bon(ne)" + moment +"!");
}

//TODO 7-3:APPELLE afficherAccueil() au chargement
//Utilise la variable prenom de EX.2
afficherAccueil(prenom);