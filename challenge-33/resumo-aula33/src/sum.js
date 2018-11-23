'use strict';

function sum(num1, num2){
  if(isEmpty(num1) || !num2) {
    return new Error('Passe dois números por parâmetro');
  }

  if( !isNumber(num1) || !isNumber(num2) ){
    return new Error('Os parâmetros devem ser números!');
  }
  return num1 + num2;
}

function isEmpty(arg) {
  return !arg;
}

function isNumber(arg) {
  return Object.prototype.toString.call(arg) === '[object Number]';
}

module.exports = sum;