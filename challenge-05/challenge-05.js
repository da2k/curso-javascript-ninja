/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var firstArray = [1, 'isa', null, false, 'bela'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(firstArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndiceArray(array, x){
    return array[x];
}

console.log(retornaIndiceArray(firstArray, 4));


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var secondArray = ['Learn', 45, {isa: 'bela'}, true, [1,2,3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaIndiceArray(secondArray, 0));
console.log(retornaIndiceArray(secondArray, 1));
console.log(retornaIndiceArray(secondArray, 2));
console.log(retornaIndiceArray(secondArray, 3));
console.log(retornaIndiceArray(secondArray, 4));

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
function book(bookName){

    var books = {
                'A Revolução dos Bichos': {
                        quantidadePaginas: 200,
                        autor: 'George Orwell',
                        editora: 'Companhia das Letras'
                },

                'O Conto da Aia': {
                        quantidadePaginas: 382,
                        autor: 'Margaret Atwood',
                        editora: 'McClelland & Stewart'
                },

                'O Diário de Anne Frank': {
                        quantidadePaginas: 285,
                        autor: 'Anne Frank',
                        editora: 'Record'
                }
            };
            

    return !bookName ? books : books[bookName];
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
console.log('O livro O Conto da Aia tem ' + book('O Conto da Aia').quantidadePaginas + ' páginas.');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('A autora do livro O Conto da Aia é ' + book('O Conto da Aia').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro O Conto da Aia foi publicado pela editora ' + book('O Conto da Aia').editora + '.');
