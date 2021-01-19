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

  function app() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },
      
      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit, false);
      },

      handleSubmit: function handleSubmit(e){
        e.preventDefault();
        const $tableCar = $('[data-js="table-car"]').getDomElements();
        $tableCar.appendChild(app().createNewCar());
      },

      createNewCar: function createNewCar(){
        const $fragment = document.createDocumentFragment();
        const $tr = document.createElement('tr');
        const $tdImage = document.createElement('td');
        const $image = document.createElement('img');
        const $tdBrand = document.createElement('td');
        const $tdYear = document.createElement('td');
        const $tdPlate = document.createElement('td');
        const $tdColor = document.createElement('td');

        $image.src = $('[data-js="image"]').getDomElements().value;
        
        $tdImage.appendChild($image)

        $tdImage.textContent = $('[data-js="image"]').getDomElements().value;
        $tdBrand.textContent = $('[data-js="model-brand"]').getDomElements().value;
        $tdYear.textContent = $('[data-js="year"]').getDomElements().value;
        $tdPlate.textContent = $('[data-js="plate"]').getDomElements().value;
        $tdColor.textContent = $('[data-js="color"]').getDomElements().value;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdPlate);
        $tr.appendChild($tdColor);

        return $fragment.appendChild($tr);
      },

      companyInfo: function(){
        const ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);

      },
      
      getCompanyInfo: function() {
        if(this.readyState === 4 && this.status === 200) {
          const data = JSON.parse(this.responseText);
          const $headerTitleCompany = $('[data-js="company"]');
          const $headerTitlePhone = $('[data-js="phone"]');
          $headerTitleCompany.getDomElements().textContent = data.name;
          $headerTitlePhone.getDomElements().textContent = data.phone;
  
        }
      
      },

    }

  }

  app().init();


})(window.DOM);
