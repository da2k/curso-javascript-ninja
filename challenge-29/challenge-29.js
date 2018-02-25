(function (win, document) {
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
    var $companyName = new DOM('[data-js="company-name"]');
    var $companyFone = new DOM('[data-js="company-fone"]');
    var $formCarro = new DOM('[data-js="form-carro"]');
    var $inputImagem = new DOM('[data-js="url-imagem-carro"]');
    var $inputMarca = new DOM('[data-js="marca-modelo-carro"]');
    var $inputAno = new DOM('[data-js="ano-carro"]');
    var $inputPlaca = new DOM('[data-js="placa-carro"]');
    var $inputCor = new DOM('[data-js="cor-carro"]');
    var $inputCadastro = new DOM('[data-js="submit"]');
    var $tableCarro = new DOM('[data-js="lista-carro"]');
    var ajax = new XMLHttpRequest();

    $formCarro.on('submit', handleSubmitForm);

    function handleSubmitForm(event) {
      event.preventDefault();
      cadastrar();
    }

    function cadastrar() {
      var row = document.createElement('tr');

      appendTdImage(row, $inputImagem.get()[0].value);
      appendTdText(row, $inputMarca.get()[0].value);
      appendTdText(row, $inputAno.get()[0].value);
      appendTdText(row, $inputPlaca.get()[0].value);
      appendTdRectangle(row, $inputCor.get()[0].value);

      $tableCarro.get()[0].appendChild(row);
    }

    function appendTdText(row, text) {
      var cell = document.createElement('td');
      var cellText = document.createTextNode(text);
      cell.appendChild(cellText);
      row.appendChild(cell);
      return cellText;
    }

    function appendTdImage(row, src) {
      var cell = document.createElement('td');
      var cellImage = document.createElement('img');
      cellImage.setAttribute('src', src);
      //cellImage.setAttribute('width', '100%');
      //cellImage.setAttribute('height', '100%');
      cell.appendChild(cellImage);
      row.appendChild(cell);
      return cellImage;
    }

    function appendTdRectangle(row, color) {
      var cell = document.createElement('td');
      cell.style.backgroundColor = color;
      row.appendChild(cell);
      return cell;
    }

    function carregar() {
      ajax.open('GET', 'company.json');
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    };

    function handleReadyStateChange() {
      if (isRequestOk()) {
        fillCompany();
      }
    }

    function fillCompany() {
      var data = parseData();
      if (!data) {
        data = getClearData();
      }

      $companyName.get()[0].textContent = data.name;
      $companyFone.get()[0].textContent = data.phone;
    }

    function isRequestOk() {
      return ajax.readyState === 4;
    }

    function parseData() {
      var result = null;
      try {
        result = JSON.parse(ajax.responseText);
      } catch (e) {
        result = null;
      }
      return result;
    }

    function getClearData() {
      return {
        name: "-",
        phone: "-"
      };
    }

    return {
      carregar: carregar
    };
  }

  window.app = app();
  window.app.carregar();

})(window, document);
