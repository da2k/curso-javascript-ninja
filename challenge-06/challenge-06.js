/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato Carioca";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = [ "Vasco da Gama", "América", "Fluminense", "Bangu", "Madureira"];
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
function showTeamPosition(position) {
    if (position>teams.length){
        return "Não temos a informação do time que está nessa posição.";
    }
    return "O time que está em " + position + "º lugar é o " + teams[(position-1)] + ".";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // 'O time que está em 1º lugar é o Vasco da Gama.'
showTeamPosition(2); // 'O time que está em 2º lugar é o América.'
showTeamPosition(4); // 'O time que está em 4º lugar é o Bangu.'
showTeamPosition(6); // 'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 20;

while (++contador<=30){
    console.log(contador);
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
    var colors = {
        "red": "FF0000",
        "green": "00FF00",
        "blue": "0000FF",
        "black": "000000",
        "white": "FFFFFF"
    }
    var text = "O hexadecimal para a cor " + color + " é " + colors[color] + ".";
    switch(color){
        case "red":
            return text;
        case "blue":
            return text;
        case "green":
            return text;
        case "black":
            return text;
        case "white":
            return text;
        default:
            return "Não temos o equivalente hexadecimal para cor " + color + '.';

    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("blue"); //'O hexadecimal para a cor blue é 0000FF.'
convertToHex("red"); //'O hexadecimal para a cor red é FF0000.'
convertToHex("green"); //'O hexadecimal para a cor green é 00FF00.'
convertToHex("white"); //'O hexadecimal para a cor white é FFFFFF.'
convertToHex("black"); //'O hexadecimal para a cor black é 000000.'
convertToHex("purple"); //'Não temos o equivalente hexadecimal para cor purple.'
convertToHex("yellow"); //'Não temos o equivalente hexadecimal para cor yellow.'
convertToHex("brown"); //'Não temos o equivalente hexadecimal para cor brown.'
