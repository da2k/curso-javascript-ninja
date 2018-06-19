/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [3, 5, 7, 8, 9]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArry (arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArry(myVar)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myOtherArray(x, y){
    return x[y];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayTipos = [1, null, true, "top", false]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(
    myOtherArray(arrayTipos, 0), 
    myOtherArray(arrayTipos, 1),
    myOtherArray(arrayTipos, 2),
    myOtherArray(arrayTipos, 3),
    myOtherArray(arrayTipos, 4));

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
    var obj = {
        book1: {
            quantidadePaginas: 10,
            autor: "Autor 1",
            editora: "Edita 1"
        },
        book2: {
            quantidadePaginas: 20,
            autor: "Autor 2",
            editora: "Edita 2"
        },
        book3:{
            quantidadePaginas: 30,
            autor: "Autor 3",
            editora: "Edita 3"
        }
    }
    if (nome === "book1"){
        return obj.book1;
    } else if (nome === "book2"){
        return obj.book2;
    } else if (nome === "book3"){
        return obj.book3;
    } else {
        return obj
    }
    
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
console.log("O livro 2 tem "+book("book2").quantidadePaginas+" páginas")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro book3 é o "+book("book3").autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("A editora do book1 é  a "+book("book1").editora);
