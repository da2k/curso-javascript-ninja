/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [ 'gustavo', 90, 'djefe', 91, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function exemplo1( array ) {
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( exemplo1( array )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function exemplo2( array, i ){
    return array[ i ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [true, 'gustavo', 100, function(){}, {a: 999}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( exemplo2( array2, 0 ) );
console.log( exemplo2( array2, 1 ) );
console.log( exemplo2( array2, 2 ) );
console.log( exemplo2( array2, 3 ) );
console.log( exemplo2( array2, 4 ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ){
    var myBooks = {
        'Battlefield 3': {
            quantidadePaginas: 347,
            autor: 'Andy McNAB',
            editora: 'Record LTDA'
        },
        'Doidas e Santas': {
            quantidadePaginas: 231,
            autor: 'Martha Medeiros',
            editora: 'L&PM Editores'
        },
        'A promessa': {
            quantidadePaginas: 283,
            autor: 'Richard Paul Evans',
            editora: 'Texto Editores LTDA'
        }
    };

    return !bookName ? myBooks : myBooks[ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Battlefield 3 tem '+ book( 'Battlefield 3' ).quantidadePaginas +' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Battlefield 3 é '+ book( 'Battlefield 3' ).autor +'.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Battlefield 3 foi publicado pela editora '+ book( 'Battlefield 3' ).editora +'.' );