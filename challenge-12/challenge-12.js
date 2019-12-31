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
    var person ={
        name: 'Thiago',
        lastName: 'dos Reis',
        age: 33
    }
    console.log( 'Propriedades de "person": ');

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
        books.push({name: 'Aprendendo Js', pages: 300});

        books.push({name: 'Js Na prática', pages: 1345});

        books.push({name: 'Js e o mundo hoje', pages: 121});


    console.log( '\nLista de livros:');
    /*
    Mostre no console todos os livros.
    */
    console.log(books);
    
    
    console.log( '\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    var livroRemovido = books.pop();
    console.log(livroRemovido);
    

    console.log( '\nAgora sobraram somente os livros: ');
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    console.log( '\nLivros em formato string:');
    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var stringLivros = JSON.stringify(books);

    
    /*
    Mostre os livros nesse formato no console:
    */
    console.log( stringLivros);
    

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(stringLivros);
    console.log( '\nAgora os livros são objetos novamente: ');
    console.log(books);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    
    console.log();
    
    for (var i = 0; i < books.length; i++) { // Percorrendo os elementos do array --> total
                                            //  elementos com length.
       for (var prop in books[i]) {
           console.log(prop+ ': ' + books[i][prop] ); // Percorrendo as propriedade do array
           
       }
       
   }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['T', 'h', 'i', 'a', 'g', 'o', 'd', 'o', 's', 'R', 'e', 'i', 's', 'd', 'e', 'M', 'o', 'u', 'r', 'a'];
    console.log( '\nMeu nome é:' );
    console.log(myName.length);
    
    
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join('').substring(0,6) + ' ' + myName.join('').substring(6,9) + ' ' + myName.join('').substring(9,13)
    + ' ' + myName.join('').substring(13,15) + ' ' + myName.join('').substring(15,20));
    /* console.log(myName.join('').substring(6,9)); */
    /* console.log(myName.join('').substring(9,13)); */
    /* console.log(myName.join('').substring(13,15)); */
    /* console.log(myName.join('').substring(15,20)); */

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse().join('').substring(0,5) + ' ' + myName.join('').substring(5,7) + ' ' + myName.join('').substring(7,11)
    + ' ' + myName.join('').substring(11,14) + ' ' + myName.join('').substring(14,20));
    /* console.log(myName.reverse().join('')); */
    

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort().join(''));
    
})();