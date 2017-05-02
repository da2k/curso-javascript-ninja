 (function(win, doc) {
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

   function DOM(elements) {
     this.element = document.querySelectorAll(elements);
   }

   DOM.prototype.on = function on(eventType, callback) {
     Array.prototype.forEach.call(this.element, function(element) {
       element.addEventListener(eventType, callback, false)
     });
   };
   DOM.prototype.off = function off(eventType, callback) {
     Array.prototype.forEach.call(this.element, function(element) {
       element.removeEventListener(eventType, callback, false)
     });
   };;
   DOM.prototype.get = function get() {
     return this.element;
   };

   /*var $form = doc.querySelector('[data-js="form-cep"]');
   var $campoCEP = doc.querySelector('[data-js="campo-CEP"]');
   var $btnSubmit = doc.querySelector('[data-js="submit"]');*/
   var $form = new DOM('[data-js="form-cep"]');
   var $campoCEP = new DOM('[data-js="campo-CEP"]');
   var $btnSubmit = new DOM('[data-js="submit"]');

   var $boxStatus = new DOM('[data-status="status"]');

   var $dataContainer = new DOM('[data-js="logradouro"]');
   var $dataContainer = new DOM('[data-js="bairro"]');
   var $dataContainer = new DOM('[data-js="cidade"]');
   var $dataContainer = new DOM('[data-js="estado"]');
   var $dataContainer = new DOM('[data-js="cep"]');

   $form.on('submit', consultaCEP);


   function consultaCEP(e) {
     e.preventDefault();
     var response = '';
     var valorCEP = $campoCEP.get()[0].value;


     var ajax = new XMLHttpRequest();
     console.log(ajax.readyState);
     ajax.open('GET', 'https://viacep.com.br/ws/' + valorCEP + '/json/');
     console.log(ajax.readyState);

     ajax.send();
     console.log('Carregando...');
     $boxStatus.get()[0].textContent = 'Carregando...';

     ajax.addEventListener('readystatechange', function() {
       if (isRequestOk()) {
         //console.log('requisição:\n ', ajax.responseText);
         //console.log('requisição:\n ', data.logradouro);

         try {
           var data = JSON.parse(ajax.responseText);
           response = data;
         }
         catch (e) {
           console.log('erroor');
           //response = ajax.responseText;
         }
         console.log(response);
       }



       console.log('Terminou requisição.', ajax.readyState, ajax.status)
     }, false);

     function isRequestOk() {
       return ajax.readyState === 4 && ajax.status === 200;
     }
   }

 })(window, document);
 