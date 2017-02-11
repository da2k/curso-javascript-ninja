(function( win, doc, DOM ) {
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
    var $buttonCadastrar = new DOM('[data-js="cadastrar"]');
    var $form = new DOM('[data-js="cadastro"]');
    var $inputFoto = new DOM('[data-js="foto"]');
    var $inputMarca = new DOM('[data-js="marca"]');
    var $inputModelo = new DOM('[data-js="modelo"]');
    var $inputAno = new DOM('[data-js="ano"]');
    var $inputPlaca = new DOM('[data-js="placa"]');
    var $inputCor = new DOM('[data-js="cor"]');
    var $tableCarros = new DOM('[data-js="carros_table"]');
    var ajax = new XMLHttpRequest();
    ajax.open( 'GET', 'company.json' );
    ajax.send();

    function carregarDadosEmpresa(){
      ajax.addEventListener('readystatechange', handleAjaxDadosEmpresa, false);
    }

    function handleAjaxDadosEmpresa() {
      if ( isRequestOk() ){
        setarDadosEmpresaDOM(JSON.parse( ajax.responseText ));
      }
    }

    function isRequestOk(){
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function setarDadosEmpresaDOM(data){
      doc.querySelector('[data-js="nome_empresa"]').textContent = data.name;
      doc.querySelector('[data-js="telefone_empresa"]').textContent = data.phone;
    }


    $buttonCadastrar.on( 'click', handleCadastrar, false );

    function handleCadastrar(){
      cadastrarCarro();
    }

    function cadastrarCarro(){
      $tableCarros.get()[0].appendChild(criarNovaLinhaTabela());
    }

    function criarNovaLinhaTabela(){
      var fragment = document.createDocumentFragment();
      var tr = document.createElement('tr');
      var tdFoto = document.createElement('td');
      var tdMarca = document.createElement('td');
      var tdModelo = document.createElement('td');
      var tdAno = document.createElement('td');
      var tdPlaca = document.createElement('td');
      var tdCor = document.createElement('td');
      var img = document.createElement('img');

      img.setAttribute('src', $inputFoto.get()[0].value ? $inputFoto.get()[0].value : 'http://www.tendtudo.net/wp-content/uploads/2015/10/sem-foto.jpg' );
      img.setAttribute('height', 42);
      img.setAttribute('width', 42);

      tdFoto.appendChild(img);
      tdMarca.textContent = $inputMarca.get()[0].value;
      tdModelo.textContent = $inputModelo.get()[0].value;
      tdAno.textContent = $inputAno.get()[0].value;
      tdPlaca.textContent = $inputPlaca.get()[0].value;
      tdCor.textContent = $inputCor.get()[0].value;

      tr.appendChild(tdFoto);
      tr.appendChild(tdMarca);
      tr.appendChild(tdModelo);
      tr.appendChild(tdAno);
      tr.appendChild(tdPlaca);
      tr.appendChild(tdCor);

      return fragment.appendChild(tr);
    }

    $form.on( 'submit', function(evt){
      evt.preventDefault();
    } );

    carregarDadosEmpresa();
  }

  app();

})( window, document, window.DOM );
