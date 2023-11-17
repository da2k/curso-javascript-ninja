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
  console.log( 'Propriedades de "person":' );
  var person = {
    name: 'Aduilio',
    lastname: 'Melo',
    age: 21
  }
  console.log(person);
  
  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  Object.keys(person);
  
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
  // ?
  console.log( '\nLista de livros:' );
  
  books.push({
    name: 'O dia do amanha',
    pages: 300
  })
  
  books.push({
    name: 'Pragramaçao',
    pages: 510
  })
  
  books.push({
    name: 'Familia',
    pages: 1060
  })
  
  /*
  Mostre no console todos os livros.
  */
  console.log(books);
  
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log( '\nLivro que está sendo removido:' );
  
  console.log(books.pop());
  
  /*
  Mostre no console os livros restantes.
  */
  // ?
  console.log( '\nAgora sobraram somente os livros:' );
  
  console.log(books);
  
  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log( '\nLivros em formato string:' );
  
  books = JSON.stringify(books);
  
  /*
  Mostre os livros nesse formato no console:
  */
  console.log( books );
  
  /*
  Converta os livros novamente para objeto.
  */
  books = JSON.parse(books);
  
  console.log( '\nAgora os livros são objetos novamente:' );
  
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
  */
  for(var i = 0; i < books.length; i++) {
      for(var prop in books[i] ){
          console.log(prop + ': ' + books[i][prop] + '' );
      }
  }
  
  /* 
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['A','d','u','i','l','i','o'];
  
  console.log( '\nMeu nome é:' );
  
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''));
  
  
  
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse().join( '' ));

  console.log( '\nMeu nome invertido é:' );
  
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
  
  console.log( '\nAgora em ordem alfabética:' );
  
})()
