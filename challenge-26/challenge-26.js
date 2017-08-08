(function(win, doc){

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
    // ?

    var $link = document.querySelector('[data-js="link"]');

    function DOM( tagName ) {
      this.tagName = doc.querySelectorAll(tagName);

      this.on = function on(event){
        return doc.querySelectorAll(tagName).addEventListener('click', function(){
            event.preventDefault();
            console.log('clicou');
        }, false);
      };

      this.off = function off(event){
        return doc.querySelectorAll( tagName ).removeEventListener('click', function(){
            event.preventDefault();
            console.log('apagou');
        }, false);
      };

      this.get = function get(event) {
        return this.tagName;
      };
    }

    var $a = new DOM('[data-js="link"]');

    console.log('Elementos selecionados:', $a.get());
    console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})(window, document);
