(function (doc, win) {
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

  var $text = doc.querySelector('[data-js="text"]');
  var $text2 = doc.querySelector('[data-js="text2"]');
  var $select = doc.querySelector('[data-js="select"');
  var $img = doc.querySelector('[data-js="man-running"]');
  var i = 6;

  function on (element, event, callback) {
    element.addEventListener(event, callback, false);
  }

  on($text, 'mouseover', function (event) {
    this.value = 'tudo bom? Se sim, clique em mim';
  });

  on($text, 'click', function (event) {
    this.value = 'que ótimo :D';
  });

  on($text, 'mouseout', function (event) {
    this.value = 'volte aqui';
  });

  on($text2, 'keyup', function (event) {
    if (this.value.length === 15) {
      alert('você digitou :' +  this.value);
    }
  });

  on($select, 'change', function (event) {
    $text2.value += this.value;
  })

  on($img, 'mousedown', function (event) {
      this.src = 'img/man' + i + '.jpg';

      i--;

      if ( i === 0) {
        i = 6;
      }
  })


})(document, window);
