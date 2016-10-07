/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Paulista';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Corinthians', 'Palmeiras', 'São Paulo', 'Santos', 'Ponte Preta' ];

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
function showTeamPosition(x) {
  if ( x <= 5 ) {
    return "O time que está em " + x + "º lugar é o " + teams[x-1] + ".";
  }
  return "Não temos a informação do time que está nessa posição.";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(5); // "O time que está em 5º lugar é o Ponte Preta."
showTeamPosition(6); // "Não temos a informação do time que está nessa posição."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 21;

while( x > 20 && x <= 30 ) {
  console.log(x);
  x++;
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
function convertToHex(color) {
  var white = ['branca', '#FFFFFF'];
  var black = ['preta', '#000000'];
  var gray = ['cinza', '#CCCCCC'];
  var red = ['vermelha', '#ABCDEF'];
  var green = ['verde', '#GHIJKL'];
  
  switch(color) {
    case 'white': 
      var colorName = white[0], colorHex = white[1];
      break;
    case 'black': 
      var colorName = black[0], colorHex = black[1];
      break;
    case 'gray': 
      var colorName = gray[0], colorHex = gray[1];
      break;
    case 'red': 
      var colorName = red[0], colorHex = red[1];
      break;
    case 'green': 
      var colorName = green[0], colorHex = green[1];
      break;
    default: 
      return "Não temos o equivalente hexadecimal para " + color + "."
  }
  
  return "O hexadecimal para a cor " + colorName + " é " + colorHex + ".";
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('gray'); // "O hexadecimal para a cor cinza é #CCCCCC."
convertToHex('blue'); // "Não temos o equivalente hexadecimal para blue."
