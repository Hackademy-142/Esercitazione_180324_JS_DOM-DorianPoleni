//Tag Declaration
let buttonHide = document.querySelector("#buttonHide");
let buttonChangeColors = document.querySelector("#buttonChangeColors");
let buttonMakeBold = document.querySelector("#buttonMakeBold");
let p = document.querySelectorAll("p");

//Main

//ButtonHide
buttonHide.addEventListener("click", ()=> {
    p.forEach( p => {
        // p.classList.toggle("d-none"); //toglie l'elemento
        p.classList.toggle("opacity-0"); //toglie solo la visibilità al testo
    })
})

//ButtonChangeColor

buttonChangeColors.addEventListener("click", () => {
    p.forEach( (p) => {
        p.style.color = getRandomColorHex();
        // p.style.color = `rgb(${r},${g},${b})`; 
    })
});

//buttonMakeBold
buttonMakeBold.addEventListener("click", () => {
    p.forEach( (p) => {
        // p.style.fontWeight = "bold"; 
        p.classList.toggle("fw-bold");
    })
})


//Functions declaration

function getRandomColorHex() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    console.log(getRandomColorHex());
}