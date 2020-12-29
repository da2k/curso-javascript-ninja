/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

*/

function DOM(elements) {
    this.element = document.querySelectorAll(elements)
}

DOM.prototype.on = function(event, callback){
    Array.prototype.map.call(this.element, function(element){
        element.addEventListener(event, callback);
    });
}

DOM.prototype.getDomElements = function() {
    return this.element;
}

DOM.prototype.forEach = function() {
    return Array.prototype.forEach.apply( this.element, arguments );
}

DOM.prototype.map = function() {
    return Array.prototype.map.apply( this.element, arguments );
}

DOM.prototype.filter = function() {
    return Array.prototype.filter.apply( this.element, arguments );
}

DOM.prototype.reduce = function() {
    return Array.prototype.reduce.apply( this.element, arguments );
}

DOM.prototype.reduceRight = function() {
    return Array.prototype.reduceRight.apply( this.element, arguments );
}

DOM.prototype.every = function() {
    return Array.prototype.every.apply( this.element, arguments );
}

DOM.prototype.some = function() {
    return Array.prototype.some.apply( this.element, arguments );
}

/*
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

DOM.isArray= function(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

DOM.isObject  = function(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

DOM.isFunction = function(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
}

DOM.isNumber = function(value){
    return Object.prototype.toString.call(value) === '[object Number]';
}

DOM.isString = function(value){   
    return Object.prototype.toString.call(value) === '[object String]';
}

DOM.isBollean = function(value) {
    return Object.prototype.toString.call(value) === '[object Bollean]';
}

DOM.isNull = function(value){ 
    return Object.prototype.toString.call(value) === '[object Null]' || 
    Object.prototype.toString.call(value) === '[object Undefined]';
}


const $a = new DOM('[data-js="link"]');

$a.on('click', function(e){
    e.preventDefault();
    console.log('link foi clicado');
});

console.log($a.getDomElements());