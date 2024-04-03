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
  document.querySelector('form').reset(); //reset des éléments rentrés par l'utilisateur lors de la fermeture de la modal
  //reset des messages d'erreur lors de la fermeture de la modal
  const dataErrors = document.querySelectorAll('.formData');
  dataErrors.forEach((dataErrors) => {
    dataErrors.setAttribute('data-error-visible', 'false');
    dataErrors.setAttribute('data-error', '');
  });
  modalbg.style.display = 'none';
}

//Nettoyage des messages d'erreurs formulaire
function clearErrorMesssage() {

}

function validate(event) {

  event.preventDefault()

  let error = "";
  //verification
  const eltfirstName = document.getElementById('first');
  const eltlastName = document.getElementById('last');
  const eltEmail = document.getElementById('email');
  const testEspacefirstName = eltfirstName.value.trim();
  const testEspacelastName = eltlastName.value.trim();
  const testEspaceEmail = eltEmail.value.trim();
  //prenom
  if (!new RegExp('^[a-zA-ZÀ-ÿ- ]{2,}$').test(testEspacefirstName)) {
    eltfirstName.parentElement.setAttribute('data-error-visible', 'true');
    eltfirstName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.')
    /* error += "Veuillez entrer 2 caractères ou plus pour le champ du prénom."; */
  } else {
    eltfirstName.parentElement.setAttribute('data-error-visible', 'false');
    eltfirstName.parentElement.setAttribute('data-error', '')
  }
  //nom
  if (!new RegExp('^[a-zA-ZÀ-ÿ- ]{2,}$').test(testEspacelastName)) {
    eltlastName.parentElement.setAttribute('data-error-visible', 'true');
    eltlastName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
    /* error += "Veuillez entrer 2 caractères ou plus pour le champ du nom."; */
  } else {
    eltlastName.parentElement.setAttribute('data-error-visible', 'false');
    eltlastName.parentElement.setAttribute('data-error', '')
  }
  //email
  if (!new RegExp('[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+').test(testEspaceEmail)) {
    eltEmail.parentElement.setAttribute('data-error-visible', 'true');
    eltEmail.parentElement.setAttribute('data-error', 'Veuillez entrer un email valide.')
    /* error += "Veuillez entrer un email valide"; */
  } else {
    eltEmail.parentElement.setAttribute('data-error-visible', 'false');
    eltEmail.parentElement.setAttribute('data-error', '')
  }
  //date de naissance
  if (!new RegExp('^\\d{2}/\\d{2}/\\d{4}$').test(document.getElementById('birthdate').value) /* && dateNaissanceObj <= dateActuelle */) {
    /* error += "Vous devez entrer votre date de naissance."; */
  }
  //Choix boutons radio
  const radioLocations = document.querySelectorAll('input[type=radio][name="location"]');
  let isChecked = false;

  radioLocations.forEach(function(radioButton) {
    if (radioButton.checked) {
      isChecked = true;
    }
  });

  if (!isChecked) {
    radioLocations.forEach(function(radioButton) {
      radioButton.parentElement.setAttribute('data-error-visible', 'true');
      radioButton.parentElement.setAttribute('data-error', 'Veuillez sélectionner un tournoi.');
    });
  } else {
    radioLocations.forEach(function(radioButton) {
      radioButton.parentElement.setAttribute('data-error-visible', 'false');
      radioButton.parentElement.setAttribute('data-error', '');
    });
}
  //Conditions et newsletter
  /* let checkbox_values = []
    for (let input of document.querySelector('.checkbox2-label')) {
      if (input.type == "checkbox" && input.checked) { checkbox_values.push(input.value) }
    } */
}

// Ferme la modal au clique en appelant ma fonction closeModal
document.querySelector('.close').addEventListener('click', closeModal);


/* if (error === "") {
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
  Affichage erreur
console.log()
}
else {
window.alert(error);
} */





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


/* ^[a-zA-ZÀ-ÿ\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF-]{2,}$ */