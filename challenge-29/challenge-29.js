(function ($, doc) {
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

  function app () {
    return {
      init: function init () {
        this.initEvents();
        this.makeRequest('GET', '/company.json', this.handleAjax);
      },

      initEvents: function initEvents () {
        $('[data-js="submit-form"]').on('click', this.handleSubmit);
      },
    
      makeRequest: function makeRequest (method, url, callback) {
        var ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send();
        ajax.addEventListener('readystatechange', callback);
      },
    
      handleAjax: function handleAjax () {
      if( app().isRequestOk(this) ) {
        try{
            var data = JSON.parse(this.responseText);
            $('[data-js="interprise-name"]').get().textContent = data.name;
            $('[data-js="interprise-number"]').get().textContent = data.phone;
          }catch(e){
            console.log(e);
          }
        }
      },

      appendTdOnTr: function appendTdOnTr (tr, text) {
        var newTd = doc.createElement('td');
        var textTd = doc.createTextNode(text);
        newTd.appendChild(textTd);
        tr.appendChild(newTd);
      },

      handleSubmit: function handleSubmit (event) {
        event.preventDefault();
        var newLine = doc.createElement('tr');
        app().appendTdOnTr(newLine, $('[data-js="input-image"]').get().value);
        app().appendTdOnTr(newLine, $('[data-js="input-brand"]').get().value);
        app().appendTdOnTr(newLine, $('[data-js="input-year"]').get().value);
        app().appendTdOnTr(newLine, $('[data-js="input-color"]').get().value);
        $('[data-js="car-table"]').get().appendChild(newLine);
      },

      isRequestOk: function isRequestOk (request) {
        return request.readyState === 4 && request.status === 200;
      }
    }
  }

  app().init();

})(window.DOM, document);
