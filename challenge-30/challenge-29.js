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
      this.$form = DOM('[data-js="form"]');
      this.$inputList = DOM('[data-js="form"] input');
      this.$table = DOM('[data-js-table="collums"]');
      this.$title = DOM('[data-js-info="title"]');
      this.$phone = DOM('[data-js-info="phone"]');
      this.$image = DOM('[name="image-car"]');
      this.$containerImage = DOM('[data-js-image="image-car"]');
      this.urlNoImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIaPs4-y7dIpmrsurSkIMCvC1qjpMQC3jPxQ5kc_f4obOoyH8x3jFnRJp';
    }

    Catalog.prototype.addVehicle = function( item ) {
      return this.vehicleList.push( item );
    };

    Catalog.prototype.errorLoadImage = function() {
      this.$image.value = "";
      this.$image.setAttribute('placeholder', 'A imagem não existe');
      this.$image.focus();
      this.$containerImage.src = this.urlNoImage;
    };

    Catalog.prototype.handleRenderImage = function() {
      if ( this.$image.value === '' ) return this.$containerImage.src = this.urlNoImage;
      return this.$containerImage.src = this.$image.value;
    };

    Catalog.prototype.resetForm = function( item ) {
      this.$containerImage.src = this.urlNoImage;
      this.$inputList.forEach(function( item ) {
        item.value = '';
      });
      this.$inputList.get(0).focus();
    };

    Catalog.prototype.handleForm = function( event ) {
      event.preventDefault();
      this.vehicle = {};
      this.$inputList.forEach(function( item ) {
        if ( item.name !== '' ) return this.vehicle[ item.name ] = item.value;
      }.bind( this ));
      this.addVehicle( this.vehicle );
      this.createNewVehicle();
      this.resetForm();
    };

    Catalog.prototype.createNewVehicle = function() {
      var html = '';
      this.vehicleList.forEach(function(item, index){
        html += '<tr>';
          html += '<td><img src="' + item['image-car'] + '" width="100px"></td>';
          html += '<td>' + item.model + '</td>';
          html += '<td>' + item.year + '</td>';
          html += '<td>' + item.board + '</td>';
          html += '<td>' + item.color + '</td>';
        html += '</tr>';
      });

      this.$table.innerHTML = html;
    }

    Catalog.prototype.setEvents = function() {
      this.$form.addEventListener('submit', this.handleForm.bind( this ), false );
      this.$image.addEventListener('blur', this.handleRenderImage.bind( this ), false );
      this.$containerImage.addEventListener('error', this.errorLoadImage.bind(this), false );
    }

    Catalog.prototype.companyInfo = function( data ) {
      this.$title.textContent = data.name;
      this.$phone.textContent = data.phone;
    }

    Catalog.prototype.loadCompanyInfo = function() {
      var ajax = new XMLHttpRequest();
          ajax.open( 'GET', 'company.json' );
          ajax.send( null );
          ajax.addEventListener('readystatechange', function() {
            if ( ajax.status === 200 && ajax.readyState === 4 ) {
              this.companyInfo( JSON.parse( ajax.responseText ) );
            }
          }.bind( this ));
    }

    var catalog = new Catalog();
        catalog.loadCompanyInfo();
        catalog.setEvents();
  }
  
  app();

})();
