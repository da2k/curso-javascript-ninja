/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['BY', 5, true, {nome: 'BRUNO'}, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(param){
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getArrayInPosition(arr, pos){
  return arr[pos];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [undefined, null, true , false, 'Ola'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getArrayInPosition(myArray2, 0));
console.log(getArrayInPosition(myArray2, 1));
console.log(getArrayInPosition(myArray2, 2));
console.log(getArrayInPosition(myArray2, 3));
console.log(getArrayInPosition(myArray2,5));

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
function book(nomeLivro){
  var obj = {java : {quantidadePaginas : 15, autor : 'Bruno', editora: "O'Reil"}, php :  {quantidadePaginas : 35, autor : 'Luiz', editora: "O'Reil"}, sapatos : {quantidadePaginas : 15, autor : 'Orlando Jacinto', editora: "O'Reil"}};

  if (nomeLivro === undefined){
    return obj;
  }else{
    return obj[nomeLivro];
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
console.log("O livro "+'java' +" tem "+ book('java').quantidadePaginas +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro sapatos é "+ book('sapatos').autor +".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro php foi publicado pela editora "+ book('php').editora +".");
