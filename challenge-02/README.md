// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y) {
...
... return x + y;
... }
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(40, 5)  + 5 

// Qual o valor atualizado dessa variável?
50

// Declare uma nova variável, sem valor.
var valorQualquer;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/ function resultado() { 
... var frase = "O valor de valorQualquer=";
... valorQualquer = 30;
... return frase + valorQualquer 
}


// Invoque a função criada acima.
 resultado()

// Qual o retorno da função? (Use comentários de bloco).

/*'O valor de valorQualquer=30'*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.

/* Eu havia feito da forma abaixo - Em vez de undefined verifiquei se o valor era vazio*/
/* 1 SOLUCAO */
 function multiplica(x, y, z) {
...     if(!x || !y ||!z) {
.....   return 'Preencha todos os valores corretamente!'
..... }
...
...     return x * y * z + 2
...
... }


/* 2 SOLUCAO */
function newFunction(a, b, c){

    if(a=== undefined || b === undefined || c === undefined){
        return 'Preencha todos os valores corretamente!'
    }else {

        return (a  * b * c ) + 2;
    }
}

/*Agora sei que devo usar undefined*/

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(2,2) + 2 

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/*Preencha todos os valores corretamente!'*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(2,2,2) + 2 

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*10*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function parametrosVazios(l, g , h ) {

	if(l !== undefined && g===undefined && h===undefined) {
    return l 
    } else if (l !== undefined && g !==undefined && h === undefined) {

    return l + g ;

}    else if(l !== undefined && g !==undefined && h !== undefined)   {
    return (l + g)/ h 

}   else if(l === undefined && g ===undefined && h === undefined) {

    return false
}   
     else {

      return null;   

}
} 


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

parametrosVazios()  //false
parametrosVazios(50) //50
paramentros(50, 50 ) // 100
parametrosVazios(50, 50, 2) // 50 
parametrosVazios(50, 50, 2, 80) // 50 
parametrosVazios(50, 50, 2, 80, 40, 7 ) // Somente os 3 Primeiros parametros sao considerados, o resto é ignorado.