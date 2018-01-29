/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato'
console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Time C', 'Time E', 'Time A', 'Time D', 'Time B']

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
var showTeamPosition = ( position ) => {
    if (!!position) {
        return position > 0 && position <= 5 ?
        'O time que está em ' + position + 'º lugar é o ' + teams[position - 1] + '.'
        : "Não temos a informação do time que está nessa posição."
    }
    return 'Insira uma posição'
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPositon(1) // O time que está em 1º lugar é o Time C.
showTeamPositon(2) // O time que está em 1º lugar é o Time E.
showTeamPositon(3) // O time que está em 1º lugar é o Time A.
showTeamPositon(4) // O time que está em 1º lugar é o Time D.
showTeamPositon(60) // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var i = 20
while(i <= 30) {
    console.log(i++)
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
var convertToHex = ( color ) => {
    switch (color) {
        case ('red'):
            hexValue = '#da5327'
            break
        case ('blue'):
            hexValue = '#00aeff'
            break
        case ('black'):
            hexValue = '#000'
            break
        case ('yellow'):
            hexValue = '#f4b317'
            break
        case ('white'):
            hexValue = '#FFF'
            break
        default:
            return 'Não temos o equivalente hexadecimal para ' + color + '.'
    }
    return 'O hexadecimal para a cor '+ color + ' é ' + hexValue + '.'
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex( 'red' ) // O hexadecimal para a cor red é #da5327.
convertToHex( 'black' ) // O hexadecimal para a cor black é #000.
convertToHex( 'white' ) // O hexadecimal para a cor white é #FFF.
convertToHex( 'yellow' ) // O hexadecimal para a cor yellow é #f4b317.
convertToHex( 'blue' ) // O hexadecimal para a cor blue é #00aeff.
convertToHex( 'green' ) // Não temos o equivalente hexadecimal para green.
convertToHex( 'gray' ) // Não temos o equivalente hexadecimal para gray.
convertToHex( 'pink' ) // Não temos o equivalente hexadecimal para pink.