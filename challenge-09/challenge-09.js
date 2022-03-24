(function(){/*
Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
indentação correta do código, para ficar dentro da IIFE.
*/

/*
Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
ajuste o posicionamento das variáveis e funções internas, para que os códigos
dentro de `console.log` que estão retornando `undefined` retornem o valor
correto da variável ou função chamada.
*/
function myFunction() {                                    // (x)
    var number1 = 10 ; 
    var number2 = 20 ; 
    console.log( 'Na função `myFunction`, o primeiro número é', number1 );
    console.log( 'Na função `myFunction`, o segundo número é', number2 );
    return number1 + number2;
}
myFunction();

/*
    myFunction2();
*/
  function myFunction02(){
    var number01 = 10 ; 
    var number02 = 20 ; 
    var sum =   function sum(){
        return number01 + number02;      
     }; 
    console.log('a soma de 10 e 20 é igual a', sum ? sum() : undefined); 
        return sum(); 
 }

myFunction2();

/*
    myFunction3();
*/
  function myFunction03(){
    function sum(){                 
        return number1 + number2 ; 
     }
        var number2 = 50 ; 
        var number1 = 40 ;  
        console.log('a soma de 40 e 50 é igual a', sum() ); 
        console.log('na function myfucntion03, number é igual a', number1);
        return sum() ;  
 }
myFunction3();

/*
No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
- Crie uma função `calculator` que recebe dois valores (números)
por parâmetro.
- Essa função deve retornar uma outra função, que recebe um parâmetro
chamado `callback`.
- Esse `callback` será uma função, que passaremos por parâmetro ao invocar
o retorno de `calculator`.
- O retorno dessa segunda função deve ser a função de `callback` passada
por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
que foram passadas para a primeira função `calculator`.
*/
function calculator(valor01,valor02){
    return function(callback){
       return callback(valor01,valor02); 
    } 
 }

/*
Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
passando dois números por parâmetro.
*/
var sum = calculator(1,2);


/*
Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
`calculator`. E essa função espera um parâmetro `callback`. O `callback`
tem dois parãmetros disponíveis, que são os números que você acabou de passar
para a chamada à `calculator` acima.
- Mostre no console o retorno da invocação de `sum`, passando por parâmetro
uma função anônima que irá retornar a soma dos dois números que essa função
anônima tem como seus argumentos.
*/
console.log( 'O resultado da soma é:' );
  
function calculator(valor01,valor02){
    return function callback(valor01, valor02){
        return  valor01 +  valor02; 
    }
}
console.log( 'O resultado da soma é:' );
console.log(sum(function(valor01,valor02){
    return valor01 + valor02 ; 
})); 

/*
Agora declare outra variáveis chamadas `subtraction`, `multiplication`,
`division` e `mod`, e atribua à elas `calculator`, passando números
diferentes para cada chamada.
*/
var multiplication = sum(5,10); 
var division = sum(5,10); 
var subtraction = sum(5,10); 
var mod = sum(5,10 ); 


/*
Mostre as variáveis acima no `console` (uma chamada de console por variável),
criando a função de `callback` que faz o cálculo para subração, multiplicação,
divisão e módulo (resto de divisão), conforme a função utilizada.
As suas respostas devem estar abaixo dos `console.log` referentes à cada
chamada.
*/
console.log( 'O resultado da subtração é:' );
console.log( 'O resultado da subtração é:' );
var subtraction = calculator(5,10); 
console.log(subtraction(function(valor01,valor02){
    return valor01 - valor02 ; 
})); 


console.log( 'O resultado da multiplicação é:' );
  console.log( 'O resultado da multiplicação é:' );
console.log(multiplication(function(valor01,valor02){
  return valor01 * valor02 }  )); 

console.log( 'O resultado da divisão é:' );
  console.log( 'O resultado da divisão é:' );
console.log(multiplication(function(valor01, valor02){
    return valor01 / valor02 ; 
}));

console.log( 'O resto da divisão é:' );
console.log( 'O resto da divisão é:' )
 console.log(mod(function(valor01,valor02){return valor01 % valor02 })); 
}());
