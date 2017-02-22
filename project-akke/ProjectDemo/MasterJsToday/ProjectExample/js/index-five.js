var teacher = {
  firstName: "Kim",
  lastName: "Dung",
  age: 30,
  say: function(){
    aboutMe(this.firstName, this.lastName, this.age);
  },
}
var student = {
  firstName: "Thanh",
  lastName: "Nguyen",
  age: 28,
  say: function(){},
}
var parent = {
  firstName: "AkKe",
  lastName: "John",
  age: 50,
  say: function(){},
}
function aboutMe(firstName,lastName,age){
  console.log("Xin Chao . Ten toi la : " + firstName + " " + lastName + " . Nam nay toi " + age);
}
