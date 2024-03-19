//Tag
let people = [
    {name: "Dorian", surname:"Poleni", age: "34", place: "Bergamo", img: "https://picsum.photos/200"},
    {name: "Dorian", surname:"Poleni", age: "34", place: "Bergamo", img: "https://picsum.photos/200"},
];


people.forEach(person => {
    
    let personCard = document.createElement("div");
    
    personCard.classList.add("col-4");
    
    personCard.innerHTML = `<div class="card">
                                <img src="${person.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title" id="personName">${person.name}</h5>
                                    <p class="card-text" >${person.place}</p>
                                    <a href="#" class="btn btn-primary">info</a>
                                </div>
                            </div>`
    
    let cardContainer = document.querySelector("#cardContainer");
    
    cardContainer.appendChild(personCard);
    
    // console.log(personCard)
});



