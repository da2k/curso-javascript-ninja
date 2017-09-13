(function(){
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

    function DOM(elemento){
      this.element = document.querySelectorAll(elemento);

      // isArray: function isArray(value){
      //   return Object.prototype.toString.call(value);
      // }
    }
  
    DOM.prototype.on = function on(evento, callback){
      Array.prototype.forEach.call(this.element, function(item){
        item.addEventListener(evento, callback, false);
      });
    };
  
    DOM.prototype.off = function off(evento, callback){
      Array.prototype.forEach.call(this.element, function(item){
        item.removeEventListener(evento, callback, false);
      });
    };
  
    DOM.prototype.get = function get(){
      return this.element;
    };

    DOM.prototype.forEach = function forEach(callback){
      return Array.prototype.forEach.call(this.element, callback);
    }

    DOM.prototype.map = function map(callback){
      return Array.prototype.map.call(this.element, callback);
    }

    DOM.prototype.filter = function filter(callback){
      return Array.prototype.filter.call(this.element, callback);
    }

    DOM.prototype.reduce = function reduce(){
      return Array.prototype.reduce.apply(this.element, arguments);
    }
    
    DOM.prototype.reduceRight = function reduceRight(){
      return Array.prototype.reduceRight.apply(this.element, arguments);
    }

    DOM.prototype.every = function every(callback){
      return Array.prototype.every.call(this.element, callback);
    }

    DOM.prototype.some = function some(callback){
      return Array.prototype.some.call(this.element, callback);
    }

    DOM.prototype.isArray = function isArray(valor){
      return Object.prototype.toString.call(valor) === '[object Array]';
    }
    
    DOM.prototype.isObject = function isObject(valor){
      return Object.prototype.toString.call(valor) === '[object Object]';
    }

    DOM.prototype.isFunction = function isFunction(valor){
      return Object.prototype.toString.call(valor) === '[object Function]';
    }

    DOM.prototype.isNumber = function isNumber(valor){
      return Object.prototype.toString.call(valor) === '[object Number]';
    }

    DOM.prototype.isString = function isString(valor){
      return Object.prototype.toString.call(valor) === '[object String]';
    }

    DOM.prototype.isBoolean = function isBoolean(valor){
      return Object.prototype.toString.call(valor) === '[object Boolean]';
    }

    DOM.prototype.isNull = function isNull(valor){
      return Object.prototype.toString.call(valor) === '[object Undefined]' || 
              Object.prototype.toString.call(valor) ==='[object Null]';
    }




    console.log(DOM.prototype.isNull({}));
    
})();