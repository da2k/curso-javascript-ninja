/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['Gabriel', 8, null, undefined, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function receiveArray(args) {
	return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(receiveArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnArrayParameter(args, index) {
	return args[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var anotherArray = ['Henrique', 10, false, NaN, {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnArrayParameter(anotherArray, 0));
console.log(returnArrayParameter(anotherArray, 1));
console.log(returnArrayParameter(anotherArray, 2));
console.log(returnArrayParameter(anotherArray, 3));
console.log(returnArrayParameter(anotherArray, 4));

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
function book(bookname) {
	var bookProps = {
        'Harry Potter' : {
            'quantidadePaginas' : 350,
            'autor' : 'J.K. Rowling',
            'editora' : 'Rocco'
        },
        'Alta Fidelidade' : {
            'quantidadePaginas': 230,
            'autor' : 'Nick Hornby',
            'editora' : 'Abril'
        },
        'O Senhor dos Anéis' : {
            'quantidadePaginas' : 420,
            'autor' : 'J. R. R. Tolkien',
            'editora' : 'Cia. das Letras'
        }
    };

    return !bookname ? bookProps : bookProps[bookname];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookname = 'Harry Potter';

console.log('O livro '+ bookname +' tem ' + book(bookname).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro '+ bookname +' é ' + book(bookname).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '+ bookname +' foi publicado pela editora '+ book(bookname).editora + '.');
