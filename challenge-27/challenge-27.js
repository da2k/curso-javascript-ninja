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
    function DOM (elements){
        this.element = document.querySelectorAll(elements);
    }

    DOM.prototype.on = function on(eventType,callback){
    Array.prototype.forEach.call(this.element,function(element){
        element.addEventListener(eventType,callback,false);
    })   
    }

    DOM.prototype.get = function get(){
    return this.element;
    }

    DOM.prototype.off = function off(eventType,callback){
    Array.prototype.forEach.call(this.elements,function(element){
        element.removeEventListener(eventType,callback,false);
    })   
    }

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element,arguments);
    }

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element,arguments);
    }

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element,arguments);
    }

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element,arguments);
    }

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element,arguments);
    }

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element,arguments);
    }

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element,arguments);
    }

    DOM.isArray = function isArray(array){
        return Object.prototype.toString.call(array) === '[object Array]';
    }

    DOM.isFunction = function isFunction(func){
        return Object.prototype.toString.call(func) === '[object Function]';
    }

    DOM.isNumber = function isNumber(numb){
        return Object.prototype.toString.call(numb) === '[object Number]';
    }

    DOM.isString = function isString(str){
        return Object.prototype.toString.call(str) === '[object String]';
    }

    DOM.isBoolean = function isBoolean(bool){
        return Object.prototype.toString.call(bool) === '[object Bollean]';
    }

    DOM.isNull = function isNull(nll){
        return Object.prototype.toString.call(nll) === '[object Null]'
        ||     Object.prototype.toString.call(nll) === '[object Undefined]' ;
    }

    var $a =  new DOM('[data-js="link"]');
    $a.forEach(function(item){
        console.log(item);
    });
    console.log(DOM.isArray([]));
    console.log(DOM.isArray(1));
    console.log(DOM.isFunction(function(){}));
    console.log(DOM.isFunction(1));
    console.log(DOM.isNumber(1));
    console.log(DOM.isNumber('1'));
    console.log(DOM.isNull(undefined));

})();

