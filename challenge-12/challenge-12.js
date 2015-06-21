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
    name: 'Thiago',
    lastname: 'Nogueira',
    age: 34
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
  books = [ { name: 'Senhor dos Anéis', pages: 500 }, { name: 'Harry Potter', pages: 300 }, { name: 'Os homens que não amavam as mulheres', pages: 400 } ];
  console.log( '\nLista de livros:' );

  /*
  Mostre no console todos os livros.
  */
  for(i = 0; i < books.length; i++) {
    console.log(books[i].name);
  }

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop());

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  for(i = 0; i < books.length; i++) {
    console.log(books[i].name);
  }

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  JSON.stringify(books);
  console.log( '\nLivros em formato string:' );

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(JSON.stringify(books));
  /*
  Converta os livros novamente para objeto.
  */
  
  console.log( '\nAgora os livros são objetos novamente:' );
  console.log(books);
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for(i = 0; i < books.length; i++) {
    console.log(JSON.stringify(books[i]));
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['t','h','i','a','g','o'];
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''));

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