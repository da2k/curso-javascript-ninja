/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['ricardo',19,'masculino','maceió','brazil'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function vetor (array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
vetor(array[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoP(array, n){
    return array[n];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = ['olá',10000,'JavaScript','LifeStyle',1.0];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( twoP(array,0));
console.log( twoP(array,1));
console.log( twoP(array,2));
console.log( twoP(array,3));
console.log( twoP(array,4));

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
function book (livro){
    var prateleira = {
        'Banco de dados': {
            quantidadedePaginas: 100,
            autor: 'Douglas Chalegre',
            editora: 'Saraiva',
        },
        'Ionic and tips':{
            quantidadedePaginas: 108,
            autor: 'Matheus Martins',
            editora: 'Aurora',
        },
        'Vida de desenvolvedor':{
            quantidadedePaginas: 111,
            autor: 'Mardone Alves',
            editora: 'Unicove',
        },
    }
    if(!livro){
        return prateleira; 
    }
    return prateleira[livro];
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
console.log('O livro Banco de dados tem '+book('Banco de dados').quantidadedePaginas+ ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Banco de dados é '+book('Banco de dados').autor+ '!');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Banco de dados foi publicado pela editora '+book('Banco de dados').editora+ '!');
