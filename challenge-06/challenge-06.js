/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulista';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = Array(5);
teams = [ "Santos", "Corinthians", "São Paulo", "Palmeiras", "Ponte Preta" ]
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
function showTeamPosition(number){
    switch(!!( number>0)&&(number<=5)){
            case true:
            console.log('O time que está em '+number+'º lugar é o '+teams[number-1]+'.');
            break;
            default:
            console.log('Não temos a informação do time que está nesta posição!');
            break;
            }
}
timePosicao = showTeamPosition;
 
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
timePosicao(1);
//O time que está em 1º lugar é o Santos.
timePosicao(3);
//O time que está em 3º lugar é o São Paulo.
timePosicao(5);
//O time que está em 5º lugar é o Ponte Preta.
timePosicao(6);
//Não temos a informação do time que está nesta posição!





/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var num = 20;
while(num <= 30){
    console.log(num);
    num++;
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
    var hex = ['#FF0000', '#0000FF', '#008000', '#FFFF00', '#EE82EE']
    switch(color){
        case 'vermelho':
        console.log('O hexadecimal para a cor '+color+' é '+hex[0]);
        break;
        case 'azul':
        console.log('O hexadecimal para a cor '+color+' é '+hex[1]);
        break;
        case 'verde':
        console.log('O hexadecimal para a cor '+color+' é '+hex[2]);
        break;
        case 'amarelo':
        console.log('O hexadecimal para a cor '+color+' é '+hex[3]);
        break;
        case 'violeta':
        console.log('O hexadecimal para a cor '+color+' é '+hex[4]);
        break;
        default:
        console.log('Não temos o equivalente hexadecimal para a cor '+color);
        break;
    }
}
cor = convertToHex;

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
cor('vermelho');
cor('azul');
cor('branco');
cor('verde');
cor('amarelo');
cor('roxo');
cor('violeta');
cor('anil');
/*
O hexadecimal para a cor vermelho é #FF0000 
O hexadecimal para a cor azul é #0000FF 
Não temos o equivalente hexadecimal para a cor branco 
O hexadecimal para a cor verde é #008000 
O hexadecimal para a cor amarelo é #FFFF00 
Não temos o equivalente hexadecimal para a cor roxo 
O hexadecimal para a cor violeta é #EE82EE 
Não temos o equivalente hexadecimal para a cor anil
*/
