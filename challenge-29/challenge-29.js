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
      init: function () {
        console.log('app init');
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        $('[data-js="cadastro"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $tableCar = $('[data-js="table-cadastro"]').get();
        $tableCar.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {

        // cria o fragmento a tr e a td
        var $fragment = document.createDocumentFragment();
        var $tr = document.createElement('tr');
        var $tdImage = document.createElement('td');
        var $image = document.createElement('img');
        var $tdMarca = document.createElement('td');
        var $tdAno = document.createElement('td');
        var $tdPlaca = document.createElement('td');
        var $tdCor = document.createElement('td');

        // em cada td coloca o valor dos inputs
        $tdImage.textContent = $('[data-js="imagem"]').get().value;
        $tdMarca.textContent = $('[data-js="marcaModelo"]').get().value;
        $tdAno.textContent = $('[data-js="ano"]').get().value;
        $tdPlaca.textContent = $('[data-js="placa"]').get().value;
        $tdCor.textContent = $('[data-js="cor"]').get().value;

        $image.setAttribute('src', $('[data-js="imagem"]').get().value);
        $tdImage.appendChild($image);

        // adiciona cada td dentro da tr
        $tr.appendChild($tdImage);
        $tr.appendChild($tdMarca);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdPlaca);
        $tr.appendChild($tdCor);

        return $fragment.appendChild($tr);
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'company.json', true); // true chama de forma assincrona
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if (app.isReady.call(this)) //  o this dentro dele é o ajax
          return;
        var data = JSON.parse(this.responseText); // converte para um objeto JS
        var $companyName = $('[data-js="company-name"]').get();
        var $companyPhone = $('[data-js="company-phone"]').get();
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  })();

  app.init();

})(window.DOM);
