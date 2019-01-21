// No javascript, quando nao e passado nenhum valor para uma variavel, ela e undefined, para uma variavel receber o valor null, temos que indicar o estado

var myvar;
console.log(myvar);

var myvar = null;
console.log(myvar);

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function myFunction ( a, b, c ) {
    if ( a !== undefined && b === undefined && c === undefined ) {
        return a;
    } else if ( a !== undefined && b !== undefined && c === undefined ) {
        return a + b;
    } else if ( a !== undefined && b !== undefined && c !== undefined ) {
        return ( a + b ) / c;
    } else if ( a === undefined && b === undefined && c === undefined ) {
        return false;
    }
    return null;
};

console.log( myFunction( 1 ) );

console.log( myFunction( 2, 3 ) );

console.log( myFunction( 3, 5, 3 ) );

console.log( myFunction( ) );

// Tipos de dados
// tipos primitivos e objetos
// objeto: conjunto de propriedades

// criar um objeto

var objeto = { propriedade: 'valor', propriedade2: 10, propriedade3: true };
console.log( objeto );

// acessando valor de um objeto
console.log( objeto.propriedade );

var pessoa = {
    nome: 'Fernando',
    idade: 30,
    peso: 85,
    altura: 1.85
}

console.log( pessoa );
console.log( pessoa.nome );
console.log( pessoa.idade );
console.log( pessoa.peso );
console.log( pessoa.altura );

// objeto recebendo objeto, function sao objetos de primeira classe

var myvar = function() {
    return 'variavel myvar'   
}

console.log( myvar( ) );

// se um objeto recebe uma funcao como propriedade, chamamos de metodo
// adicionar uma propriedade para um objeto ja declarado

pessoa.sexo = 'masculino';

console.log( pessoa );
console.log( pessoa.sexo );

// adicionando um metodo a um objeto

pessoa.andar = function() {
    return 'Andando';
};

console.log( pessoa );
console.log( pessoa.andar( ) );

pessoa.aniversario = function( ) {
    pessoa.idade++
};

pessoa.aniversario( );
console.log( pessoa.idade );
pessoa.aniversario( );
console.log( pessoa.idade );
pessoa.aniversario( );
console.log( pessoa.idade );

pessoa.sobrenome = 'Daciuk';

pessoa.nomeCompleto = function () {
    return pessoa.nome + ' ' + pessoa.sobrenome;
};

console.log( pessoa.nomeCompleto() );