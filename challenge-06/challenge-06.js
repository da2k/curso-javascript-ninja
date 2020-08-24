/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
> var championship = 'Campeonato Paranaense';
> console.log(championship); //Campeonato Paranaense

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/> var teams = ['Nacional A. C., Operário F. C., Toledo E. C., Coritiba F. C., Londrina E. C.'];
> console.log( 'Times que estão participando do campeonato: ', teams );
Times que estão participando do campeonato:  [ 'Nacional A. C., Operário F. C., Toledo E. C., Coritiba F. C., Londrina E. C.' ]

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
if ( x >= 1 && x <= 5 ) {
return 'O time que está em ' + x + 'º lugar é o ' + teams[x - 1] + '.';
} else {
return 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
> showTeamPosition(4) //'O time que está em 4º lugar é o Coritiba F. C..'
> showTeamPosition(3) //'O time que está em 3º lugar é o Toledo E. C..'
> showTeamPosition(2) //'O time que está em 2º lugar é o Operário F. C..'
> showTeamPosition(1) //'O time que está em 1º lugar é o Nacional A. C..'
> showTeamPosition(6) //'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
> while (contador <= 30) {
... console.log(contador);
... ++contador;
... }

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
> function convertToHex(cor) {
... var codigo;
... switch (cor) {
..... case 'red':
..... codigo = '#FF0000';
..... break;
..... case 'green':
..... codigo = '#008000';
..... break;
..... case 'yellow':
..... codigo = '#FFFF00';
..... break;
..... case 'blue':
..... codigo = '#0000FF';
..... break;
..... case 'black':
..... codigo = '#000000';
..... break;
..... default:
..... return 'Não temos o equivalente hexadecimal para ' + cor + '.';
..... break;
..... }
... return 'O hexadecimal para ' + cor + ' é ' + codigo + '.';
... }

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
> convertToHex('blue'); //'O hexadecimal para blue é #0000FF.'
> convertToHex('purple'); //'Não temos o equivalente hexadecimal para purple.'
> convertToHex('white'); //'Não temos o equivalente hexadecimal para white.'
> convertToHex('gray'); //'Não temos o equivalente hexadecimal para gray.'
> convertToHex('pink'); //'Não temos o equivalente hexadecimal para pink.'
> convertToHex('yellow'); //'O hexadecimal para yellow é #FFFF00.'
> convertToHex('green'); //'O hexadecimal para green é #008000.'
> convertToHex('red'); //'O hexadecimal para red é #FF0000.'
