(function (win, doc) {
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
    // DOM library
    function DOM(seletorCSS) {
        this.elements = doc.querySelectorAll(seletorCSS);
    };

    DOM.prototype.on = function on(eventType, callback) {
        Array.prototype.forEach.call(this.elements, function (element) {
            element.addEventListener(eventType, callback, false);
        })
    };

    DOM.prototype.off = function off(eventType, callback) {
        Array.prototype.forEach.call(this.elements, function (element) {
            element.removeEventListener(eventType, callback, false);
        })
    };

    DOM.prototype.get = function get() {
        return this.elements;
    };

    DOM.prototype.forEach = function forEach() {
        return Array.prototype.forEach.apply(this.elements, arguments);
    };

    DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.elements, arguments);
    };

    DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.elements, arguments);
    };

    DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.elements, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.elements, arguments);
    };

    DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.elements, arguments);
    };

    DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.elements, arguments);
    };

    DOM.prototype.isArray = function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
    };

    DOM.prototype.isString = function isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
    };

    DOM.prototype.isBoolean = function isBoolean(obj) {
        return Object.prototype.toString.call(obj) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull(obj) {
        return Object.prototype.toString.call(obj) === '[object Null]'
        || Object.prototype.toString.call(obj) === '[object Undefined]';
    };

    //isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    // codigo inicial
    var $links = new DOM('[data-js="link"]');

    console.log('** forEach **');

    $links.forEach(function (item) {
        console.log(item.firstChild.nodeValue);
    });

    console.log('** map **');

    console.log(
        $links.map(function (item, index) {
            return 'valor do item ' + index + ' = ' + item.firstChild.nodeValue;
        })
    );

    console.log('** filter **');

    console.log(
        $links.filter(function (item) {
            return item.firstChild.nodeValue === 'Link 2';
        })
    );

    console.log('** reduce **');

    console.log(
        $links.reduce(function (previous, current, index) {
            if (index === 1) {
                return previous.firstChild.nodeValue + ' | ' + current.firstChild.nodeValue;
            }
            return previous + ' | ' + current.firstChild.nodeValue;
        })
    );

    console.log('** reduceRight **');

    console.log(
        $links.reduceRight(function (previous, current, index) {
            if (index === 1) {
                return previous.firstChild.nodeValue + ' | ' + current.firstChild.nodeValue;
            }
            return previous + ' | ' + current.firstChild.nodeValue;
        })
    );

    console.log('** every **');

    console.log(
        $links.every(function (item) {
            return item.firstChild.nodeValue === 'Link 2';
        })
    );

    console.log('** some **');

    console.log(
        $links.some(function (item) {
            return item.firstChild.nodeValue === 'Link 2';
        })
    );

    console.log('** isArray **');
    console.log((new DOM()).isArray([1, 2, 3]));
    console.log((new DOM()).isArray('vai ser falso'));

    console.log('** isObject **');
    console.log((new DOM()).isObject({a:1}));
    console.log((new DOM()).isObject('vai ser falso'));
    
    console.log('** isFunction **');
    console.log((new DOM()).isFunction(function () {}));
    console.log((new DOM()).isFunction('vai ser falso'));
    
    console.log('** isNumber **');
    console.log((new DOM()).isNumber(1));
    console.log((new DOM()).isNumber('vai ser falso'));
    
    console.log('** isString **');
    console.log((new DOM()).isString('vai ser true'));
    console.log((new DOM()).isString(1));
    
    console.log('** isBoolean **');
    console.log((new DOM()).isBoolean(true));
    console.log((new DOM()).isBoolean('vai ser falso'));
    
    console.log('** isNull com nulo **');
    console.log((new DOM()).isNull( null ));
    console.log((new DOM()).isNull('vai ser falso'));
    
    console.log('** isNull com undefined **');
    console.log((new DOM()).isNull( undefined ));
    console.log((new DOM()).isNull('vai ser falso'));

})(window, document);