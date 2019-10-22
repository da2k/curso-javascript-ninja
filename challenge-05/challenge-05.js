/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [10,'Joseph Stefano',true,null,undefined];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function converted(args){
  return console.log(args);
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
converted(array);
Joseph Stefano
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(args, index){
  return args[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [10,'shevechenko',function(),true,undefined];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(array,0));
10
console.log(myFunction(array,1));
shevechenko
console.log(myFunction(array,2));
[function]
console.log(myFunction(array,3));
true
console.log(myFunction(array,4));
undefined
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
function book(nomeDoLivro) {
    var livros = {
        'Os segredos de uma mente milionaria': {
            quantidadePaginas : 143,
            autor: 'T. Harv Eker',
            editora: 'Sextante'
        },
        'Eterna vigilância': {
            quantidadePaginas : 288,
            autor: 'Snowden Edward',
            editora: 'Planeta'
        },
        'Knowledge is Profit': {
            quantidadePaginas : 162,
            autor: 'Debora G Barbosa',
            editora: 'Amazon'
        }
    };
    return !nomeDoLivro ? livros : livros[nomeDoLivro];
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
var nomeDolivro = 'Knowledge is Profit';
console.log('O livro '+ nomeDolivro +' tem '+ book(nomeDolivro).quantidadePaginas + ' paginas!');
O livro Knowledge is Profit tem 162 paginas!
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeDolivro = 'Os segredos de uma mente milionaria';
console.log('O autor do livro '+ nomeDolivro + ' é ' + book(nomeDolivro).autor + '.');
Autor do Livro Os segredos da mente milionária é T. Harv Eker.
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeDolivro = 'Eterna vigilância';
console.log('O livro '+ nomeDolivro + ' foi publicado pela editora ' + book(nomeDolivro).editora + '.');
O livro Eterna vigilância foi publicado pela editora Planeta.

