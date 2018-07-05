/*
O desafio dessa semana é criar uma mini library (biblioteca) para
reutilizarmos nossos códigos quando fizermos manipulação de DOM!

Requisitos:
- O nome da lib deve ser "DOM". (OK)
- Ela deve ser uma função construtora, que receberá uma string por parâmetro.
Essa string será o nó do DOM a ser selecionado; (OK)
- No construtor, você deve atribuir à `this.element` todos os elementos
do DOM selecionados; (OK) <--
- Extenda a lib para ter os métodos `on`, `off` e `get`. (OK)
- O método `on` irá adicionar um listener de evento a todos os elementos
selecionados. (OK)
- O método `off` irá remover o listener de evento de todos os elementos
selecionados. (OK)
- O método `get` deve retornar os elementos.
- O código abaixo deve funcionar corretamente após a lib criada.

Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
Só passe para o próximo problema quando tiver resolvido o anterior :)
*/
// ?

(function(win, doc){
  'use strict';

  function DOM(str){
    this.element = doc.querySelectorAll(str);
  }

  DOM.prototype.on = function(event, callback) {
    Array.prototype.forEach.call( this.element, function(btn) {
      btn.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function() {
    Array.prototype.forEach.call( this.element, function(btn) {
      btn.removeEventListener(event, callback, false);
    });
  }

  DOM.prototype.get = function() {
       return this.element;
  }

  var $a = new DOM('[data-js="link"]');
  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
})(window, document);
