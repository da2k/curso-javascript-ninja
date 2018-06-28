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

(function(win){
  'use strict';
  
 function app(){
   
    var $formCEP = new DOM('[data-form="form-cep"]');
    var $inputCep = new DOM('[data-form="input-cep"]');
    var $longradouro = new DOM('[data-form="logradouro"]');
    var $bairro = new DOM('[data-form="bairro"]');
    var $estado = new DOM('[data-form="estado"]');
    var $cidade = new DOM('[data-form="cidade"]');
    var $cep = new DOM('[data-form="cep"]');
    var $status = new DOM('[data-form="status"]');
    var ajax = new XMLHttpRequest();
    $formCEP.on('submit', handleSubmitFormCEP);
   
   function handleSubmitFormCEP(event){
    
    event.preventDefault();
    var url = getURL();
    ajax.open('GET',url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
 
  }
  
  function getURL(){
    return  replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
  }
  
  function clearCEP(){
    return $inputCep.get()[0].value.replace(/\D/g, '');
  }
  
  function handleReadyStateChange(){
    if (isRequestOK()) {
      getMessage('ok');
      fillCEPFields();
    }
  }
  
  function isRequestOK(){
    return ajax.readyState == 4 && ajax.status ==200;
  }
  
  function parseData(){
    var result;
    
    try {
      result = JSON.parse(ajax.responseText);
    } catch (e) {
      result = null;
    }
    return result;
  }
  
  function  fillCEPFields(){
    var data = parseData();
    if(!data){
      getMessage('error');
     data = clearDATA();
      
    }
    
    function clearDATA(){
      return {
        
        logradouro: '-',
        bairro: '-',
        uf: '-',
        localidade: '-',
        cep: '-'
        
      }
      
    }
   
    $longradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }
  
  function getMessage(type){
    var messages =  {
      loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
      ok: replaceCEP('Endereço Referente ao CEP [CEP] '),
      erro: replaceCEP('Não encontramos o endereço parao CEP [CEP]')
    };
    
   
    $status.get()[0].textContent = messages[type];
    
  }  
  
  function replaceCEP(message){
    return message.replace('[CEP]', clearCEP());
  }
  
   
 }
 

 app();
  
})(window.DOM);
