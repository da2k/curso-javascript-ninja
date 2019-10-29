/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
myarray = [ 'Lucas', 26, true, null, undefined ]; 

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( myarr ) {
    return myarr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction( myarray )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, num) {
    return arr[ num ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
myarray2 = [ 5, 'Ricci', null, false, { lucas: 3 } ]; 

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunction2( myarray2, 0 ) );
console.log( myFunction2( myarray2, 1 ) );
console.log( myFunction2( myarray2, 2 ) );
console.log( myFunction2( myarray2, 3 ) );
console.log( myFunction2( myarray2, 4 ) );

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
function book ( bookname ) {
    var allbooks = {
        'Brooklyn 99': {
            quantidadePaginas: 350,
            autor: 'Jake Peralta',
            editora: '99'
        }, 
        'League of Legends': {
            quantidadePaginas: 320,
            autor: 'Yorick',
            editora: 'Ilha das Sombras'
        },
        'FATEC Taquaritinga': {
            quantidadePaginas: 400,
            autor: 'Direção FATEC',
            editora: 'Centro Paula de Souza'
        }
    };
    return !bookname ? allbooks : allbooks [ bookname ]; 
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
console.log( 'O livro Brooklyn 99 tem ' + book( 'Brooklyn 99' ).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro League of Legends é ' + book( 'League of Legends' ).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro FATEC Taquaritinga foi publicado pela editora ' + book( 'FATEC Taquaritinga' ).editora + '.' );
