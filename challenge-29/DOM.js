(function() {
	'use strict';

	function DOM(selector) {
		if(!(this instanceof DOM))
			return new DOM(selector);
		
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
		if(this.elementsNodes.length === 1)
			return this.elementsNodes[0];
		if(this.elementsNodes.length > 1)
			return this.elementsNodes;
		return null;
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

	window.DOM = DOM;
})();