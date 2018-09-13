(function() {
  function DOM(elements) {
    if (!(this instanceof DOM)) return new DOM(elements);

    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    this.element.forEach(function(element) {
      element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    this.element.forEach(function(element) {
      element.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get(index) {
    if (!index) return this.element[0];
    return this.element[index];
  };

  DOM.prototype.applyMethod = function applyMethod(method, callback) {
    switch (method) {
      case 'forEach':
        return Array.prototype.forEach.call(this.element, callback);
      case 'map':
        return Array.prototype.map.call(this.element, callback);
      case 'filter':
        return Array.prototype.filter.call(this.element, callback);
      case 'reduce':
        return Array.prototype.reduce.call(this.element, callback);
      case 'reduceRight':
        return Array.prototype.reduceRight.call(this.element, callback);
      case 'every':
        return Array.prototype.every.call(this.element, callback);
      case 'some':
        return Array.prototype.some.call(this.element, callback);
    }
  };

  DOM.prototype.verifyType = function verifyType(param, type) {
    return Object.prototype.toString.call(param) === '[object ' + type + ']';
  };

  window.DOM = DOM;
})();
