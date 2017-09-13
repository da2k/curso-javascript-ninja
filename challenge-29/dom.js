(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  // test object
  function createTestObj() {
    this.createObj = function createObjectProto(objectTarget) {
      return Object.prototype.toString.call(objectTarget)
    };

    this.valueObj = function valueObject(stringNameObject) {
      var listType = ['Array', 'Object', 'Function', 'Number', 'String', 'Boolean', 'Null', 'Undefined'];
      var letterIntial = stringNameObject.split('').slice(0, 1).join().toUpperCase();
      var remainingValue = stringNameObject.slice(1).split('').join('');
      var valueParam = letterIntial + remainingValue;
      var resultList;

      listType.forEach(function (item, index) {
        if (valueParam === item) { resultList = item }
      })

      return '[' + 'object' + ' ' + resultList + ']';
    };

  }

  // Array nodeliss

  DOM.on = function methodDomOn(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    })
  };

  DOM.off = function methodDomOff(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventType, callback, false);
    })
  }

  DOM.get = function methodDomGet() {
    return this.element;
  }


  DOM.isArray = function isArray(param) {
    return testObject.createObj(param) === testObject.valueObj('Array');
  }

  DOM.isObject = function isObject(param) {
    return testObject.createObj(param) === testObject.valueObj('object');
  }

  DOM.isFunction = function isFunction(param) {
    return testObject.createObj(param) === testObject.valueObj('function');
  }

  DOM.isNumber = function isNumber(param) {
    return testObject.createObj(param) === testObject.valueObj('number');
  }

  DOM.isString = function isString(param) {
    return testObject.createObj(param) === testObject.valueObj('string');
  }

  DOM.isBoolean = function isBoolean(param) {
    return testObject.createObj(param) === testObject.valueObj('boolean');
  }

  DOM.isNull = function isNull(param) {
    return testObject.createObj(param) === testObject.valueObj('null') ||
      testObject.createObj(param) === testObject.valueObj('undefined');
  }

  window.DOM = DOM;
})(window, document)
