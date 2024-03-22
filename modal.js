function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
/* const dateNaissance = new Date(annee, mois - 1, jour);
const dateNow = new Date(); */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Ferme la modal
function closeModal() {
  modalbg.style.display = 'none';
}

function validate(event) {

  event.preventDefault()

  let error = "";
  //verification
  //prenom
  if (!new RegExp('^[a-zA-ZÀ-ÿ- ]{2,}$').test(document.getElementById('first').value)) {
    error.setAttribute('data-error-visible', 'true');/// Pour les messages d'erreur il faut utiliser setattribute et le data-error dans le css
    /* error += "Veuillez entrer 2 caractères ou plus pour le champ du prénom."; */
  }
  //nom
  if (!new RegExp('^[a-zA-ZÀ-ÿ\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF-]{2,}$').test(document.getElementById('last').value)) {
    error += "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  //email
  if (!new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+').test(document.getElementById('email').value)) {
    error += "Veuillez entrer un email valide";
  }
  //date de naissance
  if (!new RegExp('^\\d{2}/\\d{2}/\\d{4}$').test(document.getElementById('birthdate').value) /* && dateNaissanceObj <= dateActuelle */) {
    error += "Vous devez entrer votre date de naissance.";
  }

  if (error === "") {
    //affichage
    //prenom
    
    //nom

    //email

    //date naissance

    //Conditions et newsletter
    let checkbox_values = []
    for (let input of document.querySelector('.checkbox2-label')) {
      if (input.type == "checkbox" && input.checked) { checkbox_values.push(input.value) }
    }
    /*Affichage erreur*/
  console.log()
}
else {
  window.alert(error);
}
}

// Ferme la modal au clique en appelant ma fonction closeModal
document.querySelector('.close').addEventListener('click', closeModal);

// Vérification du contenu entré par l'utilisateur                                                                                                                                                                                      
	/* document.querySelector('.btn-submit').addEventListener( (event) => {
    validationForm()
  }) */

/* document.getElementById('').innerHTML = document.getElementById('').value; */

/* function closeModal() {
  modalbg.style.display = "none";
}

let closeModal = document.getElementsByClassName(".close");
modalBtn.forEach((closeModal) => closeModal.addEventListener("click", closeModal)); */
