(function (doc, $, ajax) {
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

  function app() {

    function initEvents() {
      $('[data-js="formCarro"]').on('submit', handleSubmit.bind(this));
    }

    function loadCompanyInfo() {
      ajax('/company.json').get(function (response) {
        $('[data-js="companyName"]').get().textContent = response.name;
        $('[data-js="companyPhone"]').get().textContent = response.phone;
      })
    }

    function handleSubmit(event) {
      event.preventDefault();
      this.addRow(this.getFormInputs());
    }

    function getFormInputs() {
      return {
        imagem: $('[data-js=inputImagem]').get().value,
        marca: $('[data-js=inputMarca]').get().value,
        ano: $('[data-js=inputAno]').get().value,
        placa: $('[data-js=inputPlaca]').get().value,
        cor: $('[data-js=inputCor]').get().value
      };
    }

    function addRow(jsonCar) {
      var tableBody = $('[data-js="tableCar"]').get().lastElementChild;
      tableBody.appendChild(this.createRowFragment(jsonCar));
    }

    function createRowFragment(jsonCar) {
      var $fragment = doc.createDocumentFragment();
      var $tr = doc.createElement('tr');
      Object.keys(jsonCar).forEach(function (field) {
        var $td = doc.createElement('td');
        if (field === 'imagem') {
          var $img = doc.createElement('img');
          $img.setAttribute('src', jsonCar[field])
          $td.appendChild($img);
        } else {
          $td.textContent = jsonCar[field];
        }
        $tr.appendChild($td);
      });
      return $fragment.appendChild($tr);
    }

    return {
      init: function () {
        this.initEvents();
        this.loadCompanyInfo();
      },
      initEvents: initEvents,
      loadCompanyInfo: loadCompanyInfo,
      handleSubmit: handleSubmit,
      getFormInputs: getFormInputs,
      addRow: addRow,
      createRowFragment: createRowFragment
    }
  }
  app().init();

})(document, window.DOM, window.AJAX);
