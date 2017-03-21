/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var lala = [1, 'Oi', null, 0, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornando(lala) {
    return lala;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornando(lala[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function mix( x, y ){
    return x[y];    
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var five = [null, undefined, false, 'string', 0];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( mix( five, 0 ) );
console.log( mix( five, 1 ) );
console.log( mix( five, 2 ) );
console.log( mix( five, 3 ) );
console.log( mix( five, 4 ) );

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
    var livros = {
        'Javascript: O Guia Definitivo': {
            quantidadePaginas: 700,
            autor: 'Flanagan',
            editora: 'Bookman'
        },
        'Crônicas de Gelo e Fogo': {
            quantidadePaginas: 1000,
            autor: 'R.R. Martin' ,
            editora: 'Leya',
        },
        'Harry Potter': {
            quantidadePaginas: 200,
            autor: 'J.K. Rowling',
            editora: 'Rocco'
        }
    };
    return bookName === undefined ? livros : livros[ bookName ]; 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O Javascript: O Guia Definitivo tem ' + book('Javascript: O Guia Definitivo').quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Crônicas de Gelo e Fogo é ' + book('Crônicas de Gelo e Fogo').autor );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Harry Potter foi publicado pela editora ' + book('Harry Potter').editora );
