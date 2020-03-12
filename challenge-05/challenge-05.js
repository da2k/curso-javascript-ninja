/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'da2k', 5, true, null, undefined ];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function functionArray( arg ) {
    return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(functionArray( myArray[1] ));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function functionArray2( a, b ) {
    return a[b];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayComCincoValores = [ 1, 'dois', true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( functionArray2( arrayComCincoValores, 0));
console.log( functionArray2( arrayComCincoValores, 1));
console.log( functionArray2( arrayComCincoValores, 2));
console.log( functionArray2( arrayComCincoValores, 3));
console.log( functionArray2( arrayComCincoValores, 4));

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
function book( nomeLivro ) {

    var livros = {
        senhorDaChuva: {
            nome: 'Senhor da Chuva',
            quantidadePaginas: 267,
            autor: 'André Vianco',
            editora: 'Novo Século'
        },
        bento: {
            nome: 'bento',
            quantidadePaginas: 520,
            autor: 'André Vianco',
            editora: 'Novo Século'
        },
        vampiroRei1: {
            nome: 'Vampiro Rei Parte 01',
            quantidadePaginas: 408,
            autor: 'André Vianco',
            editora: 'Novo Século'
        }
    };
    
    if( nomeLivro === 'senhor da chuva' ) {
        return livros.senhorDaChuva;
    }
    if( nomeLivro === 'bento' ) {
        return livros.bento;
    }
    if( nomeLivro === 'vampiro rei parte 01' ) {
        return livros.vampiroRei1;
    }
    if( nomeLivro === undefined ) {
        return livros;
    } 
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ('O livro ' + book('bento').nome + ' tem ' + book('bento').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro ' + book( 'senhor da chuva' ).nome + ' é ' + book( 'senhor da chuva' ).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + book( 'vampiro rei parte 01' ).nome + ' foi publicado pela editora ' + book( 'vampiro rei parte 01' ).editora + '.');
