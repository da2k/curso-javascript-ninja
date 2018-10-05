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

  function app() {
    return {
      init: function init() {
        this.bindEvents();
        this.getCompanyInfo();
      },

      getCompanyInfo: function getCompanyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.handleReadyStateChange, false);
      },

      handleReadyStateChange: function handleReadyStateChange() {
        if (app().isReady.call(this)) {
          app().populateCompanyInfo.call(this)
        }
      },

      populateCompanyInfo: function populateCompanyInfo() {
        var companyInfo = JSON.parse(this.responseText);
        new DOM('[data-js="company-name"]').get(0)[0].textContent = companyInfo.name;
        new DOM('[data-js="company-phone"]').get(0)[0].textContent = companyInfo.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      },

      bindEvents: function bindEvents() {
        var $formRegister = new DOM('[data-js="form-register"]');

        $formRegister.on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var $tableCarsTbody = new DOM('[data-js="table-cars"] tbody').get(0)[0];

        $tableCarsTbody.appendChild(app().createNewCar());
      },

      createNewCar: function createNewCar() {
        var $fragment = document.createDocumentFragment();
        var $tr = document.createElement('tr');
        var $tdImage = document.createElement('td');
        var $image = document.createElement('img');
        var $tdModel = document.createElement('td');
        var $tdYear = document.createElement('td');
        var $tdPlate = document.createElement('td');
        var $tdColor = document.createElement('td');

        $image.src = new DOM('[data-js="image"]').get(0)[0].value;
        $tdImage.appendChild($image);
        
        $tdModel.textContent = new DOM('[data-js="model"]').get(0)[0].value;
        $tdYear.textContent = new DOM('[data-js="year"]').get(0)[0].value;
        $tdPlate.textContent = new DOM('[data-js="plate"]').get(0)[0].value;
        $tdColor.textContent = new DOM('[data-js="color"]').get(0)[0].value;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdModel);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdPlate);
        $tr.appendChild($tdColor);

        return $fragment.appendChild($tr);
      },
    };
  }

  app().init();
})(DOM);
