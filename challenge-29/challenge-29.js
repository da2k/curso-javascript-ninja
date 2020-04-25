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

  var app = (function appController() {
    return {
      init: function() {
        this.companyInfo();
        this.initEvents();
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json');
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, true);
      },

      getCompanyInfo: function getCompanyInfo() {
        if(app.isReady.call(this)) {
          var data = JSON.parse(this.responseText);
          var $companyName = $('[data-js="company-name"]').get();
          var $companyPhone = $('[data-js="company-phone"]').get();
          $companyName.textContent = data.name;
          $companyPhone.textContent = data.phone;
        }
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      },
        
      initEvents: function initEvents() {
        $('[data-js="main-form"]').on('submit', this.handleSubmit);
      },
      
      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $tableCar = $('[data-js="table-car"]').get();
        $tableCar.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        var $fragment = document.createDocumentFragment();
        var $tr = document.createElement('tr');
        var $tdImagem = document.createElement('td');
        var $imagem = document.createElement('img');
        var $tdMarcaModelo = document.createElement('td');
        var $tdAno = document.createElement('td');
        var $tdCor = document.createElement('td');
        var $tdPreco =  document.createElement('td');

        $imagem.setAttribute('src', $('[data-js="imagem"]').get().value);
        $tdImagem.appendChild($imagem);

        $tdMarcaModelo.textContent = $('[data-js="marca-modelo"]').get().value;
        $tdAno.textContent = $('[data-js="ano"]').get().value;
        $tdCor.textContent = $('[data-js="cor"]').get().value;
        $tdPreco.textContent = $('[data-js="preco"]').get().value;

        $tr.appendChild($tdImagem);
        $tr.appendChild($tdMarcaModelo);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdCor);
        $tr.appendChild($tdPreco);

        return $fragment.appendChild($tr);
      },
    }
  })();

  app.init();
})(window.DOM);