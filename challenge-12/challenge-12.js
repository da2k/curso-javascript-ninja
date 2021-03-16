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
// ?
let person = {
    name: 'Gilmara',
    lastname: 'Pimentel',
    age: 43
}

console.log('Propriedades de "person":');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?

let personProps = Object.keys(person)
console.log(personProps)
/*
Crie um array vazio chamado `books`.
*/
// ?
let books = [];
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?

books.push({name: 'Clean Code', pages: 155 }, {name: 'Javascript Ninja', pages: 299},{ name: 'React Native', pages: 204})

console.log( '\nLista de livros:');

/*
Mostre no console todos os livros.
*/
// ?
console.log(books);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?

let bookRemovedLastPosition = books.pop();

console.log(bookRemovedLastPosition);


console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?
console.log(books);
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
// ?

books  = JSON.stringify(books);
console.log(books);  // Isso deixa objeto em 1 unica linha - string


/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

books = JSON.parse(books); //  aqui volta a ficar array, mostra em mais de uma linha

console.log(books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

for(i=0; i< books.length; i++){

    for(let prop in books[i]){

        console.log(prop + ':' + books[i][prop] )
    }

}

//Outra maneira de fazer
// for( let book of books){

//    for(let prop in book){
//        console.log(prop + ': ' + book[prop])
//    }
  
// }


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?

let myName = ['G', 'i', 'l','m', 'a', 'r', 'a'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?
console.log(myName.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log(myName.reverse().join(''));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?

console.log(myName.sort()); // Ordenanando em ordem alfabetica - Letras maiusculas vem primeiro na Tabela ASC

})();