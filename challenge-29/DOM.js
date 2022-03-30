(function(win){
    function DOM(elements) {
        this.element = document.querySelectorAll(elements);

        this.on = function(evento, func) {
            this.element.forEach(function(element) {
                element.addEventListener(evento, func, false);
            })
        };

        this.off = function() {
            this.element.forEach(function(element) {
                element.removeEventListener(evento, func, false);
            })
        };

        this.get = function() {
            return this.element;
        };
    }

    win.DOM = DOM;
})(window);