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
    var person = new Object;
    person.name = 'Neymar';
    person.lastname = 'Junior';
    person.age = 30;
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( Object.keys( person ) );

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
    for ( var counter = 1; counter<=3; counter++) {
        books.push( new Object() );
    }

    books[0].name = 'Elantris';
    books[0].pages = 560;
    books[1].name = 'Wonder';
    books[1].pages = 240;
    books[2].name = 'Seja um Programador Foda!';
    books[2].pages = 112;

    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    function showBooksNames() {
        var bookNames = '';

        if( books.length === 1 ) {
            return books.name[0];
        }

        for ( var counter = 1; counter<=books.length; counter++) {
            if ( counter === 1 ) { 
                bookNames += books[counter-1].name;
                continue;
            } 
            else if ( counter !== books.length ){
                bookNames +=  ', ' + books[counter-1].name;
            } 
            else {
                bookNames += ' e ' + books[counter-1].name + '.';
            }
        }
        return bookNames;
    }
    console.log( "Livros disponíveis: " + showBooksNames() ); 
    /*
     Criei uma função para mostrar os livros pois o exercício não especifica qual tipo do objeto devo mostrar no console.
     Dessa forma os livros sempre serão mostrados na formatação correta, mesmo caso haja apenas 1 ou mais.
    */

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log( books.pop().name );

    /*
    Mostre no console os livros restantes.
    */
    console.log( "\nLivros disponíveis: " + showBooksNames() );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var booksInAString = JSON.stringify( books[0] + books[1] );    

    /*
    Mostre os livros nesse formato no console:
    */
    console.log( "\n" + booksInAString );

    /*
    Converta os livros novamente para objeto.
    */
    var booksAsObjects = JSON.parse( booksInAString );

    console.log( '\nAgora os livros são objetos novamente:' );
    console.log( booksAsObjects );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for ( var counter = 1; counter <= books.length; counter++) {
        console.log( '\n', JSON.stringify( books[counter - 1] ) );
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['L','U', 'C', 'A', 'S'];
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log( myName.join('') );

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    myName.reverse();
    console.log( myName.join('') );

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    myName.sort();
    console.log( myName.join('') );
    
})();
