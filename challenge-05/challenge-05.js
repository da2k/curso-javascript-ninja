/*
    Crie uma variável qualquer, que receba um array com alguns valores aleatórios
    - ao menos 5 - (fica por sua conta os valores do array).
    */
   var variavel = ['teste', 21, {valor:1991}, null, undefined];
   console.log(variavel);
   /*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
   getArray = function(array) {
       return array;
   };
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
   getArray(variavel)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/   
   getParams = function(array, number){
       return array[number];
   };
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
   var myVar = ['agora', 1234, function(){return 'função'}, false, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
   getParams(myVar, 0);
   getParams(myVar, 1);
   getParams(myVar, 2);
   getParams(myVar, 3);
   getParams(myVar, 4);

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
var book = function(nome) {
   var obj = {
       'Harry Potter': { 
           quantidadePaginas: 321,
           autor: 'JK Rolling',
           editora: 'Brasil',
       },
       'Lord Of The Ring':{ 
           quantidadePaginas: 521,
           autor: 'JK TOLKIEN',
           editora: 'Mundo',
       },
       'Teste':{ 
           quantidadePaginas: 1521,
           autor: 'TDD Teste',
           editora: 'Teste Unitario',
       }
   };
   if(nome) {
       return obj[nome];
   } else {
       return obj;
   }
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var frase = `O livro Teste tem ${book('Teste').quantidadePaginas} páginas`;
console.log(frase);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Harry Potter é '+ book('Harry Potter').autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Harry Potter foi publicado pela editora "+ book('Harry Potter').editora +".");