const creer_liste_input = document.getElementById("créer_liste");

/**
 * Fonction associée au click
 */
function clickSurAjouter() {
    console.log("clickSurAjouter");
    
    if (creer_liste_input.value.trim() === "") {
        alert ("Tu dois avoir quelque chose à faire !");
    } else {
        ajouterElementALaListe(creer_liste_input.value);
    }

    creer_liste_input.value = "";
}


const addButton = document.getElementById("Ajouter");
addButton.addEventListener('click', clickSurAjouter);

const liste = document.getElementById("liste");

/**
 * 
 * @param {string} element 
 */
function ajouterElementALaListe(element) {
    console.log("ajouterElementALaListe: "+element);
    
    let numOflis = document.querySelectorAll("li").length;
    
    const newtask = document.createElement("li");
    newtask.innerHTML += "<br><input type=checkbox id=checkbox"+ numOflis +"><text id=text"+ numOflis +">"+element+"</text>" ; 
    
    const taskButton = document.createElement('button');
    taskButton.innerHTML = "<img src='trash.png'>";

    taskButton.addEventListener('click', () => {
      const result = confirm("voulez vous supprimer cette tâche ?");
      if (result === true) {
        liste.removeChild(newtask);
      }
    });

    newtask.appendChild(taskButton);
    liste.appendChild(newtask);

    const otherCheckbox = document.querySelector(`#checkbox${numOflis}`);
    const otherText = document.querySelector(`#text${numOflis}`);
   
    otherCheckbox.addEventListener("change", () => {
      if (! otherCheckbox.checked) {
        otherText.style.textDecoration ="none";
        otherText.style.color = "darkblue";
      } else {
        otherText.style.textDecoration ="line-through";
        otherText.style.color = "dimgray";
      }
    });
}
