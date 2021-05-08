(function(document, window){

  'use strict'

/*
  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */
  // ?

 let gilmara = {
  name: 'Gilmara',
  lastname: 'Pimentel'
}

let alzira = {
  name: 'Alzira',
  lastname: 'Maia'
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
  contexto da função. Use um console.log por pessoa. // CONTEXTO DA FUNCAO E O 'THIS'
  */

  function getFullName(){
    return this.name + ' ' + this.lastname;

  }
  console.log( 'O nome das pessoas é:' );
  // ?
  console.log(getFullName.call(gilmara));
  console.log(getFullName.call(alzira)); // CALL/APPLY SAO PODEROSOS, TE DEIXA DIZER QUAL E O CONTEXTO(THIS )DA FUNCAO  console.log(getFullName.call(alzira));


  /*
  Crie uma função chamada `sum`. Essa função pode receber uma lista de
  parâmetros variável, e deverá retornar a soma de todos eles.
  Não use estruturas de repetição para somar os argumentos.
  Na primeira linha, dentro da função, deixe um console.log para mostrar todos
  os parâmetros passados para essa função.
  */
  // ?


  function sum(){

    console.log('Argumentos passados', arguments);

    return Array.prototype.reduce.call(arguments, function(acumulator, actual){
      // console.log('acumulator', typeof acumulator)
        return Number(acumulator) + Number(actual); // se os parametros nao vierem como number, converteremos para number
    })

  }
// **nao tem como fazer arguments.reduce, estao usamos o prototype do array**
 // SE FOSSE ARRAY FICARIA ASSIM:
//  function sum(list){
//    console.log(list)

//   let listSumResult = list.reduce(function(acumulador, atual){
//     return acumulador + atual;
//   })

//   return listSumResult;

//  }

//  let list1 = [1,2,3,4,5,6,7,8,9,10];
//  let list2 = [1,2,3];
//  let list3 = [1,2,3,4,5,6,7,8,9,10,11,12,13];

//  console.log('list1',sum(list1))
//  console.log('list2',sum(list2))
//  console.log('list3',sum(list3))

  /*
  Mostre no console que a função acima funciona, invocando-a em 3 console.log
  diferentes, com quantidades variáveis de parâmetros passados.
  */
  console.log( '\nSomar alguns números:' );
  // ?
  console.log(sum( 2, 5, 8 ));
  console.log(sum( 10, 56, 89, 7, 4, 6 ));
  console.log(sum( 1, 3, 0 ));


  /*
  Declare uma variável chamada `userEntry`, que irá receber alguns valores
  entrados pelo usuário. Mostre para o usuário a seguinte frase:
  "Entre com alguns números que serão somados:"
  */
  // ?

  let userEntry = prompt("Entre com alguns números que serão somados:");

  /*
  Mostre no console o valor entrado pelo usuário:
  */
  console.log( '\nEntrada do usuário:' );
  // ?
  console.log(userEntry);

  /*
  Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
  e remove tudo o que não for número, retornando um array somente com os números
  da string. Mostre a representação em string dessa função no console.
  */
  console.log( '\nFunção que limpa entrada do usuário (somente números):' );
  // ?

  function justNumbers(stringValue){
    // console.log('O que o usuario entrou:',stringValue)
    return stringValue.replace(/\D+/g, ',').split(','); // substituindo tudo que nao e digito e colocando num array

  }
  console.log(justNumbers.toString()); // Representacao da funcao em String


  /*
  Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
  atribuindo o resultado à uma variável `numbers`.
  */
  console.log( '\nEntrada do usuário limpa. Somente números:' );
  // ?
  let numbers = justNumbers(userEntry);
  console.log('numbers', numbers);

  /*
  Agora com o array de números, utilize a função `sum` para somar todos os
  números desse array e mostre o resultado no console.
  */
  console.log( '\nSomar números entrados pelo usuário:' );
  // ?
  console.log(sum.apply( {}, numbers)); // Usamos o 'apply' porque o numbers e um array, assim e possivel passar as variaveis dentro do array
  // aqui onde passei '{}', poderia ter sido a propria funcao 'sum' ou 'null'
  // O segredo para resolver este exercicio era colocar "Number"  ou '+' no 'acumulator' e no 'actual' no retorno da funcao 'sum'

})(document, window);


