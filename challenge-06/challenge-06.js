/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Piauiense';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'River PI', 'Flamengo PI','4 de Julho','Piauí FC','Altos FC'];

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
function showTeamPosition(position){
    
    if(position > 5 || position <= 0){
        return "Não temos informação do time que está nessa posição.";
    }
    return "O time que está em " + position + "º lugar é o " + teams[position - 1] + ".";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // 'O time que está em 1º lugar é o River PI.'
showTeamPosition(2); // 'O time que está em 2º lugar é o Flamengo PI.'
showTeamPosition(3); // 'O time que está em 3º lugar é o 4 de Julho.'
showTeamPosition(10); // 'Não temos informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var i = 20;
while(i < 31){
    console.log(i++);
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
    var hexa;
    switch(cor){
        case 'Navy': hexa = '#000080'; break;
        case 'Lime': hexa = '#00FF00'; break;
        case 'Olive': hexa = '#808000'; break;
        case 'Sienna': hexa = '#A0522D'; break;
        case 'Wheat': hexa = '#F5DEB3'; break;
        default: return "Não temos o equivalente hexadecimal para " + cor + "."; 
    }

    return "O hexadecimal para a cor " + cor + " é " + hexa + ".";
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('Blue'); // 'Não temos o equivalente hexadecimal para Blue.'
convertToHex('Navy'); // 'O hexadecimal para a cor Navy é #000080.'
convertToHex('Olive'); // 'O hexadecimal para a cor Olive é #808000.'
convertToHex('Wheat'); // 'O hexadecimal para a cor Wheat é #F5DEB3.'
convertToHex('Sienna'); // 'O hexadecimal para a cor Sienna é #A0522D.'
convertToHex('Lime'); // 'O hexadecimal para a cor Lime é #00FF00.'
convertToHex('Red'); // 'Não temos o equivalente hexadecimal para Red.'
convertToHex('Green'); // 'Não temos o equivalente hexadecimal para Green.'