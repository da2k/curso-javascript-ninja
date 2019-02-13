(function (doc, win) {
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

  var $eventName = doc.querySelector('[data-js=eventName]');
  var $submitEvent = doc.querySelector('[data-js=submitEvent]');
  var $playgroundContainer = doc.querySelector('[data-js=playgroundContainer]');
  var $textCurrEvent = doc.querySelector('[data-js=textCurrEvent]');
  var currEvent = '';

  function initialize() {
    initEvents();
  }

  function initEvents() {
    $submitEvent.addEventListener('click', handleSubmitEvent);
  }

  function handleSubmitEvent(e) {
    e.preventDefault();
    setCurrEvent($eventName.value);
  }

  function setCurrEvent(eventName) {
    $playgroundContainer.removeEventListener(currEvent, fireAction);
    currEvent = eventName;
    $textCurrEvent.textContent = eventName;
    $playgroundContainer.addEventListener(currEvent, fireAction);
  }

  function fireAction() {
    alert('Event Fired!');
  }

  initialize();

})(document, window);
