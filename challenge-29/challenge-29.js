(function(wind, doc) {
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
        return {
            initialize: function() {
                this.companyInfo();
                this.initEvent();
            },
            initEvent: function() {
                var $button = new DOM('[data-js="button"]');
                $button.on('click', this.addCar);
            },
            addCar: function(event) {
                event.preventDefault();
                var $inputs = new DOM('[data-js="input"]');
                getCarro(setCarro($inputs));
                clearInputs($inputs);
            },
            companyInfo: function() {
                var ajax = new XMLHttpRequest();
                var company = "company.json";
                ajax.open('GET', company, true)
                ajax.send()
                ajax.addEventListener('readystatechange', this.handleReadyStateChange, false)

            },
            handleReadyStateChange: function() {
                if (isRequestOk(this))
                    getDate(this.responseText)
            }
        };

        function setCarro($inputs) {
            var car = carro();
            $inputs.forEach(function(item) {
                car[item.getAttribute('name')] = item.value;
            })
            return car;
        }

        function getCarro(carro) {
            createLine(carro)
        }

        function carro() {
            return {
                'img': '',
                'marca': '',
                'ano': '',
                'placa': '',
                'cor': ''
            };
        }

        function createLine(carro) {
            var $fragment = doc.createDocumentFragment();
            var $tabela = new DOM('[data-js="tabela"]');
            var $tr = doc.createElement('tr');
            var $trClone = $tr.cloneNode(true);
            var tr = getPropertyCarro($trClone, carro);
            $fragment.appendChild(tr);
            $tabela.get()[0].appendChild($fragment);
        }

        function getPropertyCarro(element, carro) {
            for (var property in carro) {
                element.appendChild(createCell(carro[property], property));
            }
            return element;
        }

        function createCell(value, property) {
            var $td = doc.createElement('td');
            var $img = doc.createElement('img');
            var $tdClone = $td.cloneNode(true);

            if (property === 'img') {
                $img.src = value;
                $tdClone.appendChild($img)
            } else
                $tdClone.innerHTML = value;

            return $tdClone;
        }

        function clearInputs($inputs) {
            $inputs.forEach(function(input) {
                input.value = '';
            })
        }

        function isRequestOk(ajax) {
            return ajax.readyState === 4 && ajax.status === 200;
        }

        function getDate(text) {
            var $name = new DOM('[data-js="name"]');
            var $phone = new DOM('[data-js="phone"]');
            if (text) {
                var date = JSON.parse(text);
                $name.get()[0].innerHTML = date.name;
                $phone.get()[0].innerHTML = date.phone;
            }
        }
    }

    app().initialize();

})(window, document);