(function() {
    /*
    Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
    indentação correta do código, para ficar dentro da IIFE.
    */

    /*
    Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
    ajuste o posicionamento das variáveis e funções internas, para que os códigos
    dentro de `console.log` que estão retornando `undefined` retornem o valor
    correto da variável ou função chamada.
    */
    // ?

    /*
        myFunction2();
    */
    // ?

    /*
        myFunction3();
    */
    // ?

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
    // ?

    /*
    Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
    passando dois números por parâmetro.
    */
    // ?

    /*
    Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
    `calculator`. E essa função espera um parâmetro `callback`. O `callback`
    tem dois parãmetros disponíveis, que são os números que você acabou de passar
    para a chamada à `calculator` acima.
    - Mostre no console o retorno da invocação de `sum`, passando por parâmetro
    uma função anônima que irá retornar a soma dos dois números que essa função
    anônima tem como seus argumentos.
    */
    // ?

    /*
    Agora declare outra variáveis chamadas `subtraction`, `multiplication`,
    `division` e `mod`, e atribua à elas `calculator`, passando números
    diferentes para cada chamada.
    */
    // ?
    /*
    Mostre as variáveis acima no `console` (uma chamada de console por variável),
    criando a função de `callback` que faz o cálculo para subração, multiplicação,
    divisão e módulo (resto de divisão), conforme a função utilizada.
    As suas respostas devem estar abaixo dos `console.log` referentes à cada
    chamada.
    */
    console.log( 'O resultado da subtração é: ');
    // ?

    console.log( 'O resultado da multiplicação é: ');
    // ?

    console.log( 'O resultado da divisão é:');
    // ?

    console.log( 'O resto da divisão é: ');
    // ?

})();