/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var mixed = ['Arroz', 35, true, undefined, ['a', 'b']];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
    function recover(arr){
        return arr;
    }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
    recover(mixed[1]); // 35

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
    function returnIndex(arr, i){
        return arr[i];
    }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
    var mixed2 = ['A', false, 88, {name: 'elmi'}, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
    returnIndex(mixed2, 0); // A
    returnIndex(mixed2, 1); // false
    returnIndex(mixed2, 2); // 88
    returnIndex(mixed2, 3); // Object { name: "elmi" }
    returnIndex(mixed2, 4); // undefined

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
    function book(bookName){
        var bookShelf = {
            'Guerra do Velho': {
                quantidadePaginas: 368,
                autor: 'John Scalzi',
                editora: 'Aleph'
            },
            'Sétimo': {
                quantidadePaginas: 432,
                autor: 'André Vianco',
                editora: 'Aleph'
            },
            'Eleanor e Park': {
                quantidadePaginas: 333,
                autor: 'Rainbow Rowell',
                editora: 'Novo Século'
            },
        }
        return bookName !== undefined ? bookShelf[ bookName ] : bookShelf;
    }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('Guerra do Velho'); // Object { quantidadePaginas: 368, autor: "John Scalzi", editora: "Aleph" }
book('Eleanor e Park'); // Object { quantidadePaginas: 333, autor: "Rainbow Rowell", editora: "Novo Século" }
book('Sétimo') // Object { quantidadePaginas: 432, autor: "André Vianco", editora: "Aleph" }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Sétimo tem ' + book('Sétimo').quantidadePaginas + ' páginas'); // O livro Sétimo tem 432 páginas
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Guerra do Velho é ' + book('Guerra do Velho').autor); // O autor do livro Guerra do Velho é John Scalzi

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Eleanor e Park foi publicado pela editora ' + book('Eleanor e Park').editora); // O livro Eleanor e Park foi publicado pela editora Novo Século
