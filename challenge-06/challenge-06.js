/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Brasileiro';

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians','Palmeiras','Fluminense','America','São Paulo'];

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
function showTeamPosition (position){
    var teams = ['Corinthians','Palmeiras','Fluminense','America','São Paulo'];    
    return 'O time que está em ' + position + 'º lugar é o ' + teams[position - 1] + '.';
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1);
showTeamPosition(2);
showTeamPosition(3);
showTeamPosition(4);

showTeamPosition(6);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 20
while(x <= 30){
    console.log(x);
    x++;
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
function convertToHex(collor){
   var hex ={
        vermelho: '#ff0000',
        azul: '0800ff',
        preto: '000000',
        amarelo: 'ffff00',
        roxo:'bb00ff'    
   } 
    
    switch(collor) {
        case 'vermelho':
        console.log('O hexadecimal para a cor ' + collor + ' é ' + hex[collor] + '.');
        break;

        case 'azul':
        console.log('O hexadecimal para a cor ' + collor + ' é ' + hex[collor] + '.');
        break;
        
        case 'preto':
        console.log('O hexadecimal para a cor ' + collor + ' é ' + hex[collor] + '.');
        break;
    
        case 'amarelo':
        console.log('O hexadecimal para a cor ' + collor + ' é ' + hex[collor] + '.');
        break;

        case 'roxo':
        console.log('O hexadecimal para a cor ' + collor + ' é ' + hex[collor] + '.');
        break;

        default:

        console.log('Não temos o equivalente hexadecimal para ' + collor + '.');
        
    }
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('vermelho');
convertToHex('amarelo');
convertToHex('preto');
convertToHex('azul');
convertToHex('roxo');
convertToHex('verde');
convertToHex('vinho');
convertToHex('cinza');
