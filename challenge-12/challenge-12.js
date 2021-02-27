/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function () {
    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {name: 'Marcos', lastname: 'Inocencio', age:24}

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    console.log( 'Propriedades de "person":', Object.keys(person));
    
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

    books.push({name:'A sociedade do anel', pages:500});
    books.push({name:'As duas torres', pages:700});
    books.push({name:'O retorno do rei', pages:900});

    /*
    Mostre no console todos os livros.
    */
    
    var bookList = [];
    for(prop in books)
    {
        bookList.push(books[prop].name);
    }

    console.log( 'Lista de livros: \n' + bookList.join("\n"));
    
    /*
    Remova o último livro, e mostre-o no console.
    */

    console.log( '\nLivro que está sendo removido: ' + bookList.pop() );
    
    /*
    Mostre no console os livros restantes.
    */
    // ?
    console.log( '\nAgora sobraram somente os livros: ' + bookList.join(", ") );
    
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
    
    books = JSON.parse(books);

    console.log( '\nAgora os livros são objetos novamente:' );
    
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    
    for (let i = 0; i < books.length; i++) {
        for (const prop in books[i]) {
           console.log(`${prop} : ${books[i][prop]}`);
        }
    }
    
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    
    let myName = ['M','A','R','C','O','S'];

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

    
    
