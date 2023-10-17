 /*
Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
`name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
*/
var pessoa1 = {
  name: "João",
  lastName: "Silva"
};
var pessoa2 = {
  name: "Maria",
  lastName: "Souza"
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
console.log( getFullName( pessoa1 ) );
console.log( getFullName( pessoa2 ) );
function getFullName( pessoa ) {
  return pessoa.name + ' ' + pessoa.lastName;
}


/*
Crie uma função chamada `sum`. Essa função pode receber uma lista de
parâmetros variável, e deverá retornar a soma de todos eles.
Não use estruturas de repetição para somar os argumentos.
Na primeira linha, dentro da função, deixe um console.log para mostrar todos
os parâmetros passados para essa função.
*/

console.log( '\nA soma dos números é:' );
console.log( sum( 1, 2, 3, 4, 5 ) );
function sum( ...numeros ) {
  var soma = 0;
  for( var i = 0; i < numeros.length; i++ ) {
    soma += numeros[ i ];
  }
  return soma;
}

/*
Mostre no console que a função acima funciona, invocando-a em 3 console.log
diferentes, com quantidades variáveis de parâmetros passados.
*/
console.log( '\nSomar alguns números:' );
console.log( sum( 1, 2, 3, 4, 5 ) );
console.log( sum( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) );
console.log( sum( 2, 4, 6, 8, 10) );

/*
Declare uma variável chamada `userEntry`, que irá receber alguns valores
entrados pelo usuário. Mostre para o usuário a seguinte frase:
"Entre com alguns números que serão somados:"
*/
var userEntry = prompt( 'Entre com alguns números que serão somados:' );
console.log( '\nA soma dos números é:' );
console.log( sum( userEntry ) );
function sum( numeros ) {
  var soma = 0;
  for( var i = 0; i < numeros.length; i++ ) {
    soma += numeros[ i ];
  }

/*
Mostre no console o valor entrado pelo usuário:
*/
console.log( '\nEntrada do usuário:' );

/*
Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
e remove tudo o que não for número, retornando um array somente com os números
da string. Mostre a representação em string dessa função no console.
*/
console.log( '\nFunção que limpa entrada do usuário (somente números):' );
console.log( justNumbers( userEntry ) );
function justNumbers( numeros ) {
  var numerosLimpos = [];
  for( var i = 0; i < numeros.length; i++ ) {
    if( isNaN( numeros[ i ] ) ) {
      numerosLimpos.push( numeros[ i ] );
    }
    else {
      numerosLimpos.push( parseInt( numeros[ i ] ) );
    }
    
  }
  return numerosLimpos;
}


/*
Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
atribuindo o resultado à uma variável `numbers`.
*/
console.log( '\nEntrada do usuário limpa. Somente números:' );
console.log( justNumbers( userEntry ) );
var numbers = justNumbers( userEntry );
console.log( numbers );


/*
Agora com o array de números, utilize a função `sum` para somar todos os
números desse array e mostre o resultado no console.
*/
console.log( '\nSomar números entrados pelo usuário:' );
console.log( sum( numbers ) );
function sum( numeros ) {
  var soma = 0;
  for( var i = 0; i < numeros.length; i++ )
    soma += numeros[ i ];
  return soma;
}
  
