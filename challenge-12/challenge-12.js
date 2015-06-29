(function () {
/*
Envolva todo o contéudo desse arquivo em uma IIFE.
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
	name: 'Mateus',
	lastname: 'Jabour',
	age: 18
};

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

console.log( 'Propriedades de "person":', Object.keys(person));

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
books.push({ 'name':'A falta de criatividade 1', 'pages': 10 });
books.push({ 'name':'A falta de criatividade 2', 'pages': 11 });
books.push({ 'name':'A falta de criatividade 3', 'pages': 12 });

/*
Mostre no console todos os livros.
*/

console.log( '\nLista de livros:', books);
/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLivro que está sendo removido:', books.pop());


/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:', books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?

var objStr = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/

console.log( '\nLivros em formato string:', objStr);

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:', JSON.parse(objStr));

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(i = 0 ; i <= 1 ; i++){
	for (var prop in books[i]){
		console.log(prop + ': ', books[i][prop]);
	}
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['m', 'a', 't', 'e', 'u', 's', ' ', 'j', 'a', 'b', 'o', 'u', 'r'];

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myName.reverse();
console.log( '\nMeu nome invertido é:', myName.join(''));


/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:', myName.sort());
})();