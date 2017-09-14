/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Brasileirão';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Palmeiras', 'São Paulo', 'Vasco', 'Flamengo', 'Botafogo'];

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
function showTeamPosition(posicao){

  var posicaoLenght = teams[posicao - 1];

  if( posicao > teams.length || posicao === 0){
    return "Não temos a informação do time que está nessa posição.";
  }

  return "O time que está em " + posicao + " º lugar é o " + posicaoLenght +".";

}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // 'O time que está em 1 º lugar é o Palmeiras.'
showTeamPosition(2); // 'O time que está em 2 º lugar é o São Paulo.'
showTeamPosition(3); // 'O time que está em 3 º lugar é o Vasco.'
showTeamPosition(4); // 'O time que está em 4 º lugar é o Flamengo.'
showTeamPosition(0); // 'Não temos a informação do time que está nessa posição.'
showTeamPosition(6); // 'Não temos a informação do time que está nessa posição.'
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while(counter <=30){
  console.log(counter);
  counter++;
}

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
function convertToHex(color){

  var redHex = '#ff0000';
  var blueHex = '#0000ff';
  var blackHex = '#000000';
  var yellowHex = '#ffff00';
  var grayHex = '#808080';

  switch(color){
    case 'red':
      console.log('O hexadecimal para a cor ' + color + ' é ' + redHex + '.');
      break;
    case 'blue':
      console.log('O hexadecimal para a cor ' + color + ' é ' + blueHex + '.');
      break;
    case 'black':
      console.log('O hexadecimal para a cor ' + color + ' é ' + blackHex + '.');
      break;
    case 'yellow':
      console.log('O hexadecimal para a cor ' + color + ' é ' + yellowHex + '.');
      break;
    case 'gray':
      console.log('O hexadecimal para a cor ' + color + ' é ' + grayHex + '.');
      break;
    default:
      console.log('Não temos o equivalente hexadecimal para ' + color + '.');
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red');    // O hexadecimal para a cor red é #ff0000.
convertToHex('blue');   // O hexadecimal para a cor blue é #0000ff.
convertToHex('black');  // O hexadecimal para a cor black é #000000.
convertToHex('yellow'); // O hexadecimal para a cor yellow é #ffff00.
convertToHex('gray');   // O hexadecimal para a cor gray é #808080.
convertToHex('green');  // Não temos o equivalente hexadecimal para green.
convertToHex('white');  // Não temos o equivalente hexadecimal para white.
convertToHex('purple'); // Não temos o equivalente hexadecimal para purple.
