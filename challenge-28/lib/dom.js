(function (win, document) {
  "use strict";

  function initiate(){
    function DOM(string) {
      this.element = document.querySelectorAll(string);
    }

    function initEvents() {
      DOM.prototype.on = function on(event, handleClick) {
        Array.prototype.forEach.call(this.element, function (item) {
          item.addEventListener(event, handleClick, false);
        });
      };

      DOM.prototype.off = function off(event, handleClick) {
        Array.prototype.forEach.call(this.element, function (item) {
          item.removeEventListener(event, handleClick, false);
        });
      };
    }

    function handleClick(e) {
      e.preventDefault();
      console.log("Clicou no link");
    }

    initEvents();

    DOM.prototype.get = function get() {
      return this.element;
    };

    function DOMArrayMethods() {
      DOM.prototype.forEach = function forEach() {
        console.log(arguments); // function
        return Array.prototype.forEach.apply(this.element, arguments);
      };

      DOM.prototype.map = function map() {
        return Array.prototype.map.apply(this.element, arguments);
      };

      DOM.prototype.filter = function filter() {
        return Array.prototype.filter.apply(this.element, arguments);
      };

      DOM.prototype.reduce = function reduce() {
        return Array.prototype.reduce.apply(this.element, arguments);
      };

      DOM.prototype.reduceRight = function reduceRight() {
        return Array.prototype.reduceRight.apply(this.element, arguments);
      };

      DOM.prototype.every = function every() {
        return Array.prototype.every.apply(this.element, arguments);
      };

      DOM.prototype.some = function some() {
        return Array.prototype.some.apply(this.element, arguments);
      };
    }

    DOMArrayMethods();

    function DOMStaticMethods() {
      function isObjectType(obj) {
        return Object.prototype.toString.call(obj);
      }

      DOM.isArray = function isArray(obj) {
        return isObjectType(obj) === "[object Array]";
      };

      DOM.isObject = function isObject(obj) {
        return isObjectType(obj) === "[object Object]";
      };

      DOM.isFunction = function isFunction(obj) {
        return isObjectType(obj) === "[object Function]";
      };

      DOM.isNumber = function isNumber(obj) {
        return isObjectType(obj) === "[object Number]";
      };

      DOM.isString = function isString(obj) {
        return isObjectType(obj) === "[object String]";
      };

      DOM.isBoolean = function isBoolean(obj) {
        return isObjectType(obj) === "[object Boolean]";
      };

      DOM.isNull = function isNull(obj) {
        return (
          isObjectType(obj) === "[object Null]" ||
          isObjectType(obj) === "[object Undefined]"
        );
      };
    }

    DOMStaticMethods();

    win.DOM = DOM;

  }

  initiate();

})(window, document);
