/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var ArrayDeValores = [22, {nome:'Gilmara', sobrenome: "Pimentel"}, true, "New Jersey" , function(){} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(arr){

    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(ArrayDeValores)[1]); // {nome: 'Gilmara, sobrenome: 'Pimentel}'}
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParameters(arr, number){

    return arr[number]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var ArrayDeValoresDiferentes = [ 45, {address:'Rua Pio X, s/n', City: 'Reduto'}, true, "0" , ""];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(twoParameters(ArrayDeValoresDiferentes, 0));
console.log(twoParameters(ArrayDeValoresDiferentes, 1));
console.log(twoParameters(ArrayDeValoresDiferentes, 2));
console.log(twoParameters(ArrayDeValoresDiferentes, 3));
console.log(twoParameters(ArrayDeValoresDiferentes, 4));
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

    var availableBooks = {

        'O sol e a lua': {
            quantidadePaginas: 150,
            autor: 'Joao da Silva',
            editora: 'Abril',
        },
        'Programacao do Zero' : {
            quantidadePaginas: 90,
            autor: 'Adriana Maiu',
            editora: 'Abril',
        },
        'Os efeitos Cascata': {
            quantidadePaginas: 200,
            autor: 'Helena Huol',
            editora: 'Abril',
        },

                 
    };

    return !bookName ? availableBooks : availableBooks[ bookName ]; // accessando uma propriedade de um objeto que nao sabemos qual é, ou que é STRING;
 }



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
// 'O sol e a lua': { quantidadePaginas: 150, autor: 'Joao da Silva', editora: 'Abril' },
//   'Programacao do Zero': { quantidadePaginas: 90, autor: 'Adriana Maiu', editora: 'Abril' },
//   'Os efeitos Cascata': { quantidadePaginas: 200, autor: 'Helena Huol', editora: 'Abril' }


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookname = 'O sol e a lua';


console.log('O livro' + ' '+ bookname + ' ' + 'tem' +' ' + book(bookname).quantidadePaginas + ' '+ "páginas!");
       

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O(a) autor(a) do livro " +' ' + bookname + ' ' + " é" + ' '+ book(bookname)['autor'] + "."); // Autor foi acessado com chaves, mas como sabemos qual e a propriedade e melhor usar o '. ' , pois com [] demora mais. 



/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '+ ' ' + bookname + ' '+ 'foi publicado pela editora ' + ' ' + book(bookname).editora + ".");
