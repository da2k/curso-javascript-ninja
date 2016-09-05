(function(win, DOM, doc) {
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
    var $form = new DOM('[data-js="form-register"]'),
        $image = new DOM('[data-js="input-image"]'),
        $brand = new DOM('[data-js="input-brand"]'),
        $year = new DOM('[data-js="input-year"]'),
        $sign = new DOM('[data-js="input-sign"]'),
        $color = new DOM('[data-js="input-color"]'),
        $companyName = new DOM('[data-js="company-name"]'),
        $companyPhone = new DOM('[data-js="company-phone"]'),
        $carsList = new DOM('[data-js="cars-list"]'),
        $carRegister = [],
        ajax = new XMLHttpRequest();

    $form.on('submit', handleFormRegister);
    win.addEventListener('load', companyInfo);

    function handleFormRegister(e) {
      e.preventDefault();

      var register = {
        image: $image.get()[0].value,
        brand: $brand.get()[0].value,
        year: $year.get()[0].value,
        sign: $sign.get()[0].value,
        color: $color.get()[0].value
      };
      console.log(register);
      clearRegister();
      renderListCar(register);
    }

    function renderListCar(register) {
      $carRegister.push(register);

      var $tr = doc.createElement('tr');
      var $image = doc.createElement('td');
      var $imgTag = doc.createElement('img')
      var $brand = doc.createElement('td');
      var $year = doc.createElement('td');
      var $sign = doc.createElement('td');
      var $color = doc.createElement('td');

      var image = doc.createTextNode(register.image);
      var brand = doc.createTextNode(register.brand);
      var year = doc.createTextNode(register.year);
      var sign = doc.createTextNode(register.sign);
      var color = doc.createTextNode(register.color);

      $imgTag.setAttribute('src', image.textContent)
      $image.appendChild($imgTag);
      $tr.appendChild($image);
      $brand.appendChild(brand);
      $tr.appendChild($brand);
      $year.appendChild(year);
      $tr.appendChild($year);
      $sign.appendChild(sign);
      $tr.appendChild($sign);
      $color.appendChild(color);
      $tr.appendChild($color);
      $carsList.get()[0].appendChild($tr);

    }

    function clearRegister() {
       $image.get()[0].value = '';
       $brand.get()[0].value = '';
       $year.get()[0].value = '';
       $sign.get()[0].value = '';
       $color.get()[0].value = '';
    }

    function companyInfo() {
      var company = 'company.json';
      ajax.open('get', company);
      ajax.send();
      ajax.addEventListener('readystatechange', handleAjaxState);
    }

    function handleAjaxState() {
      var data = parseDataCep();

      if(isRequestOk()) {
        $companyName.get()[0].textContent = data.name;
        $companyPhone.get()[0].textContent = data.phone;
      }

    }

    function parseDataCep() {
      var result;

      try {
        result = JSON.parse(ajax.responseText);
      } catch (e) {
        result = null;
      }
      return result;
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }


    return {
      // métodos que eu quero que sejam exportados: Revealing Module Pattern
    };
  }

  win.app = app; //executar a função depois app() -> Revealing Module Pattern

  app();

})(window, window.DOM, document);
