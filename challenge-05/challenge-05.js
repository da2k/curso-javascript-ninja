/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

// criei uma variavle que recebe um array com valores aleatórios
var myvariavel = ['carlos', 10, true, null, {a: 1}, function() {} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction (arr) {

  return arr;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction (myvariavel) [1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunction02 (arr, index) {

	return arr [ index ];

}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myarray2 = ['carlos', 54.2, [1,2,'Silvia'], true, {b:2}]; // carlos (string), 54.2 (numero), [1,2,'Silvia'] (array), true (boleano),  {b:2} (objeto que recebe uma propriedade b e 2 um valor)

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log ( myFunction02 (myarray2, 0));
console.log ( myFunction02 (myarray2, 1));
console.log ( myFunction02 (myarray2, 2));
console.log ( myFunction02 (myarray2, 3));
console.log ( myFunction02 (myarray2, 4));


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

function book (bookName){

	var allBooks = {
		
		'Segredos do Ninja Javascript' : {

			autor: 'Jonh Resig e Bear Bibeault',
			quantidadePaginas: 488,
			editora: 'Novatec',
		},

		'Introtução ao Html5' : {

			autor: 'Bruce Lawson e Remy Sharp',
			quantidadePaginas: 220,
			editora: 'Alta Books',
		},

		'Smashing CSS' : {

			autor: 'Erick A. Meyer',
			quantidadePaginas: 283,
			editora: 'Bookman',
		}
	};

    return !bookName  ? allBooks : allBooks [ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log( book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log ('O livro Introdução ao HTML5 tem '  + book('Introtução ao Html5').quantidadePaginas + ' páginas!');
//O livro Introdução ao HTML5 tem 220 páginas!    obs: // aqui sem variável 

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

var bookName = 'Segredos do Ninja Javascript';  // aqui usando variável para facilitar
console.log('O autor do livro ' + bookName +  ' é ' + book( bookName ).autor + '.');
//O autor do livro Segredos do Ninja Javascript é Jonh Resig e Bear Bibeault.


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var nomeLivro = 'Segredos do Ninja Javascript'; // aqui usando variável para facilitar
console.log ('O livro ' + nomeLivro + ' foi publicado pela editora ' + book(nomeLivro).editora + '.');
//O livro Segredos do Ninja Javascript foi publicado pela editora Novatec.



//EXTRAS ESTUDOS

var counter = 10;

while (counter > 10) {

console.log(counter);
counter++;
}

// contagem regressiva
var counter = 20;
while (counter > 0) {

console.log (counter --);
}