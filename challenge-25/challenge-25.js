(function(win,doc){
'use strict';
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

  var $name = doc.querySelector('[data-js="name"]');
  var $mail = doc.querySelector('[data-js="email"]');
  var $message = doc.querySelector('[data-js="msg"]');
  var $button = doc.querySelector('[data-js=button]');


  function validedName(name){
   var regex = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if(name.match(regex)) {
        return false;
    } else { return true; }
 }



 function checkMail(mail){
   var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
   if(typeof(mail) == "string"){
     if(er.test(mail)){ return true; }
    }else if(typeof(mail) == "object"){		if(er.test(mail.value)){
      return true; 				}	}else{		return false;		}}


   $button.addEventListener('click', doSubmit, false);


 function doSubmit() {
   $button = 0;
   alert('Voce Clicou no Button Erro 501')
 }


})(window, document);
