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

(function($) {
    'use strict';

    var app = (function() {
        return {
            getCompanyInfo: function getCompanyInfo() {
                var ajax = new XMLHttpRequest();

                ajax.open('GET', '/company.json', true);
                ajax.send();
                ajax.addEventListener('readystatechange', this.printCompanyInfo, false);
            },

            init: function init() {
                this.getCompanyInfo();
                this.initEvents();
            },

            initEvents: function initEvents() {
                $('[data-js="cars-register"]').on('submit', this.submitForm);
            },

            insertCar: function insertCar() {
                var fragment = document.createDocumentFragment();

                var carRow = document.createElement('tr');
                var carImage = document.createElement('td');
                var carModel = document.createElement('td');
                var carYear = document.createElement('td');
                var carPlate = document.createElement('td');
                var carColor = document.createElement('td');

                var image = document.createElement('img');
                image.src = $('[data-js="image"]').get().value;
                carImage.appendChild(image);

                carModel.textContent = $('[data-js="mark-model"]').get().value;
                carYear.textContent = $('[data-js="year"]').get().value;
                carPlate.textContent = $('[data-js="license-plate"]').get().value;
                carColor.textContent = $('[data-js="color"]').get().value;

                carRow.appendChild(carImage);
                carRow.appendChild(carModel);
                carRow.appendChild(carYear);
                carRow.appendChild(carPlate);
                carRow.appendChild(carColor);

                return fragment.appendChild(carRow);
            },

            isRequestReady: function isRequestReady() {
                return this.readyState === 4 && this.status === 200;
            },

            printCompanyInfo: function printCompanyInfo() {
                if (!app.isRequestReady.call(this))
                    return;

                var companyData = JSON.parse(this.responseText);
                var companyName = $('[data-js="company-name"]').get();
                var companyPhone = $('[data-js="company-phone"]').get();

                companyName.textContent = companyData.name;
                companyPhone.textContent = companyData.phone;
            },

            submitForm: function submitForm(event) {
                event.preventDefault();

                var carsTable = $('[data-js="cars-table"]').get();
                carsTable.appendChild(app.insertCar());
            }
        };
    })();

    app.init();

})(window.DOM);
