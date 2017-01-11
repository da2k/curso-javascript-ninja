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
var person = {
    'name' : String,
    'lastname': String,
    'age': Number
}


console.log( 'Propriedades de "person":', person);

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
console.log(Object.keys(person));
/*
Crie um array vazio chamado `books`.
*/
// ?
var books = [];
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
    books.push({
    name:  'JavaScript Eloquente',
    pages: 220
    });
    books.push({
    name:  'ImpactJS',
    pages: 320
    });
    books.push({
    name: 'KiwiJS',
    pages: 320
    });

/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:', books);

/*
Remova o último livro, e mostre-o no console.
*/
var lastRemove = books.pop()
console.log( '\nLivro que está sendo removido:', lastRemove);


/*
Mostre no console os livros restantes.
*/
// ?
console.log( '\nAgora sobraram somente os livros:' books);
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
var transformToString = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
console.log( '\nLivros em formato string:', transformToString);

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
console.log(books);

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
var myname = [];

myname.push('K', 'A', 'L', 'Y', 'A', 'N', 'E', ' ','M', 'E', 'N','E', 'Z', 'E', 'S', ' ','L', 'O', 'R', 'D', 'A', 'O');

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myname.join(''));

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// 
console.log( '\nMeu nome invertido é:', myname.reverse().join(' '));

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:', myname.sort());
}();
