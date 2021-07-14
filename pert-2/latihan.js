const animals = [
    { name: "Fluffy", species: "cat" },
    { name: "Carlo", species: "dog" },
    { name: "Nemo", species: "fish" },
    { name: "Hamilton", species: "dog" },
    { name: "Dory", species: "fish" },
    { name: "Ursa", species: "cat" }
];

// tambah satu data 
let row = {name: "Marlin", species: "fish"}
animals.push(row);
console.log(animals)

// filtering animal selain fish

// let fish = animals.filter(a => a.species === "fish")
let notNemo = animals.filter(a => a.name !== "Nemo" && a.species ==="fish");
console.log("selain nemo", notNemo);