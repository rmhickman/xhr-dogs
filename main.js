//on page load we are sending a request to convert dogs.json
//call helper function that sets up XHR to breeds & passes dogs (getBreedz function)
function executeThisCodeAfterDogsLoads(){
    var dogsData = JSON.parse(this.responseText).dogs;
    getBreedz(dogsData);
}

function executeThisCodeIfDogsErrors(){
    console.log("it brokenz");
}

function executeThisCodeIfBreedsErrors(){
    console.log("it broken");
}

var myDogs = new XMLHttpRequest();
myDogs.addEventListener("load", executeThisCodeAfterDogsLoads);
myDogs.addEventListener("error", executeThisCodeIfDogsErrors);
myDogs.open("GET", "dogs.json");
myDogs.send();


//we put dogz here as a placeholder for whatever is passed above in getBreedz. You could just use dogsData instead of dogz!
function getBreedz(dogz){
    var myBreeds = new XMLHttpRequest();
    myBreeds.addEventListener("load", executeThisCodeAfterBreedsLoads);
    myBreeds.addEventListener("error", executeThisCodeIfBreedsErrors);
    myBreeds.open("GET", "breeds.json");
    myBreeds.send();

    function executeThisCodeAfterBreedsLoads(){
        var breedsData = JSON.parse(this.responseText).breeds;
        combinedArray(dogz, breedsData);
    }
}

//loop through dogs and look at breed_id
    //loop through breeds and find matching breed_id
    //make final price

function combinedArray(dogsArray, breedsArray){
    console.log("dogsArray", dogsArray);
    console.log("breedsArray", breedsArray);
    dogsArray.forEach(function(dog){
        var currentBreedId = dog["breed-id"];
        console.log("dog breed_id", currentBreedId);
        breedsArray.forEach(function(breed){
            if(currentBreedId === breed.id){
                dog["dogBreed"] = breed.name;
                dog["basePrice"] = breed["base-price"];
                dog["description"] = breed.description;
                dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
            }
        });
    });

    console.log("all the dogs", dogsArray);
 
}
