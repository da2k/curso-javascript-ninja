(function ($) {

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


  var app = (function appController() {

    var $form = $('[data-app="form"]');
    var $table = $('[data-app="table-data"]');
    var ajax = new XMLHttpRequest();

    function parseData() {
      var result;

      try {
        result = JSON.parse(ajax.responseText);
      } catch (e) {
        result = null;
      }

      return result;
    }

    function isRequestAmazing() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function createHeader() {
      var $companyTitle = $('[data-app="title"]');
      var $companyPhone = $('[data-app="phone"]');
      var data = parseData();

      if (!data) {
        return;
      }

      $companyTitle.get().textContent = data.name;
      $companyPhone.get().textContent = data.phone;
    }

    function handleReadyStateChange() {
      if (isRequestAmazing()) {
        createHeader();
      }
    }

    function initAjax() {
      var url = 'company.json';

      ajax.open('GET', url, true);
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function createCar() {
      var $fragment = document.createDocumentFragment();
      var $tr = document.createElement('tr');
      var $tdImage = document.createElement('td');
      var $tdBrand = document.createElement('td');
      var $tdYear = document.createElement('td');
      var $tdPlate = document.createElement('td');
      var $tdColor = document.createElement('td');
      var $image = document.createElement('img');
      var $inputImage = $('[data-app="car-image"]');
      var $inputModel = $('[data-app="car-model"]');
      var $inputAno = $('[data-app="car-year"]');
      var $inputPlate = $('[data-app="car-plate"]');
      var $inputColor = $('[data-app="car-color"]');

      $image.setAttribute('src', $inputImage.get().value);
      $tdImage.appendChild($image);
      $tdBrand.textContent = $inputModel.get().value;
      $tdYear.textContent = $inputAno.get().value;
      $tdPlate.textContent = $inputPlate.get().value;
      $tdColor.textContent = $inputColor.get().value;
      $tr.appendChild($tdImage);
      $tr.appendChild($tdBrand);
      $tr.appendChild($tdYear);
      $tr.appendChild($tdPlate);
      $tr.appendChild($tdColor);

      return $fragment.appendChild($tr);
    }

    function handleSubmitForm(ev) {
      ev.preventDefault();
      $table.get().appendChild(createCar());
    }

    $form.on('submit', handleSubmitForm);

    return {
      companyInfo: function companyInfo() {
        initAjax();
      },
      init: function init() {
        this.companyInfo();
      }
    };
  })();

  app.init();

})(window.DOM);
