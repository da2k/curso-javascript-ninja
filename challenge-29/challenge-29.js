<<<<<<< HEAD
(function (DOM) {
=======
(function(DOM) {
>>>>>>> 77ea0505f09d1015dab7a141282d0380c22ca201
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

<<<<<<< HEAD
  function app() {


    var $dados = new DOM('[data-js="dadosEmpresa"]');
    var $form = new DOM('[data-js="cadastro"]');
    var $marcaModelo = new DOM('[data-js="marcaModelo"]');
    var $ano = new DOM('[data-js="ano"]');
    var $placa = new DOM('[data-js="placa"]');
    var $cor = new DOM('[data-js="cor"]');
    var $carro = new DOM('[data-js="carroItem"]');
    var $cadastrar = new DOM('[data-js="submit"]');
    $form.on('submit', handleCadastrar);

    function handleCadastrar(event) {
      event.preventDefault();
      $carro.get()[0].textContent = getDataCadastro();
    }

    function getDataCadastro() {
      var carro = {
        marca : $marcaModelo.get()[0].value,
        ano : $ano.get()[0].value,
        placa : $placa.get()[0].value,
        cor : $cor.get()[0].value
      }

      var dom = new DOM();
      // return dom.isObject(carro);



      // var $a = new DOM('[data-js="link"]');

      //   console.log($a);
      //   var dataJS = $a.map(function (item) {
      //     return item.getAttribute('data-js');
      //   });

      //   console.log(dataJS);


    }

  }
  app();


})(window.DOM);

=======

  function app() {
    return {
      init: function (){

      }
    };
  }

  var $form = new DOM('[data-js="cadastro"]');
  var $img = new DOM('[data-js="imagem"]');
  var $marca = new DOM('[data-js="marcaModelo"]');
  var $ano = new DOM('[data-js="ano"]');
  var $placa = new DOM('[data-js="placa"]');
  var $cor = new DOM('[data-js="cor"]');
  var $submit = new DOM('[data-js="submit"]');
  var $carro = new DOM('[data-js="dataCarro"]');


  $form.on('submit', handleSubmitForm);

  function handleSubmitForm(event) {
    event.preventDefault();
    carData();
  }

  function carData() {
    var carro = {
      marca : $marca.get()[0].value,
      ano : $ano.get()[0].value,
      placa : $placa.get()[0].value,
      cor : $cor.get()[0].value
    }
    $carro.get()[0].textContent = carro.marca + ' - ' + carro.ano + ' - ' + carro.placa + ' ' + carro.cor;
  }

  app().init();




})(window.DOM);
>>>>>>> 77ea0505f09d1015dab7a141282d0380c22ca201
