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
var teams = ['Flamengo', 'Corinthians', 'Vasco', 'Palmeiras', 'Fluminense' ];

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
function showTeamPosition(x) { 
    var posit = x - 1;
        if(x > 5) {
        return "Não temos a informação do time que está nessa posição.";
    } else {
        return "O time que está em " + x + "º lugar é o " + teams[posit] ;
    }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); //O time que está em 1º lugar é o Flamengo
console.log(showTeamPosition(2)); //O time que está em 2º lugar é o Corinthians
console.log(showTeamPosition(3)); //O time que está em 3º lugar é o Vasco
console.log(showTeamPosition(4)); //O time que está em 4º lugar é o Palmeiras
console.log(showTeamPosition(7)); //Não temos a informação do time que está nessa posição.
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var count = 20;

while(count < 30) {
    count++;
    console.log(count);
    
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
    var cores = ['red', 'blue', 'green', 'brown', 'yellow']
    var hexas = ['#ff0000', '#0066ff', '#00cc00', '#996633', '#ffff00']
    switch(cor) {
        case cores[0]: 
            return hexas[0]
        break;
        
        case cores[1]:
        return hexas[1]
        break;

        case cores[2]:
        return hexas[2]
        break;

        case cores[3]:
        return hexas[3]
        break;

        case cores[4]:
        return hexas[4]
        break;

        default:
        return "Não temos o equivalente hexadecimal para " + cor
        break;

    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('redda') // Não temos o equivalente hexadecimal para redda
convertToHex('red') //#ff0000
convertToHex('yellow')  //#ffff00
convertToHex('blue') //#0066ff
convertToHex('brown') //#996633
convertToHex('green')//#00cc00
convertToHex('purple')//Não temos o equivalente hexadecimal para purple
convertToHex('gray')//Não temos o equivalente hexadecimal para gray
