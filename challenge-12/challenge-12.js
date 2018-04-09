/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

(function(p) {

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    
    var person = {
    
        name: 'leo',
    
        lastname: 'bufalo',
    
        age: 21
    
    };
    
    console.log( 'Propriedades de "person":', person );
    
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    for( var array in person )
    
        console.log( array )
    

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
    
    // books.push()

    books.push( harry = {name: 'pedra filosofal', pages: 300 })
    books.push( pirata = {name: 'maldição do perola negra', pages: 250 })
    books.push( senhor = {name: 'sociedade do anel', pages: 350})
    

    console.log( 'Lista de livros:', books );
    
    /*
    Mostre no console todos os livros.
    */

    console.log( 'Livro que está sendo removido:', books.pop() );
        
    /*
    Remova o último livro, e mostre-o no console.
    */
    // ?
    
    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    
   console.log( 'Lista de livros:', books );
        
    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    
    console.log( '\nLivros em formato string:', JSON.stringify(books) );
    
    books = JSON.stringify(books);

    /*
    Mostre os livros nesse formato no console:
    */
    
    console.log( books );
    
    /*
    Converta os livros novamente para objeto.
    */

    console.log( 'Agora os livros são objetos novamente:', JSON.parse(books) );
    
    books = JSON.parse(books);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    
    for(c = 0 ; c < books.length ; c++){
        
        for( var p in books[c] ){

            console.log( 'Propriedade: ['+ p +'] valor: ['+ books[c][p] +']'  )

        }
    
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    
    var myName = ['l','e','o','n','a','r','d','o'] 

    
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    
    console.log( '\nMeu nome é:', myName.join('') );
    
    
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    
    myName.reverse()

    console.log( '\nMeu nome invertido é:', myName.join('') );
   
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

   console.log( '\nAgora em ordem alfabética:', myName.sort().join('') );    

})();
