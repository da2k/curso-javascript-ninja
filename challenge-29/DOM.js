(function(win) {

  function DOM(nodeName){
    this.element = getNodesWithName(nodeName);

    function getNodesWithName( nodeName ){
      return document.querySelectorAll( nodeName );
    }
  }

  DOM.prototype.on = function on( event, clickHandle ) {
    this.goThroughElementsToExecuteCallback(this.get(), function( item ){
      item.addEventListener(event, clickHandle, false);
    });
  };

  DOM.prototype.off = function off( event, handleRemove ) {
    this.goThroughElementsToExecuteCallback(this.get() , function( item ){
      item.removeEventListener(event, handleRemove, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.goThroughElementsToExecuteCallback = function goThroughElementsToExecuteCallback(elements, callback){
    Array.prototype.forEach.call( elements, function(item){
      callback(item);
    });
  }

  DOM.prototype.forEach = function forEach(){
    Array.prototype.forEach.apply(this.element, arguments);
  }

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments);
  }

  DOM.prototype.filter = function filter(){
    return Array.prototype.filter.apply(this.element, arguments);
  }

  DOM.prototype.reduce = function reduce(){
      return Array.prototype.reduce.apply(this.element, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight(){
      return Array.prototype.reduceRight.apply(this.element, arguments);
  }

  DOM.prototype.every = function every(){
    return Array.prototype.every.apply(this.element, arguments);
  }

  DOM.prototype.some = function some(){
    return Array.prototype.some.apply(this.element, arguments);
  }

  DOM.is = function is( obj ){
   return Object.prototype.toString.call( obj );
  }

  DOM.isArray = function isArray( obj ){
    return DOM.is( obj ).includes('Array');
  }

  DOM.isObject = function isObject( obj ){
    return DOM.is( obj ).includes('Object');
  }

  DOM.isFunction = function isFunction( obj ){
    return DOM.is( obj ).includes( 'Function' );
  }

  DOM.isNumber = function isNumber( obj ){
    return DOM.is( obj ).includes( 'Number' );
  }

  DOM.isString = function isString( obj ){
    return DOM.is( obj ).includes( 'String' );
  }

  DOM.isBoolean = function isBoolean( obj ){
    return DOM.is( obj ).includes( 'Boolean' );
  }

  DOM.isNull = function isNull( obj ){
    return DOM.is( obj ).includes( 'Null' ) || DOM.is( obj ).includes( 'Undefined' );
  }

  win.DOM = DOM;

})(window);
