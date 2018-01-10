(function(){
    'use strict';
    var myObject = {
        myProperty: 1,
        init: function() {
            return this.myProperty;
        }
    }
    console.log(myObject.init());

    // O objeto this usado dentro de função aponta para o objeto global Window;
    function MyFunction() {
        return this;
    }
    console.log(MyFunction());

    var myName = "Valdir";
    console.log(myName);

    
})();