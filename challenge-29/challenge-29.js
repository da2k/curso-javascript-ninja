(function(DOM, document){
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

  function app(){
    var ajax;
    var fieldsCar;
    var urlDataCompany;
    var formCar;
    var fieldsCompany;
    var containerCar;

    function initialize(){
      settingVariables();
      initEvents();
      handleAjax();
    }

    function settingVariables(){
      fieldsCar = [
        '[data-js="input-imagem"]',
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
      containerCar = '[data-js="container-cars"]';
    }

    function initEvents(){
      new DOM(formCar).get()[0].addEventListener('submit', handleFormCar, false);
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
      new DOM(fieldsCompany.name).get()[0].textContent = data.name;
      new DOM(fieldsCompany.phone).get()[0].textContent = data.phone;
    }

    function handleFormCar(event){
      event.preventDefault();
      fillRowTableCar();
    }

    function fillRowTableCar(){
      var tr = document.createElement('tr');
      fieldsCar.forEach(function(prop){
        tr.appendChild(createCellTable(new DOM(prop).get()[0].value));
      });
      new DOM(containerCar).get()[0].appendChild(tr);
      clearFields();
    }

    function createCellTable(value){
      var td = document.createElement('td');
      td.textContent = value;
      return td;
    }

    function clearFields(){
      fieldsCar.forEach(function(prop){
        new DOM(prop).get()[0].value = '';
      });
    }

    return {
      initialize: initialize
    };
  }

  app().initialize();

})(window.DOM, document);
