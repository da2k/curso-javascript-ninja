var DOM = (function(doc){
  return function DOM(querySelector) {
    this.element = doc.querySelectorAll(querySelector);
    this.on = function (eventName, callback) {
      this.element.forEach(function (element) {
        element.addEventListener(eventName, callback, false);
      });
    }
    this.off = function (eventName, callback) {
      this.element.forEach(function (element) {
        element.removeEventListener(eventName, callback);
      });
    }
    this.get = function () {
      return this.element;
    }
    this.forEach = function (callback) {
      return Array.prototype.forEach.call(this.element, callback);
    }
    this.map = function (callback) {
      return Array.prototype.map.call(this.element, callback);
    }
    this.filter = function (callback) {
      return Array.prototype.filter.call(this.element, callback);
    }
    this.reduce = function (callback, initialValue) {
      return Array.prototype.reduce.call(this.element, callback, initialValue);
    }
    this.reduceRight = function (callback, initialValue) {
      return Array.prototype.reduceRight.call(this.element, callback, initialValue);
    }
    this.every = function (callback) {
      return Array.prototype.some.call(this.element, callback);
    }
    this.some = function (callback) {
      return Array.prototype.every.call(this.element, callback);
    }
    this.isArray = function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    }
    this.isObject = function (value) {
      return Object.prototype.toString.call(value) === '[object Object]';
    }
    this.isFunction = function (value) {
      return Object.prototype.toString.call(value) === '[object Function]';
    }
    this.isNumber = function (value) {
      return Object.prototype.toString.call(value) === '[object Number]';
    }
    this.isString = function (value) {
      return Object.prototype.toString.call(value) === '[object String]';
    }
    this.isBoolean = function (value) {
      return Object.prototype.toString.call(value) === '[object Boolean]';
    }
    this.isNull = function (value) {
      return value === null || value === undefined;
    }
	}
})(document);
