(function (win, doc) {
  'use strict';
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.
  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */


  //SELECIONANDO OS ELEMENTOS
  var $inputResultado = doc.querySelector('[data-js="inputResultado"]');

  var $btnIgual = doc.querySelector('[data-js="btnIgual"]');
  var $btnCE = doc.querySelector('[data-js="btnCE"]');

  var $btnNumeros = doc.querySelectorAll('[data-js="btnNumero"]');
  var $btnOperacoes = doc.querySelectorAll('[data-js="btnOperacao"]');


  //FUNÇÃO INICIALIZADORA
  function initialize() {
    initEvents();
  }


  //CRIANDO AS FUNÇÕES
  function initEvents() {
    $btnIgual.addEventListener('click', handleClickIgual, false);
    $btnCE.addEventListener('click', handleClickCE, false);
    Array.prototype.forEach.call($btnNumeros, function(button) {
      button.addEventListener('click', handleClickNumero, false);
    })
    Array.prototype.forEach.call($btnOperacoes, function(button) {
      button.addEventListener('click', handleClickOperacao, false);
    })
  }

  function handleClickCE() {
    $inputResultado.value = 0;
  }

  function handleClickNumero() {
    if ($inputResultado.value.charAt(0) === '0') {
      $inputResultado.value = $inputResultado.value.substring(1);
    }
    $inputResultado.value += this.value;
  }

  function handleClickOperacao() {
    removeLastItemOperator();
    $inputResultado.value += this.value;
  }

  function isLastItemAnOperation() {
    var operations = getOperations();
    var lastItem = $inputResultado.value.split('').pop();
    return operations.some(function(op) {
      return op === lastItem;
    })
  }

  function getOperations() {
    return Array.prototype.map.call($btnNumeros, function(button) {
      return button.value;
    });
  }

  function removeLastItemOperator() {
    if (isLastItemAnOperation()) {
      $inputResultado.value = $inputResultado.value.slice(0, -1);
    }
  }

  function handleClickIgual() {
    removeLastItemOperator();
    $inputResultado.value = eval($inputResultado.value);
  }


  //INICIA A CALCULADORA
  initialize();

})(window, document);
