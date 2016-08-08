(function($) {
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
  Separe o nosso módulo de $ criado nas últimas aulas em
  um arquivo $.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

var app = (function() {
    return {
      init : function() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents :  function initEvents() {
        $('[data-js="main-form"]').on('submit', this.handleSubmit);
      },

      handleSubmit : function handleSubmit(event) {
        event.preventDefault();

        var $resultsTable = $('[data-js="results-table"]').get();
        $resultsTable.appendChild(app.createNewCar());
      },

      createNewCar : function createNewCar() {
        var $fragment = document.createDocumentFragment();
        var $tr = document.createElement('tr');
        var $tdCarImage = document.createElement('td');
        var $image = document.createElement('img');
        var $tdCarModel = document.createElement('td');
        var $tdCarYear = document.createElement('td');
        var $tdCarPlate = document.createElement('td');
        var $tdCarColor = document.createElement('td');

        $image.setAttribute('src',  $('[data-js="car-image"]').get().value);
        $tdCarImage.appendChild($image);

        $tdCarModel.textContent = $('[data-js="car-model"]').get().value;
        $tdCarYear.textContent = $('[data-js="car-year"]').get().value;
        $tdCarPlate.textContent = $('[data-js="car-plate"]').get().value;
        $tdCarColor.textContent = $('[data-js="car-color"]').get().value;

        $tr.appendChild($tdCarImage);
        $tr.appendChild($tdCarModel);
        $tr.appendChild($tdCarYear);
        $tr.appendChild($tdCarPlate);
        $tr.appendChild($tdCarColor);

        return $fragment.appendChild($tr);
      },

      companyInfo : function companyInfo() {
        var xhr = new XMLHttpRequest;
        xhr.open('GET', '/company.json', true);
        xhr.send();
        xhr.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo : function getCompanyInfo() {
        if(!app.isReady.call(this)) {
          return;
        } else {
          var data = JSON.parse(this.responseText);
          var $companyName = $('[data-js="company-name"]').get();
          var $companyPhone = $('[data-js="company-phone"]').get();

          $companyName.textContent = data.name;
          $companyPhone.textContent = data.name;
        }
      },

      isReady : function isReady() {
        return this.readyState === 4 && this.status === 200;
      },
    };
  })();

  app.init();

})(window.DOM);
