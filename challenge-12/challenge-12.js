(function() {
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
    name: 'Camila',
    lastname: 'Araldi',
    age: 22
}
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

books.push(livroUm = {name: 'Quem é você, Alasca?', pages: 296});
books.push(livroDois = {name: 'A guerra dos tronos', pages: 590});
books.push(livroTres = {name: 'O Hobbit', pages: 300});

/*
Mostre no console todos os livros.
*/

console.log(books);

/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLivro que está sendo removido:' );
books.pop();

/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:' );
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
console.log( '\nLivros em formato string:' );
var livros = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
console.log(livros);

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
JSON.parse(livros);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (var i = 0; i <= books.length; i++) {
    for (var props in books[i]) {
        console.log(props + ': ' + books[i][props]);
    }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['C', 'A', 'M', 'I', 'L', 'A', 'A', 'R', 'A', 'L', 'D', 'I'];
console.log( '\nMeu nome é:', myName.join(' '));
/*
Juntando todos os itens do array, mostre no console seu nome.
*/
myName.join(' ');

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:' );
console.log(myName.reverse().join(' '));

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:' );
console.log(myName.sort().join(' '));
}());