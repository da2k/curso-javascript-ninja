/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['Caio', function(){}, 39, undefined, { a : 1}]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function newFunction(a){
    return a;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
newFunction(array[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function anotherFunction(a,b){
    return a[b];
}

anotherFunction([10, 44, 98, 64], 2);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var anotherArray = [12, null, { a: 1}, undefined, 'Hello World'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
anotherFunction(anotherArray, 0);
anotherFunction(anotherArray, 1);
anotherFunction(anotherArray, 2);
anotherFunction(anotherArray, 3);
anotherFunction(anotherArray, 4);

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
function book(name){
    var library = {
        'Hunt for the Red October': {
            quantidadePaginas : 398,
            author : 'Tom Clancy',
            editora : 'Success'
        },
        'Caves of Steel': {
            quantidadePaginas : 151,
            author : 'Isaac Asimov',
            editora : 'Abril'
        },
        'Cosmos': {
            quantidadePaginas : 293,
            author : 'Carl Sagan',
            editora : 'Novo Rumo'
        }
    }

    if(name !== undefined){
        return library[name];
    }else{
        return library;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Hunt for the Red October tem ' + book('Hunt for the Red October').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Caves of Steel é ' + book('Caves of Steel').author + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Cosmos foi publicado pela editora ' + book('Cosmos').editora + '.');
