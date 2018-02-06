(function($, doc) {
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

  var app = (function() {

    var $companyName = $('[data-js="company-name"]');
    var $companyPhone = $('[data-js="company-phone"]');
    var $form = $('[data-js="form"]');
    var $inputImg = $('[data-js="input-img"]');
    var $inputMarca = $('[data-js="input-marca"]');
    var $inputAno = $('[data-js="input-ano"]');
    var $inputPlaca = $('[data-js="input-placa"]');
    var $inputCor = $('[data-js="input-cor"]');
    var $tbody = $('[data-js="tbody"');

    return { 
      init: function init() {
        console.log('App iniciado!');
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        $form.on('submit', this.handleSubmitForm);
      },

      handleSubmitForm: function handleSubmitForm(e) {
        e.preventDefault();
        $tbody.get().appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        var $fragment = doc.createDocumentFragment();
        var $tr = doc.createElement('tr');
        var $tdImage = doc.createElement('td');
        var $tdMarca = doc.createElement('td');
        var $tdAno = doc.createElement('td');
        var $tdPlaca = doc.createElement('td');
        var $tdCor = doc.createElement('td');
        var $img = doc.createElement('img');

        $img.src = $inputImg.get().value;
        $tdImage.appendChild($img);
        $tdMarca.textContent = $inputMarca.get().value;
        $tdAno.textContent = $inputAno.get().value;
        $tdPlaca.textContent = $inputPlaca.get().value;
        $tdCor.textContent = $inputCor.get().value;

        $inputImg.get().value = '';
        $inputMarca.get().value = '';
        $inputAno.get().value = '';
        $inputPlaca.get().value = '';
        $inputCor.get().value = '';

        $tr.appendChild($tdImage);
        $tr.appendChild($tdMarca);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdPlaca);
        $tr.appendChild($tdCor);

        return $fragment.appendChild($tr);
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();

        ajax.open('GET', '/Desktop/Estudos/Cursos/JavaScript Ninja/challenge-29/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if(!app.isReady.call(this))
          return;

        var data = JSON.parse(this.responseText);

        $companyName.get().textContent = data.name;
        $companyPhone.get().textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  })();

  app.init();

})(window.DOM, document);
