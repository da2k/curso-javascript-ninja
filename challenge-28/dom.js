(function(doc){
 'use strict'

 function DOM(element) {
  this.element = doc.querySelectorAll(element);
}

DOM.prototype.on = function (event, callback) {
  Array.prototype.forEach.call(this.element, function (element) {
    element.addEventListener(event, callback, false)
  })
};

DOM.prototype.off = function (event, callback) {
  Array.prototype.forEach.call(this.element, function (element) {
    element.removeEventListener(event, callback, false)
  })
};

DOM.prototype.get = function () {
  return this.element;
};

DOM.prototype.forEach = function forEach() {
  return Array.prototype.forEach.apply(this.element, arguments);
}

DOM.prototype.map = function map() {
  return Array.prototype.map.apply(this.element, arguments);
}

DOM.prototype.filter = function filter() {
  return Array.prototype.filter.apply(this.element, arguments);
}

DOM.prototype.reduce = function reduce() {
  return Array.prototype.reduce.apply(this.element, arguments);
}

DOM.prototype.reduceRight = function reduceRight() {
  return Array.prototype.reduceRight.apply(this.element, arguments);
}

DOM.prototype.every = function every() {
  return Array.prototype.every.apply(this.element, arguments);
}

DOM.prototype.some = function some() {
  return Array.prototype.some.apply(this.element, arguments);
}

function is(obj) {
  return Object.prototype.toString.call(obj)
}

DOM.prototype.isArray = function isArray(obj) {
  return is(obj) === '[object Array]';
}

DOM.prototype.isObject = function isObject(obj) {
  return is(obj) === '[object Object]';
}

DOM.prototype.isNumber = function isNumber(obj) {
  return is(obj) === '[object Number]';
}

DOM.prototype.isFunction = function isFunction(obj) {
  return is(obj) === '[object Function]';
}

DOM.prototype.isString = function isString(obj) {
  return is(obj) === '[object String]';
}

DOM.prototype.isBoolean = function isBoolean(obj) {
  return is(obj) === '[object Boolean]';
}

DOM.prototype.isNull = function isNull(obj) {
  return is(obj) === '[object Null]' || is(obj) === '[object Undefined]';
}

window.DOM = DOM;
})(document)
