new Vue({
	el: "#app",
  data: {
  	link: "http://www.google.com",
    title: "Hello World!",
    finishedLink: '<a href="http://google.com">Google.com</a>',
    counter: 0,
      x: 0,
      y: 0
  },
  methods: {
  	sayHello: function(){
    	this.title = "Hello";
    	return this.title;
    },
    changeTitle: function(e){
    	this.title = e.target.value;
    },
    increase: function(step , event){
    	this.counter += 2;
    },
      updateCoordinates: function (event) {
         this.x = event.clientX;
         this.y = event.clientY;
      },
      dummy: function(event){
        event.stopPropagation();
      }
  }
});