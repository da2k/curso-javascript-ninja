(function(){
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

  function DOM(nodeName){
    this.element = getNodesWithName(nodeName);

    function getNodesWithName( nodeName ){
      return document.querySelectorAll( nodeName );
    }
  }

  DOM.prototype.on = function on( event, clickHandle ) {
    this.goThroughElementsToExecuteCallback(this.get(), function( item ){
      item.addEventListener(event, clickHandle, false);
    });
  };

  DOM.prototype.off = function off( event, handleRemove ) {
    this.goThroughElementsToExecuteCallback(this.get() , function( item ){
      item.removeEventListener(event, handleRemove, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.goThroughElementsToExecuteCallback = function goThroughElementsToExecuteCallback(elements, callback){
    Array.prototype.forEach.call( elements, function(item){
      callback(item);
    });
  }

  DOM.prototype.forEach = function forEach(callback){
    Array.prototype.forEach.call(this.element, function(item, index, array){
      return callback( item, index, array );
    });
  }

  DOM.prototype.map = function map(callback){
    return Array.prototype.map.call(this.element, function(item, index, array){
      return callback(item, index, array);
    });
  }

  DOM.prototype.filter = function filter(callback){
    return Array.prototype.filter.call(this.element, function(item, index, array){
      return callback( item, index, array );
    })
  }

  DOM.prototype.reduce = function reduce(callback, initValue){
    if (initValue){
      return Array.prototype.reduce.call(this.element, function(acum, item, index, array){
        return callback( acum, item, index, array );
      }, initValue)
    }else{
      return Array.prototype.reduce.call(this.element, function(acum, item, index, array){
        return callback( acum, item, index, array );
      })
    }
  }

  DOM.prototype.reduceRight = function reduceRight(callback, initValue){
    if (initValue){
      return Array.prototype.reduceRight.call(this.element, function(acum, item, index, array){
        return callback( acum, item, index, array );
      }, initValue)
    }else{
      return Array.prototype.reduceRight.call(this.element, function(acum, item, index, array){
        return callback( acum, item, index, array );
      })
    }
  }

  DOM.prototype.every = function every(callback){
    return Array.prototype.every.call(this.element, function( item, index, array){
      return callback( item, index, array );
    })
  }

  DOM.prototype.some = function some(callback){
    return Array.prototype.some.call(this.element, function( item, index, array){
      return callback( item, index, array );
    })
  }

  DOM.is = function is( obj ){
   return Object.prototype.toString.call( obj );
  }

  DOM.isArray = function isArray( obj ){
    return DOM.is( obj ).includes('Array');
  }

  DOM.isObject = function isObject( obj ){
    return DOM.is( obj ).includes('Object');
  }

  DOM.isFunction = function isFunction( obj ){
    return DOM.is( obj ).includes( 'Function' );
  }

  DOM.isNumber = function isNumber( obj ){
    return DOM.is( obj ).includes( 'Number' );
  }

  DOM.isString = function isString( obj ){
    return DOM.is( obj ).includes( 'String' );
  }

  DOM.isBoolean = function isBoolean( obj ){
    return DOM.is( obj ).includes( 'Boolean' );
  }

  DOM.isNull = function isNull( obj ){
    return DOM.is( obj ).includes( 'Null' ) || DOM.is( obj ).includes( 'Undefined' );
  }

  var $a = new DOM('[data-js="link"]');

  console.log($a.filter(function(item, index, array){
    return item.firstChild.nodeValue == 'Link 2';
  }));

  console.log( DOM.isArray([1, 2, 3]) ); // true
  console.log( DOM.isFunction(function() {}) ); // true
  console.log( DOM.isNumber('numero') ); // false

})();
