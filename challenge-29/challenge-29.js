(function (DOM, AJAX) {
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
      getCompanyData();
      $btnCarForm.on('click', handleSubmitCarForm);
    }

    function getCompanyData() {
      AJAX.get('./company.json', function (data) {
        if (!data.err) {
          $companyName.getFirst().textContent = data.name;
          $companyTelephone.getFirst().textContent = data.phone;
        }
      });
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
        updateTableCar(newCarObj);
        clearForm();
      }
    }

    function clearForm() {
      $carImage.getFirst().value = '';
      $carBrand.getFirst().value = '';
      $carYear.getFirst().value = '';
      $carPlate.getFirst().value = '';
      $carColor.getFirst().value = '';
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

    function updateTableCar(obj) {

      var $fragment = document.createDocumentFragment();
      var $newTr = document.createElement('tr');

      $newTr.appendChild(_createImg(obj.image));
      $newTr.appendChild(_createTd(obj.brand));
      $newTr.appendChild(_createTd(obj.year));
      $newTr.appendChild(_createTd(obj.plate));
      $newTr.appendChild(_createTd(obj.color));

      $fragment.appendChild($newTr)

      $tbodyListCars.getFirst().appendChild($fragment);
    }

    function _createTd(text) {
      var $newTd1 = document.createElement('td');
      $newTd1.textContent = text;
      return $newTd1;
    }

    function _createImg(url) {
      var $td = _createTd('');
      var $newImg = document.createElement('img');
      $newImg.src = url;
      $td.appendChild($newImg)
      return $td;
    }

    function handleSubmitCarForm(e) {
      e.preventDefault();
      saveCar();
    }

    return {
      init: init
    };
  }

  appModule().init();
})(window.DOM, window.AJAX);
