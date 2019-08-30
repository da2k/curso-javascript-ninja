/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function fun (array){
	return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
fun(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function fun2 (array,x){
	return array[x];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newarr = ['Wesley',null,28,true,1.85];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
fun(newarr);

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
function book(arg){
        var livros = {
        'Livro01': {
            quantidadePaginas:100,
            autor:'A01',
            editora:'E01'
            },
        'Livro02': {
            quantidadePaginas:200,
            autor:'A02',
            editora:'E02'
            },
        'Livro03': {
            quantidadePaginas:300,
            autor:'A03',
            editora:'E03'
            }
        }
		return arg===undefined?livros:livros[arg];
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
var livro = 'Livro01';
'O livro '+livro+' tem '+book(livro).quantidadePaginas+' páginas!';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro '+livro+' é '+book(livro).autor+'.';

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro '+livro+' foi publicado pela editora '+book(livro).editora+'.';
