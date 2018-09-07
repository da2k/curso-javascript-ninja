/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship= 'Campeonato Brasileiro';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams= ['Flamengo','Atlético Mineiro','Cruzeiro','América','Chapecoense'];

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
function showTeamPosition(num){
    return ( num < 1 || num > 5) ? 'Não temos a informação do time que está '+ num +'º lugar.' 
    : 'O time que está em '+( num )+'º lugar é o '+ teams[num - 1] +'.';
}
console.log(showTeamPosition(2));
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));
console.log(showTeamPosition(0));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var valor= 20;
while(valor <= 30){
    console.log( valor++ );
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

//PRA EU NÃO TER QUE FICAR REESCREVENDO SEMPRE A MESMA MSG PARA CADA COR CRIADA, CRIO UMA VARIÁVEL E NO CASE ATRIBUO O HEXA A ELA.
function convertToHex(cor){
    var hexa;
    switch(cor){
        case 'vermelho':
         hexa= '#FF0000';
         break;
        case 'verde':
         hexa= '#008000';
          break;
        case 'marrom':
         hexa= '#8B4513';
         break;
        case 'laranja':
         hexa= '#FFA500';
         break;  
        case 'azul': 
        hexa= '#0000FF';
         break;
        default: return'Não temos o equivalente hexadecimal para '+cor+'.';
    }
    return 'O hexadecimal para a cor '+ cor +' é '+ hexa;

}

/*function convertToHex(cor){
    switch(cor){
        case 'vermelho':return'O hexadecimal para a cor '+cor+' é '+'#FF0000'+'.'; //break;
        case 'verde':return'O hexadecimal para a cor '+cor+' é '+'#008000'+'.';  
        case 'marrom':return'O hexadecimal para a cor '+cor+' é '+'#8B4513'+'.';  
        case 'laranja': return'O hexadecimal para a cor '+cor+' é '+'#FFA500'+'.';  
        case 'azul': return 'O hexadecimal para a cor '+cor+' é '+'#0000FF'+'.'; 
        default: return'Não temos o equivalente hexadecimal para '+cor+'.';
    }

}*/

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('vermelho'));
console.log(convertToHex('verde'));
console.log(convertToHex('marrom'));
console.log(convertToHex('laranja'));
console.log(convertToHex('azul'));
console.log(convertToHex('preto'));
console.log(convertToHex('cinza'));
console.log(convertToHex('branco'));