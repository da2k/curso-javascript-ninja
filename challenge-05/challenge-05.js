/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 25, 'rasc', 2, 'Eu mesmo!', 8 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arg){
    return arg;
};
returnArray(myArray);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnArray2(arg, num){
    return arg[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [ 'rasc', 25, true, [], {} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnArray2(myArray2, 0);
returnArray2(myArray2, 1);
returnArray2(myArray2, 2);
returnArray2(myArray2, 3);
returnArray2(myArray2, 4);

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
function books(arg){
    

    var nextBooks = {

        cleanCode: {
            quantidadePaginas: 440,
            autor: 'Robert C. Martin',
            editora: 'Alta Books'
        },

        tdd: {
            quantidadePaginas: 240,
            autor: 'Kent Beck',
            editora: 'Addison-Wesley Professional'
        },

        exExplaned: {
            quantidadePaginas: 225,
            autor: 'kent Beck',
            editora: 'Addison-Wesley'
        }
    }
    
    var theBook = arg === undefined ? nextBooks : nextBooks[arg];

return theBook;

};

    
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(books());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro CleanCode tem '+ books('cleanCode').quantidadePaginas +' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro tdd é '+ books('tdd').autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ExExplaned foi publicado pela editora '+ books('exExplaned').editora +'.');
