/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Italiano de Futebol';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Juventus', 'Napoli', 'Roma', 'Internazionale','Milan'];
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
function showTeamPosition (x,y){
  return "O time que está em" + x+"º lugar é o " + y+".";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1, 'Juventus') // 'O time que está em 1° lugar é o Juventus.'
showTeamPosition(2, 'Napoli') // 'O time que está em 2° lugar é o Napoli.'
showTeamPosition(3, 'Roma') // 'O time que está em 3° lugar é o Roma.'
showTeamPosition(6, 'Milan') // 'O time que está em 6° lugar é o Milan.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while (counter <= 30){
console.log (counter);
counter ++;}

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
function convertToHex (cor){
 var black = 000000;
 var indigo = '4b0082';
 var purple =800080;
 var teal = '008b8b';
 var lime = '00ff00';
 switch (cor) {
  case black:
  console.log ('O hexadecimal para a cor preto é ' +black + '.' );
  break;
  case indigo:
  console.log ('O hexadecimal para a cor indigo é ' +indigo + '.');
  break;
  case purple:
  console.log ('O hexadecimal para a cor roxa é ' +purple + '.');
  break;
  case teal:
  console.log ('O hexadecimal para a cor ciano é ' +teal + '.');
  break;
  case lime:
  console.log ('O hexadecimal para a cor verde  é ' +lime + '.');
  break;
  default:
  console.log ('Não temos o equivalente hexadecimal para ' + (cor) + '.');
 }
  }

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

//convertToHex('00ff00'); //O hexadecimal para a cor verde é 00ff00.
//convertToHex('008b8b'); //O hexadecimal para a cor ciano é 008b8b.
//convertToHex(000000); //O hexadecimal para a cor preta é 000000.
//convertToHex(800080); //O hexadecimal para a cor roxa é 800080.
//convertToHex('4b0082'); //O hexadecimal para a cor indigo é 4b0082.
//convertToHex('5a3b54'); //Não temos o equivalente hexadecimal para 5a3b54.
//convertToHex('324567'); //Não temos o equivalente hexadecimal para 324567.
//convertToHex('987654'); //Não temos o equivalente hexadecimal para 987654'.
