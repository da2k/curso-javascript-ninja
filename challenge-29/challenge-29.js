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

(function ($) {
  'use strict';

  var app = (function () {
    var ajax = new XMLHttpRequest();

    return {
      init: function init() {
        this.loadCompanyInfo();
        this.loadEvents();
      },

      loadCompanyInfo: function loadCompanyInfo() {
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        var data;
        if (!app.isRequestReady.call(this)) return;

        data = app.parseData();
        $('[data-js="title"]').get().innerHTML = data.name;
        $('[data-js="phone"]').get().innerHTML = data.phone;
      },

      isRequestReady: function isRequestReady() {
        return this.readyState === 4 && this.status === 200;
      },

      parseData: function parseData() {
        var result;
        try {
          result = JSON.parse(ajax.responseText);
        } catch (error) {
          result = null;
        }
        return result;
      },

      loadEvents: function loadEvents() {
        $('[data-js="form"]').on('submit', this.handleSubmit, false);
      },

      handleSubmit: function handleSubmit(event) {
        event.preventDefault();
        $('[data-js="table"]').get().appendChild(app.createNewCar());
        app.clearData();
      },

      createNewCar: function createNewCar() {
        var fragment = document.createDocumentFragment();
        var row = document.createElement('tr');
        var image = document.createElement('img');
        var cellImage = document.createElement('td');
        var cellBrand = document.createElement('td');
        var cellYear = document.createElement('td');
        var cellPlate = document.createElement('td');
        var cellColor = document.createElement('td');

        image.setAttribute('src', $('[data-js="image"]').get().value);
        image.setAttribute('width', 100);
        cellImage.appendChild(image);

        cellBrand.textContent = $('[data-js="brand"]').get().value;
        cellYear.textContent = $('[data-js="year"]').get().value;
        cellPlate.textContent = $('[data-js="plate"]').get().value;
        cellColor.textContent = $('[data-js="color"]').get().value;

        row.appendChild(cellImage);
        row.appendChild(cellBrand);
        row.appendChild(cellYear);
        row.appendChild(cellPlate);
        row.appendChild(cellColor);

        return fragment.appendChild(row);
      },

      clearData: function clearData() {
        $('[data-js="image"]').get().value = '';
        $('[data-js="brand"]').get().value = '';
        $('[data-js="year"]').get().value = '';
        $('[data-js="plate"]').get().value = '';
        $('[data-js="color"]').get().value = '';
      }
    };
  }());

  app.init();
}(window.DOM));
