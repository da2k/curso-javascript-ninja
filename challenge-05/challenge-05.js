/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1,4,8,5,9];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myArray(arr)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myArray2(arg, num){
... return arg[num];
... }


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['Airton', 
true, 
obj = {nome: 'jose', sobrebome: 'airton'},
[10,58,26],
5
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myArray2(arr2, 0));
console.log(myArray2(arr2, 1));
console.log(myArray2(arr2, 2));
console.log(myArray2(arr2, 3));
console.log(myArray2(arr2, 4));

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
function book(nome){
    var livros = {
        a_vida_do_Senhor: {
            quantPaginas: 160,
            autor: 'C.H. Mackintosh',
            editora: 'DLC'
        },
        estudos_Gênesis: {
            quantPaginas: 288,
            autor: 'C.H. Mackintosh',
            editora: 'DLC'
        },
        sobre_Apocalipse: {
            quantPaginas: 208,
            autor: 'William Kelly',
            editora: 'DLC'
        }
    }

    if(nome == 'a vida do Senhor'){
        return livros.a_vida_do_Senhor;
    }else if(nome == 'estudos genesis'){
        return livros.estudos_Gênesis;
    }else if(nome == 'sobre apocalipse'){
        return livros.sobre_Apocalipse;
    }
    else{
        return livros;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('a vida do Senhor'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'a vida do Senhor';
console.log('O livro ' + nomeLivro + ' tem ' +  book(nomeLivro).quantPaginas +  ' Páginas!!!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeLivro = 'a vida do Senhor';
console.log('O autor do livro ' + nomeLivro + ' é ' +  book(nomeLivro).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeLivro = 'a vida do Senhor';
console.log('A editora do livro ' + nomeLivro + ' é ' +  book(nomeLivro).editora);
