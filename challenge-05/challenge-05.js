/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArray = ["Rodrigo", 33, true, undefined, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arr) {
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(array,indice){
    return array[indice];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = [1, true, "sim", undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(arr,0);
myFunction(arr,1);
myFunction(arr,2);
myFunction(arr,3);
myFunction(arr,4);

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
os livros.  */

function book(nome) {
    var nomesLivros = {prop1:{nome: "hobbit", quantidadePaginas:100, autor:"Rodrigo", editora:"esquina"}, prop2:{nome: "Star Wars", quantidadePaginas:200, autor:"George", editora:"Imperio"}, prop3:{nome: "Bíblia", quantidadePaginas:2000, autor:"Deus", editora:"SBB"}}
    if(nome == nomesLivros.prop1.nome) {
        return nomesLivros.prop1;
    }

    if(nome == nomesLivros.prop2.nome) {
        return nomesLivros.prop2;
    }

    if(nome == nomesLivros.prop3.nome) {
        return nomesLivros.prop3;
    }

    if(nome == undefined) {
        return nomesLivros;
    }

};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

prop1: {nome: "hobbit", quantidadePaginas: 100, autor: "Rodrigo", editora: "esquina"}
prop2: {nome: "Star Wars", quantidadePaginas: 200, autor: "George", editora: "Imperio"}
prop3: {nome: "Bíblia", quantidadePaginas: 2000, autor: "Deus", editora: "SBB"}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log("O livro " + book("hobbit").nome + " tem " + book("hobbit").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O aurtor do livro " + book("hobbit").nome + " é " + book("hobbit").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(book("Star Wars").nome + " foi publicado pela editora " + book("Star Wars").editora + ".");
