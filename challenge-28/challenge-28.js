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
   $message.get()[0].textContent = 'Buscando informações para o CEP '+formatarCep(clearCep($getInput.get()[0].value));
   ajax.open('GET', 'http://apps.widenet.com.br/busca-cep/api/cep/'+formatarCep(clearCep($getInput.get()[0].value))+'.json');
   ajax.send();
   ajax.addEventListener('readystatechange',function(){
     if(isRequestOk(ajax)){
       var data = JSON.parse(ajax.responseText);
       $inputs.forEach( function(element){
       element.value = !!informacaoDeInderenco(element,data) ? informacaoDeInderenco(element,data) : '';
       })
       messageStatusDaRequisição(data)
    }
   },false)
 } )

 function clearCep(cep){
    var regex = /\d+/g;
    return cep.match( regex ).reduce( function(atual ,acomulado){
      return atual + acomulado;
    } ,'');
 }

 function formatarCep(cep){
     return cep.replace( cep.slice(5),'-'+cep.slice(5,8) );
 }

 function isRequestOk(ajax){
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

 function messageStatusDaRequisição(data){
  if($inputs.every( (element)=>!!element.value ))
    $message.get()[0].textContent = 'Endereço referente ao CEP '+formatarCep(clearCep($getInput.get()[0].value));
  else if(!!data.message) 
    $message.get()[0].textContent = 'Não encontramos o endereço para o CEP '+formatarCep(clearCep($getInput.get()[0].value));
 }


 })( window , document )