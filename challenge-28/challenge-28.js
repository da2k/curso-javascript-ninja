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

  (function (win, doc, DOM) {
    'use strict';

    function app(){

      var $form = new DOM('form');
      var $status = new DOM('[data-js="status"]').get();
      var $logradouro = new DOM('[data-js="logradouro"]').get();
      var $bairro = new DOM('[data-js="bairro"]').get();
      var $estado = new DOM('[data-js="estado"]').get();
      var $cidade = new DOM('[data-js="cidade"]').get();
      var ajax = new XMLHttpRequest();
      $form.on('submit', handleSubmitFormCEP, false);

      function handleSubmitFormCEP(event) {
        event.preventDefault();
        var url = replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
        ajax.open('GET',url);
        ajax.send();
        getMessage('loading');
        ajax.addEventListener('readystatechange',  handleReadyStateChange);

      }

      function handleReadyStateChange(){
        if(isRequestOK()){
          populater();
        }
      }

      function isRequestOK(){
        return ajax.readyState === 4 && ajax.status === 200;
      }

      function clearCep(cep){
         return new DOM('[data-js="cep"]').get().value.replace(/\D/g, '');
      }

      function populater(){
        var data = parseData();
        if(!data){
          getMessage('error');
          data = clearData();
          return;
        }

        $logradouro.value = data.logradouro;
        $estado.value = data.uf;
        $bairro.value = data.bairro;
        $cidade.value = data.localidade;

        getMessage('ok');

      }

      function clearData(){
        return{
          logradouro : ' ',
          uf: '',
          localidade: '',
          bairro: ''
        }
      }

      function parseData(){
        var result;
         try {
            result = JSON.parse(ajax.responseText);
          }
          catch(e){
            result = null;
          }
          return result;
      }

      function replaceCEP(text){
        return text.replace('[CEP]', clearCep());
      }

      function getMessage(type){
        var messages = {
          loading:'Buscando informações para o CEP [CEP] ...',
          ok: 'Endereço referente ao CEP [CEP]:',
          error: 'Não encontramos o endereço para o CEP  [CEP] :'
        };
        $status.innerHTML = replaceCEP(messages[type]);
      }
      return {
        getMessage: getMessage,
        replaceCEP: replaceCEP
      }
    }


    app();


})(window, document, window.DOM);
