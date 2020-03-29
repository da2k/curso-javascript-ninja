/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1945, 1974, 1976, 1977, 1989];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var myFunction = function(arg){
    return arg;
}

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
var myFunction = function(arg, idx){
    return arg[idx];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myNewArray = 
[
    myArray[2], 
    'ano de nascimento', 
    false, 
    {
        nascimento: '1976-10-14', 
        nome: 'Menandro Neto', 
        email: 'menandro.neto@gmail.com'
    },
     myArray
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(myNewArray, 0));
console.log(myFunction(myNewArray, 1));
console.log(myFunction(myNewArray, 2));
console.log(myFunction(myNewArray, 3));
console.log(myFunction(myNewArray, 4));

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
var book = function(name){
    var lybrary = {
        php: {
            title: 'php - Programando com Orientação a Objetos',
            pages: 570,
            publisher: 'Novatec',
            author: 'Pablo Dall´Oglio'
        },
        java: {
            title: 'jsp - A tecnologia Java na Internet',
            pages: 396,
            publisher: 'Erica',
            author: 'Francisco B. Junior'
        },
        javascript: {
            title: 'JavaScript Eloquente',
            pages: 436,
            publisher: 'No Starch Press',
            author: 'Marijn Haverbeke'
        }
    }
    if (name === undefined || name === null)
        return lybrary
    else 
        return lybrary[name];
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
console.log('O livro ' + book('php').title + ' tem ' + book('php').pages + ' paginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + book('php').title + ' é ' + book('php').author + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + book('php').title + ' foi publicado pela editora ' + book('php').publisher + '.');

