(function(win, doc){
  "use strict";
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
  var $input = doc.querySelector('[data-js="input"]');
  var $visor = doc.querySelector('[data-js="visor"]');
  var $onlyNumbers = doc.querySelector('[data-js="onlyNumbers"]');
  var $box1 = doc.querySelector('[data-js="box1"]');
  var $box2 = doc.querySelector('[data-js="box2"]');
  var $box3 = doc.querySelector('[data-js="box3"]');
  var $textArea = doc.querySelector('[data-js="textarea"]');

  function setEvents(){
    $input.addEventListener('focusin', focusIn, false);
    $input.addEventListener('focusout', focusOut, false);
    $input.addEventListener('focusout', setVisorResult, false);
    $input.addEventListener('keydown', keyDown, false);
    $input.addEventListener('keyup', keyUp, false);
    $box1.addEventListener('mouseenter', mouseEnter1, false);
    $box2.addEventListener('mouseenter', mouseEnter2, false);
    $box3.addEventListener('mouseenter', mouseEnter3, false);
    $box1.addEventListener('mouseleave', mouseLeave1, false);
    $box2.addEventListener('mouseleave', mouseLeave2, false);
    $box3.addEventListener('mouseleave', mouseLeave3, false);
    $onlyNumbers.addEventListener('input', onlyNumbers, false);
    $textArea.addEventListener('copy', copied, false);
    win.addEventListener('load', load, false);
    win.addEventListener('resize', resize, false);
  }

  function copied(){
    alert('You copyed the text : ' + this.value);
  }

  function onlyNumbers(){
      this.value = this.value.replace(/\D/g, '');
  }

  function setVisorResult(){
    thereIsNumbers(this.value) ? $visor.style = 'border: 2px solid #FF0000' : $visor.style = 'border: 2px solid #98FD01';
    $visor.value = this.value;
  }

  function thereIsNumbers(text){
    return text.match(/\d/g);
  }

  function thereIsSymbols(text){
    return text.match(/\D/g);
  }

  function focusIn(){
    this.style = 'border: 2px solid #3CB3FF';
  }

  function focusOut(){
    this.style = 'border: 2px solid #98FD01';
  }

  function keyDown(){
    this.style = 'border: 2px solid #FF7A7A';
  }

  function keyUp(){
    this.style = 'border: 2px solid #000000';
  }

  function mouseEnter1(){
    this.style = 'background-color: #3CB3FF';
  }

  function mouseEnter2(){
    this.style = 'background-color: #98FD01';
  }

  function mouseEnter3(){
    this.style = 'background-color: #FF7A7A';
  }

  function mouseLeave1(){
    this.style = '';
  }

  function mouseLeave2(){
    this.style = '';
  }

  function mouseLeave3(){
    this.style = '';
  }

  function load(){
    alert('Loaded');
  }

  function resize(){
    alert('Window resized');
  }

  setEvents();

})(window, document);
