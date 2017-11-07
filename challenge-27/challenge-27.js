(function (win,doc) {

  'use strict';

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

function DOM(elements) {
  this.element = doc.querySelectorAll(elements); // seleciona todos os itens da tela.
};
// funcao construtora do DOM

// criando os métodos
DOM.prototype.on = function on(eventType, callback) { // o this.element é um arrayLike
  Array.prototype.forEach.call(this.element, function (element) { // cada vez que entrar aqui vai atribuir um valor a element
    element.addEventListener(eventType, callback, false);
  });

};
DOM.prototype.off = function off(eventType, callback) {
  Array.prototype.forEach.call(this.element, function (element) {
    element.removeEventListener(eventType, callback, false);
  });
};

DOM.prototype.get = function get() {
  return this.element
};


// forEach, map, filter, reduce, reduceRight, every e some

// this.element é o próprio array

// Fazendo o ForEach
DOM.prototype.forEach = function forEach() {
  return Array.prototype.forEach.apply(this.element, arguments);
}

// Se fosse um array normal seria assim
/*  this.element.forEach(function (item, index, array) {  });  */


DOM.prototype.map = function forEach() {
  return Array.prototype.map.apply(this.element, arguments);  // passa por todos itens do array e retorna o valor que você quiser criando um novo array
}

DOM.prototype.reduce = function forEach() {
  return Array.prototype.reduce.apply(this.element, arguments);
}

DOM.prototype.reduceRight = function forEach() {
  return Array.prototype.reduceRight.apply(this.element, arguments);
}

DOM.prototype.every = function forEach() {
  return Array.prototype.every.apply(this.element, arguments);
}

DOM.prototype.some = function forEach() {
  return Array.prototype.some.apply(this.element, arguments);
}

// CRIAR OS MÉTODOS
// isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

DOM.prototype.isArray = function isArray(param) { // param vai ser o this desse método
  return Object.prototype.toString.call( param ) === '[object Array]'; // se o parametro for igual a array ele vai dizer se é true ou false
}
DOM.prototype.isObject = function isObject(param) {
  return Object.prototype.toString.call( param ) === '[object Object]';
}
DOM.prototype.isFunction = function isFunction(param) {
  return Object.prototype.toString.call( param ) === '[object Function]';
}
DOM.prototype.isNumber = function isNumber(param) {
  return Object.prototype.toString.call( param ) === '[object Number]';
}
DOM.prototype.isString = function isString(param) {
  return Object.prototype.toString.call( param ) === '[object String]';
}
DOM.prototype.isBoolean = function isBoolean(param) {
  return Object.prototype.toString.call( param ) === '[object Boolean]';
}
DOM.prototype.isNull = function isNull(param) {
  return Object.prototype.toString.call(param) === '[object Null]' ||
  Object.prototype.toString.call(param) === '[object Undefined]';
}

// var $a = new DOM('[data-js="link"]');

//   console.log($a);
//   var dataJS = $a.map(function (item) {
//     return item.getAttribute('data-js');
//   });

//   console.log(dataJS);

// quando eu invoco o DOM pelo prototype, preciso primeiro invocar o DOM criando um novo objeto com o 'new DOM ()'
// preciso instanciar primeiro
// ou posso acessar o prototype do DOM direito dom DOM.prototype como método estático.

  var dom = new DOM();

  console.log(dom.isArray([1, 2, 3]));
  //console.log(DOM.prototype.isArray([1, 2, 3]));


})(window,document);
