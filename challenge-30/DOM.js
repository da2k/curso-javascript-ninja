(function (win, doc) {
  function DOM(str) {
      this.element = doc.querySelectorAll(str);
  }

  DOM.prototype.get = function () {
      return this.element.length === 1 ? this.element[0] : this.element;
  };

  DOM.prototype.on = function (event, listener) {
      Array.prototype.forEach.call(this.element, function (item) {
          item.addEventListener(event, listener, false);
      });
  };

  DOM.prototype.off = function (event, listener) {
      Array.prototype.forEach.call(this.element, function (item) {
          item.removeEventListener(event, listener);
      });
  };

  DOM.prototype.forEach = function () {
      Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.map = function () {
      return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.filter = function () {
      return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.reduce = function () {
      return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.reduceRight = function () {
      return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.every = function () {
      return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.some = function () {
      return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
  };

  DOM.isObject = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
  };

  DOM.isFunction = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
  };

  DOM.isNumber = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Number]';
  };

  DOM.isString = function (obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
  };

  DOM.isBoolean = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Boolean]';
  };

  DOM.isNull = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Null]' ||
          Object.prototype.toString.call(obj) === '[object Undefined]';
  };

  win.DOM = DOM;
})(window, document);