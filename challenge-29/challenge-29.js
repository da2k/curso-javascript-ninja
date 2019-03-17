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
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

var app = (function appController(){

    return {

      init : function init(){
        this.openAjaxConnection();
        this.events();
      },

      openAjaxConnection : function openAjaxConnection() {
        var ajax = new XMLHttpRequest;
        ajax.open('GET' , '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getInfoCompany, false);
      },

      requestOk : function requestOk(){
        return ajax.readyState === 4 && ajax.status === 200;
      },

      getInfoCompany : function getInfoCompany(){
        if(!app.requestOk)
          return;
          var data = JSON.parse(this.responseText);
          var $companyName = $('[data-js="company-name"]');
          var $companyPhone = $('[data-js="company-phone"]');
          $companyName.get().textContent = data.name;
          $companyPhone.get().textContent = data.phone;
      },

      events : function events(){
        $('[data-js="form-register-car"]').on('submit' , this.setInfoTable);
      },

      setInfoTable : function setInfoTable(e){
        e.preventDefault();
        var $tbody = $('[data-js="tbody"]').get();
        $tbody.appendChild(app.createNewTr());
        app.clear();
      },

      createNewTr : function createNewTr(){
        var $fragment = document.createDocumentFragment();

        var $createTr = document.createElement('tr');
        var $tdImage = document.createElement('td');
        var $tdBrand = document.createElement('td');
        var $tdYear = document.createElement('td');
        var $tdBoard = document.createElement('td');
        var $tdColor = document.createElement('td');
        var $image = document.createElement('img');

        $image.src = $('[data-js="field-image-car"]').get().value;
        $tdImage.appendChild($image);

        $tdBrand.textContent = $('[data-js="field-brand"]').get().value;
        $tdYear.textContent = $('[data-js="field-year"]').get().value;
        $tdBoard.textContent = $('[data-js="field-board"]').get().value;
        $tdColor.textContent = $('[data-js="field-color"]').get().value;

        $createTr.appendChild($tdImage);
        $createTr.appendChild($tdBrand);
        $createTr.appendChild($tdYear);
        $createTr.appendChild($tdBoard);
        $createTr.appendChild($tdColor);

        return $fragment.appendChild($createTr);

      },

      clear : function clear(){
        $('[data-js="field-image-car"]').get().value = '';
        $('[data-js="field-brand"]').get().value = '';
        $('[data-js="field-year"]').get().value = '';
        $('[data-js="field-board"]').get().value = '';
        $('[data-js="field-color"]').get().value = '';
      }
    }



  })();

  app.init();

})(window.DOM);
