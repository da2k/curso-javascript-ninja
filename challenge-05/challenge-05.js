/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var pessoa = [ 1, 'lucas', true, false, 'js ninja'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornarArr(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornarArr(pessoa)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function qualquer(arr, num ){
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var teste = [1, "lucas", {nome : 'gabriel'}, true, [2,1]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(qualquer(teste),0);
console.log(qualquer(teste),1);
console.log(qualquer(teste),2);
console.log(qualquer(teste),3);
console.log(qualquer(teste),4);

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


function book(nomeLivro){
    var livraria = {
        livro1 : {
            quantidadeDePaginas : 200,
            autor  : 'autor1',
            editora : 'editora1'
        },
        livro2 :{
            quantidadeDePaginas : 300,
            autor  : 'autor2',
            editora : 'editora2'
        },
        livro3 :{
            quantidadeDePaginas : 500,
            autor  : 'autor3',
            editora : 'editora3'
        }
    };
    
    if(nomeLivro == undefined){
        return livraria;
    }
    
    return livraria[nomeLivro];
    
    //return !nomeLivro ? livraria : livraria[nomeLivro];
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
var bookName = livro1;
console.log("O livro" + bookName + " tem " + book(bookName).quantidadeDePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro " + bookName + ' é ' + book(bookName).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName + "foi publicado pela editora " + book(bookName).editora);
