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
    name: 'Jessica',
    lastName: 'Lewinter',
    age: 23
  };

  console.log( 'Propriedades de "person":' );

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
   var book1 = {
    name: 'Apanhador no Campo de Centeio',
    pages: 224
   };
   var book2 = {
    name: '1984',
    pages: 268
   };
   var book3 = {
    name: 'Animal Farm',
    pages: 176
   };
  books.push(book1, book2, book3);
  console.log( '\nLista de livros:' );
  /*
  Mostre no console todos os livros.
  */
  console.log(books);

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop());

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
  var obj = JSON.parse(str);
  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for(var i = 0; i < books.length;i++ ){
    var booksName = books[i].name;
    var booksPages = books[i].pages;
    console.log(booksName + ": " + booksPages);
  }
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = [];
  myName.push('J','E','S','S','I','C','A');
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  var junto = myName.join('')
  console.log(junto);

  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse().join(''));

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
})();
