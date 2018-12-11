
(function (){

	/*
	Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
	e faça a indentação correta.
	*/
		/*ok*/
	/*
	Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
	deles seja "true", usando os Wrapper Objects como "conversores" nos valores
	das variáveis. Analise o que está sendo impresso no console para saber como
	resolver o problema corretamente.
	*/
	var five = Number('5');
	console.log( five + ' é número?', typeof five === 'number' );

	var concat = String(10) + String(10);
	console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

	/*
	Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
	funcional, mas dessa vez, separando algumas responsabilidades.
	- Primeiro, crie um objeto chamado `operation` que terá as propriedades:
	'+', '-', '*', '/' e '%'.
	- Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
	função receberá dois parâmetros e retornará a operação referente à sua
	propriedade, usando os valores passados por parâmetro.
	*/
	var operation = {
		'+': function( num1, num2 ){
			return num1 + num2;
		},
		'-': function( num1, num2 ){
			return num1 - num2;
		},
		'*': function( num1, num2 ){
			return num1 * num2;
		},
		'/': function( num1, num2 ){
			return num1 / num2;
		},
		'%': function( num1, num2 ){
			return num1 % num2;
		}
	}

	/*
	Crie uma função chamada `isOperatorValid`, que receberá um operador por
	parâmetro.
	- Essa função será responsável por verificar se o operador passado por
	parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
	'%'.
	- Se for igual a qualquer um desses, ela deverá retornar "true".
	Caso contrário, "false".
	- O desafio é fazer o retorno sem usar "if" ou "switch".
	*/
	function isOperatorValid (op){		
		return !!operation[op]; 
	}
	console.log(isOperatorValid('/'));
	
	/*
	Agora vamos criar a calculadora.
	- Crie uma função chamada `calculator`, que receberá como parâmetro um
	operador;
	- Se o operador não for válido, a função deve retornar "false";
	- Se o operador for válido, retornar uma segunda função que receberá dois
	parâmetros;
	- Se algum dos parâmetros não for um número, retornar "false";
	- Senão, retornar o método do objeto "operation" criado acima, baseado no
	operador passado para a função "calculator", e passando para esse método
	os dois parâmetros da função de retorno de "calculator".
	*/
		
	function calculator(op) {
        if (isOperatorValid(op)) {
            return function(num1, num2) {
                if ( typeof num1 !== 'number' || typeof num2 !== 'number' ) {
                    return false;
                }
                return operation[op](num1, num2);
            }
        }
        return false;
    }
		
	/*
	Crie uma função chamada "showOperationMessage" que recebe três parâmetros:
	- o operador, o primeiro número e o segundo número. O retorno da função
	deve ser a frase:
	'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
	Essa função mostrará a mensagem da operação que criaremos mais abaixo.
	*/
	function showOperationMessage (op, num1, num2) {
			return 'A operação'+' '+ num1+' ' + op +' '+ num2 +' = ';
	}

	/*
	Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
	operador da operação, quando a operação não for válida.
	Essa função deverá retornar a frase:
	'Operação "[OPERATOR]" não permitida!'
	*/
	function showErrorMessage (op){		
			return 'Operação "'+ ' '+op+' '+' " não permitida!';
	}

	/*
	Nossa calculadora está pronta! Agora vamos testá-la:
	PASSO 1:
	- Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
	"operationSignal", sem valor por enquanto.
	*/
	var num1 = 0;
	var num2 = 0;
	var operationSignal;

	/*
	PASSO 2:
	Atribua à variável operationSignal o operador de soma, e declare uma
	variável chamada "sum", que receba a função "calculator", passando por
	parâmetro a variável que recebeu o sinal da operação.
	*/
	operationSignal ='+';
	var sum = calculator (operationSignal);

	/*
	PASSO 3:
	"sum" agora é uma função, e, se o sinal correto não foi passado para a
	função "calculator", "sum" será false. Certifique-se de que "sum" não é
	"false", e então atribua às variáveis "number1" e "number2", dois números
	que serão os operandos da operação de soma.
	Após isso, mostre no console o resultado da operação, passando dois
	parâmetros para o método "log" de "console":
	- O primeiro será a mensagem da operação (usando a função criada acima);
	- O segundo, a função de soma, passando os dois operandos.
	- Se "sum" for "false", mostrar no console a mensagem de erro.
	*/
	
	if (sum) {
		num1 = 10;
		num2 = 20;	
		console.log( showOperationMessage (operationSignal, num1 ,num2), sum (num1,num2));
	}
	else {
		console.log(showErrorMessage (operationSignal)) ;
	}		
	
	
	
	/*
	Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
	divisão e resto. Crie variáveis com os nomes "subtraction",
	"multiplication", "division" e "mod".
	*/
	operationSignal ='-';
	var subtraction = calculator (operationSignal);
	if (subtraction) {
		num1 = 20;
		num2 = 10;	
		console.log( showOperationMessage (operationSignal, num1 ,num2), subtraction (num1,num2));
	}else {
		console.log(showErrorMessage (operationSignal)) ;
	}	
	/*================================================================*/
	operationSignal ='*';
	var multiplication = calculator (operationSignal);
	if (multiplication) {
		num1 = 20;
		num2 = 10;	
		console.log( showOperationMessage (operationSignal, num1 ,num2), multiplication (num1,num2));
	}else {
		console.log(showErrorMessage (operationSignal)) ;
	}	
	/*================================================================*/
	operationSignal ='/';
	var division = calculator (operationSignal);
	if (division) {
		num1 = 22;
		num2 = 2;	
		console.log( showOperationMessage (operationSignal, num1 ,num2), division (num1,num2));
	}else {
		console.log(showErrorMessage (operationSignal)) ;
	}	
	/*================================================================*/
	operationSignal ='/';
	var mod = calculator (operationSignal);
	if (mod) {
		num1 = 27;
		num2 = 5;	
		console.log( showOperationMessage (operationSignal, num1 ,num2), mod (num1,num2));
	}else {
		console.log(showErrorMessage (operationSignal)) ;
	}	
	/*
	Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
	a mensagem de erro será mostrada no console.
	*/
	operationSignal ='&';
	var erro = calculator (operationSignal);
	if (erro) {
		num1 = 27;
		num2 = 5;	
		console.log( showOperationMessage (operationSignal, num1 ,num2), mod (num1,num2));
	}else {
		console.log(showErrorMessage (operationSignal)) ;
	}	

})()