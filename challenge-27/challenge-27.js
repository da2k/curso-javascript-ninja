(function(win, doc){
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
  function DOM(elements){
    this.element = doc.querySelectorAll(elements);

    this.on = function(event, callback){
      Array.prototype.forEach.call(this.element, function(element){
        element.addEventListener(event, callback, false);
      })
    }

    this.off = function(event, callback){
      Array.prototype.forEach.call(this.element, function(element){
        element.removeEventListenter(event, callback, false);
      });
    }

    this.get = function(){
      return this.element;
    }

    this.forEach = function(callback){
      return Array.prototype.forEach.call(this.element, callback);
    }

    this.some = function(callback){
      return Array.prototype.some.call(this.element, callback);
    }

    this.every = function(callback){
      return Array.prototype.every.call(this.element, callback);
    }

    this.map = function(callback){
      return Array.prototype.map.call(this.element, callback);
    }

    this.filter = function(callback){
      return Array.prototype.filter.call(this.element, callback);
    }

    this.reduce = function(calback){
      return Array.prototype.reduce.call(this.element, callback);
    }

    this.reduceRight = function(callback){
      return Array.prototype.reduceRight.call(this.element, callback);
    }
  }

  DOM.is = function(obj){
    return Object.prototype.toString.call(obj);
  }

  DOM.isArray = function(obj){
    return DOM.is(obj) === '[object Array]';
  }

  DOM.isNumber = function(obj){
    return DOM.is(obj) === '[object Number]';
  }

  DOM.isFunction = function(obj){
    return DOM.is(obj) === '[object Function]';
  }

  DOM.isObject = function(obj){
    return DOM.is(obj) === '[object Object]';
  }

  DOM.isString = function(obj){
    return DOM.is(obj) === '[object String]';
  }

  DOM.isBoolean = function(obj){
    return DOM.is(obj) === '[object Boolean]';
  }

  DOM.isNull = function(obj){
    return DOM.is(obj) === '[object Null]' || DOM.is(obj) === '[object Undefined]';
  }


  var $a = new DOM('[data-js="link"]');
  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  $a.forEach(function(item){
    console.log(item);
  });
  console.log(DOM.isArray([1,2,3]));
  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})(window, document)
