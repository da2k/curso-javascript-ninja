(function (DOM){
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

  function app (){

    var $title = new DOM('[data-js="title"]');
    var $nome = new DOM('[data-js="nome"]');
    var $telefone = new DOM('[data-js="telefone"]');

    var $form = new DOM('[data-js="form"]');
    var $imagem = new DOM('[data-js="imagem"]');
    var $marca = new DOM('[data-js="marca"]');
    var $ano = new DOM('[data-js="ano"]');
    var $placa = new DOM('[data-js="placa"]');
    var $cor = new DOM('[data-js="cor"]');
    var $cadastrar = new DOM('[data-js="cadastrar"]'); 

    var $tdimagem = new DOM('[data-js="tdimagem"]');
    var $tdmarca = new DOM('[data-js="tdmarca"]');
    var $tdano = new DOM('[data-js="tdano"]');
    var $tdplaca = new DOM('[data-js="tdplaca"]');
    var $tdcor = new DOM('[data-js="tdcor"]');

    $form.on('submit', handleForm);

    //var ajax = new XMLHttpRequest();
    //ajax.open('GET' , 'data/company.json');
    //ajax.send();
    //ajax.addEventListener('readystatechange', handleState);
    
   //function handleState (){
   // if(ajax.readyState === 4 && ajax.status === 200) {
   //   var data = JSON.parse(ajax.responseText);
   //   $nome.get()[0].textContent = data.nome;
   //   $telefone.get()[0].textContent = data.telefone;
   //   }
   //   console.log(ajax.responseText)
   //}
   function handleForm (event){
    event.preventDefault();
    $tdimagem.get()[0].textContent =  $imagem.get()[0].value;
    $tdmarca.get()[0].textContent =  $marca.get()[0].value;
    $tdano.get()[0].textContent =  $ano.get()[0].value;
    $tdplaca.get()[0].textContent =  $placa.get()[0].value;
    $tdcor.get()[0].textContent =  $cor.get()[0].value;

   }

   };

  window.app = app;
  app(); 

})(window.DOM); 

  
