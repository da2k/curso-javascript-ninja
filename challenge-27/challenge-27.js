(function() {

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

    function DOM(elements) {
        this.element = this.getDOMElements(elements);
    }

    DOM.prototype.getDOMElements = (elements) => {
        return document.querySelectorAll(elements);
    };

    DOM.prototype.on = (eventType, callback) => {
        Array.prototype.forEach.call(this.element, (element) => {
            element.addEventListener(eventType, callback, false);
        });
    };

    DOM.prototype.off = (eventType, callback) => {
        Array.prototype.forEach.call(this.element, (element) => {
            element.removeEventListener(eventType, callback, false);
        });
    };

    DOM.prototype.get = (element) => this.element;

    DOM.prototype.forEach = () => {
        Array.prototype.forEach.apply(this.element, arguments);
    }

    DOM.prototype.map = () => {
        Array.prototype.map.apply(this.element, arguments);
    }

    DOM.prototype.filter = () => {
        Array.prototype.filter.apply(this.element, arguments);
    }

    DOM.prototype.reduce = () => {
        Array.prototype.reduce.apply(this.element, arguments);
    }

    var a = new DOM['data-js="link"'];

})();
