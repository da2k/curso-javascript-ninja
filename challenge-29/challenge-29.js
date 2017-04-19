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
    var app = (function() {
        return {
            init: function init() {
                console.log('app init');
                this.companyInfo();
                this.initEvents();
            },


            //iniciar todos os eventos
            initEvents: function initEvents() {
                //(on cria um eventlistner para cada elemento do array)  
                //this.handleSubmit(função de callback - data-js="form-register" formulario ) Para metodos que vão manipular usa-se handle no inicio
                $('[data-js="form-register"]').on('submit', this.handleSubmit)

            },


            handleSubmit: function handleSubmit(e) {
                e.preventDefault();
                //pega o table-car (tabela que esta sendo criada)
                var $tableCar = $('[data-js="table-car"]').get();
                $tableCar.appendChild(app.createNewCar());
            },


            createNewCar: function createNewCar() {
                //criando elementos nos fragmentos .... fragment é a linha
                var $fragment = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $tdImage = document.createElement('td');
                var $image = document.createElement('img')
                var $tdBrand = document.createElement('td');
                var $tdYear = document.createElement('td');
                var $tdPlate = document.createElement('td');
                var $tdColor = document.createElement('td');

               //criando conteúdo de cada fragmento em cada td
                $image.src = $('[data-js="image"]').get().value;
                $tdImage.appendChild($image);
                $tdBrand.textContent = $('[data-js="brand-model"]').get().value;
                $tdYear.textContent = $('[data-js="year"]').get().value;
                $tdPlate.textContent = $('[data-js="plate"]').get().value;
                $tdColor.textContent = $('[data-js="color"]').get().value;

                //adicionando os conteúdos aos tr's
                $tr.appendChild($tdImage);
                $tr.appendChild($tdBrand);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);

                //fazendo append do tr no fragmento
                return $fragment.appendChild($tr);
            },

            companyInfo: function companyInfo() {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', '/company.json', true);
                ajax.send();
                //this em eventos refere-se ao próprio objeto o evento (ajax, no caso).
                ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
            },


            getCompanyInfo: function getCompanyInfo() {

                if (!app.isReady.call(this))
                    return;
                //transformar JSON em javascript
                var data = JSON.parse(this.responseText);
                var $companyName = $('[data-js="company-name"]').get();
                var $companyPhone = $('[data-js="company-phone"]').get();
                $companyName.textContent = data.name;
                $companyPhone.textContent = data.phone;
            },


            //se o readyState estiver finalizado (4) e o status da requisicao estiver ok;
            isReady: function isReady() {
                return this.readyState === 4 & this.status === 200
            }
        };
    })();

    app.init();
    //saber que está utilizando atraves do objeto window e utilizar localmente    
})(window.DOM);