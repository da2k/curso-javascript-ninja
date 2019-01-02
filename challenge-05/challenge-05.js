/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['Fernando', 1, true , function(a) {return a}, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(array)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunc2(a, b) {
    return a[b];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [1, 2, 3, 5, 6];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunc2(array2, 0);
myFunc2(array2, 1);
myFunc2(array2, 2);
myFunc2(array2, 3);
myFunc2(array2, 4);

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
function book( bookName ) {
    var bookFeatures = {
        'Dom Casmurro': {
            quantidadePaginas: 120,
            autor: 'Joao das Neves',
            editora: 'Editora X'
        },
        'Clean Code': {
            quantidadePaginas: 625,
            autor: 'Joao das Couves',
            editora: 'Editora Y'
        },
        'Meu pé de laranja podre': {
            quantidadePaginas: 3,
            autor: 'Pedrino de Jesus',
            editora: 'Editora Chorume'
        }
    };

    return bookName ? bookFeatures[bookName] : bookFeatures;
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
var bookName = 'Dom Casmurro'
console.log(`O livro ${ bookName } tem ${book( bookName ).quantidadePaginas}!`);


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${ bookName } é ${book( bookName ).autor}.`);



/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${ bookName } foi publicado pela editora ${book( bookName ).editora}.`);
