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

    var $cep = new DOM('[data-js="cep"]').get()[0];
    var $submitButton = new DOM('[data-js="submit"]');
    var $cepInfo = new DOM('.cep-info').get();
    var $requestStatus = new DOM('[data-js="status"]').get()[0];
    var ajax = new XMLHttpRequest();

    function assignValuesToLabels (data) {
        Array.prototype.forEach.call($cepInfo, function(info) {
            var cepKey = info.getAttribute('cep-label');
            info.textContent = data[cepKey] || '';
        });
    }

    function buildCEP () {
        return $cep.value.replace(/\D+/g, '');
    }

    function buildURL () {
        return replaceCEP("https://viacep.com.br/ws/[CEP]/json/");
    }

    function isResponseSuccess () {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    function parseData () {
        var data;
        try {
            data = JSON.parse(ajax.responseText);
        }
        catch (e) {
            data = null;
        }
        return data;
    }

    function replaceCEP (message) {
        return message.replace( '[CEP]', buildCEP() );
    }

    function getMessage (type) {
        return {
            loading: replaceCEP("Buscando informações para o CEP [CEP]..."),
            success: replaceCEP("Endereço referente ao CEP [CEP]:"),
            error: replaceCEP("Não encontramos o endereço para o CEP [CEP]."),
        }[type];
    }

    function assignMessageToStatus (type) {
        $requestStatus.textContent = getMessage(type);
    }

    function resetFormInputs () {
        Array.prototype.forEach.call($cepInfo, function(info) {
            info.textContent = '';
        });
    }

    function handleMessagesAndData (data) {
        if (data.erro) {
            assignMessageToStatus('error');
            resetFormInputs();
        }
        else {
            assignMessageToStatus('success');
            assignValuesToLabels(data);
        }
    }

    function handleStateChange () {
        if ( isResponseSuccess() ) {
            var data = parseData();
            if (data) {
                handleMessagesAndData(data);
            }
            return;
        }
    }

    function handleFormSubmission (e) {
        e.preventDefault();
        resetFormInputs();
        var url = buildURL();
        ajax.addEventListener('readystatechange', handleStateChange);
        ajax.open('GET', url);
        ajax.send();
        assignMessageToStatus('loading');
    }

    $submitButton.on('click', handleFormSubmission);

})(document);
