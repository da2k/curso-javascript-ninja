const { log } = console;
/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
const championship = 'Campeonato Gaúcho';
log( championship );

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
const teams = [ 'Brasil de Pelotas', 'Caxias', 'Inter', 'São José', 'Veranópolis' ]
log( 'Times que estão participando do campeonato: ', teams );

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
const showTeamPosition = ( arg ) => {
    let position = ( param ) => param;
    let teamName = ( param ) => teams[ param -= 1 ];
    let message = ( arg >= 1 && arg <=5 )
        ? `O time que está em ${position(arg)}º lugar é o ${teamName( arg )}.`
        : "Não temos a informação do time que está nessa posição.";
    return message;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
log( showTeamPosition( 1 ) );
log( showTeamPosition( 2 ) );
log( showTeamPosition( 3 ) );
log( showTeamPosition( 4 ) );
log( showTeamPosition( 6 ) );

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
const showNumbers = () => {
    let counter = 20;
    while ( counter <= 30 ) {
       log( counter++ );
    }
};

log( showNumbers() );

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
const colorHex = {
    'red': '#FF0000',
    'black': '#000000',
    'green': '#008000',
    'yellow': '#FFFF00',
    'grey': '#808080'
};

const convertToHex = ( arg ) => {
    let hex = ( arg ) => colorHex[arg];
    let color = `O hexadecimal para a cor ${ arg } é ${ hex( arg ) }.`;
    let noColor = `Não temos o equivalente hexadecimal para ${arg}.`;

    switch( arg ) {
        case 'red':
            log( color );
            break;
        case 'black':
            log( color );
            break;
        case 'green':
            log( color );
            break;
        case 'yellow':
            log( color );
            break;
        case 'grey':
            log( color );
            break;
        default:
            console.log( noColor );
    }
};

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
log( convertToHex('red' ) );
log( convertToHex( 'black' ) );
log( convertToHex( 'green' ) );
log( convertToHex( 'yellow' ) );
log( convertToHex( 'grey' ) );
log( convertToHex( 'blue' ) );
log( convertToHex( 'purple' ) );
log( convertToHex('pink' ) );
