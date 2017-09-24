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

  var app = (function application(){
    var $erro = new $('[data-js="erro"]');
    var $dadosCarro = new $('input');
    var $tabelaCarros = new $('[data-js="tabelaCarros"]');
    var newCarro;

    return {
      init: function init(){
        this.dadosEmpresa();
        this.iniciaEventos();
      },

      iniciaEventos: function iniciaEventos(){
        $('[data-js="submit"]').get(0).addEventListener('click', this.handleBtnClick, false);
      },

      handleBtnClick: function handleBtnClick(event){
        event.preventDefault();
        app.escondeErro();
        if(app.checaDadosCarro()){
          app.setNewCarro();
        }else{
          app.msgErro();
        }

      },

      setNewCarro: function setNewCarro(){
        var tableRow = document.createElement('tr');
        Array.prototype.forEach.call($dadosCarro.get(), function(item){
          var tableData = null;
          tableData = document.createElement('td');
          if(item.getAttribute('type') !== 'url'){
            tableData.appendChild(document.createTextNode(item.value));
          }else{
            var img = document.createElement('img');
            img.src = item.value;
            img.width = 200;
            tableData.appendChild(img);
          }

          tableRow.appendChild(tableData);
          item.value = '';
        });
        $tabelaCarros.get(0).appendChild(tableRow);
      },

      checaDadosCarro: function checaDadosCarro(){
        return Array.prototype.every.call($dadosCarro.get(), function(item){
          return item.value !== '';
        })
      },

      msgErro: function msgErro(){
        this.mostraErro();
        $erro.get(0).firstElementChild.textContent = 'Preencha todos os campos do Veículo!';
      },

      mostraErro: function mostraErro(){
          $erro.get(0).setAttribute('class', '');
      },

      escondeErro: function escondeErro(){
          $erro.get(0).setAttribute('class', 'd-none');
      },

      dadosEmpresa: function dadosEmpresa(){
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getDadosEmpresa, false);
      },

      getDadosEmpresa: function getDadosEmpresa(){
        if(this.readyState === 4 && this.status === 200){
          var textCompany = JSON.parse(this.responseText);
          var $nomeEmpresa = $('[data-js="nomeEmpresa"]');
          var $foneEmpresa = $('[data-js="foneEmpresa"]');
          $nomeEmpresa.get(0).textContent = textCompany.name;
          $foneEmpresa.get(0).textContent = textCompany.phone;
        }
      }
    };


  })();

  app.init();

})(window.DOM);
