(function(win, doc){
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

  $linkEventClick = doc.querySelector('[data-js="event-click"]');
  $inputKeyUp = doc.querySelector('[data-js="event-keyup"]')
  $inputKeyDown = doc.querySelector('[data-js="event-keydown"]')
  $selectChange = doc.querySelector('[data-js="event-change"]')

  function handlerClick(e){
    e.preventDefault();
    alert("Você clicou no link");
  }

  function handlerKeyUp(e){
    printKeyPress("KEYUP:", e);
  }

  function handlerKeyDown(e){
    printKeyPress("KEYDOWN:", e);
  }

  function handlerChange(e){
    console.log(e.target.value);
  }

  function addEvent(element, event, callback){
    element.addEventListener(event, callback, false);
  }

  function printKeyPress(label, e){
    console.log(label + " " + e.key);
  }

  addEvent($linkEventClick, 'click', handlerClick);
  addEvent($inputKeyUp, 'keyup', handlerKeyUp);
  addEvent($inputKeyDown, 'keydown', handlerKeyDown);
  addEvent($selectChange, 'change', handlerChange);

})(window, document);
