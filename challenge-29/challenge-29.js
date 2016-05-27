(function($, document){
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

  var app = (function(){
    var ajax;
    var fieldsCar;
    var urlDataCompany;
    var formCar;
    var fieldsCompany;
    var containerCar;
    var fieldImage;

    function initialize(){
      settings();
      initEvents();
      handleAjax();
    }

    function settings(){
      fieldImage = '[data-js="input-imagem"]';
      fieldsCar = [
        fieldImage,
        '[data-js="input-marca"]',
        '[data-js="input-ano"]',
        '[data-js="input-placa"]',
        '[data-js="input-cor"]'
      ];
      urlDataCompany = 'company.json';
      formCar = '[data-js="form-car"]';
      fieldsCompany = {
        name: '[data-js="company-name"]',
        phone: '[data-js="company-phone"]'
      };
      containerCar = '[data-js="wrap-cars"]';
    }

    function initEvents(){
      $(formCar).addEventListener('submit', handleFormCar, false);
    }

    function handleAjax(){
      ajax = new XMLHttpRequest();
      ajax.open('GET', urlDataCompany);
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange, false);
    }

    function handleReadyStateChange(){
      if(isRequestOk())
        fillDataCompany();
    }

    function isRequestOk(){
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillDataCompany(){
      var data = JSON.parse(ajax.responseText);
      $(fieldsCompany.name).textContent = data.name;
      $(fieldsCompany.phone).textContent = data.phone;
    }

    function handleFormCar(event){
      event.preventDefault();
      createRow();
    }

    function createRow(){
      var fragment = document.createDocumentFragment();
      var tr = document.createElement('tr');
      fieldsCar.forEach(function(prop){
        if(fieldImage === prop)
          return tr.appendChild(createImage($(prop).value));
        tr.appendChild(createCell($(prop).value));
      });
      fragment.appendChild(tr);
      $(containerCar).appendChild(fragment);
      clearFields();
    }

    function createImage(value){
      var td = document.createElement('td');
      var img = document.createElement('img');
      img.setAttribute('src', value);
      img.classList.add('image__car');
      td.appendChild(img);
      return td;
    }

    function createCell(value){
      var td = document.createElement('td');
      td.textContent = value;
      return td;
    }

    function clearFields(){
      fieldsCar.forEach(function(prop){
        $(prop).value = '';
      });
    }

    return {
      initialize: initialize
    };
  })();

  app.initialize();

})(window.DOM, document);
