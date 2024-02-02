/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arr = [ 'Marco', 31, 3, 'Jesus', true ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
> function myFunction( arg ){     //     let array = function( arr ){       
return arg;                       //     return arr;
}                                 //     }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction( arr )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2( arg, x ) {
... return arg[ x ];
... }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let dif = [ 31, 'Marco', true, null, undefined ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
myFunction2(dif, 0);   //   31
myFunction2(dif, 1);   //   'Marco
myFunction2(dif, 2);   //   true
myFunction2(dif, 3);   //   null
myFunction2(dif, 4);   //   undefined

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
function book( nome ){
    let livros = {
        'A Bíblia sagrada':  {
            quantidadePaginas: 4000,
            autor: 'Deus',
            editora: 'Fé' },
        'Harry Potter':  {
            quantidadePaginas: 810,
            autor: 'J.K. Rowling',
            editora: 'Rocco'},
        'Game Of Thrones':  {
            quantidadePaginas: 1820,
            Autor: 'George R.R. Martin',
            editora: 'Le Ya'}
    }
    return !nome ? livros : livros[ nome ];
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
let nome = 'A Bíblia sagrada'
console.log('O livro ' + nome + ' tem ' + book( nome ).quantidadePaginas + ' páginas.');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nome + ' é ' + book( nome ).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nome + ' foi publicado pela editora ' + book( nome ).editora + '.');
