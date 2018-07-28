(function(win, doc){

    'use strict';

    function DOM (node) {
        this.nodeList = doc.querySelectorAll(node);
    }
    DOM.prototype.on = function (event, callback) {
        Array.prototype.forEach.call(this.nodeList, function(node) {
            return node.addEventListener(event, callback);
        });
    };
    DOM.prototype.get = function () {
        return this.nodeList;
    };

    win.DOM = DOM;

})(window, document);
