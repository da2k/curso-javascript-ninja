(function() {

  'user strict';

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

  var $inputPassword = getElement('[data-js="password"]');
  var $inputArea = getElement('[data-js="area"]');
  var $selectArea = getElement('[data-js="select"]')

  function init() {
    attachedEvents('[data-js="button-send"]', 'click', handleValidForm);
    attachedEvents('[data-js="select"]', 'change', handleChoicheArea);
    attachedEvents('[data-js="button-clear"]', 'click', handleClearField);
    attachedEvents('[data-js="password"]', 'input', handleIsValidPassword);
    attachedEvents('[data-js="password"]', 'input', handleBackPasswordType);
  }

  function attachedEvents(elem, event, callback) {
    document.querySelector(elem)
      .addEventListener(event, callback, false);
  }

  function getElement(elem) {
    return document.querySelector(elem);
  }

  function goElement(elem) {
    for (var i = 0; i < elem.length; i++) {
      return elem.length;
    }
  }

  function addClassError(elem) {
    return elem.classList.add('error');
  }

  function removeClassError(elem) {
    return elem.classList.remove('error');
  }


  function handleValidForm() {
    if (goElement($inputPassword.value) < 6) {
      $inputPassword.value = 'A senha deve ser maior que 6 caracteres';
      $inputPassword.type = 'text';
      addClassError($inputPassword);
    }

    if (!$inputPassword.value) {
      $inputPassword.value = 'Digite uma senha';
      $inputPassword.type = 'text';
      addClassError($inputPassword);
    } 

    if (!$inputArea.value) {
      $inputArea.value = 'Escolha alguma area';
      addClassError($inputArea);
    }

  }

  function handleChoicheArea() {
    $inputArea.value = this.value;
    removeClassError($inputArea);
  }

  function handleClearField() {
    $inputArea.value = '';
    $inputPassword.value = '';
  }

  function handleIsValidPassword() {
    var regexPassword = /\D/g;
    if (regexPassword.test(this.value)) {
      this.value = this.value.replace(regexPassword, '');
    }
  }

  function handleBackPasswordType(){
  	this.type = 'password';
  	removeClassError($inputPassword);
  }


  init();

})();
