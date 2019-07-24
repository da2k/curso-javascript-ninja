/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = ("campeonato");
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['sp', 'ce', 'ba', 'fortaleza', 'flamengo'];
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
function showTeamPosition(number) {
  var posicao = number - 1;
  if(teams[posicao]){
    return "O time que está em " + number + "º lugar é o " + teams[posicao] + ".";
  } else {
    return "Não temos a informação do time que está nessa posição.";
  }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
> showTeamPosition(1) //'O time que está em 1º lugar é o sp.'
> showTeamPosition(2) //'O time que está em 2º lugar é o ce.'
> showTeamPosition(3) //'O time que está em 3º lugar é o ba.'
> showTeamPosition(4) //'O time que está em 4º lugar é o fortaleza.'
> showTeamPosition(6) //'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 20;
while (contador <= 30) {
  console.log(contador++);
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
  switch(cor) {
    case 'preto':
      hexa = '#000000';
      break;
    case 'branco':
      hexa = '#ffffff';
      break;
    case 'verde':
      hexa = '#00ff00';
      break;
    case 'vermelho':
      hexa = '#ff0000';
      break;
    case 'amarelo':
      hexa = '#ffff00';
      break;
    default:
      return "Não temos o equivalente hexadecimal para " + cor + ".";
  }
    return 'O hexadecimal para a cor '+ cor +' é '+ hexa + '.';
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
> convertToHex("amarelo") //O hexadecimal para a cor amarelo é #ffff00
> convertToHex("rosa") //Não temos o equivalente hexadecimal para rosa.
> convertToHex("preto") //O hexadecimal para a cor preto é #000000
> convertToHex("branco") //O hexadecimal para a cor branco é #ffffff
> convertToHex("verde") //O hexadecimal para a cor verde é #00ff00
> convertToHex("vermelho") //O hexadecimal para a cor vermelho é #ff0000
> convertToHex("roxo") //Não temos o equivalente hexadecimal para roxo.
> convertToHex("azul") //Não temos o equivalente hexadecimal para azul.

