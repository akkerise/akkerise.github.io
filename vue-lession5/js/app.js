/**
 * Created by akke on 5/10/17.
 */
var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'The VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
        },
        updateTitle: function(title){
            this.title = title;
        }
    },
    computed: {

    },
    watch: {
        title: function (value) {
            alert('New text updated : ' + value);
        }
    }
});

vm1.newProp = 'New!';
console.log(vm1.$data.title);

setTimeout(function () {
    vm1.title = 'Changed by Time';
    vm1.show();
},3000);

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The second Instance',
        // showParagraph: true,
    },
    methods: {
        onChange: function () {
            vm1.title = 'Changed!';
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.lowercaseTitle();
        }
    },
    watch: {

    }
});