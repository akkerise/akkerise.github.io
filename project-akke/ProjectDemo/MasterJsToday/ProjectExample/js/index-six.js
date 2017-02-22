function prototypeFunction(name, age, address, parent) {
    this.iName = name;
    this.iAge = age;
    this.iAddress = address;
    this.iParent = parent;
    this.say = function () {
        return "My name is : " + this.iName + " . I " + this.iAge + " years old ! . " + " I live in " + this.iAddress;
    }
}

var aboutMe = new prototypeFunction("Nguyen Thanh", 26, "Dong Da - Vinh Yen", "Mother");
var aboutFather = new prototypeFunction("Joe Don", 52, "Dong Da - Vinh Yen", "Mother");
prototypeFunction.prototype.dictionary = "English";

function onLoadFunction() {
    document.getElementById("pChanged").innerHTML = aboutFather.dictionary;
}
