/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var teste = [1, 'texto', true, {tipo:"objeto"}, [1,2,3]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function f( arr ) { 
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( f( teste )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function g( arr, ind ) {
    return arr[ind];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var teste2 = [2, 'texto2', false, {tipo2:"objeto2"}, [4,5,6]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( g( teste2, 0 ) );
console.log( g( teste2, 1 ) );
console.log( g( teste2, 2 ) );
console.log( g( teste2, 3 ) );
console.log( g( teste2, 4 ) );

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
function book( name ) {
    bookList = {
        portugues: {
            quantidadePaginas : 1,
            autor : 'Autor do livro de portugues',
            editora: 'Portugal',    
        },
        matematica: {
            quantidadePaginas : 2,
            autor : 'Autor do livro de matematica',
            editora: 'Swokowski',    
        },
        "lingua inglesa": {
            quantidadePaginas : 3,
            autor : 'Autor do livro de ingles',
            editora: 'Inglaterra',    
        },
    }
    return !!name ? bookList[ name ] : bookList;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book( );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ('O livro portugues tem '+ book('portugues').quantidadePaginas+ ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro matematica é '+ book('matematica').autor +'.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro lingua inglesa foi publicado pela editora '+ book('lingua inglesa').editora +'.' );
