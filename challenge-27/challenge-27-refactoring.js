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
  }


  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  }

  DOM.prototype.isArray = function isArray( param ){
    return Object.prototype.toString.call( param ) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject( param ){
    return Object.prototype.toString.call( param ) === '[object Object]';
  }

  DOM.prototype.isFunction = function isFunction( param ){
    return Object.prototype.toString.call( param ) === '[object Function]';
  }

  DOM.prototype.isNumber = function isNumber( param ){
    return Object.prototype.toString.call( param ) === '[object Number]';
  }

  DOM.prototype.isString = function isString( param ){
    return Object.prototype.toString.call( param ) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean( param ){
    return Object.prototype.toString.call( param ) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull( param ){
    return Object.prototype.toString.call(param) === '[object Null]' ||
      Object.prototype.toString.call(param) === '[object Undefined]';
  }


  function checkValueObject( param ){
    var listType = ['Array', 'Object', 'Function', 'Number', 'String', 'Boolean', 'Null', 'Undefined'];


    var letterIntial = param.split('').slice(0,1).join().toUpperCase();
    var remainingValue = param.slice(1).split('').join('');
    var valueParam = letterIntial + remainingValue;

    function findValueObject(){
      var casa;

      listType.forEach(function (item, index) {
        if (valueParam === item){
          casa = item
        }
      })

      return casa;
    }

    var teste = findValueObject();

    console.log(teste)













  }

  checkValueObject('array');



  var dom = new DOM();

  var $a = new DOM('[data-js="link"]');


  console.log($a);

  // $a.forEach(function(item){
  //   console.log('exemplo foreach ', item.firstChild.nodeValue);
  // });

  // var dataJs = $a.reduce(function (acc, item, index) {
  //   return acc + ' ' + item.getAttribute('data-js') + index;
  // },0);

  // console.log(dataJs);

  console.log( dom.isArray([1,2,3]) );
  console.log(dom.isObject( { prop: [1,2,3], prop2: 'casa'} ) );
  console.log(dom.isObject( { prop: [1,2,3], prop2: 'casa'} ) );
  console.log(dom.isFunction( function(){} ) );
  console.log(dom.isNumber( 12 ) );
  console.log(dom.isString( '12' ) );
  console.log(dom.isBoolean( false ) );
  console.log(dom.isNull(null) );





})(window, document)






