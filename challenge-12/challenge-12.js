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
        name: 'Deni',
        lastName: 'Junior',
        age: 21
    };
    console.log( 'Propriedades de "person":');
    
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( Object.keys(person).join(', ') );
    
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
    books.push({name: 'Inferno', pages: 232})
    books.push({name: 'Clube da Luta', pages: 152})
    books.push({name: 'O Monge e o Executivo', pages: 120})
    console.log( '\nLista de livros:' );
    
    /*
    Mostre no console todos os livros.
    */
    books.forEach(function(value){
        console.log(JSON.stringify(value));
    });
    
    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(JSON.stringify(books.pop()));
    
    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    books.forEach(function(value){
        console.log(JSON.stringify(value));
    });
    
    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    books.forEach(function(value, index, array){
        array[index] = JSON.stringify(value);
    });
    console.log( '\nLivros em formato string:' );
    
    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books.join(', '));
    
    /*
    Converta os livros novamente para objeto.
    */
    books.forEach(function(value, index, array){
        array[index] = JSON.parse(value);
    });
    console.log( '\nAgora os livros são objetos novamente:' );
    
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
    */
    books.forEach(function(value, index){
        console.log('# Livro '+(index+1));
        for (var prop in value){
            console.log(prop+': '+value[prop]);
        }
    });
    
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['D','e','n','i',' ','D','i','a','s',' ','d','a',' ','S','i','l','v','a',' ','J','u','n','i','o','r'];
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
    console.log(myName.sort().join(''));
    
})();