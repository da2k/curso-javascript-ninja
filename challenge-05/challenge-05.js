/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var arrayzinho = [1, 'joao', true, 'arara', 'abc'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function getArray(paramArray) {
	return paramArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(arrayzinho)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getArray2 (arrayValores, num) {
	return arrayValores[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valoresArray = [1, 'Gabriel', true,  undefined, {fruta: 'maracujá'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getArray2(valoresArray, 0));
console.log(getArray2(valoresArray, 1));
console.log(getArray2(valoresArray, 2));
console.log(getArray2(valoresArray, 3));
console.log(getArray2(valoresArray, 4));


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
function book(bookName) {
	var objeto = {
			'livro1' : {
				quantidadePaginas: 178,
				autor: 'Gabriel',
				editora: 'Sampa Editora'
		}, 
			'livro2' : {
				quantidadePaginas: 300,
				autor: 'Joaozinho',
				editora: 'RJ Editora'
		}, 
			'livro3' : {
				quantidadePaginas: 78,
				autor: 'Peguegua',
				editora: 'Editora Abril'
		}
	};
	return bookName === undefined ? objeto : objeto[bookName];	
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
console.log("O livro livro1 tem " + book('livro1').quantidadePaginas + " paginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeLivro = "livro1";
console.log("O autor do " + nomeLivro + " é " + book(nomeLivro).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeLivro2 = "livro3";
console.log("O livro " + nomeLivro2 + " foi publicado pela editora " + book(nomeLivro2).editora);