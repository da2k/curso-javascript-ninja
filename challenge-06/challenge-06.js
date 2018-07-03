/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Flamengo', 'Vasco', 'Cabofriense', 'Bangu', 'Volta Redonda']

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

function showTeamPosition(num) {
  var msg = 'O time que está em ' + num + 'º lugar é o ' + teams[num -1 ];  
  if ( !teams[num -1] ) {
    msg = 'Não temos a informação do time que está nessa posição.';
    return msg;
  }
  return msg;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));
console.log(showTeamPosition(5));
console.log(showTeamPosition(9));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var cont = 20;
while ( cont <= 30 ){
  console.log(cont);
  cont++;

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex( color ){
  var hexaColors = { 
    red: '#FF0000',
    green: '#008000',
    blue: '#0000FF',
    purple: '#800080',
    yellow: '#FFFF00',
    gray: '#808080',
    pink: '#FFC0CB',
    orange: '#FFA500'
  }
  switch (color){
    case 'red':
      console.log('O hexadecimal para cor ' + color + ' é ' + hexaColors.red);
      break
    case 'green':
      console.log('O hexadecimal para cor ' + color + ' é ' + hexaColors.green);
      break
    case 'blue':
    console.log('O hexadecimal para cor ' + color + ' é ' + hexaColors.blue);
    break
    case 'purple':
    console.log('O hexadecimal para cor ' + color + ' é ' + hexaColors.purple);
    break
    case 'yellow':
    console.log('O hexadecimal para cor ' + color + ' é ' + hexaColors.yellow);
    break
    case 'gray':
    console.log('O hexadecimal para cor ' + color + ' é ' + hexaColors.gray);
    break
    case 'pink':
    console.log('O hexadecimal para cor ' + color + ' é ' + hexaColors.pink);
    break
    case 'orange':
    console.log('O hexadecimal para cor ' + color + ' é ' + hexaColors.orange);
    break
    default:
    console.log('Não temos o equivalente hexadecimal para ' + color + '!');  
  }      
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red');
convertToHex('green');
convertToHex('blue');
convertToHex('purple');
convertToHex('yellow');
convertToHex('gray');
convertToHex('pink');
convertToHex('orange');
convertToHex('brown');
