const creer_liste_input = document.getElementById("créer_liste");
var bin = 0;
function clickSurAjouter() {
    console.log("clickSurAjouter");
    
    if (creer_liste_input.value.trim() === "") {
        alert ("Tu dois avoir quelque chose à faire !");
    } else {
        ajouterElementALaListe(creer_liste_input.value);

        
    }

    creer_liste_input.value = "";

}

const liste = document.getElementById("liste");

function ajouterElementALaListe(element) {
    console.log("ajouterElementALaListe: "+element);
    
    let numOflis = document.querySelectorAll("li").length;
    
    console.log("coucou", numOflis)
    const newtask = document.createElement("li");
    newtask.innerHTML += "<br><li ><input type=checkbox id=checkbox"+ numOflis +"><text id=text"+ numOflis +">"+element+"</text></li>" ; 
    
    const taskButton = document.createElement('button');
    taskButton.innerHTML = "<img src='trash (2) (1).png'>";

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
    
    console.log ("hello world", otherText)
    // otherText.style = "textDecoration : line-throught" ;
   
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

//       const close = document.getElementsByClassName("close");
//       let i = document.getElementsByClassName("close");
//       console.log(close)
//      if (close + onclick) {
//       var bin = 1;
//      } 

// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     console.log("cookie")
//     var li = this.parentElement;
  

//   if (bin == 1) {
//     console.log(bin)
//     var numOflis = numOflis;
//     document.("text"+numOflis);
// }

//   }
// }












































































































































    
//           const button = document.querySelector("supprimerelementliste");
// if (onclick("supprimerelementliste")) {
//   button.remove(getElementById("text")+numOflis)
// } 




const addButton = document.getElementById("Ajouter");

addButton.addEventListener('click', clickSurAjouter);




// style.textDecoration = "none|underline|overline|line-through|blink|initial|inherit"             