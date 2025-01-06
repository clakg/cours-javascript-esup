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

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "black";
})

response.addEventListener("mouseover", () => {
    response.style.transform = "scale(2)";
})

response.addEventListener("mouseleave", () => {
    response.style.transform = "scale(1)";
})

//------------------------------------------------------
// 9 - KEY PRESS EVENT

const keyPressContainer = document.querySelector(".onKeyPress");
const keyPressSpan = document.getElementById("onKeyPressSpan");

document.addEventListener("keypress", (e) => {
    //console.log(e);
    //console.log(e.key);
    keyPressSpan.textContent = e.key;

    if (e.key === "a") {
        keyPressContainer.style.background = "green"
    } else if (e.key === "z") {
        keyPressContainer.style.background = "pink"
    } else {
        keyPressContainer.style.background = "blue"
    }
})

// ------------------------------------------------------
// 10 - SCROLL EVENT

// on peut laisser la navbar apparente mais on va la faire apparaitre quand on aura scrollé un minimum de pixel

const nav = document.querySelector("nav");
const box1 = document.querySelector(".box1")

window.addEventListener("scroll", () => {
    //console.log("test");
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        nav.style.top = "-50px"
        box1.style.marginTop = "0px"
    } else {
        nav.style.top = "0px"
        box1.style.marginTop = "50px"
    }
})

// ------------------------------------------------------
// 11 - FORM EVENT

// event sur un input

const inputName = document.querySelector('input[type="text"]');
const inputSelect = document.querySelector("select");
const form = document.querySelector("form")
let typedText = "";
let townSelect = ""

inputName.addEventListener("input", (e) => {
    // console.log("test");
    // console.log(e.target.value);
    typedText = e.target.value;
    //console.log(typedText);
})

inputSelect.addEventListener("input", (e) => {
    // console.log("test select");
    //console.log(e.target.value);
    townSelect = e.target.value;
    //console.log(townSelect);
})

form.addEventListener("submit", (e) => {
    // si on n'ajotue pas e.preventDefault(), on recharge la page et rien ne sera sauvegardé
    e.preventDefault()
    console.log("test submit");

    // si le checkbox n'est pas coché, le formulaire ne se valide pas
    console.log(RGPD.checked);

    if (RGPD.checked) {
        // si checked, on met le contenu du formulaire
        document.querySelector("form > div").innerHTML = `
        <h4>Ville écrite : ${typedText}</h4>
        <h4>Ville sélectionnée : ${townSelect}</h4>
        `
    } else {
        // sinon, alert
        alert("Veuillez cocher et accepter les RGPD")
    }
})

// ------------------------------------------------------
// 12 - LOAD EVENT

window.addEventListener("load", () => {
    console.log("Document chargé");
    alert("Document chargé !!!")
})