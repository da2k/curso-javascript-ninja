/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 'dog', false, 5.7, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var arrReturn = function(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arrReturn(arr)[1]); //dog

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var customReturn = function(arr, ind){
    return arr[ind];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr5val = [1, 'show', true, NaN, 6.7]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
customReturn(arr5val, 0);
customReturn(arr5val, 1);
customReturn(arr5val, 2);
customReturn(arr5val, 3);
customReturn(arr5val, 4);

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
var book = function(name){
    var livros = {
        'Mikey' : {
            quantidadePaginas: 200,
            autor: 'Valter',
            editora: 'escravidão'
        },
        'Rambo':{
            quantidadePaginas: 100,
            autor: 'pinoquio',
            editora: 'Shrek'
        },
        'Senhor dos Aneis':{
            quantidadePaginas: 380,
            autor: 'Tolkien',
            editora: 'Cambridge'
        }
    }
    return livros[name] == undefined ? livros : livros[name]
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
console.log("O livro Rambo tem " + book('Rambo').quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Senhor dos Aneis é "+ book('Senhor dos Aneis').autor +".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Mikey foi publicado pela editora " + book('Mikey').editora + ".")
