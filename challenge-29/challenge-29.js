(function(DOM) {
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

  function allCarsApp() {
    var $companyName = new DOM('[data-js="company-name"]');
    var $companyPhone = new DOM('[data-js="company-phone"]');
    var $formCar = new DOM('[data-js="form-insert"]');
    var $carImage = new DOM('[data-js="carImage"]');
    var $carBrandModel = new DOM('[data-js="carBrandModel"]');
    var $carYear = new DOM('[data-js="carYear"]');
    var $carPlate = new DOM('[data-js="carPlate"]');
    var $carColor = new DOM('[data-js="carColor"]');
    var $carsTable = new DOM('[data-js="carsTable"]');
    var ajax = new XMLHttpRequest();
    $formCar.on('submit', handleSubmitFormCar);

    function handleSubmitFormCar(event) {
      event.preventDefault();
      var carFieldsValues = [ $carImage.get()[0].value, $carBrandModel.get()[0].value, $carYear.get()[0].value, $carPlate.get()[0].value, $carColor.get()[0].value ];
      var newTR = document.createElement('tr');
      for (var i = 1; i <= 5; i++) {
        var newTD = document.createElement('td');
        var textForTD = document.createTextNode(carFieldsValues[i-1]);
        newTD.appendChild(textForTD);
        newTR.appendChild(newTD);
      }
      $carsTable.get()[0].appendChild(newTR);
      clearInputs();
    }

    function clearInputs() {
      $carImage.get()[0].value = '';
      $carBrandModel.get()[0].value = '';
      $carYear.get()[0].value = '';
      $carPlate.get()[0].value = '';
      $carColor.get()[0].value = '';
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function showCompanyData() {
      ajax.open('GET', '/company.json');
      ajax.send();
      ajax.addEventListener('readystatechange', function() {
        if ( isRequestOk() ) {
          var dataCompany = JSON.parse(ajax.responseText);
          $companyName.get()[0].textContent = dataCompany.name;
          $companyPhone.get()[0].textContent = dataCompany.phone;
        }
      }, false);
    }
    showCompanyData();

  }

  allCarsApp();

})(window.DOM);
