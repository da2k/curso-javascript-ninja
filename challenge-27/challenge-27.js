/*

document.createDocumentFragment() - Cria um fragmento de um documento, para manipulação de nodes, melhora muito a performance, trabalhando fora do DOM,
ele não tem .parntNode === null nunca também pode ser usando para manioular o DOM, por exemplo, criar uma tag P, depois criar um texto para a tag p
e finalmente colocar no html, exemplo:
var fragment = documento.creatDocumentFragment();
var tagP = documento.creatElement('p');
var textP = document.creatTextNode('texto qqr')
tagP.appendChild(textp)
fragment.appendChild(ragP)
document.body.appendChild(fragment);
Desta forma, cria-se um elemento pelo JS e coloca-o no HTML

Téquinicas ninjas-

Para copiar Arrays

var arr = [1, 2, 3, 4, 5]
var arr2 = arr2
arr === arr2: true
Neste exemplo, os arrays tem a mesma referencia

var arr = [1, 2, 3, 4, 5]
var arr2 = arr.slice(); (conteúdo do arr2 = [1, 2, 3, 4, 5])
var arr === arr2: false
Neste exemplo, os arrays tem o mesmo conteúdo mas não a mesma referência
(para arry-like = var arr = Array.prototype.slice.call(this))


Saber o tipo de dado real de um elemento

Object.prototype.toString.call(arr)
retorn: object Array


Object.prototype.toString.call(function(){})
retorn: object Function

função para automatizar
function is(obj){
return Object.prototype.toString.call(obj);
}

function isArray(obj){
return is(obj) === '[object Array]'
}


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

(function (doc) {
  'use strict';

  function DOM(element) {
    this.element = doc.querySelectorAll(element);
  }

  DOM.prototype.on = function (event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(event, callback, false)
    })
  };

  DOM.prototype.off = function (event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(event, callback, false)
    })
  };

  DOM.prototype.get = function () {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
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

  function is(obj) {
    return Object.prototype.toString.call(obj)
  }

  DOM.prototype.isArray = function isArray(obj) {
    return is(obj) === '[object Array]';
  }

  DOM.prototype.isObject = function isObject(obj) {
    return is(obj) === ']object Object]';
  }

  DOM.prototype.isNumber = function isNumber(obj) {
    return is(obj) === '[object Number]';
  }

  DOM.prototype.isFunction = function isFunction(obj) {
    return is(obj) === '[object Function]';
  }

  DOM.prototype.isString = function isString(obj) {
    return is(obj) === '[object String]';
  }

  DOM.prototype.isBoolean = function isBoolean(obj) {
    return is(obj) === '[object Boolean]';
  }

  DOM.prototype.isNull = function isNull(obj) {
    return is(obj) === '[object Null]' || is(obj) === '[object Undefined]';
  }
  var $a = new DOM('[data-js="link"]')

  //Testando métodos de arrays
  console.log('Testando forEach, retorno em lista')
  $a.forEach(function (iten) {
    console.log(iten)
  })

  console.log('Testando map, retorno um valor, array')
  var dataJs = $a.map(function (iten) {
    return iten.getAttribute('data-js');
  });
  console.log(dataJs)

  console.log('Testando REDUCE')
  var dataJs = $a.reduce(function (acc, iten, index) {
    return acc + ' ' + iten.getAttribute('data-js') + index;
  }, 0);
  console.log(dataJs)

  var dom = new DOM();
  console.log(dom.isNull(null))


})(document)
