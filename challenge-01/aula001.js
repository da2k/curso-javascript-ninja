// Variaveis sao nomes simbolicos que damos a um tipo de valor
// Palavra chave: var (nao utilizada mais)

// Tipos de dados
// number: numeros, seja eles inteiros ou reais
// string: sequencia de caracteres, dentro de aspas
// boolean: true ou false
// null: nenhum valor
// undefined: ausencia de valor
// object: representacao literal > {} (propriedades, metodos)

var pessoa = {
    altura: 1.87,
    peso: 90
};

pessoa.altura; //fornece o dado apontado

pessoa.altura = 1.90; //altera o dado apontado

// array: lista de valores

var numeros = []; //array vazio

numeros = [1, 2, 3, 4]

// Array é acessado por indice

numeros[0]; //acessa primeiro valor, sempre comecando por 0, apontando para o primeiro valor, neste caso numero 1

// Operadores
// soma: soma os valores (+)
// subtracao: subrai os valores (-)
// multiplicacao: multiplica os valores (*)
// divisao: dividi os valores (/)

// Operados abreviados
// ++: soma mais um ao resultado

var soma= 10 + 10;
soma = soma + 1;
soma++; //pós incremento, 

// --: decremento, mesma ideia do ++, mas subtrai

--soma; //pré decremento, ele subtrai 1 e depois mostra o valor novo da soma

soma += 20; //soma = soma + 20

// Operadores de igualdade
// == igual a (teste se valores sao iguais, resultado retornado sempre sera true ou false)
// != diferente de (teste se valores sao diferentes)

// === (valores iguais e mesmo tipo (number === number))
// !== (valores diferentes e tipos diferentes (number !== string))

// Operadores relacionais
// > maior que
// < menor que
// >= maior ou igual a
// <= igual a

// funcoes: blocos de codigos Javascript nomeados, e que podem ser invocados usando o operador ()
function nome() {
    //conteudo da funcao
}

nome(); //invocar a funcao

var x = 1; 

function soma() {
    x = x + 1
}

soma(); //x + 1
soma(); // soma mais uma vez, funcao pode ser reaproveitada e invocada quando necessario

// Funcoes criam escopo

function qualquer() {
    var fernando = 'fernando';
}

// A variavel fernando esta com escopo local, nao conseguimos acessar de fora da funcao

// Funcoes podem retornar valores

function qualquer() {
    var fernando = 'fernando';
    return fernando;
}

qualquer(); //retorna o valor da variavel fernando

// Funcao pode receber parametros (argumentos)

function soma(x, y) {
    return x + y;
};

soma(1, 2); //retorno o valor 3