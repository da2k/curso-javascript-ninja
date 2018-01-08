/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
//  var championship ='Copa do Mundo Fifa'; console.log(championship);
Copa do Mundo Fifa


/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = ['Argentina', 'Holanda', 'Belgica', 'Costa Rica', 'Brasil']; console.log( 'Times que estão participando do campeonato:', teams );
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
//  function  showTeamPosition(n) {
... return 'O time que está em ' + n + 'º lugar é o ' +teams[n - 1]+ '.' ;
... }


/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// console.log(showTeamPosition(1) ); //O time que está em 1º lugar é o Argentina.
console.log(showTeamPosition(2) ); //O time que está em 2º lugar é o Holanda.
console.log(showTeamPosition(3) ); //O time que está em 3º lugar é o Belgica.
console.log(showTeamPosition(8) ); //Não temos a informação do time que está nessa posição.



/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// > var n = 20;
while (n <= 30 ) {
... console.log( n++ );
... }
20
21
22
23
24
25
26
27
28
29
30


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
// 
// function converToHex ( cor ) {
... switch( cor ) {
..... case 'verde':
..... return 'O hexadecimal para a cor ' + cor + ' é #00FA9A.';
..... case 'azul':
..... return 'O hexadecimal para a cor ' + cor + ' é #191970.';
..... case 'preto':
..... return 'O hexadecimal para a cor ' + cor + ' é #000000.';
..... case 'branco':
..... return 'O hexadecimal para a cor ' + cor + ' é #FFFFFF.';
..... case 'roxo':
..... return 'O hexadecimal para a cor ' + cor + ' é #7B68EE.';
..... default:
..... return 'Não temos o equivalente hexadecimal para ' + cor + '.';
..... }
... }




/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
//console.log(converToHex( 'azul' ) ); //O hexadecimal para a cor azul é #191970.
console.log(converToHex( 'preto' ) ); //O hexadecimal para a cor preto é #000000.
console.log(converToHex( 'cinza' ) ); //Não temos o equivalente hexadecimal para cinza.
console.log(converToHex ( 'marrom' ) ); //Não temos o equivalente hexadecimal para marrom.
console.log(converToHex ( 'roxo' ) ); //O hexadecimal para a cor roxo é #7B68EE.
console.log(converToHex ( 'branco' ) );//O hexadecimal para a cor branco é #FFFFFF.
console.log(converToHex ( 'verde' ) ); //O hexadecimal para a cor verde é #00FA9A.
console.log(converToHex ( 'amarelo' ) ); //Não temos o equivalente hexadecimal para amarelo.



