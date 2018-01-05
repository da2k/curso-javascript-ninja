(function(doc, DOM) {
  'use strict';

  var $companyName = new DOM('[data-js="companyName"]');
  var $companyPhone = new DOM('[data-js="companyPhone"]');
  var $formRegisterCar = new DOM('[data-js="formRegisterCar"]');
  var $imgInput = new DOM('[data-js="imgInput"]');
  var $modeloInput = new DOM('[data-js="modeloInput"]');
  var $anoInput = new DOM('[data-js="anoInput"]');
  var $placaInput = new DOM('[data-js="placaInput"]');
  var $corInput = new DOM('[data-js="corInput"]');
  var $recordsTable = new DOM('[data-js="recordsTable"]');

  var app = function app() {
    var init = function init() {
      getCompanyInfo();
    };

    var Car = function Car(img, modelo, ano, placa, cor) {
      this.img = img;
      this.modelo = modelo;
      this.ano = ano;
      this.placa = placa;
      this.cor = cor;

      return this;
    };

    var ajax = new XMLHttpRequest();

    var getCompanyInfo = function getCompanyInfo() {
      ajax.open('GET', 'company.json');
      ajax.send();
      ajax.addEventListener('readystatechange', ajaxHandle);
    };

    var fillCompanyInfo = function fillCompanyInfo(data) {
      $companyName.get()[0].textContent = data.name;
      $companyPhone.get()[0].textContent = data.phone;
    };

    var isRequestSuccessful = function isRequestSuccessful(request) {
      return request.readyState === 4 && request.status === 200;
    };

    var ajaxHandle = function ajaxHandle() {
      if(!isRequestSuccessful(ajax))
        return;

      try {
        fillCompanyInfo(JSON.parse(ajax.response));
      }catch(e) {
        throw new Error('Aconteceu um probleminha');
      }
    };

    var getFormData = function getFormData() {
      return {
        img: $imgInput.get()[0].value,
        modelo: $modeloInput.get()[0].value,
        ano: $anoInput.get()[0].value,
        placa: $placaInput.get()[0].value,
        cor: $corInput.get()[0].value
      };
    };

    var formRegisterCarHandle = function formRegisterCarHandle(event) {
      event.preventDefault();
      var formData = getFormData();
      var car = new Car(formData.img, formData.modelo, formData.ano, formData.placa, formData.cor);
      addCarToRecords(car);
    };

    var addCarToRecords = function addCarToRecords(obj) {
      var docFragment = doc.createDocumentFragment();
      var newRow = doc.createElement('tr');

      for(var prop in obj) {
        var newColumn = doc.createElement('td');
        newColumn.textContent = obj[prop];
        newRow.append(newColumn);
      }

      docFragment.append(newRow);
      $recordsTable.get()[0].children[1].append(docFragment);
    };

    $formRegisterCar.on('submit', formRegisterCarHandle);

    init();
  };

  app();
})(document, window.DOM);
