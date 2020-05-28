<!DOCTYPE html>
<html lang="pt-br" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>24</title>


</head>

<body>

  <button>click me</button>

  <p>Alem do mundo</p>
  <p>Alem do oceano</p>
  <p>Alem do mar</p>

  <script>
    (function (win, doc) {

      "use strict"

      let DOM = function (node) {
        this.element = doc.querySelectorAll(node)
      }

      DOM.prototype.on = function (event, handler) {
        Array.prototype.forEach.call(this.element, (element, index) => {
          element.addEventListener(event, handler)
        })
      }

      DOM.prototype.off = function (event, handler) {
        Array.prototype.forEach.call(this.element, (element, index) => {
          element.removeEventListener(event, )
        })
      }

      DOM.prototype.get = function () {
        return this.element
      }

      let $button = new DOM('button');
      $button.on('click', function (e) {
        e.preventDefault();
        console.log('clicou');
      });

      /*
      Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
      métodos semelhantes aos que existem no array, mas que sirvam para os
      elementos do DOM selecionados.
      Crie os seguintes métodos:
      - forEach, map, filter, reduce, reduceRight, every e some.
      */

      DOM.prototype.forEach = function (callback) {
        for (let i = 0; i < this.element.length; i++) {
          callback(this.element[i], i)
        }
      }

      DOM.prototype.filter = function (callback) {
        let arr = []
        for (let i = 0; i < this.element.length; i++) {
          if (callback(this.element[i], i)) {
            arr.push(this.element[i])
          }
        }
        return arr
      }

      DOM.prototype.map = function (callback) {
        let list = []
        for (let i = 0; i < this.element.length; i++) {
          list.push(callback(this.element[i], i))
        }
        return list
      }

      DOM.prototype.reduce = function (callback, initial = false) {
        let acc = '' || this.element[0]
        for (let i = 0; i < this.element.length; i++) {
          acc = callback(acc, this.element[i], i, this.element)
        }
        return acc
      }

      DOM.prototype.reduceRight = function (callback, initial = false) {
        let acc = '' || this.element[this.element.length - 1]
        for (let i = this.element.length - 1; i >= 0; i--) {
          acc = callback(acc, this.element[i], i, this.element)
        }
        return acc
      }

      DOM.prototype.some = function (callback) {
        let valid
        for (var i = 0; i < this.element.length; i++) {
          valid = false || callback(this.element[i], i, this.element)
          if (valid) {
            break
          }
        }
        return valid
      }

      DOM.prototype.every = function (callback) {
        let valid = false
        for (var i = 0; i < this.element.length; i++) {
          valid = false || callback(this.element[i], i, this.element)
          if (!valid) {
            break
          }
        }
        return valid
      }



      /*

      Crie também métodos que verificam o tipo do objeto passado por parâmetro.
      Esses métodos não precisam depender de criar um novo elmento do DOM, podem
      ser métodos estáticos.

      */

      DOM.typeOf = function (data) {
        return typeof data
      }

      /*

      Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
      no objeto, como nos exemplos abaixo:
      DOM.isArray([1, 2, 3]); // true
      DOM.isFunction(function() {}); // true
      DOM.isNumber('numero'); // false

      Crie os seguintes métodos para verificação de tipo:
      - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
      O método isNull deve retornar `true` se o valor for null ou undefined.
      */

      DOM.isArray = e => Array.isArray(e)
      DOM.isObject = e => (typeof e) === 'object'
      DOM.isFunction = e => (typeof e) === 'function'
      DOM.isNumber = e => (typeof e) === 'number'
      DOM.isString = e => (typeof e) === 'string'
      DOM.isBoolean = e => (typeof e) === 'boolean'
      DOM.isNull = e => (typeof e) === 'undefined' || (typeof e) === 'null'



    })(window, document)
  </script>

</body>

</html>
