(function(win, doc) {
  'use strict';

  function DOM(elements) {
    if(!(this instanceof DOM))
      return new DOM(elements);

    this.element = doc.querySelectorAll(elements);

  }

  // test object
  function CreateTestObj() {
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

  var testeObject = new CreateTestObj();

  // Array nodeliss

  DOM.prototype.on = function methodDomOn(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.off = function methodDomOff(eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventType, callback, false);
    })
  }

  // Precisei passar o prototype aqui para o metodo funcionar no data
  DOM.prototype.get = function methodDomGet(index) {
    if(!index)
      return this.element[0];
    return this.element[index];
  }


  DOM.isArray = function isArray(object, param) {
    return testeObject.createObj(object) === '[object Array]';
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

  win.DOM = DOM;
})(window, document)

