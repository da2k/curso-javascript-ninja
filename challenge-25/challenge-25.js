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
(function(){
  'use strict';

  var title = document.getElementsByTagName('h2');

  function handleClickTitle(e) {
    var el = e.target;
    if(e.target && !e.target.texto) {
      e.target.texto = e.target.innerHTML;
    }
    if(el.classList.contains('bg')) {
     el.classList.remove('bg');
     el.innerHTML = e.target.texto;
    }else {
     el.classList.add('bg');
     el.innerHTML = 'Clicou-me';
    }
  // el.classList.toggle('bg');
  }

  Array.prototype.forEach.call( title, function( title ) {
    title.addEventListener( 'click', handleClickTitle, false );
  });

  setInterval(function() {
    var clock = document.getElementById('clock');
    clock.classList.add('effect');
    clock.value = new Date();
  }, 1000);

})();
