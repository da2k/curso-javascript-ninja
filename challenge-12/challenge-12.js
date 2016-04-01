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
    var person = {
        name: 'Maximiler',
        lastname: 'Arouca',
        age: 27
    }
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( Object.keys(person) );

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
    books[0] = {
        name: 'MEAN - Full stack JavaScript para aplicações web com MongoDB, Express, Angular e Node',
        pages: 377
    }
    books[1] = {
        name:'Introdução e boas práticas em UX Design',
        pages: 271
    }
    books[2] = {
        name: 'Dominando JavaScript com jQuery',
        pages:200
    }
    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */

    console.log(books);

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    var last = books.pop();

    console.log(last);

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */

    console.log( '\nLivros em formato string:' );

    var livros = JSON.stringify(books);

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(livros);

    /*
    Converta os livros novamente para objeto.
    */
    var livros = JSON.parse(livros);
    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    console.log(livros);

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['M', 'a', 'x', 'i', 'm', 'i', 'l', 'e', 'r']
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log( myName.join('') );

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log( myName.reverse('').join( '' ) );

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
   console.log( myName.sort('').join( '' ) );


})();
