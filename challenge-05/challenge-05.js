/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myArr = ['feijao', 5, 2.5, Infinity, ['1','2','3']];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArg(arr){
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArg(myArr)[1]; // 5  

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrInd(arr, ind){
    return arr[ind]
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let randomArray = [NaN, null, 0, {'falsy': true}, ''];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaArg(randomArray);

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
    let books = {
        'oPequenoPríncipe': {
            'quantidadePaginas': 93,
            'autor': 'Antoine de Saint-Exupery',
            'editora': 'Novo Século'
        },
        'Extraordinário': {
            'quantidadePaginas': 320,
            'autor': 'RJ Palacio',
            'editora': 'Intrínseca'
        },
        'aRevoluçãoDosBichos': {
            'quantidadePaginas': 152,
            'autor': 'George Orwell',
            'editora': 'Companhia das Letras'
        }
    };
    if(bookName === undefined){
        return books;
    }
    return books[bookName];
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
let nameBook = 'oPequenoPríncipe';
console.log(`O livro ${nameBook} tem ${book(nameBook).quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${nameBook} é ${book(nameBook).autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${nameBook} foi publicado pela editora ${book(nameBook).editora}.`)
