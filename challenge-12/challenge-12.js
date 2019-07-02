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
     name: 'Silveira',
     lastname: 'Martins',
     age: 42
 }

console.log( 'Propriedades de "person":');

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
    console.log( Object.keys(person))

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
 var livro1 = {name:'A era das revoluções', pages:135}
 var livro2 = {name:'1945 em cores', pages:327}
 var livro3 = {name:'Operação cavalo de Troia', pages: 527}
 
    books.push(livro1,livro2, livro3)

console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(books)

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/

let livroRemoved = books.pop()
console.log(livroRemoved)

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
 console.log(books)

/*
Converta os objetos que ficaram em `books` para strings.
*/

 livro1 = JSON.stringify(books[0])
 livro2 = JSON.stringify(books[1])

console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/

 console.log(livro1)
 console.log(livro2)

/*
Converta os livros novamente para objeto.
*/
livro1 = JSON.parse(livro1)
livro2 = JSON.parse(livro2)

console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for(let i=0;i<books.length;i++){
    for(let prop in books[i]){
        console.log('Propriedade '+prop+': '+books[i][prop])
    }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['P','E','D','R','O']

console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''))

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse().join(''))

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
 console.log(myName.sort())


})()