/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'carioca';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'flamengo', 'fluminense', 'botafogo', 'vasco','bangu' ];

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
    if (num < 1 || num > 5) 
        return 'Não temos a informação do time que está nessa posição';

    return 'O time que está em ' + num + 'º lugar é o ' + teams[num-1] + '.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log( showTeamPosition(1) );
console.log( showTeamPosition(2) );
console.log( showTeamPosition(3) );
console.log( showTeamPosition(9) );

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var number = 20;

while(number <= 30)
    console.log(number++);

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
    switch(color) {
        case 'snow':
            hex = '#FFFAFA';
            break;
        case 'ghostwhite':
            hex = '#F8F8FF';
            break;
        case 'whitesmoke':
            hex = '#F5F5F5';
            break;
        case 'gainsboro':
            hex = '#DCDCDC';
            break;
        case 'floralwhite':
            hex = '#FFFAF0';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para ' + color + '.';
    }
    return 'O hexadecimal para a cor ' + color + ' é ' + hex + '.';
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log( convertToHex('snow') ); // O hexadecimal para a cor snow é #FFFAFA.
console.log( convertToHex('ghostwhite') ); // O hexadecimal para a cor ghostwhite é #F8F8FF.
console.log( convertToHex('whitesmoke') ); // O hexadecimal para a cor whitesmoke é #F5F5F5.
console.log( convertToHex('gainsboro') ); // O hexadecimal para a cor gainsboro é #DCDCDC.
console.log( convertToHex('floralwhite') ); // O hexadecimal para a cor floralwhite é #FFFAF0.
console.log( convertToHex('red') ); // Não temos o equivalente hexadecimal para red.
console.log( convertToHex('green') ); // Não temos o equivalente hexadecimal para green.
console.log( convertToHex('blue') ); // Não temos o equivalente hexadecimal para blue.