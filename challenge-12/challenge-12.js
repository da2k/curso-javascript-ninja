(function (){
    /*Envolva todo o conteúdo desse arquivo em uma IIFE.

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: 'Raphael',
        lastname: 'Silvestre',
        age: 28
    }

    for(var prop in person) {
        console.log(`A propriedade ${prop} contem o valor ${person[prop]}`)
    }

    console.log( 'Propriedades de "person":' + Object.keys(person) );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

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

    books.push({name:'Javascript Moderno', pages: 234})
    books.push({name:'Node.js Completo', pages: 543})
    books.push({name:'Jquery Iniciante', pages:453})
    
    console.log( '\nLista de livros:');

    console.log(books)

    /*
    Mostre no console todos os livros.
    */

    console.log( '\nLivro que está sendo removido:' + books.pop().name );

    /*
    Remova o último livro, e mostre-o no console.
    */

    console.log( '\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    console.log(books)

    /*
    Converta os objetos que ficaram em `books` para strings.
    */

    var listaLivros = JSON.stringify(books)

    /*
    Mostre os livros nesse formato no console:
    */

    console.log( '\nLivros em formato string:' + listaLivros  );


    /*
    Converta os livros novamente para objeto.
    */
    var listaParaObjeto = JSON.parse(listaLivros)
    console.log( '\nAgora os livros são objetos novamente:' );
    console.log(listaParaObjeto)

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */

    for(i = 0; i < books.length; i++) {
        for(var prop in books[i]) {
            console.log( `${prop} : ${books[i][prop]}`)
        }
    }

    /*Object keys tranforma book em array length a quantidade de itens no array
    O segundo loop for enquanto percorre o array book que é composto de objetos
    Chamado pelo seu indice que no caso é i mostra no console a propriedade e o valor da prop
    */

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */

    var myName = [ 'R' , 'a' , 'p', 'h', 'a', 'e', 'l']
    console.log( '\nMeu nome é:' + myName.join('') );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    
    console.log( '\nMeu nome invertido é:' + myName.reverse().join('') );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log( '\nAgora em ordem alfabética:' + myName.sort().join('') );
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

})()