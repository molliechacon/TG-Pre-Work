let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
//let secretMessage = animals.map(function(animalType) {
//  return animalType[0];
//});

//Refactored to an arrow function
let secretMessage = animals.map(animalType => animalType[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
//let smallNumbers = bigNumbers.map(function(bigNum) {
//  return bigNum / 100;
//});

//Refactored to an arrow function
let smallNumbers = bigNumbers.map(bigNum => bigNum / 100);

console.log(smallNumbers);

