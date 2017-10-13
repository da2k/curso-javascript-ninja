(function(DOM, doc) {
  'use strict';
  var $nomeEmpresa = new DOM('[data-js="nome"]');
  var $telefoneEmpresa = new DOM('[data-js="telefone"]');
  var $formRegistro = new DOM('[data-js="registra-carro"]');
  var $button = new DOM('[data-js="submit"]');
  var $tabela = new DOM('[data-js="tabela"]');
  var $tbody = new DOM('[data-js="tbody"]');
  var $linha = new DOM('[data-js="linha"]');

  var qtdInsert = 0;

  var ajax = new XMLHttpRequest();

  function app(){
    return {
      inicio: function inicio(){
        this.getInformationCompany();
        this.setRegisterCars();
      },

      getInformationCompany: function getInformationCompany(){
        ajax.open('GET', 'company.json');
        ajax.send();
        ajax.addEventListener('readystatechange', this.getDateInformationCompany, false);
      },

      getDateInformationCompany: function getDateInformationCompany(){
        if(app().isRequestOK()){
          var dados = JSON.parse(ajax.responseText);
           $nomeEmpresa.get()[0].textContent = dados.name + ' - ';
           $telefoneEmpresa.get()[0].textContent = dados.phone;
           console.log("nomeEmpresa", $nomeEmpresa);

        }
      },

      isRequestOK: function isRequestOK(){
         return ajax.readyState === 4 && ajax.status === 200;
      },

      setRegisterCars: function setRegisterCars(){
        $button.on('click', function(event){
          event.preventDefault();
          if (qtdInsert === 0){
            $tabela.get()[0].childNodes[3].childNodes[1].childNodes[1].childNodes[0].src = $formRegistro.get()[0][0].value;
            $tabela.get()[0].childNodes[3].childNodes[1].childNodes[3].textContent =  $formRegistro.get()[0][1].value;
            $tabela.get()[0].childNodes[3].childNodes[1].childNodes[5].textContent =  $formRegistro.get()[0][2].value;
            $tabela.get()[0].childNodes[3].childNodes[1].childNodes[7].textContent =  $formRegistro.get()[0][3].value;
            $tabela.get()[0].childNodes[3].childNodes[1].childNodes[9].textContent =  $formRegistro.get()[0][4].value;

            app().limpaInput();

            qtdInsert++;
          }
          else{
            var $cloneLinCol = $linha.get()[0].cloneNode(true);
            var $fragment = doc.createDocumentFragment();

            $tbody.get()[0].appendChild($cloneLinCol);
            $fragment.appendChild($tbody);

            $tbody.get()[0].lastElementChild.childNodes[1].textContent =  $formRegistro.get()[0][0].value;
            $tbody.get()[0].lastElementChild.childNodes[3].textContent =  $formRegistro.get()[0][1].value;
            $tbody.get()[0].lastElementChild.childNodes[5].textContent =  $formRegistro.get()[0][2].value;
            $tbody.get()[0].lastElementChild.childNodes[7].textContent =  $formRegistro.get()[0][3].value;
            $tbody.get()[0].lastElementChild.childNodes[9].textContent =  $formRegistro.get()[0][4].value;

            app().limpaInput();


            console.log(doc.querySelectorAll('[data-js="linha"]').length);

          }
        }, false);
      },

      limpaInput: function limpaInput(){
        $formRegistro.get()[0][0].value = '';
        $formRegistro.get()[0][1].value = '';
        $formRegistro.get()[0][2].value = '';
        $formRegistro.get()[0][3].value = '';
        $formRegistro.get()[0][4].value = '';
      }

    };
  }


//  var $nomeEmpresa = new DOM('[data-js="nome"]');
  //var $telEmpresa = new DOM('[data-js="telefone"]');
  app().inicio();

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

})(window.DOM, document);
