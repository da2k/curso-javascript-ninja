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
		this.element.forEach = function (callback) {
			return Array.prototype.forEach.call(this, callback);
		}
		this.element.map = function (callback) {
			return Array.prototype.map.call(this, callback);
		}
		this.element.filter = function (callback) {
			return Array.prototype.filter.call(this, callback);
		}
		this.element.reduce = function (callback, initialValue) {
			return Array.prototype.reduce.call(this, callback, initialValue);
		}
		this.element.reduceRight = function (callback, initialValue) {
			return Array.prototype.reduceRight.call(this, callback, initialValue);
		}
		this.element.every = function (callback) {
			return Array.prototype.every.call(this, callback);
		}
		this.element.some = function (callback) {
			return Array.prototype.some.call(this, callback);
		}
	}
	DOM.isArray = function (value) {
		return DOM.getType(value) === 'Array';
	}
	DOM.isObject = function (value) {
		return DOM.getType(value) === 'Object';
	}
	DOM.isFunction = function (value) {
		return DOM.getType(value) === 'Function';
	}
	DOM.isNumber = function (value) {
		return DOM.getType(value) === 'Number';
	}
	DOM.isString = function (value) {
		return DOM.getType(value) === 'String';
	}
	DOM.isBoolean = function (value) {
		return DOM.getType(value) === 'Boolean';
	}
	DOM.isNull = function (value) {
		return DOM.getType(value) === 'Null' || DOM.getType(value) === 'Undefined';;
	}
	DOM.getType = function (value) {
		var objectTypeStr = Object.prototype.toString.call(value);
		return objectTypeStr.match(/\[object (\w+)\]/)['input'];
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

	var $a = new DOM('[data-js="link"]');
	$a.on('click', function (e) {
		e.preventDefault();
		console.log('clicou');
	});

	console.log('Elementos selecionados:', $a.get());
	console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);
})(document);
