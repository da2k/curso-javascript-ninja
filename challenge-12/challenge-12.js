(function(){/*
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
var person = {name:'Iglan', lastname:'Cardeal', age:25};


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( 'Propriedades de "person": '+JSON.stringify(person));

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
var livro1 = {name:'The Lord of the Rings', pages: 600};
var livro2 = {name:'The Jedi Path', pages:268};
var livro3 = {name:'JavaSript and JQuery', pages: 760};
books.push(livro1, livro2, livro3);
var lista = [];
for(var i = 0; i < books.length; i++ ){
	var str = JSON.stringify(books[i].name);
	lista.push(str);
}
/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:\n'+lista.join('\n') );

/*
Remova o último livro, e mostre-o no console.
*/
var last = lista.pop();
console.log( 'Livro que está sendo removido:\n'+last);

/*
Mostre no console os livros restantes.
*/
console.log( 'Agora sobraram somente os livros:\n'+lista.join('\n') );

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
var stringify = JSON.stringify(books); 

/*
Mostre os livros nesse formato no console:
*/
console.log( '\nLivros em formato string:\n'+stringify);

/*
Converta os livros novamente para objeto.
*/
var stringify = JSON.parse(stringify);
console.log( '\nAgora os livros são objetos novamente:\n'+stringify);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i = 0; i < books.length; i++){
	console.log(books[i].name+' : '+books[i].pages)
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['I','G','L','A','N']

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome é:\n'+myName.join());

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:\n'+myName.reverse());
// ?

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:'+myName.sort());
})();

//CÓDIGO LIMPO//
(function(){
    var person = {name:'Iglan', lastname:'Cardeal', age:25};
    console.log( 'Propriedades de "person": '+JSON.stringify(person));

    var books = [];
    var livro1 = {name:'The Lord of the Rings', pages: 600};
    var livro2 = {name:'The Jedi Path', pages:268};
    var livro3 = {name:'JavaSript and JQuery', pages: 760};
    books.push(livro1, livro2, livro3);
    var lista = [];
    for(var i = 0; i < books.length; i++ ){
        var str = JSON.stringify(books[i].name);
        lista.push(str);
    }
    console.log( '\nLista de livros:\n'+lista.join('\n') );
    var last = lista.pop();
    console.log( 'Livro que está sendo removido:\n'+last);
    console.log( 'Agora sobraram somente os livros:\n'+lista.join('\n') );
    var stringify = JSON.stringify(books); 
    console.log( '\nLivros em formato string:\n'+stringify);
    var stringify = JSON.parse(stringify);
    console.log( '\nAgora os livros são objetos novamente:\n'+stringify);
    for(var i = 0; i < books.length; i++){
      console.log(books[i].name+' : '+books[i].pages)
    }

    var myName = ['I','G','L','A','N']
    console.log( '\nMeu nome é:\n'+myName.join());
    console.log( '\nMeu nome invertido é:\n'+myName.reverse());
    console.log( '\nAgora em ordem alfabética:'+myName.sort());
})();
