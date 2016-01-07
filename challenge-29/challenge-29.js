(function(DOM, doc) {
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

  function app () {
    var $inputImage = new DOM('[data-js="input-image"]');
    var $inputBrand = new DOM('[data-js="input-brand"]');
    var $inputYear = new DOM('[data-js="input-year"]');
    var $inputColor = new DOM('[data-js="input-color"]');
    var $submitForm = new DOM('[data-js="submit-form"]');
    var $carTable = new DOM('[data-js="car-table"]');
    var $interpriseName = new DOM('[data-js="interprise-name"]');
    var $interpriseNumber = new DOM('[data-js="interprise-number"]');
    var ajax = new XMLHttpRequest();


    function makeRequest (method, url, callback) {
      ajax.open(method, url);
      ajax.send();
      ajax.addEventListener('readystatechange', callback);
    }
    
    function handleAjax () {
      if( isRequestOk(ajax) ) {
        try{
          var data = JSON.parse(ajax.responseText);
          $interpriseName.get(0).textContent = data.name;
          $interpriseNumber.get(0).textContent = data.phone;
        }catch(e){
          console.log(e);
        }
         
      }
    }

    function appendTdonTr (tr, text) {
      var newTd = doc.createElement('td');
      var textTd = doc.createTextNode(text);
      newTd.appendChild(textTd);
      tr.appendChild(newTd);
    }

    function handleSubmit (event) {
      event.preventDefault();
      var newLine = doc.createElement('tr');
      appendTdonTr(newLine, $inputImage.get(0).value);
      appendTdonTr(newLine, $inputBrand.get(0).value);
      appendTdonTr(newLine, $inputYear.get(0).value);
      appendTdonTr(newLine, $inputColor.get(0).value);
      $carTable.get(0).appendChild(newLine);
    }

    function isRequestOk (request) {
      return request.readyState === 4 && request.status === 200;
    }

    $submitForm.on('click', handleSubmit);
    makeRequest('GET', 'http://localhost:4000/company.json', handleAjax);
  }


  app();
})(window.DOM, document);
