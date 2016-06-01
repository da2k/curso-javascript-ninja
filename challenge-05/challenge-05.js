/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var lista = ['Nome',true,3,{valor:0},5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeLista(args){
    return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeLista(lista)[1]); // true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function listagem(lstArray, num){
    return lstArray[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray = [1,20,12,14,33];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(listagem(meuArray,0)); //1
console.log(listagem(meuArray,1)); //20
console.log(listagem(meuArray,2)); //12
console.log(listagem(meuArray,3)); //14
console.log(listagem(meuArray,4)); //33
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
function book(param){
    var obj = {
        'Livro 1': {
            quantidadePaginas: 200,
            autor: 'Teste da Silva',
            editora: 'Nuvem'    
        },
        'Livro 2': {
            quantidadePaginas: 100,
            autor: 'Teste de Souza',
            editora: 'Nuvem'    
        },
        'Livro 3': {
            quantidadePaginas: 300,
            autor: 'Vários',
            editora: 'Edit'    
        }
        
    };
    return obj;
}
// Daqui em diante não consegui realizar o exercício rs

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?