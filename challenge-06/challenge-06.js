/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/

var championship = 'baiano';

console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Bahia de Feira', 'Atlético', 'Juazeirense', 'Unirb', 'Vitoria' ]

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

function showTeamPosition(x,y) {
    switch(x){
        case 1:
          console.log('O time que está em 1º lugar é o ' + teams[0] + '.');
        break;
        case 2:
          console.log('O time que está em 2º lugar é o ' + teams[1] + '.');
        break;
        case 3:
          console.log('O time que está em 3º lugar é o ' + teams[2] + '.');
        break;
        case 4:
          console.log('O time que está em 4º lugar é o ' + teams[3] + '.');
        break;
        case 5:
          console.log('O time que está em 5º lugar é o ' + teams[4] + '.');
        break;  
        default:
            console.log('Não temos a informação do time que está nessa posição.')
    }

}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
function corHexadecimal(y){
    var cores = { 
        'pink': '#ffc0cb', 
        'black': '#000000', 
        'blue': '#0000ff', 
        'green': '#008000', 
        'yellow': '#ffff00', 
        'purple': '#800080',
        'red': '#ff0000',
        'gray': '#808080', 
    }

    switch(y){
        case 'pink':
            console.log('A cor ' + y + ' tem como codigo hexadecimal ' + cores[y] + '.');
        break;
        case 'black':
            console.log('A cor ' + y + ' tem como codigo hexadecimal ' + cores[y] + '.');
        break;
        case 'blue':
            console.log('A cor ' + y + ' tem como codigo hexadecimal ' + cores[y] + '.');
        break;
        case 'green':
            console.log('A cor ' + y + ' tem como codigo hexadecimal ' + cores[y] + '.');
        break;
        case 'yellow':
            console.log('A cor ' + y + ' tem como codigo hexadecimal ' + cores[y] + '.');
        break;  
        case 'purple':
            console.log('A cor ' + y + ' tem como codigo hexadecimal ' + cores[y] + '.');
        break;
        case 'red':
            console.log('A cor ' + y + ' tem como codigo hexadecimal ' + cores[y] + '.');
        break;
        case 'gray':
            console.log('A cor ' + y + ' tem como codigo hexadecimal ' + cores[y] + '.');
        break;  
        default:
            console.log('Não temos a informação do Hexadeximal para essa cor.')
    }
}
