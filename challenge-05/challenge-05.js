/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variavel = [1, 'Maykon', undefined, null, NaN];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(); // [ 1, 'Maykon', undefined, null, NaN ]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetor = [null, NaN, 'Ninja', 3, 7];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(vetor);

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
function book(arg) {
    var books = {
        'Codigo Da Vinci': {
            quantidadePaginas: 200, autor: 'Dan Brown', editora: 'Arqueiro'
        }, 
        'A arte de ligar o foda-se': {
            quantidadePaginas: 150, autor: 'Mark Manson', editora: 'Intriseca'
        }, 
        'A revolução dos bichos': {
            quantidadePaginas: 120, autor: 'George Orwell', editora: 'Companhia das letras'
        }
    }
    return arg === undefined ? books : books[arg];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book() 

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro a revolução dos bichos tem ' + book('A revolução dos bichos').quantidadePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Codigo Da Vinci e ' + book('Codigo Da Vinci').autor+ '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro  A Arte De Ligar O Foda-se foi publicado pela editora ' + book('A arte de ligar o foda-se').editora + '.');
