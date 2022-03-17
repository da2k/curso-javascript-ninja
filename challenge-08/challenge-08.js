/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum  = function calculateSum(parametro1,parametro2){
           return parametro1 + parametro2 ;
};
 
/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var sum = function calculateSum(parametro1,parametro2) {
  var soma = parametro1 + parametro2; 
 return `A soma de ${parametro1} e ${parametro2} é igual a ${soma}.`

};
console.log(sum(1,2)); 

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}.`); 

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){
  return showName.name
};

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = function showName(){
  return showName.name 
};

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
function  mostarNome() {
  return mostarNome.name 
}; 
undefined
mostarNome(); 
'mostarNome'

var varMostrarNome = mostarNome() ; 

varMostrarNome ; 
'mostarNome'

console.log(`A função ${mostarNome.name} retorna ${varMostrarNome}.`); 
' A função mostarNome retorna mostarNome.'

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/

function calculator(qualOperação){
             return function(parametro01,parametro02){
            qualOperação === '+' ? somaDosParametros = parametro01 + parametro02 : ''; 
            qualOperação === '-' ? somaDosParametros = parametro01 - parametro02 : ''; 
            qualOperação === '*' ? somaDosParametros = parametro01 * parametro02 : '';
            qualOperação === '%' ? somaDosParametros = parametro01 % parametro02 : '';
            if(qualOperação === '+' && '-' && '%' && '*'){return 'Operador inválida'}; 
            return `resultado da operação: ${parametro01} ${qualOperação} ${parametro02} = ${somaDosParametros} ` 
           }
       };

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/


var sum = function calculator(qualOperação){
             return function(parametro01,parametro02){
            qualOperação === '+' ? somaDosParametros = parametro01 + parametro02 : ''; 
            qualOperação === '-' ? somaDosParametros = parametro01 - parametro02 : ''; 
            qualOperação === '*' ? somaDosParametros = parametro01 * parametro02 : '';
            qualOperação === '%' ? somaDosParametros = parametro01 % parametro02 : '';
            if(qualOperação === '+' && '-' && '%' && '*'){return 'Operador inválida'}; 
            return `resultado da operação: ${parametro01} ${qualOperação} ${parametro02} = ${somaDosParametros} ` 
           }
       };


/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum('+')(2,3))

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-')(2,3); 
var multiplication = calculator('*')(2,3);
var division = calculator('/')(2,3); 
var mod = calculator('%')(2,3); 

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(multiplication('*')(2,10));
console.log(division('/')(2,10));
console.log(subtraction('-')(2,10));
console.log(mod('%')(6,3));
