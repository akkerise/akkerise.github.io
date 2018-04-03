// Constructor pattern
function Phone (os, screenSize, camera) {
    this.os = os;
    this.screenSize = screenSize;
    this.camera = camera;
    this.getFullInfo = function() {
        console.log('This phone run on', this.os, 'with', this.screenSize, 'screen and', this.camera, 'camera');
    }
}
var iphone5 = new Phone('ios', '4-inch', '5MP');
iphone5.getFullInfo(); // This phone run on ios with 4-inch screen and 5MP camera
var iphone6 = new Phone('ios', '4.7-inch', '8MP');
iphone6.getFullInfo(); // This phone run on ios with 4.7-inch screen and 8MP camera


// Prototype pattern
function Phone (os, screenSize, camera) {
    this.os = os;
    this.screenSize = screenSize;
    this.camera = camera;
}
Phone.prototype.salePercentage = '10%';
Phone.prototype.getFullInfo = function() {
    console.log('This phone run on', this.os, 'with', this.screenSize, 'screen and', this.camera, 'camera');
    if (this.salePercentage) {
        console.log('This phone is current under', this.salePercentage, 'sale');
    }
}
var iphone6 = new Phone('ios', '4.7-inch', '8MP');
iphone6.getFullInfo(); 
// This phone run on ios with 4.7-inch screen and 8MP camera
// This phone is current under 10% sale