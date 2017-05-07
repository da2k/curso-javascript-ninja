 (function (win, doc, dom) {
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

     function app() {

         var $form = new DOM('[data-js="form-cep"]');
         var $campoCEP = new DOM('[data-js="campo-CEP"]');
         var $btnSubmit = new DOM('[data-js="submit"]');
         var $dataContainerLogradouro = new DOM('[data-js="logradouro"]');
         var $dataContainerBairro = new DOM('[data-js="bairro"]');
         var $dataContainerCidade = new DOM('[data-js="cidade"]');
         var $dataContainerEstado = new DOM('[data-js="estado"]');
         var $dataContainerCep = new DOM('[data-js="cep"]');
         var $boxStatus = new DOM('[data-status="status"]');
         var ajax = new XMLHttpRequest();
         $form.on('submit', handleSubmitFormCEP);







         function handleSubmitFormCEP(event) {
             event.preventDefault();
             var url = getUrl();
             ajax.open('GET', url);
             ajax.send();
             getMessage('loading');
             ajax.addEventListener('readystatechange', handleReadyStateChange)
         }

         function getUrl() {
             return replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
         }

         function clearCEP() {
             return $campoCEP.get()[0].value.replace(/\D/g, '');

         }

         function handleReadyStateChange() {
             if (isRequestOk()) {
                 getMessage('ok');
                 fillCEPFields();
             }

         }

         function isRequestOk() {
             return ajax.readyState === 4 && ajax.status === 200;
         }

         function fillCEPFields() {
             var data = parseData();
             if (!data) {
                 getMessage('error');
                 data = clearData();
             }

             $dataContainerLogradouro.get()[0].textContent = data.logradouro;
             $dataContainerBairro.get()[0].textContent = data.bairro;
             $dataContainerCidade.get()[0].textContent = data.localidade;
             $dataContainerEstado.get()[0].textContent = data.uf;
             $dataContainerCep.get()[0].textContent = data.cep;
         }

         function clearData() {
             return {
                 'logradouro': '-',
                 'bairro': '-',
                 'localidade': '-',
                 'uf': '-',
                 'cep': '-'
             }
         }

         function parseData() {
             var result;
             try {
                 result = JSON.parse(ajax.responseText)
             } catch (e) {
                 result = null;
             }
             return result;
         }

         function getMessage(type) {
             var messages = {
                 loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
                 ok: replaceCEP('Endereço referente ao CEP [CEP]: '),
                 error: replaceCEP('Não encontramos o endereço para o CEP [CEP]. ')
             };

             $boxStatus.get()[0].textContent = messages[type];
         }

         function replaceCEP(message) {
             return message.replace('[CEP]', clearCEP());
         }
         
         return {
             getMessage: getMessage,
             replaceCEP: replaceCEP
         };
     }
     windows.app = app();

     app();

 })(window, document, window.DOM);
