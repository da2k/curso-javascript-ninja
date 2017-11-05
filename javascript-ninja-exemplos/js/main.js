(function(win, doc) {
  'use strict';

  function Person(name, lastName, favColor) {
    this.name = name;
    this.lastName = lastName;
    this.favColor = favColor;
  }

  Person.prototype.fullName = function fullName() {
    return 'Hi! My name is ' + this.name + ' ' + this.lastName + '.';
  };

  var roger = new Person('Roger', 'Melo');

  console.log(roger.fullName());

})(window, document);
