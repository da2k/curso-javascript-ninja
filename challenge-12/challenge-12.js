(function(){

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
console.log( 'Propriedades de "person":' );
var person = {
  name: 'Renan',
  lastname: 'Oliveira',
  age: 30
};

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
console.log( '\nLista de livros:' );
books.push({
  name: 'Inferno',
  pages: 372
});

books.push({
  name: 'O simbolo perdido',
  pages: 450
});

books.push({
  name: 'A arte de fazer acontecer',
  pages: 350
});


/*
Mostre no console todos os livros.
*/
console.log(books);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
console.log( '\nLivros em formato string:' );
var convertBooks = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
console.log(convertBooks);

/*
Converta os livros novamente para objeto.
*/
console.log( '\nAgora os livros são objetos novamente:', JSON.parse(convertBooks) );
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (prop in books) {
  console.log(prop + ': ' + prop[prop])
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = [];

myName.push('R');
myName.push('e');
myName.push('n');
myName.push('a');
myName.push('n');
console.log( '\nMeu nome é:', myName );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join());

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:', myName.reverse() );

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:', myName.order() );
})();
