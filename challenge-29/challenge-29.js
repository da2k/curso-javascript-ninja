(function(win, doc, DOM) {
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
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        var $form = new DOM('[data-js="form"]');
        $form.on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var $tbody = new DOM('[data-js="tbody"]');
        $tbody.get()[0].appendChild(app().createNewCar());
      },

      createNewCar: function createNewCar() {
        var $fragment = doc.createDocumentFragment();

        var $tr = doc.createElement('tr');



        var $tdImage = doc.createElement('td');
        var $image = doc.createElement('img');
        var $tdBrand = doc.createElement('td');
        var $tdYear = doc.createElement('td');
        var $tdBoard = doc.createElement('td');
        var $tdColor = doc.createElement('td');

        $image.src = new DOM('[data-js="image-car"]').get()[0].value;

        $tdImage.appendChild($image);
        $tdBrand.textContent = new DOM('[data-js="model-car"]').get()[0].value;
        $tdYear.textContent = new DOM('[data-js="year-car"]').get()[0].value;
        $tdBoard.textContent = new DOM('[data-js="board-car"]').get()[0].value;
        $tdColor.textContent = new DOM('[data-js="car-color"]').get()[0].value;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdBoard);
        $tr.appendChild($tdColor);

        return $fragment.appendChild($tr);
      },

      companyInfo: function companyInfo() {

        var request = new XMLHttpRequest();

        request.open('GET', 'company.json');

        request.send();

        request.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if( !app().isRequestOk.call(this) )
          return;

        var data = JSON.parse(this.responseText);
        var $companyName = new DOM('[data-js="name-company"]');
        var $companyPhone = new DOM('[data-js="phone-company"]');
        $companyName.get()[0].textContent = data.name;
        $companyPhone.get()[0].textContent = data.phone;
      },

      isRequestOk: function isRequestOk() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  }


  app().init();

})(window, document, window.DOM);
