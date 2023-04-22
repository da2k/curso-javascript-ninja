/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Mineiro';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = ['America','Atlético','Cruzeiro','Ipiranga','Ponte Nova']
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
function showTeamPosition(pos) {
    var positiva = `O time que está em ${pos}º lugar é o ${teams[pos-1]}.`;
    var negativa = `Não temos a informação do time que está nessa posição.`;
    return pos!= 0 ? (!!teams[pos-1] ? positiva : negativa):negativa;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1) // 'O time que está em 1º lugar é o America.'
showTeamPosition(2) // 'O time que está em 2º lugar é o Atlético.'
showTeamPosition(3) // 'O time que está em 3º lugar é o Cruzeiro.'
showTeamPosition(6) // 'Não temos a informação do time que está nessa posição.'
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
// ?
var x = 20;
while (x <= 30) {
    console.log(x);
    x++
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
// ?

function convertToHex(cor){
    function printHex(cor,hexadecimal){
        return `O hexadecimal para a cor ${cor} é ${hexadecimal}.`;
    }
    switch (cor.toLowerCase()) {
        case "red":
            var hexadecimal = "RED"
            break;
        case "green":
            var hexadecimal = "GREEN"
            break;
        case "blue":
            var hexadecimal = "BLUE"
            break;
        case "black":
            var hexadecimal = "BLACK"
            break;
        case "white":
            var hexadecimal = "WHITE"
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${cor.toLowerCase()}.`
            break;
    }
    return printHex(cor,hexadecimal);
}


/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
// ?
convertToHex("red") // O hexadecimal para a cor red é RED.
convertToHex("green") // O hexadecimal para a cor green é GREEN.
convertToHex("blue") // O hexadecimal para a cor blue é BLUE.
convertToHex("white") // O hexadecimal para a cor white é WHITE.
convertToHex("amarela") // Não temos o equivalente hexadecimal para amarela.
convertToHex("black") // O hexadecimal para a cor black é BLACK.
convertToHex("purple") // Não temos o equivalente hexadecimal para purple.
convertToHex("grey") // Não temos o equivalente hexadecimal para grey.
