(function() {
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
     "http://cep.correiocontrol.com.br/[CEP].json", onde [CEP] será o CEP passado
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

     function DOM(selector) {
          this.elements = document.querySelectorAll(selector);
          this.elementsNodes = Array.prototype.map.call(this.elements, function(node) {
               return node;
          });
     }

     DOM.prototype.on = function on(event, callback) {
          this.elementsNodes.forEach(function(node) {
               node.addEventListener(event, callback, false);
          });
     };

     DOM.prototype.off = function off(event, callback) {
          this.elementsNodes.forEach(function(node) {
               node.removeEventListener(event, callback, false);
          });
     };

     DOM.prototype.get = function get() {
          if(this.elementsNodes.length === 1)
               return this.elementsNodes[0];
          return this.elementsNodes;
     };

     var $cep = new DOM('#cep').get();
     var $logradouro = new DOM('#logradouro').get();
     var $bairro = new DOM('#bairro').get();
     var $estado = new DOM('#estado').get();
     var $cidade = new DOM('#cidade').get();
     var $submit = new DOM('[type="submit"]');
     var $notice = new DOM('[data-js="notice"]').get();

     $submit.on('click', handleSubmit);
     var ajax = new XMLHttpRequest();

     function handleSubmit(event) {
          event.preventDefault();
          responseLoading();
          var cep = clearCEP();

          if(!isCEPValid(cep)) {
               getMessage('notvalid');
               return false;
          }

          var url = 'https://viacep.com.br/ws/' + cep + '/json/';
          ajax.open('GET', url);
          ajax.send();

          ajax.addEventListener('readystatechange', handleReadyStateChange, false);
     }

     function handleReadyStateChange() {
          if(isRequestOk()){
               var response = '';
               try{
                    response = JSON.parse(ajax.responseText);
                    if(response.erro) {
                         getMessage('error');
                         throw new Error('CEP não encontrado.');
                    } else {
                         responseOk(response);
                    }
               }
               catch(e){
                    response = null;
                    getMessage('error');
               }
          }
     }

     function isRequestOk() {
          return ajax.readyState === 4 && ajax.status === 200;
     }

     function clearCEP() {
          return $cep.value.replace(/\D/g, '');
     }

     function isCEPValid(cep) {
          return cep.length === 8;
     }

     function responseLoading() {
          clearFormFields();
          getMessage('loading');
          removeClass($notice, 'hidden');
     }

     function responseOk(response) {
          fillAddressFields(response);
          getMessage('ok');
     }

     function getMessage(type) {
          var cep = clearCEP();
          var messages = {
               loading: ['Buscando informações para o CEP ' + cep + '...', 'alert-warning'],
               ok: ['Endereço referente ao CEP ' + cep + ':', 'alert-success'],
               error: ['Não encontramos o endereço para o CEP ' + cep + '.', 'alert-danger'],
               notvalid: ['Informe um CEP válido.', 'alert-danger']
          };

          removeAllAlertStyles($notice);
          addClass($notice, messages[type][1]);
          $notice.textContent = messages[type][0];
     }

     function fillAddressFields(response) {
          $logradouro.value = response.logradouro;
          $bairro.value = response.bairro;
          $estado.value = response.uf;
          $cidade.value = response.localidade;
     }

     function clearFormFields() {
          $logradouro.value = '';
          $bairro.value = '';
          $estado.value = '';
          $cidade.value = '';
     }

     function addClass(el, style){
          el.classList.add(style);
     }

     function removeClass(el, style){
          var regex = new RegExp('\\b' + style + '\\b', 'g');
          el.className = el.className.replace(regex,'');
     }

     function removeAllAlertStyles(el) {
          removeClass(el, 'alert-warning');
          removeClass(el, 'alert-danger');
          removeClass(el, 'alert-success');
     }
})();
