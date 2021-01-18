(function(){

    function DOM(elements) {
        this.element = document.querySelectorAll(elements)
    }
    
    DOM.prototype.on = function(event, callback){
        Array.prototype.map.call(this.element, function(element){
            element.addEventListener(event, callback);
        });
    }
    
    DOM.prototype.off = function(event, callback){
        Array.prototype.map.call(this.element, function(element) {
        element.removeEventListener(event,  callback, false);
        }
    )}
    
    DOM.prototype.getDomElements = function() {
        return this.element;
    }
    
    DOM.prototype.forEach = function() {
        return Array.prototype.forEach.apply( this.element, arguments );
    }
    
    DOM.prototype.map = function() {
        return Array.prototype.map.apply( this.element, arguments );
    }
    
    DOM.prototype.filter = function() {
        return Array.prototype.filter.apply( this.element, arguments );
    }
    
    DOM.prototype.reduce = function() {
        return Array.prototype.reduce.apply( this.element, arguments );
    }
    
    DOM.prototype.reduceRight = function() {
        return Array.prototype.reduceRight.apply( this.element, arguments );
    }
    
    DOM.prototype.every = function() {
        return Array.prototype.every.apply( this.element, arguments );
    }
    
    DOM.prototype.some = function() {
        return Array.prototype.some.apply( this.element, arguments );
    }
    window.DOM = DOM;

})();