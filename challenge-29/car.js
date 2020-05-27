(function (win) {
  "use strict";

  function Car(brand, model, year, number, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
    this.color = color;
    this.getInfo = function () {
      return {
        brand: this.brand,
        model: this.model,
        year: this.year,
        number: this.number,
        color: this.color,
      };
    };
  }

  win.Car = Car;
})(window);
