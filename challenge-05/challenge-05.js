/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var list = [ 2, 4, "dani", true, 10 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function myFunction(arg){
    return arg;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
myFunction(list)[1]; //4

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// ?
function myFunction(arr, index){
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var list2 = [1, true, "dani", [2,3], {a:1, b:2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(list2);
//[ 1, true, 'dani', [ 2, 3 ], { a: 1, b: 2 } ]



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
// ?
function book(nome){
    var books = {
        livro1:{
            quantidadePaginas: 100,
            autor: "Dani",
            editora: "seilabooks"
        },
        livro2:{
            quantidadePaginas: 200,
            autor: "Daniaagag",
            editora: "seilabooksaaa"
        },
        livro3:{
            quantidadePaginas: 345,
            autor: "Daniaoijsd",
            editora: "seilabooksaios"
        }
    };

    if(nome != undefined){
        return books[nome];
    }
    return books;
}   
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
// {
//   livro1: {
//     quantidadePaginas: 100,
//     autor: 'Dani',
//     editora: 'seilabooks'
//   },
//   livro2: {
//     quantidadePaginas: 200,
//     autor: 'Daniaagag',
//     editora: 'seilabooksaaa'
//   },
//   livro3: {
//     quantidadePaginas: 345,
//     autor: 'Daniaoijsd',
//     editora: 'seilabooksaios'
//   }
// }


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro book1 tem " + book("livro1").quantidadePaginas+" páginas."
//'O livro book1 tem 100 páginas.'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"o autor do livro1 é " + book("livro1").autor + "."
//'o autor do livro1 é Dani.'


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro book1 foi publicado pela editora " + book("livro1").editora + "."
//'O livro book1 foi publicado pela editora seilabooks.'
