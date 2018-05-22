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
// ?
(function() {

  'use strict';

  function DOM(elements) {
    this.element = this.getElements(elements);
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback){
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.getElements = function getElements(element) {
    return document.querySelectorAll(element);
  };

  DOM.prototype.substituteElements = function substituteElements(newElement, oldElement) {
    return oldElement.replaceWith(newElement);
  };

  DOM.prototype.get = function get(){
    return this.element;
  };

  var $dom = new DOM('[data-js="link"]');
  $dom.on('click', function parou(e) {
    e.preventDefault();
    console.log('clicou');
    $dom.off('click', parou);
  });

  //Testes
  var $h1 = document.createElement('h1');
  var $textNode = document.createTextNode('Titulo !!! ');
  $h1.append($textNode);

  var $h4 = document.createElement('h4');
  var $textNode2 = document.createTextNode('Titulo menor !!! ');
  $h4.append($textNode2);


  document.body.append($h1);
  document.body.append($h4);

  $dom.substituteElements($h4, $h1);

  console.log('Elementos selecionados:', $dom.get());
  console.log('$a é filho de body?', $dom.get()[0].parentNode === document.body);
})();
