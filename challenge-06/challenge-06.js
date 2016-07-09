/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Brasileiro';
console.log( championship );
/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = [
  'Corinthians',
  'São Paulo',
  'Palmeiras',
  'Santos',
  'Curitiba'
];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

function showTeamPosition( posicao ) {
  if( posicao > 1 && posicao < 5 ) {
    return  'O time que está em ' + posicao + 'º lugar é o ' + teams[ posicao - 1 ] + '.';
  } else {
    return 'Não temos a informação do time que está nessa posição.';
  }
}



/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log( showTeamPosition(1) );
console.log( showTeamPosition(2) );
console.log( showTeamPosition(3) );
console.log( showTeamPosition(4) );
console.log( showTeamPosition(6) );

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var count = 20;

while( count <= 30 ) {

  console.log( count++ );

}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red"; OK
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom); OK
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex( color ) {

  var colors = {
    'red': '#F00',
    'black': '#000',
    'blue': '#00F',
    'green': '#0F0',
    'yellow': '#FF0'
  };

  var message = 'O hexadecimal para a cor ' + color + ' é ' + colors[ color ] + '.';

  switch( color ) {
    case 'red':
      return console.log( message );
    break;

    case 'black':
      return console.log( message );
    break;

    case 'blue':
      return console.log( message );
    break;

    case 'green':
      return console.log( message );
    break;

    case 'yellow':
      return console.log( message );
    break;

    default:

      return console.log('Não temos o equivalente hexadecimal para ' + color + '.');

  }

}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red');
convertToHex('black');
convertToHex('blue');
convertToHex('green');
convertToHex('yellow');
convertToHex('gray');
convertToHex('violet');
convertToHex('lime');
