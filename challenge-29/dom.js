(function(win, doc) {
  'use strict';

  function DOM(nodes) {
    if (!(this instanceof DOM)) {
      return new DOM(nodes);
    }

    this.element = doc.querySelectorAll(nodes);
    this.on = function (event, callback) {
      Array.prototype.forEach.call(this.element, function (el) {
        el.addEventListener(event, callback, false);
      });
    };
    this.off = function (event, callback) {
      Array.prototype.forEach.call(this.element, function (el) {
        el.removeEventListener(event, callback, false);
      });
    };
    this.get = function (index) {
      if (!index)
        return this.element[0];
      return this.element[index];
    };
    this.forEach = function () {
      return Array.prototype.forEach.apply(this.element, arguments);
    };
    this.map = function () {
      return Array.prototype.map.apply(this.element, arguments);
    };
    this.filter = function () {
      return Array.prototype.filter.apply(this.element, arguments);
    };
    this.reduce = function () {
      return Array.prototype.reduce.apply(this.element, arguments);
    };
    this.reduceRight = function () {
      return Array.prototype.reduceRight.apply(this.element, arguments);
    };
    this.every = function () {
      return Array.prototype.every.apply(this.element, arguments);
    };
    this.some = function () {
      return Array.prototype.some.apply(this.element, arguments);
    };
  }

  win.DOM = DOM;
})(window, document);
