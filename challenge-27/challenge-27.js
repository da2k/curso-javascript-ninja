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

    function DOM (node) {
        this.nodeList = document.querySelectorAll(node);
        this.forEach = function (callback) {
            Array.prototype.forEach.call(this.nodeList, callback);
        };
        this.map = function (callback) {
            return Array.prototype.map.call(this.nodeList, callback);
        };
        this.filter = function (callback) {
            return Array.prototype.filter.call(this.nodeList, callback);
        };
        this.reduce = function () {
            return Array.prototype.reduce.apply(this.nodeList, arguments);
        };
        this.reduceRight = function () {
            return Array.prototype.reduceRight.apply(this.nodeList, arguments);
        };
        this.every = function (callback) {
            return Array.prototype.every.call(this.nodeList, callback);
        };
        this.some = function (callback) {
            return Array.prototype.some.call(this.nodeList, callback);
        };
        this.isArray = function (obj) {
            if (Object.prototype.toString.call(obj).match('Array'))
                return true;
            return false;
        };
        this.isObject = function (obj) {
            if (Object.prototype.toString.call(obj).match('Object'))
                return true;
            return false;
        };
        this.isFunction = function (obj) {
            if (Object.prototype.toString.call(obj).match('Function'))
                return true;
            return false;
        };
        this.isNumber = function (obj) {
            if (Object.prototype.toString.call(obj).match('Number'))
                return true;
            return false;
        };
        this.isString = function (obj) {
            if (Object.prototype.toString.call(obj).match('String'))
                return true;
            return false;
        };
        this.isBoolean = function (obj) {
            if (Object.prototype.toString.call(obj).match('Boolean'))
                return true;
            return false;
        };
        this.isNull = function (obj) {
            if (Object.prototype.toString.call(obj).match(/(Null|Undefined)/g))
                return true;
            return false;
        };
    }
    DOM.prototype.get = function () {
        return this.nodeList;
    };

    var $a = new DOM('[data-js="link"]');
    console.log('Elementos selecionados:', $a.get());

    console.log('Resultado do forEach:');
    $a.forEach(function(item) {
        console.log(item.textContent);
    });

    console.log('Resultado do map:');
    var mappedNodes = $a.map(function(item, index) {
        return item.textContent + ' ' + index;
    });
    console.log(mappedNodes);

    console.log('Resultado do filter:');
    var filteredNodes = $a.filter(function(item) {
        return item.textContent.length > 3;
    });
    console.log(filteredNodes);
    
    console.log('Resultado do reduce:');
    var reducedValue = $a.reduce(function(accumulated, item) {
        return accumulated + Number(item.textContent.length);
    }, 0);
    console.log(reducedValue);
    
    console.log('Resultado do reduceRight:');
    var reducedRight = $a.reduceRight(function(previous, current) {
        return previous + current.textContent;
    }, '');
    console.log(reducedRight);
    
    console.log('Resultado do every:');
    var everyResult = $a.every(function(item) {
        return item.textContent.length > 3;
    });
    console.log(everyResult);
    
    console.log('Resultado do some:');
    var someResult = $a.some(function(item) {
        return item.textContent.length > 3;
    });
    console.log(someResult);

    console.log('é Array?', $a.isArray({a: 1}), $a.isArray([1, 2]));
    console.log('é Objeto?', $a.isObject({a: 1}), $a.isObject([1, 2]));
    console.log('é Função?', $a.isFunction(function() {}), $a.isFunction('function(){}'));
    console.log('é Número?', $a.isNumber(20), $a.isNumber('20'));
    console.log('é String?', $a.isString(20), $a.isString('20'));
    console.log('é Booleano?', $a.isBoolean(true), $a.isBoolean(1));
    console.log('é Null?', $a.isNull(null), $a.isNull(undefined), $a.isNull('null'));

})();
