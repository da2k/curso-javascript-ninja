/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca';
console.log(championship);//Campeonato Carioca

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Botafogo', 'Flamengo', 'Vasco', 'Fluminense', 'Madureira'];
console.log( 'Times que estão participando do campeonato:', teams );
//Times que estão participando do campeonato: [ 'Botafogo', 'Flamengo', 'Vasco', 'Fluminense', 'Madureira' ]

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
function showTeamPosition(numPosition) {
    switch (numPosition) {
        case 1:
            return ('O time que está em ' + numPosition + 'º lugar é o ' + teams[numPosition - 1] + '.');
            break;
        case 2:
            return ('O time que está em ' + numPosition + 'º lugar é o ' + teams[numPosition - 1] + '.');
            break;
        case 3:
            return ('O time que está em ' + numPosition + 'º lugar é o ' + teams[numPosition - 1] + '.');
            break;
        case 4:
            return ('O time que está em ' + numPosition + 'º lugar é o ' + teams[numPosition - 1] + '.');
            break;
        case 5:
            return ('O time que está em ' + numPosition + 'º lugar é o ' + teams[numPosition - 1] + '.');
            break;
        default:
            return ('Não temos a informação do time que está nessa posição.');
    }
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));//O time que está em 1º lugar é o Botafogo.
console.log(showTeamPosition(3));//O time que está em 3º lugar é o Vasco.
console.log(showTeamPosition(5));//O time que está em 5º lugar é o Madureira.
console.log(showTeamPosition(7));//Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 20;
while (x <= 30){
    console.log(x++);
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
function convertToHex(color){
    switch (color) {
        case 'red':
            return 'FF0000';
            break;
        case 'white':
            return 'FFFFFF';
            break;
        case 'black':
            return '000000';
            break;
        case 'blue':
            return '0033CC';
            break;
        case 'green':
            return '00CC00';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para '+ color + '.';
    }
}
