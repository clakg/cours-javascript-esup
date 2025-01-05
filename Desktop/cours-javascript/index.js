// SELECTEURS

// 1 - exemple de selecteur avec modification de style
// document.querySelector("h4").style.background = "yellow";

// 2 - cloisonner un élément du DOM dans une variable
// const baliseTitreH4 = document.querySelector("h4");

// 3 - EVENT SUR LE CLICK ou click event qu'on a nommé onClick qui est une classe donc .onClick dans le pointage.
// Il est bon, pour commencer de logger la variable
// const questionContainer = document.querySelector(".onClick");
//console.log(questionContainer);

// 4 - exemple de modification du style
// questionContainer.style.borderRadius = "25px";

// 5 - AUTRE METHODE "addEventListener" POUR SELECTION: 
// la méthode prend 2 PARAMETRES (l'événement/l'action, la fonction)
// questionContainer.addEventListener("click", () => {
//     console.log("j'ai cliqué");
//     questionContainer.style.borderRadius = "25px";
// })

// 6 - Pour éviter de lister plusieurs ligne de style avec addEventListener :
// on crée un style dans le fichier style.css pour une nouvelle classe : questionOnClick
// questionContainer.addEventListener("click", () => {
// add ne permet pas de revenir à l'affichage d'origine, on va donc utiliser "toggle"
// questionContainer.classList.add("questionOnClick");
// questionContainer.classList.toggle("questionOnClick");
// })

// 7 - Déclaration d'une variable et on cible les boutons pour y ajouter un événement au clic
const questionContainer = document.querySelector(".onClick");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

console.log(questionContainer, btn1, btn2);

questionContainer.addEventListener("click", () => {
    console.log("method 1 sur la boite contenant le quizz");
    questionContainer.classList.toggle("questionOnClick");
})

// btn1.addEventListener("click", () => {
//     console.log("method 2 sur le bouton à l'id btn-1");
//     response.style.visibility = "visible";
//     response.style.background = "green";
// })

// btn2.addEventListener("click", () => {
//     console.log("method 3 sur le bouton à l'id btn-2");
//     response.style.visibility = "visible";
//     response.style.background = "red";
// })

// OU AVEC UN STYLE nommé .showResponse
btn1.addEventListener("click", () => {
    console.log("method 2 sur le bouton à l'id btn-1");
    // response.classList.add("showResponse")
    response.classList.toggle("showResponse")
    response.style.background = "green";
})

btn2.addEventListener("click", () => {
    console.log("method 3 sur le bouton à l'id btn-2");
    // response.classList.add("showResponse")
    response.classList.toggle("showResponse")
    response.style.background = "red";
})


//------------------------------------------------------
// 8 - EVENT MOUSE MOVE

const mouseMove = document.querySelector(".onMouseMove");
//console.log("log de la variable mouseMove");

// e => données de l'événement qu'on logge
window.addEventListener("mousemove", (e) => {
    console.log("log de la variable mouseMove 2");
    // console.log(e);
    // console.log(e.target);
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
})

window.addEventListener("mousedown", () => {
    mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener("mouseup", () => {
    mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
    mouseMove.style.border = "2px solid black";
})

