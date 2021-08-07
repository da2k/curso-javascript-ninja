(function ($) {
  "use strict";
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

  let app  = (function appController() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents(){
        $('[data-js="carRegistration"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(event){
        event.preventDefault();
        let $tbody = $("tbody").get();
        $tbody.appendChild(app.createNewCar());
        app.clearFields();
      },

      createNewCar: function createNewCar(){
      let $fragment =  document.createDocumentFragment();
      let $trow = document.createElement("tr");

      let $tdImage = document.createElement("td");
      $tdImage.className = "image";
      let $image =  document.createElement('img');
      let $imageURL = $('[type="url"]').get().value;
      $image.setAttribute("src", $imageURL);

      let $tdMakeModel = document.createElement("td");
      let $tdYear = document.createElement("td");
      let $tdPlate = document.createElement("td");
      let $tdColor = document.createElement("td");

      $tdImage.appendChild($image);
      $tdMakeModel.textContent = $('[data-js="make"]').get().value;
      $tdYear.textContent = $('[data-js="year"]').get().value;
      $tdPlate.textContent = $('[data-js="plate"]').get().value;
      $tdColor.textContent = $('[data-js="color"]').get().value;

      $trow.appendChild($tdImage);
      $trow.appendChild($tdMakeModel);
      $trow.appendChild($tdYear);
      $trow.appendChild($tdPlate);
      $trow.appendChild($tdColor);
      return $fragment.appendChild($trow);

      },
      clearFields: function clearFields(){
        
        console.log(app.createNewCar().$image);

      },
      companyInfo: function companyInfo() {
        let ajax = new XMLHttpRequest();
        ajax.open("GET", "company.json", true);
        ajax.send();
        ajax.addEventListener("readystatechange", this.getCompanyInfo, false);
      },


      getCompanyInfo: function getCompanyInfo() {
        if (!app.isReady.call(this))
        return;

        let $companyName = $("h1").get();
        let $companyPhone = $("h4").get();
        let data = JSON.parse(this.responseText);
        $companyName.textContent = data.name;
        $companyPhone.innerHTML = data.phone;
      },
      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      },


    };
  })();



  app.init();
})(window.DOM);
