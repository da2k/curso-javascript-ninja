/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var newarray = ['Beto', true, { prop1: 'estudante', prop2: 'javascript'}, undefined, 7];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
	return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(newarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, num){
	return arr[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherarray = [5, null, function(){ return 'Olá'}, 'Veloso', 1.56]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(otherarray));

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
function livros(nomeLivro){
	
	var biblioteca = {
		'CSS Grid Layout':{
			quantidadePaginas: 176,
			autor: 'Maurício Samy Silva',
			editora: 'Novatec'
		},
		'Desenvolvendo Jogos Mobile com HTML5':{
			quantidadePaginas: 232,
			autor: 'Luiz Fernando Estevarengo',
			editora: 'Novatec'
		},
		'Segurança para desenvolvedores web':{
			quantidadePaginas: 416,
			autor: 'John Paul Mueller',
			editora: 'Novatec'
		}
	};

	return !nomeLivro ? biblioteca : biblioteca[nomeLivro]; //Se não passa nome do livro retorna todos os livros, caso contrario livro especifico

};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(livros());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'Segurança para desenvolvedores web';
console.log('O livro ' + nomeLivro + ' tem ' + livros( nomeLivro ).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nomeLivro + ' é ' + livros( nomeLivro ).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nomeLivro + ' foi publicado pela aditora' +  livros( nomeLivro ).editora) + '.';