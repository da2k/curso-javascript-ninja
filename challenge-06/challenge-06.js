/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = 'Campeonato Carioca';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

var teams = ['Vasco','Botafogo','Fluminense','Flamengo','Madureira','América','Portuguesa','Nova Iguaçu'];
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
    if(number < 6){
    return 'O time que está em '+ number +'º lugar é o '+ teams[number - 1] +'.';
}
    return 'Não temos a informação do time que está nessa posição.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(7));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

function repete(){
    var i = 20;
    while ( i >= 20 && i <= 30) {
        console.log(i);
        i++;
    }
}

repete()

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

function convertToHex (corEscolhida){
    var cor = corEscolhida;
    var hexa;
    var resposta = function(cor,hexa){
        console.log('O hexadecimal para a cor '+ cor +' é '+ hexa +'.')
    }
    switch(cor){
        case 'red':
            hexa = '#FF0000';
            resposta(cor,hexa);
        break;
        case 'orange':
            hexa = '#FFA500';
            resposta(cor,hexa);
        break;
        case 'blue':
            hexa = '#0000FF';
            resposta(cor,hexa);
        break;
        case 'yellow':
            hexa = '#FFFF00';
            resposta(cor,hexa);
        break;
        case 'black':
            hexa = '#000000';
            resposta(cor,hexa);
        break;
        default :
            console.log('Não temos o equivalente hexadecimal para '+ cor +'.');
        break;    
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

convertToHex('white');
convertToHex('black');
convertToHex('red');
convertToHex('yellow');
convertToHex('orange');
convertToHex('green');
convertToHex('blue');
convertToHex('gray');