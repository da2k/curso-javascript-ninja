(function(DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, que deverá funcionar da
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

  /*
  var $formCadastro = new DOM('[data-js="formCadastro"]');
  var $inputImagem = new DOM('[data-js="inputImagem"]');
  var $inputMarcaModelo = new DOM('[data-js="inputMarcaModelo"]');
  var $inputAno = new DOM('[data-js="inputAno"]');
  var $inputPlaca = new DOM('[data-js="inputPlaca"]');
  var $inputCor = new DOM('[data-js="inputCor"]');
  var $buttonSubmit = new DOM('[data-js="buttonSubmit"]');
  var $display = new DOM('[data-js="display"]');


  $formCadastro.on('submit', handleFormCars);

  function handleFormCars(e) {
    e.preventDefault();
    var p = document.createElement('p');
    var span = document.createElement('span');
    span.textContent = $inputImagem.get()[0].value + ' ';
    span.textContent += $inputMarcaModelo.get()[0].value + ' ';
    span.textContent += $inputAno.get()[0].value + ' ';
    span.textContent += $inputPlaca.get()[0].value + ' ';
    span.textContent += $inputCor.get()[0].value + ' ';
    p.appendChild(span);
    $display.get()[0].appendChild(p);

    console.log($display.get()[0]);
  }
  */
  var app = (function() {
    return {

      init: function() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        var $formCadastro = new DOM('[data-js="formCadastro"]');
        $formCadastro.on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $display = new DOM('[data-js="display"]').get()[0];
        $display.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        var $fragment = document.createDocumentFragment();
        var p = document.createElement('p');
        var span = document.createElement('span');
        // get the items
        var $inputImagem = new DOM('[data-js="inputImagem"]');
        var $inputMarcaModelo = new DOM('[data-js="inputMarcaModelo"]');
        var $inputAno = new DOM('[data-js="inputAno"]');
        var $inputPlaca = new DOM('[data-js="inputPlaca"]');
        var $inputCor = new DOM('[data-js="inputCor"]');

        span.textContent = $inputImagem.get()[0].value + ' - ';
        span.textContent += $inputMarcaModelo.get()[0].value + ' - ';
        span.textContent += $inputMarcaModelo.get()[0].value + ' - ';
        span.textContent += $inputAno.get()[0].value + ' - ';
        span.textContent += $inputPlaca.get()[0].value + ' - ';
        span.textContent += $inputCor.get()[0].value;

        p.appendChild(span);
        $fragment.appendChild(p);

        return $fragment;

      },

      companyInfo: function() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', './company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        // this aqui é o objeto ajax
        if(!app.isReady.call(this))
          return;
        var data = JSON.parse(this.responseText);
        var $companyName = new DOM('[data-js="companyName"]');
        var $companyNumber = new DOM('[data-js="companyNumber"]');
        $companyName.get()[0].textContent = data.name;
        $companyNumber.get()[0].textContent = data.phone;
      },

      isReady: function isReady() {
        return this.status === 200 && this.readyState === 4;
      }


    };
  })();

  app.init();

})(window.DOM);
