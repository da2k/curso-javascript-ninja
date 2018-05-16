/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Brasileiro';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Flamengo', 'Corinthians', 'Atlético', 'Grêmio', 'Palmeiras'];

console.log('Times que estão participando do campeonato:', teams);

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
    return number <= teams.length && number !== 0 ?
        `O time que está em ${number} lugar é o ${teams[number - 1]} .` :
        `Não temos a informação do time que está nessa posição.`;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1) // "O time que está em 1 lugar é o Flamengo ."
showTeamPosition(2) // "O time que está em 2 lugar é o Corinthians ."
showTeamPosition(3) // "O time que está em 1 lugar é o Atlético ."
showTeamPosition(6) // "Não temos a informação do time que está nessa posição."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var number = 20;
while (number <= 30) {
    console.log(number++);
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
    var amarelo = '#FFFF00';
    var vermelho = '#FF0000';
    var azul = '#0000FF';
    var preto = '#000000';
    var cinza = '#808080';

    switch (cor) {
        case 'amarelo':
            return `O hexadecimal para a cor ${cor} é ${amarelo}`;
            break;
        case 'vermelho':
            return `O hexadecimal para a cor ${cor} é ${vermelho}`;
            break;
        case 'azul':
            return `O hexadecimal para a cor ${cor} é ${azul}`;
            break;
        case 'preto':
            return `O hexadecimal para a cor ${cor} é ${preto}`;
            break;
        case 'cinza':
            return `O hexadecimal para a cor ${cor} é ${cinza}`;
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${cor}.`
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('azul'); // "O hexadecimal para a cor azul é #0000FF"
convertToHex('amarelo'); // "O hexadecimal para a cor amarelo é #FFFF00"
convertToHex('vermelho'); // "O hexadecimal para a cor vermelho é #FF0000"
convertToHex('preto'); // "O hexadecimal para a cor preto é #000000"
convertToHex('cinza'); // "O hexadecimal para a cor cinza é #808080"
convertToHex('roxo'); //"Não temos o equivalente hexadecimal para roxo."
convertToHex('marrom'); //"Não temos o equivalente hexadecimal para roxo."
convertToHex('rosa'); //"Não temos o equivalente hexadecimal para roxo."
