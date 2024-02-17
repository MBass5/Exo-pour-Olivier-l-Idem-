
const form = document.getElementById("form");
form.addEventListener("submit", valider);

function valider(event) {
  /* on empêche la page de se rafraichir automatiquement comme elle devrait le faire
       aprés le "submit"  */
  event.preventDefault();

  // On récupére les données entrées par l'utilisteur
  const identifiant = document.querySelector(".identifiant");
  const identifiantValue = identifiant.value;
  const password = document.querySelector(".password");
  const passwordValue = password.value;

  // Si le champs n'est pas rempli, on injecte un message d'erreur dans le UI
  if (identifiantValue === "") {
    document.querySelector(".erreur-identifiant").innerHTML =
      "Champs obligatoire";
    // et de plus, si le champs reste vide le programme stoppe
    return;

    // si le champs est rempli,le message d'erreur précedent est remplacé par une valeur vide
  } else {
    document.querySelector(".erreur-identifiant").innerHTML = "";
  }
  // Même démarche que la condition précédente
  if (passwordValue === "") {
    document.querySelector(".invalid-password").innerHTML =
      "mot de passe obligatoire";
    return;

  } else {
    document.querySelector(".invalid-password").innerHTML = "";
    // On envoie le message de succés à l'utilisateur
    document.getElementById("validation").innerHTML = "Données récupérées!";
    // On demande au programme de retarder l'execution de la fonction -clearForm()
    setTimeout(function () {
      document.getElementById("validation").innerHTML = "";
      clearForm();
    }, 2000);
  }
}


// On efface toutes les données pour retrouver notre formulaire à remplir vierge
function clearForm() {
  document.getElementById("form").reset();
}

