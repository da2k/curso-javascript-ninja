(() => {
  'use strict';
  
  const obj = {
    prop1: 'prop1',
    prop1: 'prop2',
    prop3: 'prop3'
  }

  console.log(obj.prop1);
})();