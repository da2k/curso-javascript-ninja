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
(function(doc){
	'use strict';

function DOM(elements){
	this.elements = doc.querySelectAll(elements);
}

DOM.prototype.on = function on(eventType, callback){
	Array.prototype.forEach.call(this.element, function(element){
		element.addEventListener(eventType, callback, false);
	});
}};

DOM.prototype.off = function off(eventType, callback){
	Array.prototype.forEach.call(this.element, function(element){
		element.removeEventListener(eventType, callback, false);
	});
};

DOM.prototype.get = function get(){
	return this.elements;
};

DOM.protype.forEach = function forEach(){
	return Array.prototype.forEach.apply(this.element, arguments);
};

DOM.protype.map = function map(){
	return Array.prototype.map.apply(this.element, arguments);
};

DOM.protype.filter = function filter(){
	return Array.prototype.filter.apply(this.element, arguments);
};

DOM.protype.reduce = function reduce(){
	return Array.prototype.reduce.apply(this.element, arguments);
};

DOM.protype.reduceRight = function reduceRight(){
	return Array.prototype.reduceRight.apply(this.element, arguments);
};

DOM.protype.every = function every(){
	return Array.prototype.every.apply(this.element, arguments);
};

DOM.protype.some = function some(){
	return Array.prototype.some.apply(this.element, arguments);
};

DOM.prototype.isArray = function isArray( param ) {
	return Object.prototype.toString.call( param ) === '[Object Array';
};

DOM.prototype.isObject = function isObject( param ) {
	return Object.prototype.toString.call( param ) === '[Object Object';
};

DOM.prototype.isFunction = function isFunction( param ) {
	return Object.prototype.toString.call( param ) === '[Object Function';
};

DOM.prototype.isNumber = function isNumber( param ) {
	return Object.prototype.toString.call( param ) === '[Object Number';
};

DOM.prototype.isString = function isString( param ) {
	return Object.prototype.toString.call( param ) === '[Object String';
};

DOM.prototype.isBoolean = function isBoolean( param ) {
	return Object.prototype.toString.call( param ) === '[Object Boolean';
};

DOM.prototype.isNull = function isNull( param ) {
	return Object.prototype.toString.call( param ) === '[Object Null' 
	|| Object.prototype.toString.call( param ) === '[Object Undefined';
};

var $a = new DOM('[data-js="link"]');
$a.forEach(function(item){
	console(item.firstChild.nodeValue)
})

$a.on('click', function handleClick(e) {
  e.preventDefault();
  console.log('clicou');
  $a.off('click, handleClick');
}, false);

$a.get('click', function(e) {
  e.preventDefault();
  console.log('clicou');
}, false);

console.log('Elementos selecionados:', $a.get());
console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
})(document);
