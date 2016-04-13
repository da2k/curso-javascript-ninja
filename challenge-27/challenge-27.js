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

	function DOM(selector) {
		this.elements = document.querySelectorAll(selector);
		this.elementsNodes = Array.prototype.map.call(this.elements, function(node) {
			return node;
		});
	}

	DOM.prototype.on = function on(event, callback) {
		this.elementsNodes.forEach(function(node) {
			node.addEventListener(event, callback, false);
		});
	};

	DOM.prototype.off = function off(event, callback) {
		this.elementsNodes.forEach(function(node) {
			node.removeEventListener(event, callback, false);
		});
	};

	DOM.prototype.get = function get() {
		return this.elementsNodes;
	};

	DOM.prototype.forEach = function forEach(myFunc) {
		return this.elementsNodes.forEach(myFunc);
	};

	DOM.prototype.map = function map(myFunc) {
		return this.elementsNodes.map(myFunc);
	};

	DOM.prototype.filter = function filter(myFunc) {
		return this.elementsNodes.filter(myFunc);
	};

	DOM.prototype.reduce = function reduce(myFunc) {
		return this.elementsNodes.reduce(myFunc);
	};

	DOM.prototype.reduceRight = function reduceRight(myFunc) {
		return this.elementsNodes.reduceRight(myFunc);
	};

	DOM.prototype.every = function every(myFunc) {
		return this.elementsNodes.every(myFunc);
	};

	DOM.prototype.some = function some(myFunc) {
		return this.elementsNodes.some(myFunc);
	};

	DOM.is = function is(obj) {
		return Object.prototype.toString.call(obj);
	};

	DOM.isArray = function isArray(arr) {
		return this.is(arr) === '[object Array]';
	};

	DOM.isObject = function isObject(obj) {
		return this.is(obj) === '[object Object]';
	};

	DOM.isFunction = function isFunction(func) {
		return this.is(func) === '[object Function]';
	};

	DOM.isNumber = function isNumber(num) {
		return typeof num === 'number';
	};

	DOM.isString = function isString(str) {
		return typeof str === 'string';
	};

	DOM.isBoolean = function isBoolean(bool) {
		return typeof bool === 'boolean';
	};

	DOM.isNull = function isNull(nu) {
		return this.is(nu) === '[object Null]' || this.is(nu) === '[object Undefined]';
	};


	var $a = new DOM('[data-js="link"]');

	$a.on('click', function(e) {
	  e.preventDefault();
	  console.log('\nTestando o DOM.on()');
	  console.log('clicou');
	});

	console.log('\nTestando o DOM.get()');
	console.log('Elementos selecionados:', $a.get());
	console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

	console.log('\nTestando o DOM.forEach()');
	$a.forEach(function(item, index, array) {
		console.log(item, index, array);
	});

	console.log('\nTestando o DOM.map()');
	var aMapped = $a.map(function(item) {
		return item;
	});
	console.log(aMapped);

	console.log('\nTestando o DOM.filter()');
	var aFiltered = $a.filter(function(item) {
		return item.text === 'Link 1';
	});
	console.log(aFiltered);

	console.log('\nTestando o DOM.reduce()');
	var aReduced = $a.reduce(function(previousValue, currentValue) {
		return previousValue.text + currentValue.text;
	});
	console.log(aReduced);

	console.log('\nTestando o DOM.reduceRight()');
	var aReducedRight = $a.reduceRight(function(previousValue, currentValue) {
		return previousValue.text + currentValue.text;
	});
	console.log(aReducedRight);

	console.log('\nTestando o DOM.every()');
	var aEvery = $a.every(function(item) {
		return item.getAttribute('data-js') === 'link';
	});
	console.log(aEvery);

	console.log('\nTestando o DOM.some()');
	var aSome = $a.some(function(item) {
		return item.text === 'Link 1';
	});
	console.log(aSome);

	console.log('\nTestando DOM.isArray()');
	console.log(DOM.isArray([1, 2, 3]));

	console.log('\nTestando DOM.isObject()');
	console.log(DOM.isObject({}));

	console.log('\nTestando DOM.isFunction()');
	console.log(DOM.isFunction(function() {}));

	console.log('\nTestando DOM.isNumber()');
	console.log(DOM.isNumber('numero'));

	console.log('\nTestando DOM.isString()');
	console.log(DOM.isString('string'));

	console.log('\nTestando DOM.isBoolean()');
	console.log(DOM.isBoolean(false));

	console.log('\nTestando DOM.isNull()');
	console.log(DOM.isNull(null));

})();
