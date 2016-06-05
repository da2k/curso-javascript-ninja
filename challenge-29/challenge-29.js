(function(DOM, doc) {
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

    var $form = new DOM('[data-js="form-cars"]');

    $form.on('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        var $image = new DOM('#image').get();
        var $model = new DOM('#model').get();
        var $year = new DOM('#year').get();
        var $number = new DOM('#number').get();
        var $color = new DOM('#color').get();

        var newTr = doc.createElement('tr');
        var newTdModel = doc.createElement('td');
        var newTdYear = doc.createElement('td');
        var newTdNumber = doc.createElement('td');
        var newTdColor = doc.createElement('td');

        newTdModel.appendChild(doc.createTextNode($model.value));
        newTdYear.appendChild(doc.createTextNode($year.value));
        newTdNumber.appendChild(doc.createTextNode($number.value));
        newTdColor.appendChild(doc.createTextNode($color.value));

        newTr.appendChild(newTdModel);
        newTr.appendChild(newTdYear);
        newTr.appendChild(newTdNumber);
        newTr.appendChild(newTdColor);

        var $tableBody = new DOM('tbody').get();

        var $none = new DOM('[data-js="none"]').get();

        if($none) $tableBody.removeChild($none);

        $tableBody.appendChild(newTr);

        showSuccessMessage();

        $form.get().reset();
    }

    function showSuccessMessage() {
        var $notice = new DOM('[data-js="notice"]').get();
        removeClass($notice, 'hidden');
        hideSuccessMessage($notice)
    }

    function hideSuccessMessage(el) {
        setTimeout(function() {
            addClass(el, 'hidden');
        }, 2000);
    }

    function addClass(el, style){
          el.classList.add(style);
     }

     function removeClass(el, style){
          var regex = new RegExp('\\b' + style + '\\b', 'g');
          el.className = el.className.replace(regex,'');
     }

    var loadCompanyInfo = function loadCompanyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'company.json');
        ajax.send();

        ajax.addEventListener('readystatechange', function() {
            if(isRequestOk()){
                var response;
                try{
                    response =  JSON.parse(ajax.responseText);
                }
                catch(e){
                    console.log(e);
                    response = ajax.responseText;
                }
                var $companyName = new DOM('[data-js="company-name"]').get();
                var $companyPhone = new DOM('[data-js="company-phone"]').get();
                $companyName.textContent = response.name;
                $companyPhone.textContent = response.phone;
            }
        }, false);

        function isRequestOk() {
            return ajax.readyState === 4 && ajax.status === 200;
        }

    }();

})(window.DOM, document);