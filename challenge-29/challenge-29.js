(function (win, doc, DOM) {
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
      linhas: 0,

      init: function init() {
        this.companyInfo();
        this.initEvents();

        this.valorInicial();
      },

      valorInicial: function valorInicial() {
        DOM('[data-js-id="carro-imagem"]').getFirst().value = 'http://carros.ninja/wp-content/uploads/2015/07/Celta-Vermelho.png';
        DOM('[data-js-id="carro-marca-modelo"]').getFirst().value = 'Chevrolet Celta LTS';
        DOM('[data-js-id="carro-ano"]').getFirst().value = '2010';
        DOM('[data-js-id="carro-placa"]').getFirst().value = 'ABC-1234';
        DOM('[data-js-id="carro-cor"]').getFirst().value = 'Vermelho';
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if (!app.isReady(this)) {
          return;
        };
        var data = JSON.parse(this.responseText);
        DOM.setTextContent('[data-js-id="empresa-nome"]', data.name)
        DOM.setTextContent('[data-js-id="empresa-telefone"]', data.phone)
      },

      isReady: function isReady(context) {
        return context.readyState === 4 && context.status === 200;
      },
      initEvents: function initEvents() {
        DOM('[data-js-id="form-carros"]').on('submit', this.handleSubmit);
      },
      handleSubmit: function handleSubmit(evt) {
        evt.preventDefault();
        DOM('[data-js-id="carro-tbody"]').getFirst().appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        var $fragmento = doc.createDocumentFragment();
        var $tr = doc.createElement('tr');

        var $thNumber = doc.createElement('th');
        $thNumber.setAttribute('scope', 'row');
        $thNumber.textContent = ++app.linhas;

        var $tdImagem = doc.createElement('td');
        var $img = doc.createElement('img');
        $img.setAttribute('src', DOM('[data-js-id="carro-imagem"]').getFirst().value);
        $img.setAttribute( 'class', 'carroimage');
        $tdImagem.appendChild($img);

        var $tdMarcaModelo = doc.createElement('td');
        $tdMarcaModelo.textContent = DOM('[data-js-id="carro-marca-modelo"]').getFirst().value;

        var $tdAno = doc.createElement('td');
        $tdAno.textContent = DOM('[data-js-id="carro-ano"]').getFirst().value;

        var $tdPlaca = doc.createElement('td');
        $tdPlaca.textContent = DOM('[data-js-id="carro-placa"]').getFirst().value;

        var $tdCor = doc.createElement('td');
        $tdCor.textContent = DOM('[data-js-id="carro-cor"]').getFirst().value;

        $tr.appendChild($thNumber);
        $tr.appendChild($tdImagem);
        $tr.appendChild($tdMarcaModelo);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdPlaca);
        $tr.appendChild($tdCor);

        return $fragmento.appendChild($tr);
      }

    };
  })();
  // codigo inicial
  app.init();


})(window, document, window.DOM);