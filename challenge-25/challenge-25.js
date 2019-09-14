( function( wind , doc ){
/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/ 
 'use strict';

 function initialize(){
   initEvent();
 }

 function initEvent(){
 //windows
  onWind('load', carregou  )
  onWind('beforeunload', prevent )
  onWind('beforeprint',beforePrint)
  onWind('afterprint',afterPrint)
  //docs 
  onDoc('keydown',logKey)
  onDoc('keypress',logKeypress)
  //elements
  on('[datajs="buttonError"]' , 'click' , errorImg )
  on('[datajs="email"]','focus',recebeFoco)
  on('[datajs="email"]','blur',naoRecebeFoco)
  on('[datajs="form"]','reset',logReset)
  on('[datajs="clickDuplo"]', 'dblclick' , clickDuplo)
 }

 function onWind( event , callback ){
  wind.addEventListener( event  , callback )
 } 

 function onDoc( event , callback ){
  doc.addEventListener( event , callback )
 } 

 function on( element ,  event , callback  ){
  doc.querySelector( element )
  .addEventListener(event , callback , false );
 } 

 function carregou(event){
    alert('carregou')
 }

 function prevent(event){
  event.preventDefault();
  event.returnValue = '';
 }

 function errorImg(event){
  var img= prompt('digite nome da img') +'.jpg'
  doc.querySelector('[datajs="img"]').setAttribute('src', img);
  on('[datajs="img"]','error',function(event){
    	alert(event.type)
  })
 }

 function recebeFoco(event){
  event.target.style.background = 'blue';  
  event.target.style.color = 'white' 
 }

 function naoRecebeFoco(){
  event.target.style.background = 'red';   
 }

 function logReset(event) {
  alert('reset')
 }

 function beforePrint(){
  alert('Before print');
 }

 function afterPrint(){
  alert('After afterPrint');
 }

 function logKey(e){
  console.log(e.code +' , cod:'+ e.keyCode)
 }

 function logKeypress(e){
  console.log(e.code)
 }

 function clickDuplo(){
  alert('click duplo')
 }

 initialize()

} )( window , document)