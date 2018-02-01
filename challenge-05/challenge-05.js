/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var myvar  = ['lucas',3,null,5.4,true];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function reciveArray(newArray){
    return newArray;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(reciveArray(myvar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParam(firstParam,secondParam){
    return firstParam[secondParam];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var fiveElements = [1,'lucas',true,[1,2],{a:2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(twoParam(fiveElements,0));
console.log(twoParam(fiveElements,1));
console.log(twoParam(fiveElements,2));
console.log(twoParam(fiveElements,3));
console.log(twoParam(fiveElements,4));

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
    var livros  = {
        'PHP 7':{paginas:100,
             autor:'Lucas',
             editora:'Casa do Código'},
        'JavaScript Ninja':{paginas:200,
            autor:'Daciuk',
            editora:'novatec'},
        'Laravel 5.5':{paginas:100,
            autor:'Rodrigo',
            editora:'O\'Reley'},
        mostraLivro:function(){
           
        }
    }
    return bookName ? livros[bookName] : livros;
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
console.log("O livro "+'PHP 7'+ " tem "+ book('PHP 7').paginas +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O livro "+'JavaScript Ninja'+ " tem "+ book('JavaScript Ninja').autor +" páginas!");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro "+'Laravel 5.5'+ " tem "+ book('Laravel 5.5').editora +" páginas!");

