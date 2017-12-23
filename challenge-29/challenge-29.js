(function(win, doc) {
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

  function app(){
    var $companyElement = new DOM('[data-js="company"]');
    var $phoneElement = new DOM('[data-js="phone"]');
    var $formCar = new DOM('[data-js="form-car"]');
    var $tableTBody = new DOM('[data-js="table-tbody"]');
    var $row = new DOM('[data-js="row-car"]');
    var $image = new DOM('[data-js="image"]');
    var $model = new DOM('[data-js="model"]');
    var $age = new DOM('[data-js="age"]');
    var $board = new DOM('[data-js="board"]');
    var $color = new DOM('[data-js="color"]');
    var ajax;
    var data;
    var cloneRow;

    function ajax(){
      ajax = new XMLHttpRequest();
      ajax.open('GET', './company.json');
      ajax.send();

      ajax.addEventListener('readystatechange', function(){
        if(isRequestOk(ajax)){
          data = JSON.parse(ajax.responseText);
          $companyElement.get()[0].appendChild(doc.createTextNode(data.name))
          $phoneElement.get()[0].appendChild(doc.createTextNode(data.phone))
        }
      }, false);

    }

    function isRequestOk(ajax){
      return ajax.readyState === 4 && ajax.status === 200
    }

    function addRow(row){
      if ($tableTBody.get().length === 1)
        $tableTBody.get()[0].removeChild($row.get()[0]);

      cloneRow = row.get()[0].cloneNode(true);
      $tableTBody.get()[0].appendChild(cloneRow);

      Array.prototype.forEach.call(cloneRow.children, function(column, index){
        if(index === 0){
          var img = doc.createElement('img');
          img.src = $formCar.get()[0].children[index].value;
          img.width = 100;
          img.height = 100;
          column.appendChild(img);
        }
        else
          column.appendChild(doc.createTextNode($formCar.get()[0].children[index].value));
      });
      clearForm();
    }

    function isValidateForm(){
      return Array.prototype.every.call($formCar.get()[0].children, function(input, index){
        return input.value !== ""
      });
    }

    function clearForm(){
      Array.prototype.forEach.call($formCar.get()[0].children, function(input, index){
        if(input.getAttribute('type') === 'text')
          input.value = ""
      });
    }

    $formCar.on('submit', function(e){
      e.preventDefault();
      console.log(isValidateForm());
      if (isValidateForm())
        addRow($row);
      else
        alert("Todos os campos devem ser preenchidos!")
    })

    ajax();
  }

  win.app = app();


})(window, document);
