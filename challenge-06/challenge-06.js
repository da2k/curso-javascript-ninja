/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Brasileirão';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['COR','PAL','SPO','FLU','GRE']

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
function showTeamPosition(x){

    if(x>5 || x<1) {
        return "Não temos a informação do time que está nessa posição."
    } else {
        return "O time que está em "+x+"º lugar é o "+teams[x-1]+"."
    }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(0) //"O time que está em 1º lugar é o COR."
showTeamPosition(1) //"O time que está em 2º lugar é o PAL."
showTeamPosition(2) //"O time que está em 3º lugar é o SPO."
showTeamPosition(3) //"O time que está em 4º lugar é o FLU."
teams[3] = "POR"

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var n = 19
while (n<30){n++;console.log(n)}

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
function convertToHex(red){
    var hexa;
    switch(red){
        case 'azul':
            hexa = "#0080ff"; break;
        case 'vermelho':
            hexa = "#ff0000"; break;
        case 'preto':
            hexa = "#000000"; break;
        case 'branco':
            hexa = "#ffffff"; break;
        case 'amarelo':
            hexa = "#ffff00"; break;
        case 'verde':
            hexa = "#00ff00"; break;
        case 'rosa':
            hexa = "#ff00ff"; break;
        case 'roxo':
            hexa = "#8000ff"; break;
        default:
            return "Não temos o equivalente hexadecimal para "+red+"."
    }
    return "O hexadecimal para a cor "+red+" é "+hexa+".";
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('azul') //"O hexadecimal para a cor azul é #0080ff."
convertToHex('vermelho') //"O hexadecimal para a cor vermelho é #ff0000."
convertToHex('preto') //"O hexadecimal para a cor preto é #000000."
convertToHex('branco') //"O hexadecimal para a cor branco é #ffffff."
convertToHex('amarelo') //"O hexadecimal para a cor amarelo é #ffff00."
convertToHex('verde') //"O hexadecimal para a cor verde é #00ff00."
convertToHex('rosa') //"O hexadecimal para a cor rosa é #ff00ff."
convertToHex('roxo') //"O hexadecimal para a cor roxo é #8000ff."