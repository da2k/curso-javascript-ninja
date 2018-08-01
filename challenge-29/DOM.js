(function(win, doc){

    'use strict';

    function DOM (node) {
        if ( !(this instanceof DOM) ) {
            return new DOM(node);
        }
        this.nodeList = doc.querySelectorAll(node);
    }
    DOM.prototype.on = function (event, callback) {
        Array.prototype.forEach.call(this.nodeList, function(node) {
            return node.addEventListener(event, callback);
        });
    };
    DOM.prototype.get = function (index) {
        if (index !== -1) {
            return this.nodeList[index];
        }
        return this.nodeList;
    };

    win.DOM = DOM;

})(window, document);
