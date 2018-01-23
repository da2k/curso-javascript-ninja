/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var group = [0, 'josephina', true, {a : 2}, null];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( arr ){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(group)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function receiver( arr, num ) {
    return  arr[ num ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var group1 = [true, null, 5, 'string', function(){}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log( myFunction(group1)[0] );
console.log( myFunction(group1)[1] );
console.log( myFunction(group1)[2] );
console.log( myFunction(group1)[3] );
console.log( myFunction(group1)[4] );

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
function book(name){
    var prateleira = {
        'Camel - A Case' : {
            quantidadePaginas : 200,
            autor : 'John B',
            editora : 'Pegasus'
        },
        'Function, myFunction' : {
            quantidadePaginas : 300,
            autor : 'BB John',
            editora : 'Atlantis'
        },
        'Oriented by an Object' : {
            quantidadePaginas : 500,
            autor : 'John Bye',
            editora : 'Cinamon'
        },
    };

    return !name ? prateleira : prateleira[name];
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Oriented by an Object';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var bookName = 'Camel - A Case';
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor + '!');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var bookName = 'Function, myFunction';
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '!');
