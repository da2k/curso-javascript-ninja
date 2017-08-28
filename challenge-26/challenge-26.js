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

(function(win, doc){
  'use strict';

  function DOM( elementTarget ){
    this.element = elementTarget;

    this.on = function methodDomOn(typeEvent, callback){
      var $elementsOnEvent = doc.querySelectorAll(this.element);

      Array.prototype.forEach.call($elementsOnEvent, function(elementOn){
        elementOn.addEventListener(typeEvent, callback, false);
      })

    };

    this.off = function methodDomOff(typeEvent, callback){
      // - O método `off` irá remover o listener de evento de todos os elementos
      // selecionados.
      var $elementsOffEvent = doc.querySelectorAll(this.element);

      Array.prototype.forEach.call($elementsOffEvent, function (elementOff) {
        elementOff.removeEventListener(typeEvent, callback, false);
      })

    }

    this.get = function methodDomGet(params) {

    }
  }

  var $a = new DOM('[data-js="link"]');

  console.log($a);

  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  // console.log('Elementos selecionados:', $a.get());
  // console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})(window, document);

var teste = document.querySelector('[data-js="teste"]');

function teste(e){
  e.preventDefault();
  console.log('teste');
}

teste.addEventListener('click', teste , false);

teste.removeEventListener('click', teste, false);


