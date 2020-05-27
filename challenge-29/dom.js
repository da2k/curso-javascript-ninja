(function (win, doc) {
  "use strict";
  function DOM(selector) {
    this.element = doc.querySelector(selector);
    this.getValue = function () {
      return this.element.value;
    };
    this.clearField = function () {
      this.element.value = "";
    };
  }

  win.DOM = DOM;
})(window, document);
