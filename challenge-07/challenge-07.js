/*
Crie um array com 5 items (tipos variados).
*/
var arr = [ 'Mario', null, function soma( x,y ) { return x+y}, true, 100 ];


/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( item ) {
  return arr.push( item );
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var anotherArray = ['teste', true, 500];
addItem( anotherArray );

var total = arr.length;

for( var num = 0; num < arr[ total - 1 ].length; num++ ) {
  console.log(arr[ total - 1 ][ num ]);
}


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elemento do segundo array é ' + arr[ total - 1 ][1] + '.' );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + total + ' itens.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
arr2Total = arr[ total - 1 ].length;
console.log('O segundo array tem ' + arr2Total + ' itens.');

/*
  ** Function para os próximos exercícios
*/
  //Numeros Pares entre: minNum(valor Minimo) e maxNum(Valor máximo) loop(Define qual o loop utilizado)
  function evenNumbersBetween(minNum, maxNum, loop) {
    counter = minNum;

    if( loop === 'while' ) {

      counter = minNum;
      while( counter <= maxNum ) {
        ( counter % 2 ) === 0 ? arrayNumber.push( counter ) : '';
        counter++;
      }

    } else if( loop === 'for' ) {

      for( counter = minNum; counter <= maxNum; counter++ ) {
        ( counter % 2 ) === 0 ? arrayNumber.push( counter ) : '';
      }

    }

  }
  //Numeros Ímpares entre: minNum(valor Minimo) e maxNum(Valor máximo) loop(Define qual o loop utilizado)
  function oddNumbersBetween(minNum, maxNum, loop) {

    if( loop === 'while' ) {

      counter = minNum;
      while( counter <= maxNum ) {
        ( counter % 2 ) === 1 ? arrayNumber.push( counter ) : '';
        counter++;
      }

    } else if( loop === 'for' ) {

      for( counter = minNum; counter <= maxNum; counter++ ) {
        ( counter % 2 ) === 1 ? arrayNumber.push( counter ) : '';
      }

    }

  }


/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var arrayNumber = [];
evenNumbersBetween( 10, 20, 'while' );
console.log( 'Números pares entre 10 e 20: ' + arrayNumber );


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var arrayNumber = [];
oddNumbersBetween( 10, 20, 'while' );
console.log( 'Números ímpares entre 10 e 20: ' + arrayNumber );

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var arrayNumber = [];
evenNumbersBetween( 100, 120, 'for' );
console.log( 'Números pares entre 100 e 120: ' + arrayNumber );

var arrayNumber = [];
oddNumbersBetween( 111, 125, 'for' );
console.log( 'Números ímpares entre 111 e 125: ' + arrayNumber );
