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
// ?
console.log( 'Propriedades de "person":', person );

var person = {nome: 'vitor lima',
              lastname:'silva',
              age: 21 }; 
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));  

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


book.push( {
    name: 'pequeno Principe ',  //  erlhor foma de adicionar algo no array */ 
    pages: 203
});

book.push({
    name: 'biblia',
    pages:  1053
});

book.push({
    name: ' 3 porquinhos ', 
    pages: 235
})

console.log( '\nLista de livros:');

/*
Mostre no console todos os livros.
*/
console.log(book); 

console.log( '\nLivro que está sendo removido:');
/*
Remova o último livro, e mostre-o no console.
*/
// ?

console.log(book.pop()); 

console.log( '\nAgora sobraram somente os livros:')
/*
Mostre no console os livros restantes.
*/
console.log(book); 
console.log('livros que restam !!', book );  

/*
Converta os objetos que ficaram em `books` para strings.
*/
book = JSON.stringify(book); 

console.log( '\nLivros em formato string:');

/*
Mostre os livros nesse formato no console:
*/

console.log(book); 

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

var book  = JSON.parse(book); 

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for(var i = 0; i < book.length ; i++ ){ // enquanto o (i) < quantidade de livros, ele vai rpetir isso */ 
   for( var prop in book[i]){
       console.log( prop + ':' + book[i][prop]); 
   }
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?

var myName = ['v','i' , 't' , 'o', 'r', ' ' , 'l', 'i' , 'm' , 'a'] ;

console.log( '\nMeu nome é:', myName);  /* feita */ 

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log(myName.join('')); 

console.log( '\nMeu nome invertido é:', myName.join(''));  /* feita */ 

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:', myName.reverse());  /* feita */ 
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?

console.log('forma alfabetica:', myName.sort()) ;    /* feita*/ 

}()); 
