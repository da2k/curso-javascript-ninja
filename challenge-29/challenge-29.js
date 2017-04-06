(function (d, w) {

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


  function app() {

    var $form = $('[data-app="form"]');
    var $inputImage = $('input[name="image"]');
    var $inputModel = $('input[name="model"]');
    var $inputAno = $('input[name="year"]');
    var $inputPlate = $('input[name="plate"]');
    var $inputColor = $('input[name="color"]');
    var $table = $('[data-app="table-data"]');
    var $tableRow = $('[data-app="table-row"]');
    var $tableImagem = $('[data-app="imagem"]');
    var $tableModelo = $('[data-app="modelo"]');
    var $tableAno = $('[data-app="ano"]');
    var $tablePlaca = $('[data-app="placa"]');
    var $tableCor = $('[data-app="cor"]');
    var $companyTitle = $('[data-app="title"]');
    var $companyPhone = $('[data-app="phone"]');
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

    function createAppHeader() {
      var data = parseData();

      if (!data) {
        getMessages('error');
      }

      $companyTitle.get()[0].textContent = data.name;
      $companyPhone.get()[0].textContent = data.phone;
    }

    function handleReadyStateChange() {
      if (isRequestAmazing()) {
        createAppHeader();
      }
    }

    function initAjax() {
      var url = 'company.json';
      ajax.open('GET', url);
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function createCar() {
      var $fragment = document.createDocumentFragment();
      var $tr = document.createElement('tr');
      var $tdImage = document.createElement('td');
      var $tdModel = document.createElement('td');
      var $tdYear = document.createElement('td');
      var $tdPlate = document.createElement('td');
      var $tdColor = document.createElement('td');
      var $image = document.createElement('img');

      $image.setAttribute('src',  $inputImage.get()[0].value);
      $tdImage.appendChild($image);

      $tdModel.textContent = $inputModel.get()[0].value;
      $tdYear.textContent = $inputAno.get()[0].value;
      $tdPlate.textContent = $inputPlate.get()[0].value;
      $tdColor.textContent = $inputColor.get()[0].value;

      $tr.appendChild($tdImage);
      $tr.appendChild($tdModel);
      $tr.appendChild($tdYear);
      $tr.appendChild($tdPlate);
      $tr.appendChild($tdColor);

      return $fragment.appendChild($tr);
    }

    function handleSubmitForm(ev) {
      ev.preventDefault();
      $table.get()[0].appendChild(createCar());
    }

    $form.on('submit', handleSubmitForm);

    function init() {
      initAjax();
    }

    return {
      init: init
    };
  }

  w.app = app();
  w.app.init();

})(document, window);
