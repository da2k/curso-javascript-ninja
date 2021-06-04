/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?

var championship = 'Campeonato Brasileiro';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

var teams = [
    'Sao Paulo',
    'Gremio',
    'Portuguesa',
    'Vitoria',
    'Bahia'
]

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
function ranking(rank) {
var grade = rank - 1;
    var mesage = 'O time que está em '+rank+'º lugar é o '+teams[grade]+'.';
   switch (rank) {
       case 1:
        console.log(mesage);   
           break;
       case 2:
         console.log(mesage);   
            break;
       case 3:
          console.log(mesage);   
            break;
       case 4:
          console.log(mesage);   
            break;
       case 5:
          console.log(mesage);   
            break;
             
       default:
        console.log('Não temos a informação do time que está nessa posição.')
           break;
   }
}

ranking(1);// O time que está em 1º lugar é o Sao Paulo.
ranking(2);// O time que está em 2º lugar é o Gremio.
ranking(3);// O time que está em 3º lugar é o Portuguesa.
ranking(4);// O time que está em 4º lugar é o Vitoria.

ranking(6);// Não temos a informação do time que está nessa posição.

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var n = 20;
while (n <= 30) {

    console.log(n);
    n++;
    
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
    var HEX = '';
    switch (cor) {
        case 'red':
            HEX = 'ff0000'
            break;
        case 'green':
            HEX = '00b33c'
            break;
        case 'blue':
            HEX = '0066ff'
            break;        
        case 'yellow':
            HEX = 'ffff00'
            break;
        case 'black':
            HEX = '000000'
            break;
        default:
            return console.log('Não temos o equivalente hexadecimal para '+cor+'.');
            break;
    }
    return console.log('O hexadecimal para a cor '+cor+' é '+HEX+'.');
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex('red')// O hexadecimal para a cor red é ff0000.
convertToHex('green')// O hexadecimal para a cor green é 00b33c.
convertToHex('blue')// O hexadecimal para a cor blue é 0066ff.
convertToHex('yellow')// O hexadecimal para a cor yellow é ffff00.
convertToHex('black')// O hexadecimal para a cor black é 000000.
convertToHex('purple')// Não temos o equivalente hexadecimal para purple.
convertToHex('gray')// Não temos o equivalente hexadecimal para gray.
convertToHex('violet')// Não temos o equivalente hexadecimal para violet.
convertToHex('orange')// Não temos o equivalente hexadecimal para orange.
