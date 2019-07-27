

/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

function DOM(element){

    this.element = document.querySelectorAll(element)
    this.name = 'Standard'
  
    this.on = function( event, callback){
      this.element.forEach((e)=>{
        e.addEventListener(event, callback)
      })
    }
  
    this.off = function(event, callback){
      $this.element.forEach((e)=>{
        e.removeEventListener(event, e)
      })
    }
  
    this.get = function(){
      return this.element
    }

    this.forEach = function(){
        Array.prototype.forEach.apply(this.element, arguments)
    }

    this.map = function(){
         Array.prototype.map.apply(this.element, arguments)
    }
  
  }

  var p = new DOM('p')

  p.forEach(function(e){
      console.log(e)
  })

  
let j = p.map(function(e){
    return e
})

  console.log(j)