/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const receiveArr = [1, "string", null, true, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArr(arr = []) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArr(receiveArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnArrIndex(array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const myArray = ["string", false, 1, {}, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnArrIndex(myArray, 0));
console.log(returnArrIndex(myArray, 1));
console.log(returnArrIndex(myArray, 2));
console.log(returnArrIndex(myArray, 3));
console.log(returnArrIndex(myArray, 4));

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
function book(name) {

    const livro1Obj = {
        nome: 'A Guerra dos Tronos',
        quantidadePaginas: 562,
        autor: 'George R.R. Martin',
        editora: 'Leya',
    }

    const livro2Obj = {
        nome: 'O Festim dos Corvos',
        quantidadePaginas: 762,
        autor: 'George R.R. Martin',
        editora: 'Leya',
    }

    const livro3Obj = {
        nome: 'A Dança dos Dragões',
        quantidadePaginas: 872,
        autor: 'George R.R. Martin',
        editora: 'Leya',
    }

    const bookObj = {
        livro1Obj,
        livro2Obj,
        livro3Obj
    }
    
    if(name) {
         if(bookObj.livro1Obj.nome == name) {
             return bookObj.livro1Obj
         }

         if(bookObj.livro2Obj.nome === name) {
            return bookObj.livro2Obj
        }

        if(bookObj.livro3Obj.nome === name) {
            return bookObj.livro3Obj
        }
    }
    return bookObj;
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
console.log(`O Livro ${book('A Guerra dos Tronos').nome} tem ${book('A Guerra dos Tronos').quantidadePaginas} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${book('A Guerra dos Tronos').nome} é ${book('A Guerra dos Tronos').autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${book('A Guerra dos Tronos').nome} foi publicado pela editora ${book('A Guerra dos Tronos').editora}`);
