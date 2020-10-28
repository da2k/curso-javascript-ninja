/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?

var championship = 'Premier League';
console.log ( championship );

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

var teams = [ 'Arsenal', 'Manchester United', 'Manchester City', 'Liverpool', 'Tottenham' ]

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

function showTeamPosition( position ) {
    if( position < 1 || position > 5 ) {
        return 'Não temos a informação do time que está nessa posição.';
    }
    return 'O time que está em ' + position + 'º lugar é o ' + teams[--position] + '.'
};


function showTeamPosition( position ) {
    return position < 1 || position > 5 ? "Não temos a informação do time que está nessa posição." :'O time que está em ' + position + 'º lugar é o ' + teams[--position] + '.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

showTeamPosition(1)
//'O time que está em 1º lugar é o Arsenal.'
> showTeamPosition(2)
//'O time que está em 2º lugar é o Manchester United.'
> showTeamPosition(3)
//'O time que está em 3º lugar é o Manchester City.'
> showTeamPosition(4)
//'O time que está em 4º lugar é o Liverpool.'
> showTeamPosition(5)
//O time que está em 5º lugar é o Tottenham.'
> showTeamPosition(6)
//'Não temos a informação do time que está nessa posição.'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var counter = 20;
while( counter <= 30){
    console.log(counter++)    
}

//OU e tem o mesmo resultado

var counter = 20;
while( counter <= 30){
    console.log(counter)
    counter++   
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
    switch(color){
        case 'red':
            hexa = '#ff0000';
            break;            
        case 'blue':
            hexa = '#000FFF';
            break; 
        case 'green':
            hexa = '#003300';
            break;
        case 'orange': 
            hexa = '#ff3300';
            break; 
        case 'black':
            hexa = '#000000';
            break; 
        default:
            return( 'Não temos o equivalente hexadecimal para ' + color + '.');
      };
    return( 'O hexadecimal para a cor ' + color + ' é ' + hexa + '.');
}

/*
function teste(expr) {
    switch (expr) {
        case "Laranjas":
          console.log("As laranjas custam $0.59 o quilo.");
          break;
        case "Maçãs":
          console.log("Maçãs custam $0.32 o quilo.");
          break;
        case "Bananas":
          console.log("Bananas custam $0.48 o quilo.");
          break;
        case "Cerejas":
          console.log("Cerejas custam $3.00 o quilo.");
          break;
        case "Mangas":
        case "Mamões":
          console.log("Mangas e mamões custam $2.79 o quilo.");
          break;
        default:
          console.log("Desculpe, estamos sem nenhuma " + expr + ".");
      }
      
    console.log("Tem algo mais que você gostaria de levar?");
}
*/

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('purple');
convertToHex('green');
convertToHex('blue');
convertToHex('white');
convertToHex('gray');
convertToHex('yellow');
convertToHex('black');
convertToHex('brown');