/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato Cearense";
console.log(championship); // Campeonato Cearense

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Ceará', 'Fortaleza', 'Ferroviário', 'Floresta', 'Guarani de Juazeiro'];

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
  
  return `O time que está em ${num}º lugar, é o time ${teams[num]}`
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(2); // Ferroviário
showTeamPosition(1); // Fortaleza
showTeamPosition(0); // Ceará
showTeamPosition(4); // Guarani de Juazeiro

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var num = 20;
while (num <= 30) {
  console.log(num);
  num++;
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
  var red = '#FF0000';
  var blue = '#0000FF';
  var green = '#008000';
  var black = '#000000';
  var grey = '#808080';
  
  switch(cor){
    case ("red"):
      return `O hexadecimal para a cor ${cor} é ${red}.`
      break
    case ("blue"):
      return `O hexadecimal para a cor ${cor} é ${blue}.`
      break
    case ("green"):
      return `O hexadecimal para a cor ${cor} é ${green}.`
      break
    case ("black"):
      return `O hexadecimal para a cor ${cor} é ${black}.`
      break
    case ("grey"):
      return `O hexadecimal para a cor ${cor} é ${grey}.`
      break
    default:
      return `Não temos o equivalente hexadecimal para ${cor}.`
  }
}
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('blue') // "O hexadecimal para a cor blue é #0000FF."
convertToHex('green') // "O hexadecimal para a cor green é #008000."
convertToHex('black') // "O hexadecimal para a cor black é #000000."
convertToHex('grey') // "O hexadecimal para a cor grey é #808080."
convertToHex('yellow') // "Não temos o equivalente hexadecimal para yellow."
convertToHex('red') // "O hexadecimal para a cor red é #FF0000."
convertToHex('pink') // "Não temos o equivalente hexadecimal para pink."
convertToHex('bege') // "Não temos o equivalente hexadecimal para bege."
