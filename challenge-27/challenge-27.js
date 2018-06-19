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
	function DOM(elementos) {
		this.elements = this.getDOMElements(elementos);
	}

	DOM.prototype.getDOMElements = function getDOMElements(elementos) {
		return document.querySelectorAll(elementos);
	}

	DOM.prototype.on = function on(evento, callback) {
		Array.prototype.forEach.call(this.elements, function(item) {
			item.addEventListener(evento, callback, false);
		});
	}

	DOM.prototype.off = function off(evento, callback) {
		Array.prototype.forEach.call(this.elements, function(item) {
			item.removeEventListener(evento, callback, false);
		});
	}

	DOM.prototype.get = function get() {
		return this.elements;
	}

	//- forEach, map, filter, reduce, reduceRight, every e some.

	DOM.prototype.forEach = function forEach() {
		Array.prototype.forEach.apply(this.elements, arguments);
	}

	DOM.prototype.map = function map() {
		Array.prototype.map.apply(this.elements, arguments);
	}

	DOM.prototype.filter = function filter() {
		Array.prototype.filter.apply(this.elements, arguments);
	}

	DOM.prototype.reduce = function reduce() {
		Array.prototype.reduce.apply(this.elements, arguments);
	}

	DOM.prototype.reduceRight = function reduceRight() {
		Array.prototype.reduceRight.apply(this.elements, arguments);
	}

	DOM.prototype.every = function every() {
		Array.prototype.every.apply(this.elements, arguments);
	}

	DOM.prototype.some = function some() {
		Array.prototype.some.apply(this.elements, arguments);
	}

	//- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.

	DOM.prototype.isArray = function isArray( value ) {
		return Object.prototype.toString.call(value) === '[object Array]';
	}

	DOM.prototype.isObject = function isObject( value ) {
		return Object.prototype.toString.call(value) === '[object Object]';
	}

	DOM.prototype.isFunction = function isFunction( value ) {
		return Object.prototype.toString.call(value) === '[object Function]';
	}

	DOM.prototype.isNumber = function isNumber( value ) {
		return Object.prototype.toString.call(value) === '[object Number]';
	}
	
	DOM.prototype.isString = function isString( value ) {
		return Object.prototype.toString.call(value) === '[object String]';
	}

	DOM.prototype.isBoolean = function isBoolean( value ) {
		return Object.prototype.toString.call(value) === '[object Boolean]';
	}

	DOM.prototype.isNull = function isNull( value ) {
		return Object.prototype.toString.call(value) === '[object Null]' || 
			   Object.prototype.toString.call(value) === '[object Undefined]';
	}

	//

	console.log(DOM.prototype.isNull('null'));
	
})();