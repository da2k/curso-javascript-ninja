( function( win, doc ){
  'use strict';


  /*
    Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
    `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
    */
    var people1 = {
      name: "Virginia",
      lastName: "Rodrigues"
    };

    var people2 = {
      name: "Perla",
      lastName: "Moreira"
    };

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
    console.log( 'O nome das pessoas é:' );

    function getFullName() {
        return this.name + ' ' + this.lastName;
    }
      console.log(getFullName.apply(people1));
      console.log(getFullName.apply(people2));


    /*
    Crie uma função chamada `sum`. Essa função pode receber uma lista de
    parâmetros variável, e deverá retornar a soma de todos eles.
    Não use estruturas de repetição para somar os argumentos.
    Na primeira linha, dentro da função, deixe um console.log para mostrar todos
    os parâmetros passados para essa função.
    */


    function sum (){
      console.log(sum.length);
      var result = Array.prototype.reduce.call( arguments, function(acumulado, atual ,index){
        return acumulado + atual;
      });
      console.log(result);
    }

    console.log(sum(2,3,10,30));

    /*
    Mostre no console que a função acima funciona, invocando-a em 3 console.log
    diferentes, com quantidades variáveis de parâmetros passados.
    */
    console.log( '\nSomar alguns números:' );
    console.log(sum(5.0,6.8,70));
    console.log(sum(50,100,200));
    console.log(sum(110,500,500));


    /*
    Declare uma variável chamada `userEntry`, que irá receber alguns valores
    entrados pelo usuário. Mostre para o usuário a seguinte frase:
    "Entre com alguns números que serão somados:"
    */
    var userEntry = prompt('Entre com alguns números que serão somados:');


    /*
    Mostre no console o valor entrado pelo usuário:
    */
    console.log( '\nEntrada do usuário:' );
    console.log(userEntry);

    /*
    Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
    e remove tudo o que não for número, retornando um array somente com os números
    da string. Mostre a representação em string dessa função no console.
    */
    console.log( '\nFunção que limpa entrada do usuário (somente números):' );
    function justNumbers( stringName ){
      return stringName.match(/\d/g);
    };

    console.log(justNumbers('42V32irgin19'));
    console.log(justNumbers.toString());

    /*
    Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
    atribuindo o resultado à uma variável `numbers`.
    */
    console.log( '\nEntrada do usuário limpa. Somente números:' );

   var numbers = justNumbers('42V32irgin19');



    /*
    Agora com o array de números, utilize a função `sum` para somar todos os
    números desse array e mostre o resultado no console.
    */
    console.log( '\nSomar números entrados pelo usuário:' );


    console.log(typeof(numbers));

    console.log(sum(numbers));


  })(window, document);
