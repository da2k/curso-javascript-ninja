(function () {


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


  var $a = new DOM('[data-js="link"]')
  console.log($a)
  function DOM(elements){
    this.element = document.querySelectorAll(elements)
  }

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments)
  }
  var foreach = $a.forEach(function (item) {
    console.log( item.firstChild.nodeValue )
  })
  console.log(foreach)
  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments)
  }
  var MAP = $a.map(function (item) {
    return item.getAttribute('data-js');
  })
  console.log(MAP)
  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments)
  }
  var filtro = $a.filter(function (item) {
    return item;
  })
  console.log(filtro)
  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  }
  var reduce = $a.reduce(function (acc, act, index) {
    return acc + ' ' + act.getAttribute('data-js') + index;
  },0)
  console.log(reduce)
  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments)
  }
  var reduceRight = $a.reduceRight(function (acc, act, index) {
    return acc + ' ' + act.getAttribute('data-js') + index;
  },0)
  console.log(reduceRight)
  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments)
  }
  var every = $a.every(function (item) {
    return item.getAttribute('data-js') == 'link' ;
  },0)
  console.log(every)
  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments)
  }
  var some = $a.some(function (item) {
    return item.firstChild.nodeValue < 0 ;
  },0)
  console.log(some)

  DOM.prototype.anyObj = function anyObj(params0, params1) {
    return Object.prototype.toString.call(params0) === params1
  }
  var dom = new DOM();
  console.log('isArray ? ',  dom.anyObj([], '[object Array]' ))
  console.log('isObject ? ', dom.anyObj({}, '[object Object]' ))
  console.log('isFunction ? ', dom.anyObj(() => {}, '[object Function]' ))
  console.log('isNumber ? ', dom.anyObj(1, '[object Number]' ))
  console.log('isString ? ', dom.anyObj('text', '[object String]' ))
  console.log('isBoolean ? ', dom.anyObj(false, '[object Boolean]' ))
  console.log('isNull ? ', dom.anyObj(null, '[object Null]' ))
  console.log('isNull ? ', dom.anyObj(undefined, '[object Undefined]' ))

  // isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

})()
