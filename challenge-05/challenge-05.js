/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = [0, 'return me, please!', true, null, false, 'piolho'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnMyArray(arrayArg) {
    return arrayArg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnMyArray(myArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function findIndex(array, index){
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArr = [0, 'return me, please!', true, null, false, 'piolho'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
findIndex(myArr, 0);
findIndex(myArr, 1);
findIndex(myArr, 2);
findIndex(myArr, 0);
findIndex(myArr, 0);

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
function book (bookName) {
    var myBook = {
        'Le Petit Prince': { 
            paginas: 30,
            autor: 'Antoine de Saint-Exupéry',
            editora: 'Alba'
        },
        '1984': {
            paginas: 300,
            autor: 'George Orwell',
            editora: 'Companhia das Letras'
        },
        'O Segredo': {
            paginas: 3,
            autor: 'Rhonda Byrne',
            editora: 'Companhia das Letras'
        }
    };

    return !bookName ? myBook : myBook[bookName];
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
var myBook = '1984';
console.log('O livro ' + myBook + ' tem ' + book(myBook).paginas + '  páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + myBook + ' é ' + book(myBook).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + myBook  + ' foi publicado pela editora ' + book(myBook).editora + '.');
