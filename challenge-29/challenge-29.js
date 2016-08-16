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

  function app() {

    function Catalog() {
      this.vehicleList = [];
      this.vehicle = {};
      this.$form = new DOM('[data-js="form"]');
      this.$table = new DOM('[data-js-table="collums"]');
    }

    Catalog.prototype.addVehicle = function( item ) {
      return this.vehicleList.push( item );
    };

    Catalog.prototype.resetForm = function( item ) {
      Array.prototype.forEach.call(this.$form.element[0], function( item ) {
        item.value = '';
      });
      this.$form.element[0][0].focus();
    };

    Catalog.prototype.handleForm = function( event ) {
      event.preventDefault();
      var self = this;
      this.vehicle = {};
      Array.prototype.forEach.call(this.$form.element[0], function( item ) {
        if ( item.name !== '' ) return self.vehicle[ item.name ] = item.value;
      });
      this.addVehicle( this.vehicle );
      this.updateTableInView();
    };

    Catalog.prototype.updateTableInView = function() {
      var html = '';
      this.vehicleList.forEach(function(item, index){
        html += '<tr>';
          html += '<td>' + item.model + '</td>';
          html += '<td>' + item.year + '</td>';
          html += '<td>' + item.board + '</td>';
          html += '<td>' + item.color + '</td>';
        html += '</tr>';
      });

      this.$table.get()[0].innerHTML = html;
      return this.resetForm();
    }

    Catalog.prototype.setEvents = function() {
      this.$form.get()[0].addEventListener('submit', function( event ){
        return this.handleForm( event );
      }.bind( this ), false );
    }

    Catalog.prototype.setEnterpriseInfo = function( data ) {
      var title = new DOM('[data-js-info="title"]'),
          phone = new DOM('[data-js-info="phone"]');
      title.get()[0].textContent = data.name;
      phone.get()[0].textContent = data.phone;
    }

    Catalog.prototype.loadEnterpriseInfo = function() {
      var ajax = new XMLHttpRequest(),
          self = this;
          ajax.open('GET', 'company.json');
          ajax.send(null);
          ajax.addEventListener('readystatechange', function() {
            if ( ajax.status === 200 && ajax.readyState === 4 ) {
              self.setEnterpriseInfo( JSON.parse( ajax.responseText ) );
            }
          });
    }

    var catalog = new Catalog();
        catalog.loadEnterpriseInfo();
        catalog.setEvents();
  }

  app();

})();
