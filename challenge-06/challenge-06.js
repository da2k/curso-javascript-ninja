/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Torneio dos Pernas de Pau 2018';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians', 'Palmeiras', 'Santos', 'São Paulo', 'Vasco'];

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
function showTeamPosition (num) {    
    return num > 5 ? "Não temos a informação do time que está nessa posição." : "O time que está em "+ num +"º lugar é o "+ teams[num - 1] +".";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(3)); //'O time que está em 3º lugar é o Santos.'
console.log(showTeamPosition(1)); //'O time que está em 1º lugar é o Corinthians.'
console.log(showTeamPosition(2)); //'O time que está em 2º lugar é o Palmeiras.'
console.log(showTeamPosition(4)); //'O time que está em 4º lugar é o São Paulo.'
console.log(showTeamPosition(6)); //'Não temos a informação do time que está nessa posição.'


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numero = 20;
while (numero <= 30) {
    console.log(numero);
    ++numero;
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
    var hexa = ['#FF69B4', '#00BFFF', '#8B008B', '#7FFFD4', '#FF8C00'];
    var cores = ['rosa', 'azul', 'roxo', 'verde', 'laranja'];
    switch(cor) {
        case cores[0]:
            console.log(hexa[0]);
            break;
        case cores[1]: 
            console.log(hexa[1]);
            break;
        case cores[2]:
            console.log(hexa[2]);
            break;
        case cores[3]:
            console.log(hexa[3]);
            break;
        case cores[4]:
            console.log(hexa[4]);
            break;
        default:
            console.log("Cor inválida, escolha uma entre estas: (" + cores + ").");
    }
}



/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("preto");
convertToHex("roxo");
convertToHex("amarelo");
convertToHex("verde");
convertToHex("rosa");
convertToHex("branco");
convertToHex("azul");
convertToHex("laranja");