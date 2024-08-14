var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler {
  constructor(arr) {
    this.pets = arr
  }

  findPetsInAgeRange(minAge, maxAge){
    return pets.filter(pet => pet.age >= minAge && pet.age <= maxAge);
  }

  listAdoptedPetsByDate(){
    return pets.filter(pet => pet.adopted === true)
      .sort((a, b) => new Date(b.adoptedDate) - new Date(a.adoptedDate));
  }

  ListPets(){
    function createPetItem(pet) {
      let petString = `${pet.name} | ${pet.species} | Age: ${pet.age}`;
      if (pet.adopted) {
        petString += " | Adopted!";
      }
      return petString;
    }
  
    let petsToReturn;
  
    if (arguments.length === 0) {      
      // No arguments provided, use the member variable
      petsToReturn = this.pets;
    }
    else {
      if(arguments.length === 1 && Array.isArray(arguments[0])) {
        // Single array argument provided
        petsToReturn = arguments[0];
      } 
      else {
        // Multiple object arguments provided
        petsToReturn = Array.prototype.slice.apply(arguments);
      }

    }
  
    return petsToReturn.map(createPetItem);
  }

  calculateUniqueAdoptionFee(petNames){

    var petsNamesArr = Array.prototype.slice.apply(arguments);
    
    var uniquePetNames = petsNamesArr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    
    // // Step 2: Find the matching pets
    const selectedPets = pets.filter(pet => uniquePetNames.includes(pet.name));
    
    const totalAdoptionFee = selectedPets.reduce((accumulator, pet) => {
      return accumulator + pet.adoptionFee;
    }, 0);

    return totalAdoptionFee;
  }
}

var pHandler = new PetHandler(pets);
console.log("findPetsInAgeRange: ", pHandler.findPetsInAgeRange(1,5));
console.log("listAdoptedPetsByDate", pHandler.listAdoptedPetsByDate());
console.log("ListPets: ", pHandler.ListPets({ name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },{ name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 }));
console.log("calculateUniqueAdoptionFee: ", pHandler.calculateUniqueAdoptionFee("Buddy",  "Coco",  "10",  "true",  "Buddy",  "735"));
// console.log(pHandler.ListPets());

