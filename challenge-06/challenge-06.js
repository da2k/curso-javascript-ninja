/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'FIFA World Cup 2014';

//http://www.fifa.com/worldcup/archive/brazil2014/index.html

console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Germany', 'Argentina', 'Netherlands', 'Brasil', 'Colombia'];

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
function showTeamPosition (x) {
  x = x - 1;

  if(teams[x]){
    return 'O time que está em ' + (x + 1) + 'º lugar é ' + teams[x] + '.';
  }
  return 'Não temos a informação do time que está nessa posição.';
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));
console.log(showTeamPosition(10));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var count = 20;

while (count <= 30){
  console.log(count);
  count++;
};

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
function convertToHex(color) {
  var hexa;
  
  switch(color) {
    case 'branco':
      hexa = '#FFF';
      break;
    case 'preto':
      hexa = '#000';
      break;
    case 'cinza':
      hexa = '#666';
      break;
    case 'roxo':
      hexa = '#6E5494';
      break;
    case 'verde':
      hexa = '#6CC644';
      break;
    default:
      return 'Não temos o equivalente hexadecimal para ' + color + '.';
  }
  return 'O hexadecimal para a cor ' + color + ' é ' + hexa + '.';
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
//1
console.log(convertToHex('preto'))
//2
console.log(convertToHex('branco'))
//3
console.log(convertToHex('cinza'))
//4
console.log(convertToHex('roxo'))
//5
console.log(convertToHex('verde'))
//6
console.log(convertToHex('rosa'))
//7
console.log(convertToHex('azul'))
//8
console.log(convertToHex('amarelo'))
