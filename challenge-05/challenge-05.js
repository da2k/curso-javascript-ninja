/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ true, "Lucas", NaN, 0, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
	return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2( arr, index) {
	return arr[index];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetor = [ 1, true, "Batman", 0, 360];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(vetor, 0));
console.log(myFunction2(vetor, 1));
console.log(myFunction2(vetor, 2));
console.log(myFunction2(vetor, 3));
console.log(myFunction2(vetor, 4));

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
	var obj = {
		'Game of Thrones' : { QuantidadeDePaginas: 1000, author: "George M. Martin", editora: "Leya" },
		'HP': { QuantidadeDePaginas: 500, author: "J.k Rowling", editora: "Abril" },
		'HTML5' : { QuantidadeDePaginas: 200, author: "Maujor", editora: "Casa do Código" }
	};
	var nomes = Object.keys(obj);
	for (var i = 0; i <= nomes.length; i++ ) {
		if(nomes[i] === nomeDoLivro)
			return obj[nomeDoLivro];
	}
	return obj;
}

console.log(book("Game of Thrones"));
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book("asd"));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Game of Thrones tem ' + book("Game of Thrones").QuantidadeDePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Game of Thrones é ' + book("Game of Thrones").author + '!');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Game of Thrones foi publicado pela editora ' + book("Game of Thrones").editora + '!');
