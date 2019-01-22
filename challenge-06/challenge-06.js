/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulistão';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos', 'Ponte Preta'];

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
    var teamPosition = position - 1;

    if(position > teams.length || position <= 0){
        return 'Não temos a informação do time que está nessa posição.';
    }

    return 'O time que está em '+position+'º lugar é o '+teams[teamPosition]+'.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); // 'O time que está em 1º lugar é o Corinthians.'
console.log(showTeamPosition(2)); // 'O time que está em 2º lugar é o Palmeiras.'
console.log(showTeamPosition(3)); // 'O time que está em 3º lugar é o São Paulo.'
console.log(showTeamPosition(4)); // 'O time que está em 4º lugar é o Santos.'
console.log(showTeamPosition(6)); // 'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var count = 20;

while (count <= 30){
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

    var hex;

    switch(cor){

        case 'black':
            hex = '#000000';
            break;
        
        case 'white':
            hex = '#ffffff';
            break;
        
        case 'red':
            hex = '#ff0000';
            break;
        
        case 'blue':
            hex = '#0000ff';
            break;
        
        case 'green':
            hex = '#00cc00';
            break;

        default: 
            return 'Não temos o equivalente hexadecimal para '+cor+'.';
    }

    return 'O hexadecimal para a cor '+cor+' é '+hex+'.'

}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('black')); 
//'O hexadecimal para a cor black é #000000.'

console.log(convertToHex('white')); 
//'O hexadecimal para a cor white é #ffffff.'

console.log(convertToHex('red')); 
//'O hexadecimal para a cor red é #ff0000.'

console.log(convertToHex('blue')); 
//'O hexadecimal para a cor blue é #0000ff.'

console.log(convertToHex('green')); 
//'O hexadecimal para a cor green é #00cc00.'

console.log(convertToHex('purple')); 
//'Não temos o equivalente hexadecimal para purple.'

console.log(convertToHex('gray')); 
//'Não temos o equivalente hexadecimal para gray.'

console.log(convertToHex('lightblue'));
//'Não temos o equivalente hexadecimal para lightblue.'

