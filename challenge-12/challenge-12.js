(function(){/*
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
'name':'Pedro',
'lastname':'Victor',
'age': 18
}
console.log( 'Propriedades de "person":',person );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
Object.keys(person);

/*
Crie um array vazio chamado `books`.
*/
var book = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
book.push({'name': 'Riqueza das Nações','page':250},
{'name': 'Gerencia de Projetos','page':120},
{'name': 'Percy Jackson','page':500
});
console.log( '\nLista de livros:');

/*
Mostre no console todos os livros.
*/
console.log(book);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log(book.pop());


console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(book);

/*
Converta os objetos que ficaram em `books` para strings.
*/
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(JSON.stringify(book));

/*
Converta os livros novamente para objeto.
*/
console.log(JSON.parse(book));
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i = 0; i<=2;i++){
     console.log(book[i].name +' : '+ book[i].page);
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
myname = ['P','E','D','R','O'];
console.log( '\nMeu nome é:');

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myname.join(''));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myname.reverse();

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myname.sort();
})();
