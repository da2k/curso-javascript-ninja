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
    //
    let person ={
        name: 'Alexandre',
        lastname: 'Pinheiro',
        age: 34,
    }

    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    //
    console.log(Object.keys(person));
    /*
    Crie um array vazio chamado `books`.
    */
    //
    let books = [];
    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    //
    let book1 = {
        name:'Moby Dick',
        pages: 300
    }

    books.push(book1);

    let book2 = {
        name:'Os Luzíadas',
        pages: 400
    }

    books.push(book2);

    let book3 = {
        name:'Dom Quixote',
        pages: 300
    }

    books.push(book3);

    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    //
    console.log(books)
    
    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    //
    let removedBook = books.pop();
    console.log(removedBook.name);

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    //
    console.log(books)

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // 
    console.log( '\nLivros em formato string:' );
    let stringBooks = JSON.stringify(books);
    
    /*
    Mostre os livros nesse formato no console:
    */
    // 
    console.log(stringBooks);
    /*
    Converta os livros novamente para objeto.
    */
    //
    console.log( '\nAgora os livros são objetos novamente:' );
    let objectBooks = JSON.parse(stringBooks);
    console.log(objectBooks);
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    //
    let i = 0;
    for(value in books){
        for(prop in books[i]){
            console.log(`${prop}: ${books[i][prop]}`)
        }
        i++;
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    //
    console.log( '\nMeu nome é:' );
    
    let myName = [];
    let myFullName = person.name+' '+person.lastname;
    for(let i=0;i<myFullName.length;i++){
        myName.push(myFullName[i]);
    }

    
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    // 
    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é:' );
    
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // 
    console.log(myName.reverse().join(''));

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    //
    console.log(myName.sort());

})()
