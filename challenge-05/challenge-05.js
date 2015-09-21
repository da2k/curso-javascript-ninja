/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
 var vetor =  [ "matriz" ,"vetor de vetor", 1 , 2 ,3]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 function returnArray(a){
    return [a];
 };


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray(vetor[1]); // "vetor de vetor"

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/


 function twoParam ( param1 , param2 ) {
           return param1[param2];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array =["value" , [1], null, 1,false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
function returnArray() {
    return array;
};

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
function book(nomeDoLivro) {
    var livro ={
        senhorDosAneis: {
            quantidadePaginas: 1212,
            autor: "J. R. R. Tolkien",
            editora: "Martins Fontes"
        },
        oSilmarillion:{
            quantidadePaginas: 480,
            autor: "J. R. R. Tolkien",
            editora: "Martins Fontes"
        },
        oHobbit:{
             quantidadePaginas: 328,
             autor: "J. R. R. Tolkien",
             editora: "Martins Fontes"
        }
    };
    return livro;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
booK();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro senhor Dos Aneis   tem " +book().senhorDosAneis.quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro senhor Dos Aneis   é " + book().senhorDosAneis.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O  livro senhor Dos Aneis foi publicado pela editora " + book().senhorDosAneis.editora);
