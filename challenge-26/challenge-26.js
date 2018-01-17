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

(function () {
  'use strict';

  var $a;

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function (eventName, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function (eventName, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.get = function () {
    return this.element;
  };

  $a = new DOM('[data-js="link"]');
  $a.on('click', function clickEvent(e) {
    e.preventDefault();
    console.log('clicou');

    $a.off('click', clickEvent);
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
}());
