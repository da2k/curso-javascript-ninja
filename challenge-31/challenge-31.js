/*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.

Ao clicar nesse botão, a linha da tabela deve ser removida.

Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.

Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/

console.log('Link do pull request do seu projeto');

(function ($, doc) {
  'use strict';

  var app = (function () {
    return {
      init: function init() {
        console.log('app init');
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function () {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
        // Anexe um manipulador de eventos de clique à tabela para remover as linhas
        $('[data-js="table-car"]').on('click', '[data-js="btn-remove"]', this.handleRemove);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
        var $tableCar = $('[data-js="table-car"]').get();
        $tableCar.appendChild(app.createNewCar());
      },

      createNewCar: function createNewCar() {
        const $fragment = doc.createDocumentFragment();
        var $tr = doc.createElement('tr');
        var $tdImage = doc.createElement('td');
        var $image = document.createElement('img');
        var $tdBrand = doc.createElement('td');
        var $tdYear = doc.createElement('td');
        var $tdPlate = doc.createElement('td');
        var $tdColor = doc.createElement('td');
        var $tdRemove = doc.createElement('td'); // Adicione uma nova coluna para o botão Remover
        var $btnRemove = doc.createElement('button');
        
        $image.setAttribute('src', $('[data-js="image"]').get().value);
        $tdImage.appendChild($image);

        $tdBrand.textContent = $('[data-js="brand-model"]').get().value;
        $tdYear.textContent = $('[data-js="year"]').get().value;
        $tdPlate.textContent = $('[data-js="plate"]').get().value;
        $tdColor.textContent = $('[data-js="color"]').get().value;

        $btnRemove.textContent = 'Remover';
        $btnRemove.setAttribute('data-js', 'btn-remove'); // Adicione um atributo data-js ao botão Remover

        $tr.appendChild($tdImage);
        $tr.appendChild($tdBrand);
        $tr.appendChild($tdYear);
        $tr.appendChild($tdPlate);
        $tr.appendChild($tdColor);
        $tr.appendChild($tdRemove);
        $tdRemove.appendChild($btnRemove); // Adicione o botão Remover à nova coluna

        return $fragment.appendChild($tr);
      },

      handleRemove: function handleRemove() {
        // Remova a linha quando o botão Remover for clicado
        this.closest('tr').remove();
      },

      companyInfo: function companyInfo() {
        console.log('company info');
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if (!app.isReady.call(this)) {
          return;
        }

        var data = JSON.parse(this.responseText);
        var $companyName = $('[data-js="company-name"]').get();
        var $companyPhone = $('[data-js="company-phone"]').get();
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      },
    };
  })();

  app.init();
})(window.DOM, document);
