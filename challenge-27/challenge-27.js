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


function DOM( selector ) {
  this.element = document.querySelectorAll( selector );
}

DOM.prototype = {

  on: function( eventType, callback ) {
    Array.prototype.forEach.call( this.element, function( item, index ) {
      return item.addEventListener( eventType, callback, null );
    });
  },

  off: function( eventType ) {
    Array.prototype.forEach.call( this.element, function( item, index ) {
      return item.removeEventListener( eventType );
    });
  },

  get: function( eventType ) {
    return this.element;
  },

  forEach: function() {
    return Array.prototype.forEach.apply( this.element, argumets );
  },

  map: function() {
    return Array.prototype.map.apply( this.element, argumets );
  },

  filter: function() {
    return Array.prototype.filter.apply( this.element, argumets );
  },

  reduce: function() {
    return Array.prototype.reduce.apply( this.element, argumets );
  },

  reduceRight: function() {
    return Array.prototype.filterRight.apply( this.element, argumets );
  },

  every: function() {
    return Array.prototype.every.apply( this.element, argumets );
  },

  some: function() {
    return Array.prototype.some.apply( this.element, argumets );
  }
}

DOM.isArray = function( obj ) {
  return DOM.getType( obj ) === '[object Array]';
};

DOM.isObject = function( obj ) {
  return DOM.getType( obj ) === '[object Object]';
};

DOM.isFunction = function( obj ) {
  return DOM.getType( obj ) === '[object Function]';
};

DOM.isNumber = function( obj ) {
  return DOM.getType( obj ) === '[object Number]';
};

DOM.isString = function( obj ) {
  return DOM.getType( obj ) === '[object String]';
};

DOM.isBoolean = function( obj ) {
  return DOM.getType( obj ) === '[object Boolean]';
};

DOM.isNull = function( obj ) {
  return DOM.getType( obj ) === '[object Null]' || DOM.getType( obj ) === '[object Undefined]';
};

DOM.getType = function( obj ) {
  return Object.prototype.toString.call( obj );
};
