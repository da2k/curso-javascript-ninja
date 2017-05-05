(function(win, doc){
  "use strict";
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
  function DOM(attribute){
    this.element = doc.querySelectorAll(attribute);
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element, function(node){
      node.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(node){
      node.removeEventListener(event, callback, false);
    })
  };

  DOM.prototype.get = function get(){
    return this.element;
  }

  DOM.prototype.forEach = function forEach(callback){
    Array.prototype.forEach.call(this.element, callback);
  };

  DOM.prototype.map = function map(callback){
    return Array.prototype.map.call(this.element, callback);
  };

  DOM.prototype.filter = function filter(callback){
    return Array.prototype.filter.call(this.element, callback);
  };

  DOM.prototype.redure = function reduce(callback){
    return Array.prototype.reduce.call(this.element, callback);
  };

  DOM.prototype.reduceRight = function reduceRight(callback){
    return Array.prototype.reduceRight.call(this.element, callback);
  };

  DOM.prototype.every = function every(callback){
    return Array.prototype.every.call(this.element, callback);
  };

  DOM.prototype.some = function some(callback){
    return Array.prototype.some.call(this.element, callback);
  };

  DOM.isArray = function isArray(arg){
    return Object.prototype.toString.call(arg) === '[object Array]';
  };

  DOM.isObject = function isObject(arg){
    return Object.prototype.toString.call(arg) === '[object Object]';
  };

  DOM.isFunction = function isFunction(arg){
    return Object.prototype.toString.call(arg) === '[object Function]';
  };

  DOM.isNumber = function isNumber(arg){
    return Object.prototype.toString.call(arg) === '[object Number]';
  };

  DOM.isString = function isString(arg){
    return Object.prototype.toString.call(arg) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(arg){
    return Object.prototype.toString.call(arg) === '[object Boolean]';
  };

  DOM.isNull = function isNull(arg){
    var argType = Object.prototype.toString.call(arg);
    return argType === '[object Null]' || argType === '[object Undefined]';
  };

  function setTextToRed(item){
    item.setAttribute('style', 'color:#FF0000');
  }

  function clone(item){
    return item.cloneNode(true);
  }

  function hasPhrase(item){
    return item.innerHTML.match(/Paragrafo 3/g);
  }

  var $divsFilhas = new DOM('[data-js="divfilha"]');
  var $divPai = new DOM('[data-js="divpai"]');
  var $cloneFilhas = $divsFilhas.map(clone);

  $cloneFilhas.forEach(function(item){
    $divPai.element[0].appendChild(item);
  })

  $divsFilhas.forEach(setTextToRed);

  console.log($divsFilhas.some(hasPhrase));

  console.log($divsFilhas.every(hasPhrase));

  console.log(DOM.isNull());
  console.log(DOM.isBoolean('true'));
  console.log(DOM.isNumber(123));
  console.log(DOM.isFunction(clone));
  console.log(DOM.isString(true));


})(window, document);
