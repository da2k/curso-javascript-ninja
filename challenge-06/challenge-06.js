/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Paulistão";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["Santos", "Ponte Preta", "Oeste", "Água Santa", "Santo André"];

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
function showTeamPosition(num) {
  var position;

  if (num === 1) {
    var position = 0;
  } else if (num <= 0 || num > 5) {
    return "Não temos a informação do time que está nessa posição.";
  }

  position = num - 1;
  return `O time que está em ${num}º lugar é o ${teams[position]}.`;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(0));
console.log(showTeamPosition(3));
console.log(showTeamPosition(5));
console.log(showTeamPosition(1));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
function ateTrinta() {
  var counter = 20;

  while (counter <= 30) {
    console.log(counter);
    counter++;
  }
}

ateTrinta();

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
  var hexcolor;

  switch (color) {
    case "white":
      hexcolor = "#FFF";
      return `O hexadecimal para ${color} é ${hexcolor}.`;
      break;
    case "black":
      hexcolor = "#000";
      return `O hexadecimal para ${color} é ${hexcolor}.`;
      break;
    case "yellow":
      hexcolor = "#FF0";
      return `O hexadecimal para ${color} é ${hexcolor}.`;
      break;
    case "red":
      hexcolor = "#FF0000";
      return `O hexadecimal para ${color} é ${hexcolor}.`;
      break;
    case "pink":
      hexcolor = "#A1A";
      return `O hexadecimal para ${color} é ${hexcolor}.`;
      break;
    default:
      return `Não temos o equivalente hexadecimal para ${color}.`;
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex("red")); // O hexadecimal para red é #FF0000.
console.log(convertToHex("black")); // O hexadecimal para black é #000.
console.log(convertToHex("blue")); // Não temos o equivalente hexadecimal para blue.
console.log(convertToHex("pink")); // O hexadecimal para pink é #A1A.
console.log(convertToHex("white")); // O hexadecimal para white é #FFF.
console.log(convertToHex("yellow")); // O hexadecimal para yellow é #FF0.
console.log(convertToHex("brown")); // Não temos o equivalente hexadecimal para brown.
console.log(convertToHex("grey")); // Não temos o equivalente hexadecimal para grey.
