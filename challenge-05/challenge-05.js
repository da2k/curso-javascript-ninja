/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [1, 'Yasminn', null, 1.62, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (arr) {
     return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction2(arg1, arg2){
    return arg1[arg2];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myVar2 = [1,false,'Curso',null,[1,2,'PI']];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction2(myVar2,0));
console.log(myFunction2(myVar2,1));
console.log(myFunction2(myVar2,2));
console.log(myFunction2(myVar2,3));
console.log(myFunction2(myVar2,4));

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

function book (name) {

    var obj = {

        "ABC": {
            quantidadePaginas: 165,
            autor: 'Daciuk',
            editora: 'Udemy'
        },

        "123": {
            quantidadePaginas: 165,
            autor: 'Daciuk',
            editora: 'Udemy'
        },

        "ABC123": {
            quantidadePaginas: 165,
            autor: 'Daciuk',
            editora: 'Udemy'
        }

    };

    return !name ? obj : obj[name];
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
var name = 'ABC'
console.log("O livro " + name + " tem "+ book(name).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var name = '123'
console.log("O autor do livro " + name + " é " + book(name).autor + "."); 

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var name = 'ABC123'
console.log("O livro " + name + " foi publicado pela editora " + book(name).editora +".");
