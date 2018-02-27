/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

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
// ?

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var randomArr = ['Raphael', 'Yanne', 'Anjos', 'Delarue', 'Random'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrReturn(newArr) {
    return newArr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arrReturn(randomArr[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function randomIndex(arr, x) {
    return arr[x];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var typeArr = ['Raphael', true, 22, [3, 'Oliv', 2], { num: 2 }];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(randomIndex(typeArr, 0));
console.log(randomIndex(typeArr, 1));
console.log(randomIndex(typeArr, 2));
console.log(randomIndex(typeArr, 3));
console.log(randomIndex(typeArr, 4));

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
function book(nome) {
    var livros = {
        'The Clean Coder': {
            quantidadePaginas: 440,
            autor: 'Uncle Bob',
            editora: 'Elsevier'
        },
        'The Clean Code': {
            quantidadePaginas: 336,
            autor: 'Uncle Bob',
            editora: 'Pearson Education'
        },
        'DDD': {
            quantidadePaginas: 529,
            autor: 'Eric Evans',
            editora: 'Addison-Wesley Professional'
        }
    }

    return !nome ? livros : livros[ nome ];
}

var nomeDoLivro = 'DDD';

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(`O livro ${nomeDoLivro} tem ${book(nomeDoLivro).quantidadePaginas} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${nomeDoLivro} é ${book(nomeDoLivro).autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${nomeDoLivro} foi publicado pela editora ${book(nomeDoLivro).editora}`);
