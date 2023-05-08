// (function () {
//     'use strict';
//     var myName = 'Mario Salles';
//     console.log(myName)
// })()
// console.log(myName);

// (function () {
//     var obj = {
//         prop1: {
//             prop2: {
//                 prop3: {
//                     k1: 'v1',
//                     k2: 'v2',
//                     k3: 'v3'
//                 }
//             }
//         }
//     }
//     console.log(obj.prop1.prop2.prop3);
//     console.log('----------------');
//     with (obj.prop1.prop2.prop3) { // a interpretação devido o use stritct é impedida a partir daqui
//         console.log(k1, k2, k3);
//     }
// })()

// (function () {
//     'use strict';
//     console.log(this);
//     function Person(name, lastName, age) {
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     console.log(new Person('Mario', 'Salles', 43)); // chamada correta
//     console.log( Person('Mario', 'Salles', 43)); // da erro
// })()

(function name(params) {
    'use strict';
    var var1 = 'Teste';
    var obj = {
        k1: 'v1',
        k1: 'v2',
        k3: 'v3'
    };
    console.log('antes do delete', obj);
    console.log(delete obj.k1);
    console.log('apos delete: ', obj);
    console.log('var1: ', var1);
    // console.log('tenta deletar var1', delete var1); // sem o use strict retorna false, com strict nem interpreta
})()
