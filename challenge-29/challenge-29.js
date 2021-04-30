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

  function App(){

      const form = document.querySelector('#form');
      const table = document.querySelector('#table');
      const inputs = document.querySelectorAll('#form input');

    function createTable() {
      const tr = document.createElement('tr');
      Array.prototype.forEach.call(inputs, (item) => {
        const td = document.createElement('td');
        table.appendChild(tr);
        tr.appendChild(td);
        td.innerHTML = item.value;
        item.value = '';
      })
    }

    function loadCompanyInfo(){
      const ajax = new XMLHttpRequest();
      ajax.open("GET", "company.json", true);
      ajax.send();

      ajax.onreadystatechange = function () {

        if(this.readyState == 4 && this.status == 200) {

          const res = JSON.parse(this.responseText);
          document.querySelector("#display").innerHTML = res.name + ' - ' + res.phone;
        }

      }
    }
    loadCompanyInfo();


    form.addEventListener('submit', (e) => {
      e.preventDefault();

      createTable();

    })
  }

  App();

})();
