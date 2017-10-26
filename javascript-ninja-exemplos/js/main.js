(function(win, doc) {
    'use strict';

    on('[data-js="input"]', 'keydown', handleInput);
    on('[data-js="select"]', 'change', handleSelect);

    function handleSelect() {
        doc.querySelector('[data-js="input"]').value = this.value;
    }

    function handleInput(event) {
        console.log(this.value);
    }

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    function off(element, eventName, callback) {
        doc.querySelector(element).removeEventListener(eventName, callback, false);
    }

})(window, document);
