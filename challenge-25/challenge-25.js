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


(function(win, doc) {

  'use strict';

  var $inputs = doc.querySelectorAll('[data-class="input-text"]');

  var $inputCPF = doc.querySelector('[data-js="cpf"]');
  var $inputNome = doc.querySelector('[data-js="nome"]');
  var $inputIdade = doc.querySelector('[data-js="idade"]');
  var $inputRg = doc.querySelector('[data-js="rg"]');
  var $firstInput = $inputs[$inputs.length-$inputs.length].focus();
  var $createdObjects = doc.querySelector('[data-js="created-objects"]');
  var $spanError = doc.querySelector('[data-js="span-error"]');
  var $button = doc.querySelector('[data-js="btnEnviar"]');

  Array.prototype.forEach.call($inputs, function(input) {
    input.addEventListener('blur', validateInput, false);
    input.addEventListener('change', function () {
      this.readOnly = true;
      $createdObjects.innerHTML += '{"'+this.name+'"' + ' : ' +'"'+this.value+'"}, <br/>';
    }, false);
  });

  function addObjectToHtml(elem, obj) {
    for(var props in obj) {
      obj[props] += obj[props];
      elem.innerHTML = '<p>'+ obj[props] + '</p>';
    }
  }

  function isInputValid(input) {
    return getRegexOperations(input.name).test(input.value);
  }

  function validateInput() {
    if (isInputValid(this))
      return this.classList.remove('invalid');

    return this.classList.add('invalid');
  }

  function getRegexOperations(oper) {
    switch (oper) {
      case 'cpf':
      return new RegExp('^\\d{11}$', 'g');
      case 'rg':
      return new RegExp('^\\d{7}$', 'g');
      case 'idade':
      return new RegExp('^\\d{1,3}$', 'g');
      case 'nome':
      return new RegExp('^\\D+$', 'g');
    }
  }

})(window, document);
