/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['pedro', 25, null, 3.5, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arg){
    return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcaoEmC( array, indice ){
    return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetor = [null, 23, 2.345, 'string', undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcaoEmC(vetor,0); // null
funcaoEmC(vetor,1); // 23
funcaoEmC(vetor,2); // 2.345
funcaoEmC(vetor,3); // 'string'
funcaoEmC(vetor,4); // undefined

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
function book(name){
    var books = {
        jason: { quantidadePaginas: 300, autor: 'pedro', editora: 'hebert'},
        donald: { quantidadePaginas: 250, autor: 'lucas', editora: 'fenad'},
        crazy: { quantidadePaginas: 400, autor: 'jesus', editora: 'deus'}
    }

    if(name === undefined){
        return books;
    }else if(name === 'jason'){
        return books.jason;
    }else if(name === 'donald'){
        return books.donald;
    }else if(name === 'crazy'){
        return books.crazy;
    }

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro jason tem' +  book('jason').quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( "O autor do livro donald é " + book('donald').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro crazy foi publicado pela editora " + book('crazy').editora + ".");
