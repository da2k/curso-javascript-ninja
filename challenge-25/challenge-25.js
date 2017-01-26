(function(window, document){
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

  var $select = document.querySelector('[data-js="select"]');
  var $input = document.querySelector('[data-js="input"]');

  $select.addEventListener( 'focus', function(){
    console.log( 'Campo select esta com o foco!' );
  }, false );

  $select.addEventListener( 'blur', function(){
    console.log( 'Campo select perdeu o foco!' );
  }, false );

  window.addEventListener( 'resize', function(){console.log('redimensionando a tela')}, false );

  $input.addEventListener( 'mouseleave', function(){console.log (' mouse passed on input! ') }, false );

  $select.addEventListener( 'change', function(){
    console.log ( this.value );
  }, false );

  navigator.getBattery().then(function(battery) {

    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));

    battery.addEventListener('chargingchange', function() {
      console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
    });

  });

  window.addEventListener( 'afterprint', function(){
    console.log('Depois de imprimir!');
  }, false );

  window.addEventListener( 'beforeprint', function(){
    console.log('Antes de imprimir!');
  }, false );

  $input.addEventListener( 'input', function(){
    console.log( this.value );
  }, false );

})(window, document);
