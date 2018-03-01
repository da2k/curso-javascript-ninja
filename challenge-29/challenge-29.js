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

  function dealership() {
    var $form = new DOM('[data-js=form]');
    var $imagem = new DOM('[data-js=car-imagem]');
    var $marcaModelo = new DOM('[data-js=car-marcamodelo]');
    var $ano = new DOM('[data-js=car-ano]');
    var $placa = new DOM('[data-js=car-placa]');
    var $cor = new DOM('[data-js=car-cor]');
    var $table = new DOM('[data-js=dealership-table]');
    var $title = new DOM('[data-js=dealership-title]');
    var carsList = [];
    var ajax;
    $form.on('submit', handleSubmitForm);

    function handleSubmitForm(event) {
      event.preventDefault();
      var newCar = addCar();
      carsList.push(newCar);
      renderCarList();
      clearForm();
    }

    function addCar() {
      return {
        img: $imagem.get()[0].value,
        modelo: $marcaModelo.get()[0].value,
        ano: $ano.get()[0].value,
        placa: $placa.get()[0].value,
        cor: $cor.get()[0].value
      }
    }

    function renderCarList() {
      $table.get()[0].innerHTML = carsList.map(makeMarkup).join('');
    }

    function makeMarkup(car) {
      return  '<tr>' +
                '<th>Imagem do carro:</th>' +
                '<td>' + car.img + '</td>' +
              '</tr>' +
              '<tr>' +
                '<th>Marca / Modelo:</th>' +
                '<td>' + car.modelo + '</td>' +
              '</tr>' +
              '<tr>' +
                '<th>Ano:</th>' +
                '<td>' + car.ano + '</td>' +
              '</tr>' +
              '<tr>' +
                '<th>Placa:</th>' +
                '<td>' + car.placa + '</td>' +
              '</tr>' +
              '<tr>' +
                '<th>Cor:</th>' +
                '<td>' + car.cor + '</td>' +
              '</tr>';
    }

    function clearForm() {
      $imagem.get()[0].value = "";
      $marcaModelo.get()[0].value = "";
      $ano.get()[0].value = "";
      $placa.get()[0].value = "";
      $cor.get()[0].value = "";
    }

    function setTitle() {
      ajax = new XMLHttpRequest();
      ajax.open('GET', '/company.json');
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange, false);
    }

    function handleReadyStateChange() {
      if (isRequestOK()) {
        var data = parseData();
        $title.get()[0].textContent = data.name + ' ' + data.phone;
      }
    }

    function isRequestOK() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function parseData() {
      var data;
      try {
        data = JSON.parse(ajax.responseText)
      } catch (error) {
        console.log('Erro:',error);
        data = null;
      }
      return data;
    }
    setTitle();
  }

  dealership();
})();
