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


// use strict - 93
(function() {
    'use strict';
    var myName = 'Fernando Daciuk';
    console.log(myName);
})();
// console.log(myName);


// use strict, with - 94
(function () {

    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    };

    console.log( obj.prop1.prop2.prop3.prop31 );
    console.log( obj.prop1.prop2.prop3.prop32 );
    console.log( obj.prop1.prop2.prop3.prop33 );

    with ( obj.prop1.prop2.prop3 ) { // with encurta o caminho do objeto
        console.log( prop31, prop32, prop3 );
    }

})();