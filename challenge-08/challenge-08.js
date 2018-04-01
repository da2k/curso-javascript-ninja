/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(a, b){
	return a + b;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var sum = function calculateSum(a, b){
	return 'A soma de '+a+' e '+b+' é igual a '+(a+b)+' .';
}
//-----OU----//
var sum = function calculateSum(a, b){
	var A = a;
	var B = b;
	function AB(A, B){return A + B;};
	console.log('A soma de '+A+' e '+B+' é igual a '+AB(A, B));
}

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('O nome da função que faz a soma é '+sum.name+'.')

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){return 'Iglan Cardeal';};

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var showName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log('A função '+showName.name+' retorna '+showName());

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
function calculator(S){
	switch(S){
		case '+': return function soma(x, y){console.log('Resultado da operação: '+x+' + '+y+' = '+(x+y)+'.')};
		case '-': return function subtracao(x, y){console.log('Resultado da operação: '+x+' - '+y+' = '+(x-y)+'.')};
		case '*': return function multiplicacao(x, y){console.log('Resultado da operação: '+x+' * '+y+' = '+(x*y)+'.')};
		case '/': return function divisao(x, y){console.log('Resultado da operação: '+x+' / '+y+' = '+(x/y)+'.')};
		case '%': return function resto(x, y){console.log('Resultado da operação: '+x+' % '+y+' = '+(x%y)+'.')};
		default : console.log('Operação inválida!!!'); return function(x,y){};
	}
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(5,5));

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
subtraction = calculator('-');
multiplication = calculator('*');
division = calculator('/');
mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(sum(2,2));
console.log(subtraction(10,4));
console.log(multiplication(5,5));
console.log(division(9,3));
console.log(mod(7,4));
