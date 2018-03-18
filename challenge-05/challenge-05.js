const { log } = console;
/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const foo = [ 'Evelyn', undefined, true, { meta: 'Ser ninja em JS'}, 29 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const showArr = ( param ) => param;
// log( showArr( foo ) );

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
log(showArr( foo[ 1 ] ) );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const indexValue = ( param, arg ) => param[ arg ];
// log( indexValue( foo, 3 ));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const bar = ['curso', false, null, indexValue(foo, 4), '2018']
//Quando tentei chamar colocar a indexValue sem parâmetros e invoquei a bar na linha 38 aparecia o erro: Cannot read property 'undefined' of undefined

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
log(bar);

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
const book = ( name ) => {
    let bookNames = {
        'Fullstack React': {
            quantidadeDePaginas: 836,
            autor: 'Anthony Accomazzo, Ari Lerner, Nate Murray, Clay Allsopp, David Gutman, and Tyler McGinnis',
            editora: 'Fullstack.io'
        },
        'O Programador Apaixonado': {
            quantidadeDePaginas: 229,
            autor: 'Chad Fowler',
            editora: 'Casa do Código'
        },
        'Cangaceiro JavaScript': {
            quantidadeDePaginas: 502,
            autor: 'Flávio Almeida',
            editora: 'Casa do Código'
        }
    };
    let checkBook = ( arg ) => ( !arg ) ? bookNames : bookNames[ name ];

    return checkBook( name );
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
log( book( ) );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
const selectedBook = 'Fullstack React';
log(
  `O livro ${ selectedBook } tem ${ book( 'Fullstack React' ).quantidadeDePaginas } páginas!`
);


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
log(
  `O autor do livro ${ selectedBook } tem ${ book( 'Fullstack React' ).autor }.`
);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
log(
  `O livro ${ selectedBook } foi publicado pela editora ${ book( 'Fullstack React' ).editora }.`
);
