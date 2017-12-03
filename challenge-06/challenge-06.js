/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?
var championship = 'Campeonato Paulista';
console.log(championship);


/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

var teams = ['Corinthians','Ponte Preta','Ituano','Santo André', 'São Paulo'];
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
function showTeamPosition(numero) {
    return (!teams[numero-1]) ? 
            "Não temos a informação do time que está nessa posição." : 
            "O time que está em "+numero+"º lugar é o "+teams[numero-1]+".";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log( showTeamPosition(1));  //O time que está em 1º lugar é o Corinthians.
console.log( showTeamPosition(2));  //O time que está em 2º lugar é o Ponte Preta.
console.log( showTeamPosition(3));  //O time que está em 3º lugar é o Ituano.
console.log( showTeamPosition(9));  //Não temos a informação do time que está nessa posição.


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var count = 20;
while(count<=30) {
    console.log(count++);
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

    function convertToHex(color) {

        var hexa;        
        switch(color) {

            case 'red':
                hexa = '#ff0000';
                break;

            case 'green':
                hexa = '#0f8913';
                break;

            case 'gray':
                hexa = '#b2b2b2';
                break;

            case 'cyan':
                hexa = '#06e8c2';
                break;

            case 'purple':
                hexa = '#6726a8';
                break;

            default:
                return "Não temos o equivalente hexadecimal para "+color+".";                
        }

        return "O hexadecimal para a cor "+color+" é "+hexa+".";
    }

    
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex("red"));       //O hexadecimal para a cor red é #ff0000.
console.log(convertToHex("green"));     //O hexadecimal para a cor green é #0f8913. 
console.log(convertToHex("gray"));      //O hexadecimal para a cor gray é #b2b2b2.
console.log(convertToHex("cyan"));      //O hexadecimal para a cor cyan é #06e8c2.
console.log(convertToHex("purple"));    //O hexadecimal para a cor purple é #6726a8.
console.log(convertToHex("pink"));      //Não temos o equivalente hexadecimal para pink.
console.log(convertToHex("blue"));      //Não temos o equivalente hexadecimal para blue.
console.log(convertToHex("teal"));      //Não temos o equivalente hexadecimal para teal.