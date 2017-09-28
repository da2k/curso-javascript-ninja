(function(win,doc){
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

  function DOM(selectedNode){
      this.element = document.querySelectorAll(selectedNode);
  }

  DOM.prototype.on = function onDOM(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(event, callback, false);
    })
  };

  DOM.prototype.off = function offDOM(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(event, callback, false);
    })
  };

  DOM.prototype.get = function getDOM(){
    return this.element;
  };

  function handleClick(e) {
    e.preventDefault();
    console.log('clicou');
  }

  var $a = new DOM('[data-js="link"]');
  $a.on('click', handleClick); //alterado pra função fora, para poder usar o off se necessário
  // para remover o listener usar: $a.off('click', handleClick);

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})(window, document);
