(function (DOM) {
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

    var $companyName = new DOM('[data-js="CompanyName"]');
    var $telephone = new DOM('[data-js="telefone"]');
    var $register = new DOM('[data-js="register"]');
    var $image = new DOM('[data-js="image"]');
    var $model = new DOM('[data-js="model"]');
    var $year = new DOM('[data-js="year"]');
    var $plate = new DOM('[data-js="plate"]');
    var $color = new DOM('[data-js="color"]');
    var $table = new DOM('[data-js="table"]');
    $register.on('click', regiterCars);

    var ajax = new XMLHttpRequest();
    ajax.open('GET', "company.json");
    ajax.send();
    ajax.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        var resposta = JSON.parse(ajax.responseText);
        $companyName.get()[0].innerHTML = resposta.name;
        $telephone.get()[0].textContent = resposta.phone;
      }
    })

    function regiterCars(event) {
      event.preventDefault();
      callTable($model.get()[0].value, $year.get()[0].value,
        $plate.get()[0].value, $color.get()[0].value);
    }

    function setImage(imgElement) {
      imgElement.setAttribute("height", "100");
      imgElement.setAttribute("width", "200");

    }

    function callTable() {
      var $ImagePath = document.createElement("img");
      setImage($ImagePath);
      var $tr = document.createElement('tr');
      $ImagePath.setAttribute("src", $image.get()[0].value);
      var $td = document.createElement('td');
      $td.appendChild($ImagePath);
      $tr.appendChild($td);
      $table.get()[0].appendChild($tr);
      Array.prototype.forEach.call(arguments, function (item) {
        $td = document.createElement('td');
        $td.innerHTML = item;
        $tr.appendChild($td);
        $table.get()[0].appendChild($tr);
      })
    }
  }
  app();

})(window.DOM);
