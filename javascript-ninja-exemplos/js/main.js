(function(win, doc) {
    'use strict;'

    function myFunction() {
        return this.lastName;
    }

    var roger = {
        name: 'Roger',
        lastName: 'Melo'
    };

    console.log(myFunction.call(roger));

}(window, document));
