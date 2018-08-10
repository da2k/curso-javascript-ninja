(function (window, document) {
  'use strict'

  /*

  anotações1 ---
  métodos e propriedades de funções:
  function.length() - Retorna a quantidade de parâmetros que uma função pode receber
  function.toString() - Retorna a função é mostrada literalmente no console, como é escrita em forma de string
  function.call() - ele chama a função é como se a envocasse-mos ( function() ), porém podemos passar
  um .this. como parametro para ao call(), e pode receber null ou objeto vazil {}
  exemplo:
  function myFunction (){
    console.log(this.name)
  }

  var obj = {
    name = 'Lucas'
  }

  myfunction();
  ---retorno : undefinede para o 'this.nome', pois 'nome' não existe em myFunction

  myfunction.call( obj );
  ---retorno : 'Lucas'

  Anotações2--
  function.call() - Também pode receber os parâmetros da própria função
  exemplo:

  function myFunction (a, b, c, d){
    console.log(this.name, a, b, c, d)
  }

  myfunction.call( obj, 1, 2, 3 )
  retorno: 'Lucas', 1, 2, 3, undefined

  function.apply() - funciona como o call(), porém os arguemtnos que vem a seguir do obj (.this)
  vem em forma de array ou arrayLike
  exemplo:

  function myFunction ( a, b, c, d ) {
    console.log(this.name, a, b, c, d)
  }

  var arr = [1, 2, 3, 4]
  var obj = {
    name: 'Lucas'
  }

  myFunction.apply(obj, arr)
  retorno: 'Lucas' 1 2 3 4

  aula 3---
  Prototype
  -> podemos sobrescrever o prototype

  //Criando uma função construtora ->
  function myFunction (name, lastName){
    this.name = name;
    this.lastName = lastName;
  }

  //adcionando um prototype de my function e atribuindo à fullname(), usado para estender os objetos ->
  myFunction.prototype.fullName = function (){
    return this.name + ' ' + this.lastName;
  }

  //Usando o construtor de myFunction, passando os parametros esperado e atribuindo à variavel lucas->
  var lucas = new myFunction( 'Lucas', 'Duarte' )

  //chamando o atributo fullName() de lucas ->
  console.log( lucas.fullName() )
    RETORNO = 'Lucas Duarte'

  aula4 --
  Para os array-like pode-se usar o protype para 'enganar' o js, e usar métodos de arrays reais
  em arrays like, por exemplo:

  function myFunction (){
    Array.prototype.forEach.call( arguments, function (iten, index ){
        console.log( iten )
    } )
  }

  myFunction (1, 2, 3, 4, 5)

  Na função myFunction, estou usando o método forEach, que é um método
  apenas de arrays e não de arrays-like, em um array-like, no caso,
  o `arguments`, através desta anotação. (Array.prototype.)





  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */
  var lucas = {
    name: 'Lucas',
    lastName: 'Duarte'
  }

  var ney = {
    name: 'Ney',
    lastName: 'Vaz'
  }

  /*
  Agora crie uma função chamada `getFullName` que retorne as propriedades
  `name` e `lastName` dos objetos acima, formando um nome completo.
  A função não deve receber nenhum parâmetro, mas as propriedades `name` e
  `lastName` devem ser dinâmicas.
  A mesma função deve servir para as duas pessoas (ou qualquer outra que for
   criada).
   Depois disso, invoque essa função, mostrando no console o nome completo das
   pessoas que foram criadas anteriormente, passando as pessoas acima como
   contexto da função. Use um console.log por pessoa.
   */
  console.log('O nome das pessoas é:');
  function getFulName() {
    return this.name + ' ' + this.lastName
  }

  console.log(getFulName.call(lucas))
  console.log(getFulName.call(ney))

  /*
  Crie uma função chamada `sum`. Essa função pode receber uma lista de
  parâmetros variável, e deverá retornar a soma de todos eles.
  Não use estruturas de repetição para somar os argumentos.
  Na primeira linha, dentro da função, deixe um console.log para mostrar todos
  os parâmetros passados para essa função.
  */
  function sum() {
    console.log(arguments)
    return Array.prototype.reduce.call(arguments, function (acumulated, iten) {
      return Number(acumulated) + Number(iten);
    });
  }

  /*
  Mostre no console que a função acima funciona, invocando-a em 3 console.log
  diferentes, com quantidades variáveis de parâmetros passados.
  */
  console.log('\nSomar alguns números:');
  console.log(sum(1, 2));
  console.log(sum(1, 2, 3, 4));
  console.log(sum(1, 2, 3, 4, 5, 6));

  /*
  Declare uma variável chamada `userEntry`, que irá receber alguns valores
  entrados pelo usuário. Mostre para o usuário a seguinte frase:
  "Entre com alguns números que serão somados:"
  */
  console.log('\nEntrada do usuário:');
  var userEntry = prompt('Entre com alguns números que serão somados:');

  /*
  Mostre no console o valor entrado pelo usuário:
  */
  console.log('\nFunção que limpa entrada do usuário (somente números):');
  console.log(userEntry)

  /*
  Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
  e remove tudo o que não for número, retornando um array somente com os números
  da string. Mostre a representação em string dessa função no console.
  */
  console.log('\nEntrada do usuário limpa. Somente números:');
  function justNumbers(entry) {
    return entry.replace(/\D+/g, ',').split(',')
  }

  /*
  Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
  atribuindo o resultado à uma variável `numbers`.
  */
  var numbers = justNumbers(userEntry)
  console.log( numbers )

  /*
  Agora com o array de números, utilize a função `sum` para somar todos os
  números desse array e mostre o resultado no console.
  */
  console.log('\nSomar números entrados pelo usuário:');

console.log( sum.apply( sum, numbers ) )

})(window, document)
