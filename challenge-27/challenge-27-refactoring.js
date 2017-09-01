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

  // Class test Object
  function createTestObj() {
    this.createObj = function createObjectProto(objectTarget) {
      return Object.prototype.toString.call(objectTarget)
    };

    this.valueObj = function valueObject(stringNameObject) {
      var listType = ['Array', 'Object', 'Function', 'Number', 'String', 'Boolean', 'Null', 'Undefined'];
      var letterIntial = stringNameObject.split('').slice(0, 1).join().toUpperCase();
      var remainingValue = stringNameObject.slice(1).split('').join('');
      var valueParam = letterIntial + remainingValue;
      var resultList;

      listType.forEach(function (item, index) {
        if (valueParam === item) { resultList = item }
      })

      return '[' + 'object' + ' ' + resultList + ']';
    };

  }

  var testObject = new createTestObj();

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.isArray = function isArray( param ){
    return testObject.createObj(param) === testObject.valueObj('Array');
  }

  DOM.prototype.isObject = function isObject( param ){
    return testObject.createObj(param) === testObject.valueObj('object');
  }

  DOM.prototype.isFunction = function isFunction( param ){
    return testObject.createObj(param) === testObject.valueObj('function');
  }

  DOM.prototype.isNumber = function isNumber( param ){
    return testObject.createObj(param) === testObject.valueObj('number');
  }

  DOM.prototype.isString = function isString( param ){
    return testObject.createObj(param) === testObject.valueObj('string');
  }

  DOM.prototype.isBoolean = function isBoolean( param ){
    return testObject.createObj(param) === testObject.valueObj('boolean');
  }

  DOM.prototype.isNull = function isNull( param ){
    return testObject.createObj(param) === testObject.valueObj('null') ||
    testObject.createObj(param) === testObject.valueObj('undefined');
  }

  var dom = new DOM();

  console.log( dom.isArray([1,2,3]) );
  console.log(dom.isObject( { prop: [1,2,3], prop2: 'casa'} ) );
  console.log(dom.isObject( { prop: [1,2,3], prop2: 'casa'} ) );
  console.log(dom.isFunction( function(){} ) );
  console.log(dom.isNumber( 12 ) );
  console.log(dom.isString( '12' ) );
  console.log(dom.isBoolean( false ) );
  console.log(dom.isNull(null) );


})(window, document)


