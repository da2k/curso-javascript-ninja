/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var arr = ['Star Wars', 66, !true, !!false, function f(){}];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function mf(arg){
	return arg;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(mf(arr[1]));
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
	// ?
	function r(arr, x){
		console.log('Array total: '+arr);
		console.log('indice: '+x); 
		console.log('Elemento do indice: '+arr[x]);
	};
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var five = [['oi'],  2.5, !false, 'FIVE', {}];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
r(five, five);
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
// ?
livro1 = 1;
livro2 = 2;
livro3 = 3;
function book(l){
	var n = {
		livro1:{quantidadePaginas: 100, autor: 'A', editora: 'AA'},
		livro2:{quantidadePaginas: 200, autor: 'B', editora: 'BB'},
		livro3:{quantidadePaginas: 300, autor: 'C', editora: 'CC'}
	}
	if(l == 1){
		console.log(n.livro1);
		console.log('O livro1 tem '+book().livro1.quantidadePaginas+' páginas');
		console.log('O autor do livro1 é '+book().livro1.autor);
		console.log('O livro1 foi publicado pela editora '+book().livro1.editora);
	}
	else if(l == 2){
		console.log(n.livro2);
		console.log('O livro2 tem '+book().livro2.quantidadePaginas+' páginas');
		console.log('O autor do livro2 é '+book().livro2.autor);
		console.log('O livro2 foi publicado pela editora '+book().livro2.editora);
	}
	else if(l == 3){
		console.log(n.livro3);
		console.log('O livro3 tem '+book().livro3.quantidadePaginas+' páginas');;
		console.log('O autor do livro3 é '+book().livro3.autor);
		console.log('O livro3 foi publicado pela editora '+book().livro3.editora);
	}
	else{
		return n;
	}
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log('O livro1 tem '+book().livro1.quantidadePaginas+' páginas')
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log('O autor do livro3 é '+book().livro3.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log('O livro2 foi publicado pela editora '+book().livro2.autor);
