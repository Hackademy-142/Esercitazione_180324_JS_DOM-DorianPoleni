//Tag
let insertButton = document.querySelector("#insertButton");
let deleteButton = document.querySelector("#deleteButton");
let inputName = document.querySelector("#inputName");
let InputSurname = document.querySelector("#inputSurname");
let cardContainer = document.querySelector("#cardContainer");
let deleteCard = document.querySelector("#deleteCard");

let people = [
    {name: "Dorian", surname:"Poleni", age: "34", place: "Bergamo", img: "https://picsum.photos/200"},
    {name: "Franco", surname:"Battiato", age: "35", place: "Ionia", img: "https://picsum.photos/201"}
];









//Main Program


checkPeopleEmpty(people);
createCard(people);

insertButton.addEventListener("click", () => {
    addPerson(people);
    console.log(people);
    createCard(people);
    checkPeopleEmpty(people);
    
});


//Delete Button

deleteButton.addEventListener("click", () => {
    // let filterName = "Franco"
    deletePeople(people, inputName.value );
    // console.log( inputName.value);

})


//Functions Declaration
function createCard(people){
    
    //clean the container from cards
    cardContainer.innerHTML ="";
    
    people.forEach(person => {

        let personCard = document.createElement("div");
            
        personCard.classList.add("col-4");
        
        personCard.innerHTML = `<div class="card">
                                    <img src="${person.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title" id="personName">${person.name} ${person.surname}</h5>
                                    <p class="card-text" >${person.place}</p>
                                    <p class="card-text" >${person.age}</p>
                                    <a href="#" class="btn btn-info">Delete</a>
                                    </div>
                                </div>`
        
        cardContainer.appendChild(personCard);
    
    });
}

function addPerson(people){
    people.push({name: inputName.value, surname: InputSurname.value, age: "34", place: "Bergamo", img: "https://picsum.photos/200"});
}

function checkPeopleEmpty(people){
    if (people.length > 0) {
        deleteButton.classList.remove("d-none");
    }else{
        deleteButton.classList.add("d-none");
    }
}

function deletePeople(people,filter){


    people.splice(people.findIndex(person => person.name === filter) , 1);
   console.log(people);
    }
