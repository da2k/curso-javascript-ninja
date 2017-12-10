/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Paulista';
console.log(championship);
// Campeonato Paulista

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians', 'Sao Paulo', 'Santos', 'Palmeiras', 'Ponte Preta'];
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
function showTimesPosition(pos) {
    return teams[pos - 1] ? teams[pos - 1] : 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTimesPosition(1); //'Corinthians'
showTimesPosition(2); //'Sao Paulo'
showTimesPosition(3); //'Santos'
showTimesPosition(6); //'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var i = 20;
while(i <= 30) {
    console.log(i);
    i++;
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
function convertToHex(color) {
    switch(color){
        case 'red':
            return `O hexadecimal para a ${color} é #ff0000.`;
            break;
        case 'blue':
            return `O hexadecimal para a ${color} é #0040ff.`;
            break;
        case 'yellow':
            return `O hexadecimal para a ${color} é #ffff00.`;
            break;
        case 'green':
            return `O hexadecimal para a ${color} é #40ff00.`;
            break;
        case 'pink':
            return `O hexadecimal para a ${color} é #ff00ff.`;
            break;
        default: 
            return `Não temos o equivalente hexadecimal para ${color}.`;
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red'); //'O hexadecimal para a red é #ff0000.'
convertToHex('blue'); //'O hexadecimal para a blue é #0040ff.'
convertToHex('yellow'); //'O hexadecimal para a yellow é #ffff00.'
convertToHex('green'); //'O hexadecimal para a green é #40ff00.'
convertToHex('pink'); //'O hexadecimal para a pink é #ff00ff.'
convertToHex('brow'); //'Não temos o equivalente hexadecimal para brow.'
convertToHex('black'); //'Não temos o equivalente hexadecimal para black.'
convertToHex('white'); //'Não temos o equivalente hexadecimal para white.'