(function() {

    'use strict';

    var regex = /\d/g;
    var name = 'fer123nando';
    var result;

    while(result = regex.exec(name) !== null) {
        console.log('Resultado:', result);
    }

}());
