function executeThisCodeAfterFileLoads2(){
	var data = JSON.parse(this.responseText);
	var dogArray = data.dogs
	console.log("dogs", dogArray);
}

function executeThisCodeIfFileErrors2(){
	console.log("Shit Broke");
}

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors2);
myRequest2.open("GET", "dogs.json");
myRequest2.send();