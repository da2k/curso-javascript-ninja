/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var args = [1, 'Lucas', null, undefined, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arg){
    return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(args)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayPosition(arr,pos){
    return arr[pos];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [2, 'Vianna', null, undefined, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrayPosition(array,0);
arrayPosition(array,1);
arrayPosition(array,2);
arrayPosition(array,3);
arrayPosition(array,4);

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
    var bookCollection = {
        book1:{
            quantidadePaginas: 280,
            autor: 'zezin',
            editora: 'editora1'
        }, 
        book2:{
            quantidadePaginas: 250, 
            autor: 'gustin', 
            editora: 'editora2'
        }, 
        book3:{
            quantidadePaginas: 235, 
            autor: 'pedrin', 
            editora: 'editora3'
        }
    }

    return !bookName ? bookCollection : bookCollection[bookName];   
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
console.log('O livro book2 tem ' + book('book2').quantidadePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro book2 é ' + book('book2').autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro book2 foi publicado pela editora ' + book('book2').editora + '.')
