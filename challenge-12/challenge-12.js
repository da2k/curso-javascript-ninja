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
var person = {
    name: 'Herick',
    lastName: 'Cunha',
    age: 23
}
console.log( 'Propriedades de "person":' );

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

var livro1 = {
    name: 'O Hobbit',
    pages: 235
}

var livro2 = {
    name: 'A Cabana',
    pages: 125
}

var livro3 = {
    name: 'O carro',
    pages: 254
}

books.push(livro1);
books.push(livro2);
books.push(livro3);

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(books[]);

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
var booksString = JSON.stringify(books);

console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(JSON.stringify(booksString));

/*
Converta os livros novamente para objeto.
*/
JSON.parse(booksString);

console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for( var indice in books ) {
    for( var prop in books[indice] ) {
        console.log(prop + ': ' + books[indice][prop]);
    }
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = [ 'H', 'e', 'r', 'i', 'c', 'k' ];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join(''));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort());


}();)
