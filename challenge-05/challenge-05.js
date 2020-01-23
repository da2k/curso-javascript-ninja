/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var someVar = [1, true, "Vyc", 23, "Curso"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornaArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(retornaArray(someVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var values = ['vyc', true, function (arg) { return arg; }, null, { a: 2 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction(values, 0));
console.log(myFunction(values, 1));
console.log(myFunction(values, 2));
console.log(myFunction(values, 3));
console.log(myFunction(values, 4));
console.log(myFunction(values, 5));

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

function book(bookName) {
    var livros = {
        'Livro python': {
            quantidadePaginas: 525,
            autor: "good guy",
            editora: "das boas"

        },
        'Livro JS': {
            quantidadePaginas: 800,
            autor: "um doido",
            editora: "casa do codigo"

        },
        'Livro java': {
            quantidadePaginas: 85233,
            autor: "um pnc",
            editora: "ruim"
        }
    }
    return !bookName ? livros : livros[ bookName ];
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

var bookName = 'Livro JS';
console.log('O livro ' + bookName + 'tem ' + book( bookName ).quantidadePaginas + ' páginas!' );

console.log(`O livro ${book("Livro Python")} tem ${book("Livro Python").quantidadePaginas}`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro ' + bookName + ' é ' + book( bookName ).autor + '.');

console.log(`O autor do livro ` + book(info.livro2.nome) + `é ` + book(info.livro2.autor));

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro ' + bookName + ' foi publicado pela editora ' + book( bookName ).editora + '.');