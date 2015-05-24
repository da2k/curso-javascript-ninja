/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca';
console.log(championship); //Campeonato Carioca

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Botafogo', 'Flamengo', 'Vasco', 'Fluminense', 'Madureira',];
console.log( 'Times que estão participando do campeonato:', teams );
//Times que estão participando do campeonato: ["Botafogo", "Flamengo", "Vasco", "Fluminense", "Madureira"]

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
function showTeamPosition(numero){
    switch(numero){
        case 1:
        return console.log('O time que está em ' + numero + 'º lugar é o ' + teams[numero - 1] + '.');
        break;

        case 2:
        return console.log('O time que está em ' + numero + 'º lugar é o ' + teams[numero - 1] + '.');
        break; 

        case 3:
        return console.log('O time que está em ' + numero + 'º lugar é o ' + teams[numero - 1] + '.');
        break;  

        case 4:
        return console.log('O time que está em ' + numero + 'º lugar é o ' + teams[numero - 1] + '.');
        break; 

        case 5:
        return console.log('O time que está em ' + numero + 'º lugar é o ' + teams[numero - 1] + '.');
        break; 

        default:
        return console.log('Não temos a informação do time que está nessa posição');                          
    }
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log( showTeamPosition(3) ); //O time que está em 3º lugar é o Vasco.
console.log( showTeamPosition(5) ); //O time que está em 5º lugar é o Madureira.
console.log( showTeamPosition(1) ); //O time que está em 1º lugar é o Botafogo.
console.log( showTeamPosition(2) ); //O time que está em 2º lugar é o Flamengo.
console.log( showTeamPosition(8) ); //Não temos a informação do time que está nessa posição
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 20;

while(contador <= 30){
    console.log(contador++);
}

/*
20
21
22
23
24
25
26
27
28
29
30
*/

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
    switch(cor){
        case 'azul':
        return console.log('O hexadecimal para a cor ' + cor + ' é #0000FF.');
        break;

        case 'rosa':
        return console.log('O hexadecimal para a cor ' + cor + ' é #FFC0CB.');
        break;

        case 'cinza':
        return console.log('O hexadecimal para a cor ' + cor + ' é #808080.');
        break;

        case 'laranja':
        return console.log('O hexadecimal para a cor ' + cor + ' é #FFA500.');
        break;

        case 'branco':
        return console.log('O hexadecimal para a cor ' + cor + ' é #FFFFFF.');
        break;                                

        default:
        return console.log('Não temos o equivalente hexadecimal para ' + cor + '.');
    }
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log( convertToHex('azul') ); //O hexadecimal para a cor azul é #0000FF.
console.log( convertToHex('rosa') ); //O hexadecimal para a cor rosa é #FFC0CB.
console.log( convertToHex('cinza') ); //O hexadecimal para a cor cinza é #808080.
console.log( convertToHex('laranja') ); //O hexadecimal para a cor laranja é #FFA500.
console.log( convertToHex('branco') ); //O hexadecimal para a cor branco é #FFFFFF.
console.log( convertToHex('amarelo') ); //Não temos o equivalente hexadecimal para amarelo.
console.log( convertToHex('preto') ); //Não temos o equivalente hexadecimal para amarelo.
console.log( convertToHex('verde') ); //Não temos o equivalente hexadecimal para amarelo.