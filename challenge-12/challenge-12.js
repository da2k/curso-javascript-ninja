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
person = {
    name:  'Gabriel',
    lastname: 'Bahniuk',
    age: 22
};

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

console.log( 'Propriedades de "person":' + Object.keys(person) );

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
    {
        name: 'Livro1',
        pages: 25
    },
    {
        name: 'Livro2',
        pages: 50
    },
    {
        name: 'Livro3',
        pages: 75
    }
);

/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:' ,  books);

/*
Remova o último livro, e mostre-o no console.
*/
console.log('Livro removido => ' , books.pop());

/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:' , books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
books = JSON.stringify(books);


/*
Mostre os livros nesse formato no console:
*/
console.log( '\nLivros em formato string:', books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);

console.log( '\nAgora os livros são objetos novamente:', books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for(var i = 0; i < Object.keys(books).length; i++) {
    for(var propriedade in books[i]) {
        console.log(propriedade , ' : ', books[i][propriedade]);
    }
    
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var arr = [];
arr.push('G', 'A', 'B', 'R', 'I', 'E', 'L');
console.log( '\nMeu nome é:' , arr );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log('\nMeu nome junto é:' , arr.join(''));


/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:', arr.reverse().join(''));


/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:' + arr.sort().join(''));
})();