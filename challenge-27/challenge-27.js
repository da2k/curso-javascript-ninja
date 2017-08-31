/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
(function(win, doc){
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);

    this.isArray = function isArray(){
      return 'olá';
    }

  }

  var DOM = new DOM();



  console.log( 'elementos',  DOM.element );
  console.log(  DOM.isArray() );



  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.call(this.element, arguments);
  }



  var $a = new DOM('[data-js="link"]');

  $a.on('click', function (e) {
    e.preventDefault();
    console.log('clicou');
  });

  $a.forEach(function(element, index){
    console.log('implementando o forEach', element, index);
    console.log(element.firstElement);
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);


})(window, document)




