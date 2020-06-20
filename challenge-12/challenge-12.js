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
  var person = {
    name: 'Matheus',
    lastname: 'Almeida',
    age: 21
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
  books.push({name: 'Fahrenheit 451', pages: 256});
  books.push({name: 'Dubliners', pages: 201});
  books.push({name: 'O Pequeno Príncipe', pages: 96});
  
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
  books = JSON.stringify(books);
  
  console.log( '\nLivros em formato string:' );
  
  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books);
  
  /*
  Converta os livros novamente para objeto.
  */
  var books = JSON.parse(books);
  
  console.log( '\nAgora os livros são objetos novamente:', );
  console.log(books);
  
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for(var index of books) {
    for(var prop in index) {
      console.log(`${prop}: ${index[prop]}`);
    }
  }
  
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['M', 'a', 't', 'h', 'e', 'u', 's', ' ', 'A', 'l', 'm', 'e', 'i', 'd', 'a'];
  console.log( '\nMeu nome é:' );
  
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''));
  
  console.log( '\nMeu nome invertido é:' );
  
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse());
  
  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
})();