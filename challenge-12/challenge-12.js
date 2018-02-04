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
var person = {
	name: 'Johnson',
  lastname: 'Lima',
  age: 31
}
console.log( 'Propriedades de "person":', person );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
var myArray = [];
myArray.push(person);
console.log(myArray);

/*
Crie um array vazio chamado `books`.
*/
var books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({
	name: 'JavaScript Ninja',
	pages: 300
},
{
	name: 'React',
	pages: 400
},
{
	name: 'GitHub',
	pages: 200
}
);
console.log( '\nLista de livros:', books );

/*
Mostre no console todos os livros.
*/
console.log( 'Lista de livros:', books[0] );
console.log( 'Lista de livros:', books[1] );
console.log( 'Lista de livros:', books[2] );

console.log( '\nLivro que está sendo removido:' );

/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLivro que está sendo removido:', books.pop() );

/*
Mostre no console os livros restantes.
*/
console.log( 'Agora sobraram somente os livros: ', books );

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
var stringBooks = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
console.log( '\nLivros em formato string: ', stringBooks );

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente: ', JSON.parse(stringBooks) );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
*/
console.log(books[0], books[1])

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['J', 'o', 'h', 'n', 's', 'o', 'n'];
console.log( '\nMeu nome é: ', myName );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome invertido é: ', myName.join(''));

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( 'Invertido fica: ', myName.reverse());

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética: ', myName.sort());
})();
