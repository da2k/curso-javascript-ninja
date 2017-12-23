(function(win, doc){
  'use strict';

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

  win.DOM = DOM;

})(window, document);
