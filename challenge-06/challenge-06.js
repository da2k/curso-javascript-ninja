/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Paranense';
console.log ( campionship ); //Campeonato Paranense

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Paraná Clube', 'Xoxitiba', 'Patético Paranense', 'Operário', 'Toledo'];

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

if( num < 1 || num > 5) {
    console.log( 'Não temos a informação do time que está nessa posição.');
    
} else {
    console.log( 'O time que está em ' +num +'º ' +'lugar é o ' +teams[num - 1] +'.');
}
}


/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); //O time que está em 1º lugar é o Paraná Clube.
showTeamPosition(2); //O time que está em 2º lugar é o Xoxitiba.
showTeamPosition(3); //O time que está em 3º lugar é o Patético Paranaense.
showTeamPosition(4); //O time que está em 4º lugar é o Operário.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numero = 20;
while (numero < 31 ) {
    console.log(numero);
    numero++;
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

var cores = { branco: 'ffffff', preto: '000000', cinza: 'cdcdcd', azul: '0000ff', verde:  '008000' }; 
var msg = 'O hexadecimal para a cor ';

switch(cor) {
    case 'branco':
        console.log( msg +cor +' é ' +cores.branco +'.');
    break;
    case 'preto':
        console.log( msg +cor +' é ' +cores.preto +'.');
    break;
    case 'cinza':
        console.log( msg +cor +' é ' +cores.cinza +'.');
    break;
    case 'azul':
        console.log( msg +cor +' é ' +cores.azul +'.');
    break;
        case 'verde':
    console.log( msg +cor +' é ' +cores.verde +'.');
    break;
    default:
        console.log( 'Não temos o equivalente hexadecimal para ' +cor +'.' );
}
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('branco'); //O hexadecimal para a cor branco é ffffff.
convertToHex('azul'); //O hexadecimal para a cor azul é 0000ff.
convertToHex('preto'); //O hexadecimal para a cor preto é 000000.
convertToHex('branco'); //O hexadecimal para a cor branco é ffffff.
convertToHex('vermelho'); //Não temos o equivalente hexadecimal para vermelho.
convertToHex('verde'); //O hexadecimal para a cor verde é 008000.
convertToHex('laranjado'); //Não temos o equivalente hexadecimal para laranjado.
convertToHex('cinza'); //O hexadecimal para a cor cinza é cdcdcd.
