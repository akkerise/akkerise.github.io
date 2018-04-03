
// Array Object
function NumberObject(number) {
  this.number = number;
  
  this.isOdd = function() {
    if (this.number % 2 !== 0)
      return true;
    return false;
  }
  
  this.divisibleByThree = function() {
    if (this.number % 3 === 0)
      return true;
    return false;
  }
  
  this.getNumber = function() {
    return this.number;
  }
}

var numbersArr = [
  new NumberObject(0),
  new NumberObject(1),
  new NumberObject(2),
  new NumberObject(3),
  new NumberObject(4),
  new NumberObject(5),
  new NumberObject(6),
  new NumberObject(7),
  new NumberObject(8),
  new NumberObject(9),
];
console.log(numbersArr);

var odds = [];
var evens = [];
var numbersDivisibleByThree = [];

numbersArr.map(function(value) {
  if (value.isOdd()) {
    odds.push(value.getNumber());
  } else if (!value.isOdd()) {
    evens.push(value.getNumber());
  }
  
  if (value.getNumber() !== 0 && value.divisibleByThree()) {
    numbersDivisibleByThree.push(value.getNumber());
  }
});

// console.log('-------Số lẻ-------');
// console.log(odds);
// console.log('-------Số chẵn-------');
// console.log(evens);
// console.log('-------Số chia hết cho 3-------');
// console.log(numbersDivisibleByThree);



