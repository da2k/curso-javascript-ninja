/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var num = ['deborah', 'feminino', 19, 1.65, 45];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function array (a){ //ou var funcao = function(a){return a;};
    return a;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(array(num)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function indice(arr, num){
    return arr[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = ['deborah', 'feminino', 19, 1.65, 45];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(indice(arr, 0));
console.log(indice(arr, 1));
console.log(indice(arr, 2));
console.log(indice(arr, 3));
console.log(indice(arr, 4));
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
function book (nome){
    var livraria = {
        'Coraline': {quantidadePagina: 100, autor: 'Neil Gaiman', editora: 'Intríseca'}, 
        'Trono de vidro': {quantidadePagina: 250, autor: 'Sarah J. Maas', editora: 'Record'}, 
        'it': {quantidadePagina: 100, autor: 'Stephen King', editora: 'Dark side books'}
    };
    return (!nome ? livraria : livraria(nome));//se o nome n for passao retorna o objeto, se nao retorna o objeto do livro por parametro    
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
/*ou poderia criar uma variavel generica ja que vou repetir essa var mais vezes
    var name = 'it';
    dai no console.log eu coloco: console.log('O livro ' +name+ 'tem ' +book(name).quantidadePagina+ ' páginas!');
    isso pode se aplicar as outras funcoes abaixo
*/
console.log('O livro ' +book('it')+ 'tem ' +book('it').quantidadePagina+ ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' +book('Trono de vidro')+ ' é' +book('Trono de vidro').autor+ ' !');


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' +book('Coraline')+ ' foi publicado pela editora' +book('Coraline').editora+ ' !');

