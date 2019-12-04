/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var numeros = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arg){
	return '\n' + arg;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(numeros));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var arr = [3, 6, 7, 8];

function doisParam(arr, index){
	return arr[index]; 
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var valores = ['teste', 1.32, {}, true, [1]];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisParam(valores, 0) + '\n');
console.log(doisParam(valores, 1) + '\n');
console.log(doisParam(valores, 2) + '\n');
console.log(doisParam(valores, 3) + '\n');
console.log(doisParam(valores, 4) + '\n');
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
function book(nameBook){
    
    var allBooks = {
        'Segredos do Ninja JavaScript': {
            quantidadePaginas:'488',
            autor: 'John Resig & Bear Bibeault',
            editora:'Novatec'
        },
        'Introdução ao HTML5': {
            quantidadePaginas:'220',
            autor: 'Bruce Lawson & Remy Sharp',
            editora:'Alta Books'
        },
        'Smashing CSS': {
            quantidadePaginas:'283',
            autor: 'Erick A. Meyer',
            editora:'Bookman'
        }
    }

    // Se nameBook estiver vazio retorne todos os livros (book).
    // Se não retorne o nome específico (book[nameBook]).
    return !nameBook ? allBooks :  allBooks[ nameBook ];
}

//ARRAY EM JAVASCRIPT = um objeto com índices numerados (posicionados por números!)



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nameBook = 'Segredos do Ninja JavaScript';

console.log( 'O livro ' + nameBook +  ' tem ' + book( nameBook ).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do ' + nameBook +  ' é ' + book( nameBook ).autor );


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + nameBook + ' foi publicado pela editora ' + book( nameBook ).editora);

