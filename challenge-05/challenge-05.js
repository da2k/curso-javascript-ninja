/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var marcas = ['Ford','Fiat','Wolks','Kia','Chery'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retorn(val){return val;}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retorn(marcas[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornaMarca(arr,index){
	return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var tipos = [7,'Santos',[1,2,'Rios'],{a: 7},NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
   console.log(retornaMarca(tipos,0));
   console.log(retornaMarca(tipos,1));
   console.log(retornaMarca(tipos,2));
   console.log(retornaMarca(tipos,3));
   console.log(retornaMarca(tipos,4));


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
    var library = {
        'livro 1':{
            quantidadePaginas: 200,
            autor: 'Lulu',
            editora: 'Prisco'
        },
        'livro 2':{
            quantidadePaginas: 340,
            autor: 'Lili',
            editora: 'Perla'
        },
        'livro 3':{
            quantidadePaginas: 450,
            autor: 'Dudu',
            editora: 'Fau'
        },
    };
    return !livro ? library : library[livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var imprimirLivro = function(livro){
    var paginas = book(livro).quantidadePaginas;
    console.log("O livro " + livro + " tem " + paginas + " páginas!");
}
// imprimePaginar('l1') /O livro l1 tem 200 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var imprimirLivro = function(livro){
    var paginas = book(livro).quantidadePaginas;
	var autor = book(livro).autor;
    console.log("O livro " + livro + " tem " + paginas + " páginas!");
	console.log("O autor do livro " + livro + " tem " + autor + " páginas!");	
}

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var imprimirLivro = function(livro){
    var paginas = book(livro).quantidadePaginas;
	var autor = book(livro).autor;
	var editora = book(livro).editora;
    console.log("O livro " + livro + " tem " + paginas + " páginas!");
	console.log("O autor do livro " + livro + " tem " + autor + " páginas!");	
	console.log("O autor do livro " + livro + " tem " + editora + " páginas!");	
}