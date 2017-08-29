function executeThisCodeAfterFileLoads2(){
	var data = JSON.parse(this.responseText);
	var dogArray = data.dogs
	console.log("dogs", dogArray);
}

function executeThisCodeAfterFileLoads3(){
	var data = JSON.parse(this.responseText);
	var breedsArray = data.breeds
	console.log("breeds", breedsArray);
}

function executeThisCodeIfFileErrors2(){
	console.log("Shit Broke");
}

function executeThisCodeIfFileErrors3(){
	console.log("Shit Broke");
}

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors2);
myRequest2.open("GET", "dogs.json");
myRequest2.send();

var myRequest3 = new XMLHttpRequest();
myRequest3.addEventListener("load", executeThisCodeAfterFileLoads3);
myRequest3.addEventListener("error", executeThisCodeIfFileErrors3);
myRequest3.open("GET", "breeds.json");
myRequest3.send();