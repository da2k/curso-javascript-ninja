/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato Brasileiro";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["Atlético", "Flamengo", "Corinthians", "Palmeiras", "Fluminense"];
console.log("Times que estão participando do campeonato:", teams);

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
function showTeamPosition(posicao) {
  switch (posicao) {
    case 1:
      return (
        "O time que está em " +
        posicao +
        "º lugar é o " +
        teams[--posicao] +
        "."
      );
      break;
    case 2:
      return (
        "O time que está em " +
        posicao +
        "º lugar é o " +
        teams[--posicao] +
        "."
      );
      break;
    case 3:
      return (
        "O time que está em " +
        posicao +
        "º lugar é o " +
        teams[--posicao] +
        "."
      );
      break;
    case 4:
      return (
        "O time que está em " +
        posicao +
        "º lugar é o " +
        teams[--posicao] +
        "."
      );
      break;
    case 5:
      return (
        "O time que está em " +
        posicao +
        "º lugar é o " +
        teams[--posicao] +
        "."
      );
      break;

    default:
      return "Não temos a informação do time que está nessa posição.";
  }
}

//OR

function otherShowTeamPosition(position) {
  if (position <= 0 || position > 5) {
    return "Não temos a informação do time que está nessa posição.";
  }

  return "O time que está em " + position + "º lugar é o " + teams[--position];
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(3); //'O time que está em 3º lugar é o Corinthians.'
showTeamPosition(1); //'O time que está em 1º lugar é o Atlético.'
showTeamPosition(5); //'O time que está em 5º lugar é o Fluminense.'
showTeamPosition(2); //'O time que está em 2º lugar é o Flamengo.'
showTeamPosition(8); //'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var i = 20;
while (i < 31) {
  console.log(i++);
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
function convertToHex(cor) {
  var hexa;
  switch (cor) {
    case "black":
      hexa = "#000000";
      break;
    case "red":
      hexa = "#FF0000";
      break;
    case "pink":
      hexa = "#FFC0CB";
      break;
    case "yellow":
      hexa = "#FFFF00";

      break;
    case "white":
      hexa = "#FFFFFF";
      break;

    default:
      return 'Não temos o equivalente hexadecimal para ' + cor + '.';
  }

  return 'O hexadecimal para a cor ' + cor.toUpperCase() + ' é ' + hexa;
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red'); //O hexadecimal para a cor RED é #FF0000
convertToHex('white'); //O hexadecimal para a cor WHITE é #FFFFFF
convertToHex('brown'); //Não temos o equivalente hexadecimal para brown.
convertToHex('blue'); //Não temos o equivalente hexadecimal para blue.
convertToHex('pink'); //O hexadecimal para a cor PINK é #FFC0CB
convertToHex('gold'); //Não temos o equivalente hexadecimal para gold.
convertToHex('black'); //O hexadecimal para a cor BLACK é #000000
convertToHex('shade'); //Não temos o equivalente hexadecimal para shade.
