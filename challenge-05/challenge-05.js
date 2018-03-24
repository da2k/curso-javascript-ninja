/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'paulo', true, 100, null, false ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(anyArray) {
    return anyArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray)[1]) // true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunTwoPar(arrayName,indexNumber){
    return arrayName[indexNumber];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var fiveItems = [ 'first', 2, true, [1,2,3], null ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunTwoPar(fiveItems, 0));
console.log(myFunTwoPar(fiveItems, 1));
console.log(myFunTwoPar(fiveItems, 2));
console.log(myFunTwoPar(fiveItems, 3));
console.log(myFunTwoPar(fiveItems, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do livro. 
Dentro dessa função, declare uma variável que recebe um objeto com as seguintes características:
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
    var library = {
        
        'Desvendando Javascript': {
            quantidadePaginas: 90, 
            autor: 'Emily Kay', 
            editora: 'Companhia dos Brackets'
        },

        'Ninja Coding': {
            quantidadePaginas: 200, 
            autor: 'Fernando Daciuk', 
            editora: 'Shinoby'
        },

        'jQuery & JavaScript': {
            quantidadePaginas: 300, 
            autor: 'Zak Ruvalcaba', 
            editora: 'Murach'
        }        
        
    };
    
    return !title ? library : library[title]; 
    
} 

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var selectBook = 'jQuery & JavaScript';
console.log("O livro " + selectBook + " tem " + book(selectBook).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + selectBook + " é " + book(selectBook).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + selectBook + " foi publicado pela editora " + book(selectBook).editora + ".");

