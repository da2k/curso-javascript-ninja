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

  var app = (function appController(win, doc) {
    var ajax;
    var getInput = getInputs();

    function getInputs() {
      var inputs = {
        imagem: $('[data-js=car-imagem]').get(),
        marcaModelo: $('[data-js=car-marcamodelo]').get(),
        ano: $('[data-js=car-ano]').get(),
        placa: $('[data-js=car-placa]').get(),
        cor: $('[data-js=car-cor]').get()
      };
      return inputs;
    }

    function clearForm() {
      getInput['imagem'].value = "";
      getInput['marcaModelo'].value = "";
      getInput['ano'].value = "";
      getInput['placa'].value = "";
      getInput['cor'].value = "";
    }

    function initValues() {
      getInput['imagem'].value = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLd2U9PSVTK2s5LV7_J2SPiWmI97lt1WaYciV1l_selrvM2lg0IQ";
      getInput['marcaModelo'].value = "VW Gol";
      getInput['ano'].value = "2019";
      getInput['placa'].value = "CCC-0000";
      getInput['cor'].value = "Azul";
    }

    return {
      init: function init() {
        this.initCompanyInformation();
        this.initEvents();
        initValues();
      },

      initCompanyInformation: function initCompanyInformation() {
        app.showCompanyInfo();
      },

      showCompanyInfo: function showCompanyInfo() {
        ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json');
        ajax.send();
        ajax.addEventListener('readystatechange', app.handleReadyStateChange, false);
      },

      handleReadyStateChange: function handleReadyStateChange() {
        if (app.isRequestOK()) {
          var data = app.parseData();
          var $title = $('[data-js=dealership-title]');
          $title.get().textContent = data.name + ' ' + data.phone;
        }
      },

      isRequestOK: function isRequestOK() {
        return ajax.readyState === 4 && ajax.status === 200;
      },

      parseData: function parseData() {
        var data;
        try {
          data = JSON.parse(ajax.responseText)
        } catch (error) {
          console.log('Erro:',error);
          data = null;
        }
        return data;
      },

      initEvents: function initEvents() {
        var $form = $('[data-js=form]');
        $form.on('submit', app.handleSubmitForm);
      },

      handleSubmitForm: function handleSubmitForm(event) {
        event.preventDefault();
        var $dealershipTable = $('[data-js=dealership-table]');
        var newCar = app.getCar();
        $dealershipTable.get().appendChild(app.addNewCar());
        clearForm();
      },

      addNewCar: function addNewCar() {
        var fragment = doc.createDocumentFragment();
        var tr = doc.createElement('tr');
        var img = doc.createElement('img');
        var tdImage =doc.createElement('td');
        var tdMarcaModelo = doc.createElement('td');
        var tdAno = doc.createElement('td');
        var tdPlaca = doc.createElement('td');
        var tdCor = doc.createElement('td');

        img.setAttribute('src', getInput['imagem'].value );
        tdImage.appendChild(img);
        tdMarcaModelo.textContent = getInput['marcaModelo'].value;
        tdAno.textContent = getInput['ano'].value;
        tdPlaca.textContent = getInput['placa'].value;
        tdCor.textContent = getInput['cor'].value;

        tr.appendChild(tdImage);
        tr.appendChild(tdMarcaModelo);
        tr.appendChild(tdAno);
        tr.appendChild(tdPlaca);
        tr.appendChild(tdCor);

        return fragment.appendChild(tr);
      },

      getCar: function getCar() {
        return {
          img: getInput['imagem'].value,
          modelo: getInput['marcaModelo'].value,
          ano: getInput['ano'].value,
          placa: getInput['placa'].value,
          cor: getInput['cor'].value
        }
      }
    }
  })(window, document);

  app.init();

})(window.DOM);
