/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Baiano';

console.log( championship );

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Bahia', 'Vitória', 'Galícia', 'Juazeiro', 'Conquista'];

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
function showTeamPosition( num ){
    if ( num <= 5 ){
        return 'O time que está em ' + num + 'º lugar é o ' + teams[--num];
    }
    return 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); //"O time que está em 1º lugar é o Bahia"
console.log(showTeamPosition(3)); //"O time que está em 3º lugar é o Galícia"
console.log(showTeamPosition(2)); //"O time que está em 2º lugar é o Vitória"
console.log(showTeamPosition(15)); //"Não temos a informação do time que está nessa posição."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 20;
while ( x < 31 ){
    console.log( x );
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
function convertToHex( cor ){
    var hexa;
    switch (cor) {
        case 'azul':
            hexa = '#0000FF';
            break;
        case 'vermelho':
            hexa = '#FF0000';
            break;
        case 'rosa':
            hexa = '#FFC0CB';
            break;
        case 'verde':
            hexa = '#008000';
            break;
        case 'amarelo':
            hexa = '#FFFF00'
            break;
        default:
            return 'Não temos o equivalente hexadecimal para ' + cor + '.';
    }
    return 'O hexadecimal para a cor ' + cor + ' é ' + hexa + '.';
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('azul')); // "O hexadecimal para a cor azul é #0000FF."
console.log(convertToHex('red')); // "Não temos o equivalente hexadecimal para red."
console.log(convertToHex('vermelho')); //"O hexadecimal para a cor vermelho é #FF0000."
console.log(convertToHex('verde')); //"O hexadecimal para a cor verde é #008000."
console.log(convertToHex('amarelo')); //"O hexadecimal para a cor amarelo é #FFFF00."
console.log(convertToHex('cinza')); // "Não temos o equivalente hexadecimal para cinza."
console.log(convertToHex('rosa')); // "O hexadecimal para a cor rosa é #FFC0CB."
console.log(convertToHex('roxo')); // "Não temos o equivalente hexadecimal para roxo."
