/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'paranaense';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Atletico PR','Coritiba','Paraná Clube','Londrina','Toledo'];
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
function showTeamPosition(posicao){
    switch(posicao) {
        case 1:
            return('O time que está em ' + posicao + ' lugar é o ' + teams[0] + '.');
            break;
        case 2:
            return('O time que está em ' + posicao + ' lugar é o ' + teams[1] + '.');
            break;
        case 3:
            return('O time que está em ' + posicao + ' lugar é o ' + teams[2] + '.');
            break;
        case 4:
            return('O time que está em ' + posicao + ' lugar é o ' + teams[3] + '.');
            break;
        case 5:
            return('O time que está em ' + posicao + ' lugar é o ' + teams[4] + '.');
            break;
        case 6:
            return('O time que está em ' + posicao + ' lugar é o ' + teams[5] + '.');
            break;
        default:
            return('Não temos a informação do time que está nessa posição.');
    }
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(10));
//"Não temos a informação do time que está nessa posição."
console.log(showTeamPosition(1));
//"O time que está em 1 lugar é o Atletico PR."
console.log(showTeamPosition(2));
//"O time que está em 2 lugar é o Coritiba."
console.log(showTeamPosition(3));
//"O time que está em 3 lugar é o Paraná Clube."
console.log(showTeamPosition(5));
//"O time que está em 5 lugar é o Toledo."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 0
while (contador < 31) {
    console.log(contador++);
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
function convertToHex (cor) {
    var red = '#000';
    var blue = '#007fff';
    var yellow = '#feff00';
    var orange = '#ff7f00';
    var black = '#000';
    switch(cor) {
        case 'red':
           return('O hexadecimal para a cor red é ' + red + '.');
           break;
        case 'blue':
           return('O hexadecimal para a cor blue é ' + blue + '.');
           break;
        case 'yellow':
           return('O hexadecimal para a cor yellow é ' + yellow + '.');
           break;
        case 'orange':
           return('O hexadecimal para a cor orange é ' + orange + '.');
           break;
        case 'black':
           return('O hexadecimal para a cor black é ' + black + '.');
           break;
        default:
           return('Não temos o equivalente hexadecimal para ' + cor + '.');
           break;
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('white'));
console.log(convertToHex('red'));
console.log(convertToHex('black'));
console.log(convertToHex('yellow'));
console.log(convertToHex('purple'));
console.log(convertToHex('orange'));
console.log(convertToHex('blue'));