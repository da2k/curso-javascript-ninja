(function(win,doc) {
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

  var $audioEl = doc.querySelector('[data-js="audioEl"]');
  var keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];

  var setEventList = function setEventList(selector, event, callback) {
    Array.prototype.forEach.call(doc.querySelectorAll(selector), function(button) {
      button.addEventListener(event, callback, false);
    });
  };

  var setEventDocument = function setEventDocument(event, callback) {
    document.addEventListener(event, callback, false);
  };

  var pauseAudio = function pauseAudio() {
    $audioEl.pause();
  };

  var playAudio = function playAudio(file) {
    pauseAudio();
    $audioEl.src = 'sounds/' + file + '.wav';
    $audioEl.play();
  };

  var isKeyboardKey = function isKeyboardKey(keyPressed) {
    return keys.some(function(key) {
      return keyPressed === key;
    });
  }

  setEventList('.keyboard-key', 'click', function() {
    playAudio(this.getAttribute('data-sound'));
  });

  setEventDocument('keydown', function(event) {
    if(!isKeyboardKey(event.keyCode))
      return;

    var $el = doc.querySelector('[data-key="' +  event.keyCode + '"]');
    $el.focus();
    playAudio($el.getAttribute('data-sound'));
  });
})(window, document);
