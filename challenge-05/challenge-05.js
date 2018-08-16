/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['msantos', 7, true, undefined, null, 'leandro'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(myArray){return myArray;}

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

function myFunction2(arr, num){
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myVar = [1, 'marcio', null, true, {b : 2} ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction2(myVar,0));
console.log(myFunction2(myVar,1));
console.log(myFunction2(myVar,2));
console.log(myFunction2(myVar,3));
console.log(myFunction2(myVar,4));


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

function book(livro){
    var nomeLivro = objetoLivro{nLivro1 : "O Príncipe"{quantidadePaginas : 130, autor : "Maquiável", Editora : "Ática"}, 
                                nLivro2 : "Como fazer amigos e influenciar pessoas"{quantidadePaginas : 700, autor : "Daile Carnegie", Editora : "Ática"}, 
                                nLivro3 : "10% mais feliz"{quantidadePaginas : 400, autor : "Dan Harris", Editora : "Ática"}};

    if(livro == nLivro1){return nLivro1;}
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
