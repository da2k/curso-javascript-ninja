( function( wind , doc ){
     
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
  function DOM( noDom ){
    this.element = doc.querySelectorAll( noDom );
 };

 DOM.prototype.on  = function( event , callback ){
    this.forEach(  function( element ){
        element.addEventListener( event ,callback , false )
    } )
 };

 DOM.prototype.off = function(event ,callback){
    this.forEach(  function( element ){
       element.removeEventListener(  event ,callback , false )
    } )
 };

 DOM.prototype.get = function(){
   return this.element;
 };

 DOM.prototype.forEach = function( callback){
   return Array.prototype.forEach.call(  this.element , callback );
 };

 DOM.prototype.map = function(callback){
   return Array.prototype.map.call( this.element ,callback );
 };

 DOM.prototype.filter = function(callback){
   return Array.prototype.filter.call( this.element , callback );
 };

 DOM.prototype.reduce = function(callback){
   return Array.prototype.reduce.call( this.element ,callback );
 };

 DOM.prototype.reduceRight = function(callback){
   return Array.prototype.reduceRight.call( this.element , callback );
 };

 DOM.prototype.every = function(callback){
   return Array.prototype.every.call(this.element , callback );
 };

 DOM.prototype.some = function( callback){
   return Array.prototype.some.call(this.element , callback );
 };
   
 var $getInput = new DOM('[data-js="getInput"]');
 var $buttonConfimar  = new DOM('[data-js="confimar"]');
 var $message = new DOM('[data-js="message"]');
 var $inputs = new DOM('[data-js="input"]');
 var ajax = new XMLHttpRequest();

 $buttonConfimar.on('click',function(event){
   var url ='http://apps.widenet.com.br/busca-cep/api/cep/'+cep()+'.json';
   ajax.open('GET', url );
   ajax.send();
   $message.get()[0].textContent = replaceCep('loading');
   ajax.addEventListener('readystatechange',handleReadyStateChange,false)
 } )
 
 function cep(){
  return clearCep($getInput.get()[0].value);
 }
 
 function clearCep(cep){
    return cep.replace('\/D\g','') 
 }

 function fiilCeFields(){
   var data = parseData();
   if(!data){
     clearData();
     return  $message.get()[0].textContent = replaceCep('error');
   }
   consultarCep(data)
   $message.get()[0].textContent = replaceCep('ok');
 }

 function  parseData(){
  var resultado = null;
    try{
      resultado = JSON.parse(ajax.responseText);
      if(resultado.status === 0){
       resultado = null;
      }
    }
    catch(e){
    };
   return resultado;
 }

  function clearData(){
    return consultarCep({code:'',state:'',city:'',district:'',address:''});
 }

 function messageStatusDaRequisicao(type){
   return {
    'loading':'Buscando informações para o CEP [CEP]...', 
    'ok':'Endereço referente ao CEP [CEP] ',
    'error':'Não encontramos o endereço para o CEP [CEP] '
   }[type];
 }

 function consultarCep(data){
  $inputs.get().forEach( function(element){
       element.value = !!informacaoDeInderenco(element,data) ? informacaoDeInderenco(element,data) : '';
  })
 }
 
 function handleReadyStateChange(){
     if(isRequestOk)
     return  fiilCeFields()
 }

 function isRequestOk(){
  return ajax.readyState === 4 && ajax.status === 200;
 }

 function informacaoDeInderenco(element,responda){
         return   inderenco(responda)[element.getAttribute('name')];     
 }

 function inderenco(responda){
   return {
          'cep': responda.code,
          'estado':responda.state,
          'cidade':responda.city,
          'bairro':responda.district,
          'endereco':responda.address
         };
 }

 function replaceCep(msg){
  return  messageStatusDaRequisicao(msg).replace('[CEP]',cep());
 }
 
})( window , document )