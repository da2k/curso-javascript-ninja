
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

// var $a = new DOM('[data-js="link"]');
// $a.on('click', function(e) {
//   e.preventDefault();
//   console.log('clicou');
// });

// console.log('Elementos selecionados:', $a.get());
// console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);


function DOM(element){

  this.$element = document.querySelectorAll(element)
  this.name = 'Standard'

  this.on = function( event, callback){
    this.$element.forEach((e)=>{
      e.addEventListener(event, callback)
    })
  }

  this.off = function(event, callback){
    $this.$element.forEach((e)=>{
      e.removeEventListener(event, e)
    })
  }

  this.get = function(){
    return this.$element
  }

}


var $elemento = new DOM('[data-js="link"]')

console.log($elemento)

$elemento.on('click', function(event){
  event.preventDefault()

  console.log('Clicou')
})

console.log('Elementos Selecionados: ', $elemento.get()) /
console.log('$elemento é filho de body?', $elemento.get()[0].parentNode === document.body); // true