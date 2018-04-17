/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'camptotal';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['sao paulo', 'ceará', 'bahia', 'flamengo','grêmio']

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
function showTeamPosition(pos){
    var param = pos - 1;
    if(param > 4 || param < 0){
        return 'Não temos a informação do time que está nessa posição.';
    }
    return 'O time que está em ' + pos + 'º lugar é o '+ teams[param] +'.'
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); // 'O time que está em 1º lugar é o sao paulo'.
console.log(showTeamPosition(2)); // 'O time que está em 2º lugar é o ceará'.
console.log(showTeamPosition(3)); // 'O time que está em 3º lugar é o bahia'.
console.log(showTeamPosition(6)); // 'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var count = 20;
while(count <= 30){
  console.log(count);
  count++;
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
    var hexa,msg;
    switch(cor){
        case 'gray':
            hexa = '#808080';
            break;
        case 'blue':
            hexa = '#0000FF';
            break; 
        case 'pink':
            hexa = '#FFC0CB';
            break; 
        case 'red':
            hexa = '#FF0000';
            break; 
        case 'green':
            hexa = '#008000';
            break; 
        default:
            msg = 'Não temos o equivalente hexadecimal para '+cor+'.';
    }

    if(hexa){
        msg = 'O hexadecimal para a cor ' + cor + ' é ' + hexa+'.';
    }

    return msg;
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('gray'));  //'O hexadecimal para a cor gray é #808080.'
console.log(convertToHex('blue'));  //'O hexadecimal para a cor blue é #0000FF.'
console.log(convertToHex('pink'));  //'O hexadecimal para a cor blue é #FFC0CB.'
console.log(convertToHex('red'));   //'O hexadecimal para a cor red é #FF0000.'
console.log(convertToHex('green')); //'O hexadecimal para a cor green é #008000.'
console.log(convertToHex('violet'));//'Não temos o equivalente hexadecimal para violet.'
console.log(convertToHex('black')); //'Não temos o equivalente hexadecimal para black.'
console.log(convertToHex('white')); //'Não temos o equivalente hexadecimal para white.'
