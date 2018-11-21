(function(DOM) {
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
    var $conteudo = new DOM('#conteudo');
    var $cadastrar = new DOM('[data-js="cadastrar"]');
    var $tableCars = new DOM('[data-js="tableCars"]');
    var $error = new DOM('[data-js="error"]').get()[0];

    $cadastrar.on('click', function(e){
      e.preventDefault();
      testValues();
      
      if ( testValues() ){
        var tablerow = $tableCars.get()[0].appendChild(document.createElement('tr'));

        $conteudo.forEach(function(arg){
          var row = tablerow.appendChild(document.createElement('td'));
          if (arg.getAttribute('data-js') == 'imgCarro'){
            var $img = row.appendChild(document.createElement('img'));
            $img.setAttribute('src', arg.value);
          } else {
            row.textContent = arg.value;
          }
        });
      }

      function testValues(){
        if ( !($conteudo.get()[0].value.match(/^(https?):.+(jpg|png|gif|svg)$/g)) ){
          $error.textContent = 'Insira uma imagem válida';
          return false;
        }
        if ( !($conteudo.get()[1].value) ){
          $error.textContent = 'Insira uma marca';
          return false;
        }
        if ( !($conteudo.get()[2].value.match(/\d{2,4}/g)) ){
          $error.textContent = 'Insira um ano válido';
          return false;
        }
        if ( !($conteudo.get()[3].value.match(/\w{3}-\d{4}/g)) ){
          $error.textContent = 'Insira uma placa válida';
          return false;
        }
        if ( !($conteudo.get()[4].value.match(/^[A-Za-z]+$/g)) ){
          $error.textContent = 'Insira uma cor válida';
          return false;
        }
        return true;
      }
    });
  }

  var $company = new DOM('[data-js="company"]');
  var $telephone = new DOM('[data-js="telephone"]');
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'company.json');
  ajax.send();

  ajax.addEventListener('readystatechange', function(){
    if (ajax.readyState === 4 && ajax.status === 200){
      var data = JSON.parse(ajax.responseText);
      $company.get()[0].textContent = data.name;
      $telephone.get()[0].textContent = data.phone;
    }
  });

  app();
})(window.DOM);
