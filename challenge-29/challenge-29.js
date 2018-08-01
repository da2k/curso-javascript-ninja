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

    var app = (function () {

        var $form = $('form');

        return {
            init: function init () {
                this.getCompanyInfo();
                $form.on('submit', this.addsNewCar);
            },
            clearFormInputs: function clearFormInputs() {
                var inputs = $form.get(0).querySelectorAll('input');
                inputs.forEach(function(input) {
                    if (input.type !== 'submit') {
                        input.value = '';
                    }
                });
            },
            getsInputValues: function getsInputValues(info, element) {
                var inputVal = $('[data-js="' + info.dataJs + '"]').get(0).value;
                if (info.elem === 'span') {
                    element.textContent = inputVal;
                }
                if (info.elem === 'img') {
                    element.setAttribute('src', inputVal);
                }
            },
            addsNewCar: function addsNewCar(e) {
                e.preventDefault();
                var $carRow = document.createElement('tr');
                var infoList = [
                    {
                        elem: 'img',
                        dataJs: 'image',
                    },
                    {
                        elem: 'span',
                        dataJs: 'brand',
                    },
                    {
                        elem: 'span',
                        dataJs: 'year',
                    },
                    {
                        elem: 'span',
                        dataJs: 'plate',
                    },
                    {
                        elem: 'span',
                        dataJs: 'color',
                    },
                ];
                infoList.forEach(function(info) {
                    var $carCol = document.createElement('td');
                    var elem = document.createElement(info.elem);
                    elem.setAttribute('data-js', info.dataJs);
                    app.getsInputValues(info, elem);
                    $carCol.appendChild(elem);
                    $carRow.appendChild($carCol);
                });
                $('[data-js="car-list"]').get(0).appendChild($carRow);
                app.clearFormInputs();
            },
            handleStateChange: function handleStateChange () {
                if (this.readyState === 4 && this.status === 200) {
                    var companyData = JSON.parse(this.responseText);
                    $('[data-js="name"]').get(0).textContent = companyData.name;
                    $('[data-js="phone"]').get(0).textContent = companyData.phone;
                }
            },
            getCompanyInfo: function getCompanyInfo() {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'company.json');
                ajax.send();
                ajax.addEventListener('readystatechange', this.handleStateChange);
            }
        };
        
    })();

    app.init();

})(window.DOM);
