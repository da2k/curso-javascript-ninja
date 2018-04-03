// this - 89
(function() {

    var myObject = {
        myProperty: 1,
        init: function init(){
            return this;
            // aponta para o objeto principal
        }
    };
    console.log('myObject(): ', myObject.init());

    function myFunction() {
        return this;
        // aponta para o objeto do navegador, window
    }
    console.log('myFunction(): ', myFunction());

    function MyConstructor() {
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }
    var constructor = new MyConstructor();
    console.log( 'MyConstructor', constructor );

})();


// Arguments - 90
(function() {

    function myFunction(arg1, arg2) {
        return arguments[0];
    }
    console.log( myFunction(1, 5) );

})();