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


  var app = (function () {

    return {
      initEvents: function initEvents() {
        this.storeInformation();
        this.init();
      },

      storeInformation: function storeInformation() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'data/company.json', true);
        ajax.send()
        ajax.addEventListener('readystatechange', this.getStoreInformation, false);
      },

      getStoreInformation: function getStoreInformation() {
        if(!app.isRequestOk.call(this))
          return;

        var data = JSON.parse(this.responseText);
        var $tituloPagina = $('[data-js="tituloPagina"]').get();
        $tituloPagina.textContent = data.name + ' - ' + data.phone;
      },

      isRequestOk: function isRequestOk() {
        return this.readyState === 4 && this.status === 200;
      },

      init: function init() {
        $('[data-js="formCadastro"]').on('submit', this.handleForm);
      },

      handleForm: function handleForm(e) {
        e.preventDefault();
        var $tBody = $('[data-js="tableBody"]').get();
        $tBody.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        var $fragment = doc.createDocumentFragment();
        var $tr = doc.createElement('tr');
        var $imageTd = doc.createElement('td');
        var $marcaModeloTd = doc.createElement('td');
        var $anoTd = doc.createElement('td');
        var $placaTd = doc.createElement('td');
        var $corTd = doc.createElement('td');
        var $img = doc.createElement('img');

        $img.setAttribute('src', $('[data-js="inputImg"]').get().value);
        $imageTd.appendChild($img);
        $marcaModeloTd.textContent = $('[data-js="inputMarcaModelo"]').get().value;
        $anoTd.textContent = $('[data-js="inputAno"]').get().value;
        $placaTd.textContent = $('[data-js="inputPlaca"]').get().value;
        $corTd.textContent = $('[data-js="inputCor"]').get().value;

        $tr.appendChild($imageTd);
        $tr.appendChild($marcaModeloTd);
        $tr.appendChild($anoTd);
        $tr.appendChild($placaTd);
        $tr.appendChild($corTd);

        return $fragment.appendChild($tr);


      }



    };

  })()

  app.initEvents();


})(window.DOM, document);

