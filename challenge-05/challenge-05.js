/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArray = [true, 'lisandro', 42, 37.5, undefined];
console.log(myArray);

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
let myFunction = function(arg){return arg};

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
let secFunc = function(arr,index){ return arr[index]};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arr2 = [42, 'bag', NaN, null, {a: 'teste'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(secFunc(arr2, 0));
console.log(secFunc(arr2, 1));
console.log(secFunc(arr2, 2));
console.log(secFunc(arr2, 3));
console.log(secFunc(arr2, 4));

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
    
    let shellBooks = {
        'Shell Script Profissional': {
            quantidadePaginas: 479,
            autor: 'Aurelio Marinho Jargas',
            editora: 'Novatec'
        },
        'Programacao Shell Script': {
            quantidadePaginas: 549,
            autor: 'Júlio Cesar Neves',
            editora: 'Brasport'
        },
        'Unix and Linux System Administration': {
            quantidadePaginas: 1177,
            autor: 'Nemeth Snyder',
            editora: 'Pearson'
        }
    };
    
    return !bookName ? shellBooks : shellBooks[bookName];
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
let nomeLivro = 'Shell Script Profissional';
console.log("O livro " + nomeLivro + " tem " + book(nomeLivro).quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
let nomeLivro2 = 'Programacao Shell Script';
console.log("O autor do livro " + nomeLivro2 + " é " + book(nomeLivro2).autor + ".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
let nomeLivro3 = 'Unix and Linux System Administration';
console.log("O livro " + nomeLivro3 + " foi publicado pela editora " + book(nomeLivro3).editora + ".")
