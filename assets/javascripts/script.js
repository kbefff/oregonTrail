/*JavaScript*/
(function() {


function Traveler(name, amount, isHealthy){
  this.name = name;
  this.amount = amount;
  this.isHealthy = isHealthy;
}
function Wagon(passengers, capacity){
  this.passengers = passengers;
  this.capacity = capacity;
}
////////////////////////////////////////////////////////////////////////

function makeTraveler(name) {
  return new Traveler(name, randomNumber(1, 100), true)
}
function makeWagon(capacity){
  return new Wagon([], capacity)
}
////////////////////////////////////////////////////////////////////////


function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function trueorfalse(isHealthy){
//   // if ((Math.floor((Math.random()) * 2)) == 0){
//   //   return true
//   // } else {
//   //   return false
//   // }
//   return ((Math.floor((Math.random()) * 2)) == 0)
// }
////////////////////////////////////////////////////////////////////////


function hunt(traveler) {
  if ((Math.floor((Math.random()) * 2)) == 0){
    return traveler.amount + 100
  } else {
    return traveler.amount
  }
}

function eat(traveler) {
  if(traveler.amount > 20){
    return traveler.amount - 20
  } else {
    return traveler.isHealthy = false
  }
}

function join(wagon, traveler){
  if(wagon.passengers.length < wagon.capacity){
    wagon.passengers.push(traveler);
    return "passenger added";
  }else{
    return "not added";
  }
}

function quarantine(wagon) {
  // wagon.passengers.forEach(function(passenger) {
  for (let passenger of wagon.passengers){
    if(!passenger.isHealthy){
      return true
    }
  }

  return false

}


function food(wagon){
  allFood = 0;
    for (var i = 0; i < wagon.passengers.length; i++) {
      allFood = allFood + wagon.passengers[i].amount;
    }
    return allFood
      }



////////////////////////////////////////////////////////////////////////


let traveler = makeTraveler('Henrietta');
let traveler2 = makeTraveler('Juan');



//
// for (let traveler of travelers) {
//   console.log(traveler.name + " has " + traveler.amount + " apples. It is " + traveler.isHealthy + " that this is a healthy traveler.")
// }



let wagon = makeWagon(5);
console.log(wagon)

//
//
// let wagons = [wagon1, wagon2]
//
// for (let wagon of wagons) {
//   console.log("A wagon with passengers "+ wagon.passengers.length + " has a capacity of " + wagon.capacity)
// }

//
//
//
//
// console.log(hunt(traveler)); // maybe get more food
// console.log(eat(traveler2));
// console.log(eat(traveler2)); // juan is hungry
console.log(join(wagon, traveler));
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon));






//
// console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
// console.log(food(wagon)); // print juan's food + henrietta's food
//
// console.log(hunt(traveler))


})();
//
//
//
