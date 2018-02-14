/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Paulista';

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Botafogo', 'Santos', 'São Caetano', 'São Paulo', 'Palmeiras'];

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
function showTeamPosition(num){
    var retorno;
    num >= 5 ? retorno = 'Não temos a informação do time que está nessa posição.' : retorno = 'O time que está em ' + (num+1) + '° ' + 'lugar é o ' + teams[num];
    return retorno;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(0)); //O time que está em 1° lugar é o Botafogo
console.log(showTeamPosition(1)); //O time que está em 2° lugar é o Santos
console.log(showTeamPosition(2)); //O time que está em 3° lugar é o São Caetano
console.log(showTeamPosition(5)); //Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
n = 20;
while(n <= 30){
    console.log(n);
n++;
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
function convertToHex(cor){
    switch(cor){
        case 'red':
        return '#FF0000';
        break;
        case 'blue':
        return '#0000FF';
        break;
        case 'green':
        return '#00FF00';
        break;
        case 'yellow':
        return '#FFFF00';
        break;
        case 'white':
        return '#FFFFFF';
        break;
        default:
        return 'Não temos o equivalente hexadecimal para ' + cor + '.';
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('red')); //'#FF0000'
console.log(convertToHex('blue')); //'#0000FF'
console.log(convertToHex('green')); //'#00FF00'
console.log(convertToHex('white')); //'#FFFFFF'
console.log(convertToHex('yellow')); //'#FFFF00'
console.log(convertToHex('black')); //Não temos o equivalente hexadecimal para black.
console.log(convertToHex('purple')); //Não temos o equivalente hexadecimal para purple.
console.log(convertToHex('pink')); //Não temos o equivalente hexadecimal para pink.


