/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
 var  array = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
  function myFunction(array){
	return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
 myFunction(array)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(array, segundoNumero){
	return array[segundoNumero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
 var arrayDeCinco = [1, true, 'cinco', null, {nome: 'weverton', idade: 18}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(arrayDeCinco, 0);
myFunction(arrayDeCinco, 1);
myFunction(arrayDeCinco, 2);
myFunction(arrayDeCinco, 3);
myFunction(arrayDeCinco, 4);


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
function book(nomeLivro) {
   
    var livros = { 
        'Candlestick' : {
        quantidadesPaginas : 510,
        autor :'Carlos Alberto Debastiani',    
         editora :'Novatec'
        },

        'SQL Curso Pratico': {
		 quantidadePaginas: 221,
		 autor: 'Celso Henrique', 
		 editora: 'Novatec'
		},

        'Operando na Bolsa de Valores': {
		 quantidadePaginas: 645,
		 autor: 'Joseilton S. Correia ', 
		 editora: 'Novatec'
		}       
    };

   return nomeLivro === undefined ? livros : livros [nomeLivro]
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
  console.log ('O livro tem Candlestick ' + book('Candlestick').quantidadesPaginas    + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro SQL Curso Pratico é ' + book('SQL Curso Pratico').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Operando na Bolsa de Valores foi publicado pela editora '+ book('Operando na Bolsa de Valores').editora + '.');
