/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ["Mia", 30, !false, -4, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function minhaFuncao(arg){
    return arg;
}



/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
minhaFuncao(meuArray)[1]; //30

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function segundaFuncao(arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novoArray = [null, 10, true, -400, 'witcher'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
segundaFuncao(novoArray, 0);
segundaFuncao(novoArray, 1);
segundaFuncao(novoArray, 2);
segundaFuncao(novoArray, 3);
segundaFuncao(novoArray, 4);

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
function book(title) {
    var books = {
        'Harry Potter e a Pedra Filosofal' : {
            quantidadePaginas: 263,
            autor: 'J.K. Rowling',
            editora: 'Rocco'
        },
        'The Witcher O Último Desejo' : {
            quantidadePaginas: 320,
            autor: 'Andrzej Sapkowski',
            editora: 'Wmf Martins Fontes'
        },
        'O Guia do Mochileiro das Galáxias':{
            quantidadePaginas: 208,
            autor: 'Douglas Adams',
            editora: 'Arqueiro'
        }
    }

    return !title ? books : books[title] ;
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O Livro The Witcher O Último Desejo' + ' tem ' + book('The Witcher O Último Desejo').quantidadePaginas + ' páginas.');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro The Witcher O Último Desejo é ' + book('The Witcher O Último Desejo').autor + '.');


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro The Witcher O Último Desejo foi plublicado pela editora ' + book('The Witcher O Último Desejo').editora + '.');