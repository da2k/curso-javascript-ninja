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

(function(DOM) {
    'use strict';

    function app() {
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
                DOM('[data-js="cars-register"]').on('submit', this.submitForm);
            },
            isRequestReady: function isRequestReady() {
                return this.readyState === 4 && this.status === 200;
            },
            printCompanyInfo: function printCompanyInfo() {
                if (!app().isRequestReady.call(this))
                    return;

                var companyData = JSON.parse(this.responseText);
                var companyName = DOM('[data-js="company-name]"').get();
                var companyPhone = DOM('[data-js="company-phone"]').get();

                companyName.textContent = companyData.name;
                companyPhone.textContent = companyData.phone;
            },
            submitForm: function submitForm(event) {
                event.preventDefault();
                console.log('submit');
            }
        };
    }

    app().init();

})(window.DOM);
