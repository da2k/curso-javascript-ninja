(function () {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
let person = {name: 'Felipe', lastname: 'Medeiros', age: 31}


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log('Propriedades de "person":', Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
let books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
let book1 = {name: 'book1 title', pages: 1};
let book2 = {name: 'book2 title', pages: 2}
let book3 = {name: 'book3 title', pages: 3}
books.push(book1, book2, book3);


/*
Mostre no console todos os livros.
*/
console.log('\nLista de livros:', books);


/*
Remova o último livro, e mostre-o no console.
*/
console.log('\nLivro que está sendo removido:', books.pop());
// ?

/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:', books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
var booksStr = JSON.stringify(books)

/*
Mostre os livros nesse formato no console:
*/
console.log('\nLivros em formato string:', booksStr);

/*
Converta os livros novamente para objeto.
*/
booksStr = JSON.parse(booksStr)
console.log('\nAgora os livros são objetos novamente:', booksStr);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
var x = 0;
for (prop in books) {
  console.log(x)
  console.log(books[x].name)
  x++;
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
const myName = ['F', 'E', 'L', 'I', 'P', 'E']


/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome é:', myName.join(''));


/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:', myName.reverse().join('') );

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:', myName.sort().join('') );
})();
