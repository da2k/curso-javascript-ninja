/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Catarinense';
console.log('Campeonato ' + championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Avaí', 'Figueirense', 'Chapecoense', 'Criciúma', 'Metropolitano'];

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
function showTeamPosition(posicao) {
    var team = teams[posicao - 1];
    return team ? 'O time que está em ' + posicao + 'º lugar é o ' + team : 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log('1', showTeamPosition(1));
console.log('2', showTeamPosition(2));
console.log('3', showTeamPosition(3));
console.log('6', showTeamPosition(6));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numero = 19;
while (numero++ !== 30) {
    console.log('numero', numero);
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
    var hex;
    switch (cor) {
        case 'red':
            hex = '#ec1c24';
            break;
        case 'green':
            hex = '#42ec1c';
            break;
        case 'blue':
            hex = '#00a8f3';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para ' + cor;
    }
    return 'O hexadecimal para a cor ' + cor + ' é ' + hex;
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log('red', convertToHex('red'));
console.log('purple', convertToHex('purple'));
console.log('green', convertToHex('green'));
console.log('orange', convertToHex('orange'));
console.log('gray', convertToHex('gray'));
console.log('pink', convertToHex('pink'));
console.log('blue', convertToHex('blue'));
console.log('yellow', convertToHex('yellow'));
