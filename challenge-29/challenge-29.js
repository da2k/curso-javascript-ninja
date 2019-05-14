(function() {
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

  var app = function () {
    var xhr = new XMLHttpRequest();

    var $companyName = new DOM('[data-js="company-name"]');
    var $companyPhone = new DOM('[data-js="company-phone"]');

    var $form = new DOM('[data-js="form-register"]');
    var $imageUrl = new DOM('[data-js="form-img-url"]');
    var $brandModel = new DOM('[data-js="form-brand-model"]');
    var $year = new DOM('[data-js="form-year"]');
    var $plate = new DOM('[data-js="form-plate"]');
    var $color = new DOM('[data-js="form-color"]');

    function init() {
      xhr.addEventListener('readystatechange', setCompanyData, false);
      $form.get()[0].addEventListener('submit', addDataToTableOnScreen, false);
      getCompanyData();
    }

    function showTable() {
      var $tbody = getTableBody();
      console.log($tbody)
      if ($tbody.childElementCount === 0) {
        var $tableDisplay = new DOM('[data-js="table"]').get()[0];
        $tableDisplay.setAttribute('style', 'display:initial');
      }
    }

    function getTableBody() {
      return new DOM('[data-js="table"]').get()[0].children[1];
    }

    function addDataToTableOnScreen(event) {
      event.preventDefault();

      var $table = new DOM('[data-js="table"]').get()[0].children[1];
      var row = document.createElement('tr');
      var thumbnail = document.createElement('td');
      var brandModel = document.createElement('td');
      var year = document.createElement('td');
      var plate = document.createElement('td');
      var color = document.createElement('td');
      var img = document.createElement('img');

      $table.appendChild(row);
      row.appendChild(thumbnail);

      img.setAttribute('src', $imageUrl.get()[0].value);
      img.setAttribute('width', '180');
      img.setAttribute('height', '75');
      thumbnail.appendChild(img);

      brandModel.appendChild(document.createTextNode($brandModel.get()[0].value));
      year.appendChild(document.createTextNode($year.get()[0].value));
      plate.appendChild(document.createTextNode($plate.get()[0].value));
      color.appendChild(document.createTextNode($color.get()[0].value));

      row.appendChild(brandModel);
      row.appendChild(year);
      row.appendChild(plate);
      row.appendChild(color);
    }

    function getCompanyData() {
      xhr.open('GET', 'company.json');
      xhr.send();
    }

    function setCompanyData() {
      if (isXHRDataReady()) {
        var data = JSON.parse(xhr.responseText);
        $companyName.get()[0].textContent = data.name;
        $companyPhone.get()[0].textContent = data.phone;
      }
    }

    function isXHRDataReady() {
      return xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE;
    }

    return {
      init: init
    }
  }
  app().init();

})();
