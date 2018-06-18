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
(function(win,doc){
    'use strict';
    
   var $btnCp = doc.querySelector('[data-js="copiar"]');
   var $btnCv = doc.querySelector('[data-js="colar"]');
   
   $btnCp.addEventListener('copy',copiar,false);
   $btnCp.addEventListener('copy',colar,false);
   
   function copiar(event){
       event.preventDefault();
       console.log('texto copiado');
   }
   
    function colar(event){
       console.log('texto colado');
   }
    
})(window,document);