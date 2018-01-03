(function () {
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

  var $name = document.querySelector('[data-js="name"]');
  var $password = document.querySelector('[data-js="password"]');
  var $check = document.querySelector('[data-js="check"]');

  function toUpper() {
    $name.value = $name.value.toUpperCase();
  }

  $name.addEventListener('blur', toUpper, false);

  function passwordChecker() {
    var pass = this.value.length;
    if (pass < 5) {
      $check.innerHTML = 'Too short';
    } else if (pass >= 5 && pass < 10) {
      $check.innerHTML = 'Good';
    } else if (pass >= 10) {
      $check.innerHTML = 'Strong enough';
    } else {
      $check.innerHTML = '';
    }
  }

  $password.addEventListener('keyup', passwordChecker, false);
}());
