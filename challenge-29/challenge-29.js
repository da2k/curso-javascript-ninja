(function(DOM) {

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

        var $form = new DOM('form');
        var ajax = new XMLHttpRequest();

        document.addEventListener('DOMContentLoaded', getCompanyInfo);
        $form.on('submit', addsNewCar);

        function clearFormInputs() {
            var inputs = $form.get()[0].querySelectorAll('input');
            inputs.forEach(function(input) {
                if (input.type !== 'submit') {
                    input.value = '';
                }
            });
        }

        function getsInputValues(info, element) {
            var inputVal = document.getElementById(info.dataJs).value;
            if (info.elem === 'span') {
                element.textContent = inputVal;
            }
            if (info.elem === 'img') {
                element.setAttribute('src', inputVal);
            }
        }

        function addsCarInfo(car, infoList) {
            infoList.forEach(function(info) {
                var elem = document.createElement(info.elem);
                elem.setAttribute('data-js', info.dataJs);
                getsInputValues(info, elem);
                car.appendChild(elem);
            });
        }

        function addsNewCar(e) {
            e.preventDefault();
            var $car = document.createElement('li');
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
            addsCarInfo($car, infoList);
            document.querySelector('[data-js="car-list"]').appendChild($car);
            clearFormInputs();
        }
        
        function handleStateChange () {
            if (ajax.readyState === 4 && ajax.status === 200) {
                var companyData = JSON.parse(ajax.responseText);
                document.querySelector('[data-js="name"]').textContent = companyData.name;
                document.querySelector('[data-js="phone"]').textContent = companyData.phone;
            }
        }

        function getCompanyInfo() {
            ajax.open('GET', 'company.json');
            ajax.send();
            ajax.addEventListener('readystatechange', handleStateChange);
        }

    }

    app();

})(window.DOM);
