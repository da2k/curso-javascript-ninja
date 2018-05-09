(function () {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function appModule() {

    var $carImage = new DOM('[data-js="car-input-image"]');
    var $carBrand = new DOM('[data-js="car-input-brand"]');
    var $carYear = new DOM('[data-js="car-input-year"]');
    var $carPlate = new DOM('[data-js="car-input-plate"]');
    var $carColor = new DOM('[data-js="car-input-color"]');
    var $btnCarForm = new DOM('[data-js="btn-car-form"]');
    var $tbodyListCars = new DOM('[data-js="car-list-body"]');
    var $companyName = new DOM('[data-js="company-name"]');
    var $companyTelephone = new DOM('[data-js="company-telephone"]');

    var savedCars = [];

    function init() {

      AJAX.get('./company.json', function (data) {
        if (!data.err) {
          $companyName.getFirst().textContent = data.name;
          $companyTelephone.getFirst().textContent = data.phone;
        }
      });

      $btnCarForm.on('click', handleSubmitCarForm);
    }

    function saveCar() {

      var newCarObj = {
        image: $carImage.getFirst().value,
        brand: $carBrand.getFirst().value,
        year: $carYear.getFirst().value,
        plate: $carPlate.getFirst().value,
        color: $carColor.getFirst().value
      };

      if (_isFormValid(newCarObj)) {
        savedCars.push(newCarObj);
        buildCarTr(newCarObj);
      }
    }

    function _isFormValid(objCar) {

      var formIsValid = true;
      for (var prop in objCar) {
        if (objCar.hasOwnProperty(prop)) {
          if (!objCar[prop]) {
            formIsValid = false;
          }
        }
      }
      return formIsValid;
    }

    function handleSubmitCarForm(e) {
      e.preventDefault();
      saveCar();
    }

    function buildCarTr(obj) {

      var newTr = document.createElement('tr');

      var newTd1 = document.createElement('td');
      newTd1.textContent = obj.image;
      newTr.appendChild(newTd1);

      var newTd2 = document.createElement('td');
      newTd2.textContent = obj.brand;
      newTr.appendChild(newTd2);

      var newTd3 = document.createElement('td');
      newTd3.textContent = obj.year;
      newTr.appendChild(newTd3);

      var newTd4 = document.createElement('td');
      newTd4.textContent = obj.plate;
      newTr.appendChild(newTd4);

      var newTd5 = document.createElement('td');
      newTd5.textContent = obj.color;
      newTr.appendChild(newTd5);

      $tbodyListCars.getFirst().appendChild(newTr);
    }

    return {
      init: init
    };
  }

  appModule().init();
})();
