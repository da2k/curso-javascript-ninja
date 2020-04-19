/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const myArr = ['Henrique', 1, 2, { id: 33 }, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
const retornaArr = (arr) => {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArr(myArr)[1]); // 1

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const retornaArr2 = (arr, indice) => {
    return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const myArr2 = ['Teste', { status: 'premium' }, 2, 4, [2, '3']];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArr(myArr2)); // [ 'Teste', { status: 'premium' }, 2, 4, [ 2, '3' ] ]

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
const book = (nomeLivro) => {
    const livros = {
        'Construindo APIs REST com Node.js': {
            quantidadePaginas: 180,
            autor: 'Caio Ribeiro Pereira',
            editora: 'Casa do Código'
        },
        'Aprendendo Node': {
            quantidadePaginas: 335,
            autor: 'Shelley Powers',
            editora: 'Novatec'
        },
        'Introdução ao JSON': {
            quantidadePaginas: 148,
            autor: 'Lindsay Bassett',
            editora: 'Novatec'
        }
    };
    return  !nomeLivro ? livros : livros[nomeLivro];
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
console.log(`O livro Introdução ao JSON tem ${book('Introdução ao JSON').quantidadePaginas} páginas.`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor(a) do livro Introdução ao JSON é ${book('Introdução ao JSON').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Introdução ao JSON foi publicado pela editora ${book('Introdução ao JSON').editora}.`);