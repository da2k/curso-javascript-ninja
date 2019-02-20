(function (doc) {
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

	var DOM = function DOM(querySelector) {
		this.element = doc.querySelectorAll(querySelector);
	}

	DOM.prototype.on = function (eventName, callback) {
		this.element.forEach(function (element) {
			element.addEventListener(eventName, callback, false);
		});
	}

	DOM.prototype.off = function (eventName, callback) {
		this.element.forEach(function (element) {
			element.removeEventListener(eventName, callback);
		});
	}

	DOM.prototype.get = function () {
		return this.element;
	}

	DOM.prototype.forEach = function (callback) {
		return Array.prototype.forEach.call(this.element, callback);
	}

	DOM.prototype.map = function (callback) {
		return Array.prototype.map.call(this.element, callback);
	}

	DOM.prototype.filter = function (callback) {
		return Array.prototype.filter.call(this.element, callback);
	}

	DOM.prototype.reduce = function (callback, initialValue) {
		return Array.prototype.reduce.call(this.element, callback, initialValue);
	}

	DOM.prototype.reduceRight = function (callback, initialValue) {
		return Array.prototype.reduceRight.call(this.element, callback, initialValue);
	}

	DOM.prototype.every = function (callback) {
		return Array.prototype.some.call(this.element, callback);
	}

	DOM.prototype.some = function (callback) {
		return Array.prototype.every.call(this.element, callback);
	}

	DOM.prototype.isArray = function (value) {
		return Object.prototype.toString.call(value) === '[object Array]';
	}

	DOM.prototype.isObject = function (value) {
		return Object.prototype.toString.call(value) === '[object Object]';
	}

	DOM.prototype.isFunction = function (value) {
		return Object.prototype.toString.call(value) === '[object Function]';
	}

	DOM.prototype.isNumber = function (value) {
		return Object.prototype.toString.call(value) === '[object Number]';
	}

	DOM.prototype.isString = function (value) {
		return Object.prototype.toString.call(value) === '[object String]';
	}

	DOM.prototype.isBoolean = function (value) {
		return Object.prototype.toString.call(value) === '[object Boolean]';
	}

	DOM.prototype.isNull = function (value) {
		return value === null || value === undefined;
	}

	var $anchorList = new DOM('[data-js=link]');
	$anchorList.forEach(function ($e) {
		console.log($e.textContent)	
	});

	var dom = new DOM();
	console.log( dom.isString('1') );
})(document);
