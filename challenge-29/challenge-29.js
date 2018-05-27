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
  var app = (function() {
    return {
      init : function() {
        console.log('App init...');
        this.loadInfo();
        this.initEvents();
      },
      loadInfo : function loadInfo() {
        console.log('Loading company info...');
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },
      getCompanyInfo : function getCompanyInfo() {
        if (!app.isReady.call(this))
          return;
        let data = JSON.parse(this.responseText);
        const $infoCompany = $('[data-js="company-name"]').get();
        const $infoPhone = $('[data-js="company-phone"]').get();
        $infoCompany.textContent = data.name;
        $infoPhone.textContent = data.phone;
      },
      isReady : function isReady() {
        return this.readyState === 4 && this.status === 200;
      },
      initEvents : function initEvents() {
        const $formulario = $('form');
        $formulario.on('submit', this.handleFormSubmit);
      },
      handleFormSubmit : function handleFormSubmit(e) {
        e.preventDefault();
        let $table = $('[data-js="tabela-carros"]').get();
        $table.appendChild(app.insertNewCar());
      },
      insertNewCar : function insertNewCar() {
        const $fragment = document.createDocumentFragment();
        const $linha = document.createElement('tr');
        const $tdImagem = document.createElement('td');
        const $tdMarca = document.createElement('td');
        const $tdModelo = document.createElement('td');
        const $tdPlaca = document.createElement('td');
        const $tdAno = document.createElement('td');
        const $tdCor = document.createElement('td');

        const $imagem = document.createElement('img');
        $imagem.setAttribute('src', $('[data-js="input-imagem"]').get().value);
        $imagem.setAttribute('height', '100px');
        $imagem.setAttribute('width', '150px');
        $tdImagem.appendChild($imagem);

        $tdMarca.textContent = $('[data-js="input-marca"]').get().value;
        $tdModelo.textContent = $('[data-js="input-modelo"]').get().value;
        $tdPlaca.textContent = $('[data-js="input-placa"]').get().value;
        $tdAno.textContent = $('[data-js="input-ano"]').get().value;
        $tdCor.textContent = $('[data-js="input-cor"]').get().value;

        $linha.appendChild($tdImagem);
        $linha.appendChild($tdMarca);
        $linha.appendChild($tdModelo);
        $linha.appendChild($tdPlaca);
        $linha.appendChild($tdAno);
        $linha.appendChild($tdCor);

        return $fragment.appendChild($linha);
      }
    };
  })();

  app.init();


})(window.DOM);
