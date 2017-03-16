new Vue({
	el: "#app",
  data: {
  	link: "http://www.google.com",
    title: "Hello World!",
    finishedLink: '<a href="http://google.com">Google.com</a>',
    counter: 0,
    x: 0,
    y: 0,
    name: 'Thanh'
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
  },

}
});

new Vue({
  el: '#id2',
  data: function(){
      return {
          counter: 0,
          secondCounter: 0,
          tt: 'http://www.gem.com'
      }
  },
  computed: {
    output: function(){
      console.log('Computed')
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  },
    watch: {
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            },2000);
        }
    },
  methods: {
    increase: function(){
      this.counter++;
      this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    decrease: function(){
      this.counter--;
      this.result = this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
    result: function() {
      console.log('Methods');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    },
    gem: function(){
        this.tt = 'http://www.ccc.com';
    }
  }
});