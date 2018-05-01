(function (win, doc) {
  'use strict';

  /*
  O desafio dessa semana é criar uma mini library (biblioteca) para
  reutilizarmos nossos códigos quando fizermos manipulação de DOM!

  Requisitos:
  - O nome da lib deve ser "DOM".
  - Ela deve ser uma função construtora, que receberá uma string por parâmetro.
  Essa string será o nó do DOM a ser selecionado;
  - No construtor, você deve atribuir à `this.element` todos os elementos
  do DOM selecionados;
  - Extenda a lib para ter os métodos `on`, `off` e `get`.
  - O método `on` irá adicionar um listener de evento a todos os elementos
  selecionados.
  - O método `off` irá remover o listener de evento de todos os elementos
  selecionados.
  - O método `get` deve retornar os elementos.
  - O código abaixo deve funcionar corretamente após a lib criada.

  Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
  Só passe para o próximo problema quando tiver resolvido o anterior :)
  */
  function DOM(el) {
    if (typeof el === 'string') {
      this.elements = document.querySelectorAll(el);
      return;
    }
    throw new Error('The element needs to be a string selector');
  }

  DOM.prototype.forEach = function forEach(callback) {
    Array.prototype.forEach.call(this.elements, callback);
  }

  DOM.prototype.on = function on(event, callback, useCapture) {
    this.forEach(function (el) {
      el.addEventListener(event, callback, useCapture || false);
    });
  }

  DOM.prototype.off = function off(event, callback, useCapture) {
    this.forEach(function (el) {
      el.removeEventListener(event, callback, useCapture || false);
    });
  }

  DOM.prototype.get = function get() {
    return this.elements;
  }

  var $a = new DOM('[data-js="link"]');
  $a.on('click', function (e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

  function changeColor() {
    var colors = ['red', 'yellow', 'blue', 'purple', 'pink'];
    this.style.color = colors[Math.floor(Math.random() * colors.length)];
  }

  var $p = new DOM('[data-js="paragraph"]');
  $p.on('click', changeColor);
  console.log($p.get());

  win.setTimeout(function () {
    $p.off('click', changeColor);
  }, 10000);


})(window, document);
