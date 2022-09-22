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

(function() {
    'use strict'

    var $input =  document.querySelector('[data-js="input"]')
    var $formCEP = document.querySelector('[data-js="form-cep"]')
    var $logradouro = document.querySelector('[data-js="log"]')
    var $bairro =  document.querySelector('[data-js="bairro"]')
    var $cidade = document.querySelector('[data-js="cidade"]')
    var $estado =  document.querySelector('[data-js="estado"]')
    var $status = document.querySelector('[data-js="status"]')

    var ajax = new XMLHttpRequest()

    $formCEP.addEventListener('submit', handleSubmitForm, false)

    function handleSubmitForm(event) {
        event.preventDefault()
        requestAJAX()
    }

    function requestAJAX() {
        var cep = getCEP()
        var url = `https://viacep.com.br/ws/${cep}/json/`
        ajax.open('GET', url, true)
        ajax.send()
        getMessage('loading')
        requestStateAJAX(cep)
    }

    function getCEP() {
        return Number($input.value.match(/\d+/gm).join(''))
    }
    
    function requestStateAJAX(cep) {
        ajax.addEventListener('readystatechange', function() {
            if(isRequestOK()) {
                getMessage('ok')
                fillCEPFields()
            }
        })
    }

    function isRequestOK() {
        return ajax.readyState === 4 && ajax.status === 200
    }

    function fillCEPFields() {
        var response = parseData()
        if(response.erro === 'true') {
            getMessage('error')
            response = clearData()
        }
        $logradouro.textContent = response.logradouro
        $bairro.textContent = response.bairro
        $cidade.textContent = response.localidade
        $estado.textContent = response.uf
    }

    function parseData() {
        var result
        try {
            result = JSON.parse(ajax.responseText)
        }
        catch(e) {
            result = null;
        }
        return result
    }

    function getMessage(type) {
        var cep = getCEP()
        var messages = {
            loading: 'Buscando informações para o CEP: ' + cep,
            ok: 'Endereço referente ao CEP: ' + cep,
            error: 'Não encontramos o endereço para o CEP:' + cep
        }
        $status.textContent = messages[type]
    }

    function clearData() {
        return {
            logradouro: '',
            bairro: '',
            localidade: '',
            uf: ''
        }
    }
