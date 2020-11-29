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
    name: 'Emmanuel',
    lastname: 'Tavares',
    age: 43,
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
var books =[];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push(
    { name: "harry porter", pages: 210},
    { name: "Captães de areia", pages: 310},
    { name: "Romeo and Juliet", pages: 110},
    );
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(books)

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var removedBook = books.pop();
console.log(removedBook);

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
var str = JSON.stringify(books);

console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(str);

/*
Converta os livros novamente para objeto.
*/
str = JSON.parse(str);
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for( var prop in str){
    console.log(str[prop]);
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['E','m','m','a','n','u','e','l']
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

console.log( '\nMeu nome invertido é:' );
nameRev = myName.reverse();
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/

console.log(nameRev.join(''));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
sortedName = myName.sort();
console.log(sortedName.join(''));



}());