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
   name: 'Marcel' , 
   lastname: 'Zanatta' ,
   age: 34   
 }
console.log( 'Propriedades de "person":', person );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( 'Propriedades de "person":', Object.keys(person) );

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

books.push({ name: ' Bíblia' , pages: '570' });
books.push({ name: ' Profetas e Reis' , pages: '800' });
books.push({ name: ' Fé e Obras' , pages: '45' });       
         
console.log( '\nLista de livros:', books);

/*
Mostre no console todos os livros.
*/
  
for(var i =0 ; i< books.length; i++) {
  console.log( 'Lista de livros:' , books[i]);
}


/*
Remova o último livro, e mostre-o no console.
*/
var saveBook = books.pop()		
console.log( '\nLivro que está sendo removido:', saveBook);

/*
Mostre no console os livros restantes.
*/
for(var i =0 ; i< books.length; i++) {
  console.log( 'Agora sobraram somente os livros:' , books[i]);
}

/*
Converta os objetos que ficaram em `books` para strings.
*/

  books = JSON.stringify(books)
  console.log( books);


/*
Mostre os livros nesse formato no console:
*/
  
  console.log( books);
  
/*
Converta os livros novamente para objeto.
*/

  books = JSON.parse(books)

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

  for(i =0 ; i< books.length; i++) {
    for( var prop in books ){
      console.log( prop + ':' + books[i][prop] );
    }
}
  

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
var myName = []

myName[0]='m'
myName[1]='a'
myName[2]='r'
myName[3]='c'
myName[4]='e'
myName[5]='l'

 

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''))

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myName.reverse();
console.log( '\nMeu nome invertido é:', myName.join(''));

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myName.sort();
console.log( '\nAgora em ordem alfabética:', myName );
})();
