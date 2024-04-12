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
  //Fermeture de la modal
  modalbg.style.display = 'none';

  //Réaffichage du formulaire de base et on cache le message de remerciement
  document.getElementById('form_submit_message').style.display = 'block';
  const thanksMessageDiv = document.getElementById('message_successfully');
  thanksMessageDiv.style.display = 'none';
}

//Nettoyage des messages d'erreurs formulaire
function clearErrorMessage(element) {
  element.parentElement.setAttribute('data-error-visible', 'false');
  element.parentElement.setAttribute('data-error', '');
}

//Cacher contenu du formulaire si tout est bon lorsque l'utilisateur submit
function hideContentForm() {
  //Masquer le formulaire
  document.getElementById('form_submit_message').style.display = 'none';

  //Affichage du message de remerciement
  const thanksMessageDiv = document.getElementById('message_successfully');
  thanksMessageDiv.style.display = 'block';
  thanksMessageDiv.textContent = "Merci ! Votre réservation a été reçue.";
  thanksMessageDiv.style.marginTop = '300px'; 

  //Création du bouton
  const btnCloseSucces = document.createElement('button');

  //Ajout d'un id
  btnCloseSucces.id = 'btn_successfully';

  //Texte du bouton
  btnCloseSucces.textContent = 'Fermer';

  //Ajout d'une marge en hauteur de 300px au bouton
  btnCloseSucces.style.marginTop = '300px';

  //Ajout d'un évènement pour fermer ma modale
  btnCloseSucces.addEventListener('click', function() {
    closeModal()
  });

  //Ajout du bouton à un élément parent existant dans le DOM
  const container = document.getElementById('message_successfully'); // Remplacez 'container' par l'ID de l'élément parent où vous voulez ajouter le bouton
  container.appendChild(btnCloseSucces);
  }

//Paramètres lors du submit de l'utilisateur
function validate(event) {

  event.preventDefault()

  let verifications = true;

  //verification
  const eltfirstName = document.getElementById('first');
  const eltlastName = document.getElementById('last');
  const eltEmail = document.getElementById('email');
  const testEspacefirstName = eltfirstName.value.trim();
  const testEspacelastName = eltlastName.value.trim();
  const testEspaceEmail = eltEmail.value.trim();

  //Vérification si le prénom est rentré
  if (testEspacefirstName === "" || testEspacefirstName.length < 2) {
    eltfirstName.parentElement.setAttribute('data-error-visible', 'true');
    eltfirstName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    verifications = false;
  //Vérification si la saisie du prénom est correct
  } else if (!testEspacefirstName.match(/^[a-zA-ZÀ-ÿ- ]{2,}$/)) {
    eltfirstName.parentElement.setAttribute('data-error-visible', 'true');
    eltfirstName.parentElement.setAttribute('data-error', 'Veuillez entrer un prénom valide (pas de caractères spéciaux).');
    verifications = false;
  } else {
    clearErrorMessage(eltfirstName);
  }

  //Vérification si le nom est rentré
  if (testEspacelastName === "" || testEspacelastName.length < 2) {  
    eltlastName.parentElement.setAttribute('data-error-visible', 'true');
    eltlastName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    verifications = false;
  //Vérification si la saisie du nom est correct
  } else if (!testEspacelastName.match(/^[a-zA-ZÀ-ÿ- ]{2,}$/)) {
    eltlastName.parentElement.setAttribute('data-error-visible', 'true');
    eltlastName.parentElement.setAttribute('data-error', 'Veuillez entrer un nom valide (pas de caractères spéciaux).');
    verifications = false;
  } else {
    clearErrorMessage(eltlastName);
  }

  //Vérification si l'email est rentré et correct
  if (!testEspaceEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    eltEmail.parentElement.setAttribute('data-error-visible', 'true');
    eltEmail.parentElement.setAttribute('data-error', 'Veuillez entrer un email valide.')
    verifications = false;
  } else {
    clearErrorMessage(eltEmail)
  }

  //Date de naissance
  const eltBirthdate = document.getElementById('birthdate');
  const birthdateValue = eltBirthdate.value;
  
  //Vérification si la date de naissance est rentrée
  if (!birthdateValue) {
    eltBirthdate.parentElement.setAttribute('data-error-visible', 'true');
    eltBirthdate.parentElement.setAttribute('data-error', 'Vous devez entrer votre date de naissance.');
    verifications = false;
  } else {
    //Convertir la date de naissance en objet Date
    const birthdate = new Date(birthdateValue);

    if (birthdate.getFullYear() < 1900) {
      eltBirthdate.parentElement.setAttribute('data-error-visible', 'true');
      eltBirthdate.parentElement.setAttribute('data-error', "Vous remplissez ce formulaire depuis l'au-delà ?");
      verifications = false;
    } else {
    //Obtenir la date actuelle
    const currentDate = new Date();
    //Calcul de la date il y a 13 ans
    const thirteenYears = new Date(currentDate.getFullYear() - 13, currentDate.getMonth(), currentDate.getDate());
    
    //Vérifier si l'utilisateur a 13 ans ou plus
    if (birthdate <= thirteenYears) {
      //L'utilisateur a 13 ans ou plus
      clearErrorMessage(eltBirthdate);
    } else {
      //L'utilisateur a moins de 13 ans
      eltBirthdate.parentElement.setAttribute('data-error-visible', 'true');
      eltBirthdate.parentElement.setAttribute('data-error', 'Vous devez avoir au moins 13 ans pour vous inscrire.');
      verifications = false;
    }
  }
}

  //Vérification si le nombre de tournoi est rentré
  const eltTournament = document.getElementById('quantity');
  const tournamentValue = parseInt(eltTournament.value);
  if (isNaN(tournamentValue) || tournamentValue < 0 || tournamentValue > 99) {
    eltTournament.parentElement.setAttribute('data-error-visible', 'true');
    eltTournament.parentElement.setAttribute('data-error', 'Veuillez renseigner un nombre de tournoi entre 0 et 99.');
    verifications = false;
  } else {
    clearErrorMessage(eltTournament)
  }

  //Vérification si un des boutons radio est coché
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
      radioButton.parentElement.setAttribute('data-error', 'Vous devez choisir une option.');
      verifications = false;
    });
  } else {
    radioLocations.forEach(function(radioButton) {
      clearErrorMessage(radioButton)
    });
}

 //Vérification si les conditions d'utilisation sont cochés
 const btnCgu = document.getElementById('checkbox1');
 let cguChecked = false;
 if (btnCgu.checked) {
  cguChecked = true;
 }

 if (!cguChecked) {
  btnCgu.parentElement.setAttribute('data-error-visible', 'true');
  btnCgu.parentElement.setAttribute('data-error', "Vous devez vérifier que vous acceptez les termes et conditions.");
  verifications = false;
 } else {
  clearErrorMessage(btnCgu)
 }

 //Lancement de la fonction pour afficher le message de remerciement
 if (verifications) {
  hideContentForm();
}
}

//Ferme la modal au clique en appelant ma fonction closeModal
document.querySelector('.close').addEventListener('click', closeModal);