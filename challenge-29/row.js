(function (win, doc) {
  "use strict";

  function addNewCar(car) {
    var $tbody = doc.querySelector("tbody");
    var $row = doc.createElement("tr");
    var $cell1 = doc.createElement("td");
    var $cell2 = doc.createElement("td");
    var $cell3 = doc.createElement("td");
    var $cell4 = doc.createElement("td");
    var $cell5 = doc.createElement("td");
    fillCells();
    appendCellsToRow();
    appendRowToTable();

    function fillCells() {
      $cell1.innerHTML = car.brand;
      $cell2.innerHTML = car.model;
      $cell3.innerHTML = car.year;
      $cell4.innerHTML = car.number;
      $cell5.innerHTML = car.color;
    }

    function appendCellsToRow() {
      $row.appendChild($cell1);
      $row.appendChild($cell2);
      $row.appendChild($cell3);
      $row.appendChild($cell4);
      $row.appendChild($cell5);
    }

    function appendRowToTable() {
      $tbody.appendChild($row);
    }
  }

  win.addNewCar = addNewCar;
})(window, document);
