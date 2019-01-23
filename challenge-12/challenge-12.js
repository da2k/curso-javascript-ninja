/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function(){

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: 'leonardo',
        lastname: 'melo',
        age: 42
    }
    console.log( 'Propriedades de "person":' );
    
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    // ?
    console.log(Object.keys(person))
    
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
    var bookOne = {
        name: 'Churrasco',
        pages: 100
    }
    var bookTwo = {
        name: 'Bebida',
        pages: 50
    }
    var bookThree = {
        name: 'Futebol',
        pages: 150
    }

    books.push(bookOne)
    books.push(bookTwo)
    books.push(bookThree)

    console.log( '\nLista de livros:' );
    
    /*
    Mostre no console todos os livros.
    */
    console.log(books)
    
    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop())
    
    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books)
    
    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var bookOneString = JSON.stringify(books[0])
    var bookTwoString = JSON.stringify(books[1])
    
    console.log( '\nLivros em formato string:' );
    
    /*
    Mostre os livros nesse formato no console:
    */
    console.log(bookOneString)
    console.log(bookTwoString)
    
    /*
    Converta os livros novamente para objeto.
    */
    var bookOne = JSON.parse(bookOneString)
    var bookTwo = JSON.parse(bookTwoString)
    console.log( '\nAgora os livros são objetos novamente:' );
    
    console.log(bookOne)
    console.log(bookTwo)
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for( let book of books ) {
        for (let props in book) {
            console.log(props + ':' + book[props])
        }
    } 
    
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = person.name.split('')
    console.log( '\nMeu nome é:', myName );
    
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log( '\nMeu nome é:', myName.join('') );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
   // ?
    console.log( '\nMeu nome invertido é:', myName.reverse().join('') );
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log( '\nAgora em ordem alfabética:', myName.sort());
})()
