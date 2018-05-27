(function(window, document){
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

  function DOM(element){
    this.element = document.querySelectorAll(element);
  }
  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(event, callback, false);
    })
  }
  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(event, callback, false);
    })
  }
  DOM.prototype.get = function get(){
    return this.element;
  }
  DOM.prototype.foreach = function foreach(element){
    Array.prototype.forEach.call(this.element, function(element){
      return console.log(Object.prototype.toString.call(element));
    })
  }
  DOM.prototype.map = function map(element){
    Array.prototype.map.call(this.element, function(element){
      return console.log(element.nodeName);
    })
  }
  DOM.prototype.filter = function filter(element){
    Array.prototype.filter.call(this.element, function(element){
      return console.log(element.nodeName);
    })
  }
  DOM.prototype.reduce = function reduce(element){
    Array.prototype.reduce.call(this.element, function(){
      return ;
    });
  }
  DOM.prototype.reduceRight = function reduceRight(element){
    Array.prototype.reduceRight.call(this.element, function(element){
      return ;
    })
  }
  DOM.prototype.some = function some(element){
    Array.prototype.some.call(this.element, function(element){
      return ;
    })
  }
  DOM.prototype.every = function every(element){
    Array.prototype.some.call(this.element, function(element){
      return ;
    })
  }


  var $obj = new DOM('[data-js]');
  console.log($obj);
  console.log($obj.get());
  console.log($obj.foreach())
  console.log($obj.map());
  console.log($obj.filter());
  console.log($obj.reduce());
  console.log($obj.reduceRight());
  console.log($obj.some());
  console.log($obj.every());


  DOM.isArray = function isArray(element){
    return Object.prototype.toString.call(element) === '[object Array]';
  };
  DOM.isObject = function isObject(element){
    return Object.prototype.toString.call(element) === '[object Object]';
  }
  DOM.isFunction = function isFunction(element){
    return Object.prototype.toString.call(element) === '[object Function]';
  }
  DOM.isNumber = function isNumber(element){
    return Object.prototype.toString.call(element) === '[object Number]';
  }
  DOM.isString = function isString(element){
    return Object.prototype.toString.call(element) === '[object String]';
  }
  DOM.isBoolean = function isBoolean(element){
    return Object.prototype.toString.call(element) === '[object Boolean]';
  }
  DOM.isNull = function isNull(element){
    if(Object.prototype.toString.call(element) === '[object Null]'|Object.prototype.toString.call(element) === '[object Undefined]')
      return true;
    return false;
  }

  console.log(DOM.isArray([1,2,3]));
  console.log(DOM.isObject({}));
  console.log(DOM.isFunction(function (){}));
  console.log(DOM.isNumber(1));
  console.log(DOM.isString('[1,2,3]'));
  console.log(DOM.isBoolean(true));
  console.log(DOM.isNull());


})(window, document);
