/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['Brenda', 2023, { isStudying: true }, false, [1, 2, 3]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnParameter(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnParameter(array[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnIndexFromArray(array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ['Brenda', 25, null, true, ''];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnIndexFromArray(array2, 0);
returnIndexFromArray(array2, 1);
returnIndexFromArray(array2, 2);
returnIndexFromArray(array2, 3);
returnIndexFromArray(array2, 4);

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
function getBook(bookName) {
    var characteristics = {
        'Ready Player One': {
            quantidadePaginas: 250,
            autor: 'Ernest Cline',
            editora: 'Crown Publishing Group'
        },
        'One Thing': {
            quantidadePaginas: 500,
            autor: 'Gary Keller',
            editora: 'Bard Press'
        },
        'IDK': {
            quantidadePaginas: 750,
            autor: 'idk',
            editora: 'idk'
        }
    }
    return bookName ? characteristics[bookName] : characteristics;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(getBook());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var key = Object.keys(getBook());
console.log(`O livro ${key[0]} tem ${getBook('oneThing').quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${key[0]} é ${getBook('readyPlayerOne').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${key[0]} foi publicado pela editora ${getBook('readyPlayerOne').editora}.`);
