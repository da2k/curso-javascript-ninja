(function(doc, $) {
  'use strict';

  var app = (function () {
    var ajax = new XMLHttpRequest();
    var Car = function Car(img, modelo, ano, placa, cor) {
      this.img = img;
      this.modelo = modelo;
      this.ano = ano;
      this.placa = placa;
      this.cor = cor;

      return this;
    };

    return {
      init: function() {
        this.getCompanyInfo();
        this.initEvents();
      },

      initEvents: function() {
        $('[data-js="formRegisterCar"]').on('submit', this.handleSubmit, false);
      },

      handleSubmit: function handleSubmit(event) {
        event.preventDefault();
        var formData = app.getFormData();
        var car = new Car(formData.img, formData.modelo, formData.ano, formData.placa, formData.cor);
        app.addCarToRecords(car);
      },

      getCompanyInfo: function getCompanyInfo() {
        ajax.open('GET', 'company.json');
        ajax.send();
        ajax.addEventListener('readystatechange', this.ajaxHandle, false);
      },

      fillCompanyInfo: function fillCompanyInfo(data) {
        var $companyName = $('[data-js="companyName"]');
        var $companyPhone = $('[data-js="companyPhone"]');
        $companyName.get().textContent = data.name;
        $companyPhone.get().textContent = data.phone;
      },

      ajaxHandle: function ajaxHandle() {
        if(!app.isRequestSuccessful(ajax))
          return;

        try {
          app.fillCompanyInfo(JSON.parse(ajax.response));
        }catch(e) {
          throw new Error('Aconteceu um probleminha');
        }
      },

      isRequestSuccessful: function isRequestSuccessful(request) {
        return request.readyState === 4 && request.status === 200;
      },

      getFormData: function getFormData() {
        return {
          img: $('[data-js="imgInput"]').get().value,
          modelo: $('[data-js="modeloInput"]').get().value,
          ano: $('[data-js="anoInput"]').get().value,
          placa: $('[data-js="placaInput"]').get().value,
          cor: $('[data-js="corInput"]').get().value
        };
      },

      addCarToRecords: function addCarToRecords(obj) {
        var docFragment = doc.createDocumentFragment();
        var newRow = doc.createElement('tr');

        for(var prop in obj) {
          var newColumn = doc.createElement('td');
          if(prop === 'img') {
            var $tdImg = doc.createElement('img');
            $tdImg.setAttribute('src', obj[prop]);
            newColumn.appendChild($tdImg);
          } else {
            newColumn.textContent = obj[prop];
          }
          newRow.appendChild(newColumn);
        }

        docFragment.appendChild(newRow);
        $('[data-js="recordsTable"]').get().children[1].appendChild(docFragment);
      }
    };
  })();

  app.init();
})(document, window.DOM);
