(function(doc){

    'use strict';

    /*
    No HTML:
    - Crie um formulário com um input de texto que receberá um CEP e um botão
    de submit;
    - Crie uma estrutura HTML para receber informações de endereço:
    "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
    preenchidas com os dados da requisição feita no JS.
    - Crie uma área que receberá mensagens com o status da requisição:
    "Carregando, sucesso ou erro."

    No JS:
    - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
    deve ser limpo e enviado somente os números para a requisição abaixo;
    - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
    "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
    no input criado no HTML;
    - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
    com os dados recebidos.
    - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
    a mensagem: "Buscando informações para o CEP [CEP]..."
    - Se não houver dados para o CEP entrado, mostrar a mensagem:
    "Não encontramos o endereço para o CEP [CEP]."
    - Se houver endereço para o CEP digitado, mostre a mensagem:
    "Endereço referente ao CEP [CEP]:"
    - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
    adicionar as informações em tela.
    */

    function DOM (node) {
        this.nodeList = doc.querySelectorAll(node);
    }
    DOM.prototype.on = function (event, callback) {
        Array.prototype.forEach.call(this.nodeList, function(node) {
            return node.addEventListener(event, callback);
        });
    };
    DOM.prototype.get = function () {
        return this.nodeList;
    };
    DOM.prototype.getAttribute = function (attr) {
        return Array.prototype.map.call(this.nodeList, function(node) {
            return node.getAttribute(attr);
        });
    };

    var $cep = new DOM('[data-js="cep"]');
    var $submitButton = new DOM('[data-js="submit"]');
    var onlyNumbers = /\d+/g;
    var $cepInfo = new DOM('.cep-info').get();
    var $requestStatus = new DOM('[data-js="status"]').get();

    function assignValuesToLabels (cepInfo, cepJson) {
        Array.prototype.forEach.call(cepInfo, function(info) {
            var cepKey = info.getAttribute('cep-label');
            info.textContent = cepJson[cepKey] || '';
        });
    }

    $submitButton.on('click', function(e) {
        e.preventDefault();
        var cepNumber = $cep.get()[0].value.match(onlyNumbers).join('');
        var urlAddress = "https://viacep.com.br/ws/" + cepNumber + "/json/";
        var ajax = new XMLHttpRequest();
        ajax.addEventListener('readystatechange', function() {
            if (this.readyState !== 4) {
                $requestStatus[0].textContent = "Buscando informações para o CEP " + cepNumber + "...";
            }
            if (this.readyState === 4 && this.status === 200) {
                var cepJson = JSON.parse(this.responseText);
                if (cepJson.erro) {
                    $requestStatus[0].textContent = "Não encontramos o endereço para o CEP " + cepNumber + ".";
                }
                else {
                    $requestStatus[0].textContent = "Endereço referente ao CEP " + cepNumber + ":";
                }
                assignValuesToLabels($cepInfo, cepJson);
            }
        });
        ajax.open('GET', urlAddress);
        ajax.send();
    });

})(document);
