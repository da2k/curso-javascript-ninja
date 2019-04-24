/*
1) Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var vetor = ['palavra', 15, true, -33, 's'];

/*
2) Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retorna_vetor(arg){
	return arg;
}
//ou
var retorna_vetor = function(arg){
	return arg;
};

/*
3) Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retorna_vetor(vetor)[1]);

/*
4) Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function dois_par(vet, indice){
	return vet[indice];
}
//ou
var dois_vetor = function(vet, indice){
	return vet[indice];
};

/*
5) Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetor_cinco = ['palavra', 3, null, true, 5];

/*
6) Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retorna_vetor(vetor_cinco);
dois_par(vetor_cinco, 0);
dois_par(vetor_cinco, 1);
dois_par(vetor_cinco, 2);
dois_par(vetor_cinco, 3);
dois_par(vetor_cinco, 4);

/*
7) Crie uma função chamada `book` (1), que recebe um parâmetro, que será o nome do
livro (2). Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros (3);
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String (4)
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
	check-list:
		1.(x) - funcao chamada `book`
		2.(x) - parametro da funcao, nome (titulo) de um livro
		3.(x) - dentro da funcao, declarar objeto (box) que recebe 3 propriedades (nomes de livros)
		4.(x) - cada um desses objetos (livro) recebe 3 propriedades (paginas, autor e editora)
		5.(x) - funcao (book) retorna objeto (livro) passado por parametro (titulo)
		6.(x) - se o parametro (titulo) nao for passado ou for diferente, funcao (book) retorna objeto (box) com todos os livros
*/
function book(titulo){
	var box = {
		'harry potter': {
			quantidadePaginas: 398,
			autor: 'k. k. rowling',
			editora: 'rocco'
		},
		'hannibal': {
			quantidadePaginas: 264,
			autor: 'thomas harris',
			editora: 'arqueiro'
		},
		'poirot': {
			quantidadePaginas: 211,
			autor: 'agatha christie',
			editora: 'sextante'
		}
	};
	
  return titulo ? box[titulo] : box;
	if('harry potter' == titulo){
		return box['harry potter'];
	}
	else if('hannibal' == titulo){
		return box['hannibal'];
	}
	else if('poirot' == titulo){
		return box['poirot'];
	}
	else {
		return box;
	}
}
//ou
function book(titulo){
	var box = {
		'harry potter': {
			quantidadePaginas: 398,
			autor: 'k. k. rowling',
			editora: 'rocco'
		},
		'hannibal': {
			quantidadePaginas: 264,
			autor: 'thomas harris',
			editora: 'arqueiro'
		},
		'poirot': {
			quantidadePaginas: 211,
			autor: 'agatha christie',
			editora: 'sextante'
		}
	};
	
  return titulo ? box[titulo] : box;
}

/*
8) Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
9) Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = 'hannibal';
console.log('O livro ' + livro + ' tem ' + book(livro).quantidadePaginas + ' páginas!');

/*
10) Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + livro + ' é ' + book(livro).autor + '.');

/*
11) Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + livro + ' foi publicado pela editora ' + book(livro).editora + '.');
