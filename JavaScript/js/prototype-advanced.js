var str = 'abc'; // str là string, cha nó là String.prototype

// nhân đôi chuỗi đưa vào
String.prototype.duplicate = function() {return this + this}

console.log(str.duplicate()); // Tìm thấy hàm duplicate trong prototype



// Use Prototype for extends
function Person() {
  this.firstName = 'Per';
  this.lastName = 'son';
  this.sayName = function() { return this.firstName + ' ' + this.lastName };
}
Person.prototype.sayHello = function() {
	return this.firstName;
}

// Viết một Constructor Function khác
function SuperMan(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Ta muốn SuperMan sẽ kế thừa các thuộc tính của Person
// Sử dụng prototype để kế thừa
SuperMan.prototype = new Person();

// Tạo một object mới bằng Constructor Function 
var sm = new SuperMan('Hoang', 'Pham');
sm.sayName(); // Hoang Pham. Hàm này kế thừa từ prototype của Person