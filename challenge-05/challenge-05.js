/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var arr = [1,2,3,4,5];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function myFunction(arg){
    return arg;
}
myFunction(arr);
console.log(myFunction(arr));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arg,number){
    return arg[number];
}
console.log(myFunction2(arr,2));


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetor = [1,'Pedro',true,3.15,false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(vetor));

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
    obj = {
        'Guerra Civil' : {quantidadedePaginas :300,autor : 'Stuart Moore',editora: 'Novo Século'},
        'Vendedor de Sonhos' : {quantidadedePaginas :300,autor:'Augusto Cury',editora: 'SP Editora'},
        'the Star Rover' : {quantidadedePaginas : 329,autor: 'Jack London',editora: 'Simon & Schuster'}
    }
    return !nomeLivro ? obj : obj[nomeLivro];
}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Guerra Civil';
console.log('O livro é '+bookName+ ' tem ' + book(bookName).quantidadedePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro é '+bookName+ ' tem ' + book(bookName).autor + ' páginas');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(' o livro '+book('guerra civil')+ ' foi publicado pela editora '+ book('guerra Civil').editora+ '.');
