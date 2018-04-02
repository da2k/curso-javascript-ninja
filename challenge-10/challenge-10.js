(function (){/*
		Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
		e faça a indentação correta.
		*/

		/*
		Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
		deles seja "true", usando os Wrapper Objects como "conversores" nos valores
		das variáveis. Analise o que está sendo impresso no console para saber como
		resolver o problema corretamente.
		*/
		var five =  Number('5');
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
		var operation = ['+','-','*','/','%'];
		operation['+'] = function sum(a,b){return a+b;};
		operation['-'] = function subtraction(a,b){return a-b;};
		operation['*'] = function multiplication(a,b){return a*b;};
		operation['/'] = function division(a,b){return a/b;};
		operation['%'] = function mod(a,b){return a%b;};
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
		function isOperatorValid(operador){
			return !!(operador===operation[0] || operador===operation[1] || operador===operation[2] || operador===operation[3] || operador===operation[4]);
		}

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
		function calculator(operador){
			var validador =  isOperatorValid;
			if(validador(operador) === false){
				return false;
			}
			return function func(number1,number2){
				if(typeof number1 !== 'number' || typeof number2 !== 'number'){
					return false; 
				} 
				return operation[operador](number1,number2);
			}
		}

		/*
		Crie uma função chamada "showOperationMessage" qualquer recebe três parâmetros:
		- o operador, o primeiro número e o segundo número. O retorno da função
		deve ser a frase:
		'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
		Essa função mostrará a mensagem da operação que criaremos mais abaixo.
		*/
		function showOperationMessage(number1,operator,number2){
			return 'A operação '+number1+' '+operator+' '+number2+' = ';
		}

		/*
		Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
		operador da operação cálculo, quando a operação não for válida.
		Essa função deverá retornar a frase:
		'Operação "[OPERATOR]" não permitida!'
		*/
		function showErrorMessage(operator){
			return 'Operação '+operator+' não permitida!';
		}

		/*
		Nossa calculadora está pronta! Agora vamos testá-la:
		PASSO 1:
		- Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
		"operationSignal", sem valor por enquanto.
		*/
		var number1 = 0;
		var number2 = 0;
		var operationSignal;

		/*
		PASSO 2:
		Atribua à variável operationSignal o operador de soma, e declare uma
		variável chamada "sum", que receba a função "calculator", passando por
		parâmetro a variável que recebeu o sinal da operação.
		*/
		var operationSignal = '+'
		var sum = calculator(operationSignal);

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
		number1 = 5;
		number2 = 15;
		console.log(showOperationMessage(number1,operationSignal,number2), sum !== false ? sum(number1,number2): showErrorMessage(operationSignal))
		

		/*
		Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
		divisão e resto. Crie variáveis com os nomes "subtraction",
		"multiplication", "division" e "mod".
		*/
		var operationSignal = '-';
		var subtraction = calculator(operationSignal);
		console.log(showOperationMessage(number1,operationSignal,number2), subtraction !== false ? subtraction(number1,number2): showErrorMessage(operationSignal))
		var operationSignal = '*';
		var multiplication = calculator('*');
		console.log(showOperationMessage(number1,operationSignal,number2), multiplication !== false ? multiplication(number1,number2): showErrorMessage(operationSignal))
		var operationSignal = '/';
		var division = calculator('/');
		console.log(showOperationMessage(number1,operationSignal,number2), division !== false ? division(number1,number2): showErrorMessage(operationSignal))
		var operationSignal = '%';
		var mod = calculator('%')
		console.log(showOperationMessage(number1,operationSignal,number2), mod !== false ? mod(number1,number2): showErrorMessage(operationSignal))

		/*
		Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
		a mensagem de erro será mostrada no console.
		*/
		var operationSignal = 'oi';
		var sum = calculator(operationSignal)
		console.log(showOperationMessage(number1,operationSignal,number2), sum !== false ? sum(number1,number2): showErrorMessage(operationSignal))

});

// -------------------------CÓDIGO MONTADO----------------//

(function (){
		var five =  Number('5');
		console.log( five + ' é número?', typeof five === 'number' );

		var concat = String(10) + String(10);
		console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

		var operation = ['+','-','*','/','%'];
		operation['+'] = function sum(a,b){return a+b;};
		operation['-'] = function subtraction(a,b){return a-b;};
		operation['*'] = function multiplication(a,b){return a*b;};
		operation['/'] = function division(a,b){return a/b;};
		operation['%'] = function mod(a,b){return a%b;};

		function isOperatorValid(operador){
			return !!(operador===operation[0] || operador===operation[1] || operador===operation[2] || operador===operation[3] || operador===operation[4]);
		}
		function calculator(operador){
			var validador = isOperatorValid;
			if(validador(operador) === false){
				return false;
			}
			return function func(number1,number2){
				if(typeof number1 !== 'number' || typeof  number2 !== 'number'){
					return false; 
				} 
				return operation[operador](number1,number2);
			}
		}

		function showOperationMessage(number1,operator,number2){
			return 'A operação '+number1+' '+operator+' '+number2+' = ';
		}

		function showErrorMessage(operator){
			return 'Operação '+operator+' não permitida!';
		}
		var number1 = 0;
		var number2 = 0;
		var operationSignal;

		var operationSignal = '+';
		var sum = calculator(operationSignal);
		number1 = 5;
		number2 = 15;
		console.log(showOperationMessage(number1,operationSignal,number2), sum !== false ? sum(number1,number2): showErrorMessage(operationSignal))
		var operationSignal = '-';
		var subtraction = calculator(operationSignal);
		console.log(showOperationMessage(number1,operationSignal,number2), subtraction !== false ? subtraction(number1,number2): showErrorMessage(operationSignal))
		var operationSignal = '*';
		var multiplication = calculator('*');
		console.log(showOperationMessage(number1,operationSignal,number2), multiplication !== false ? multiplication(number1,number2): showErrorMessage(operationSignal))
		var operationSignal = '/';
		var division = calculator('/');
		console.log(showOperationMessage(number1,operationSignal,number2), division !== false ? division(number1,number2): showErrorMessage(operationSignal))
		var operationSignal = '%';
		var mod = calculator('%')
		console.log(showOperationMessage(number1,operationSignal,number2), mod !== false ? mod(number1,number2): showErrorMessage(operationSignal))
		var operationSignal = 'oi';
		var sum = calculator(operationSignal)
		console.log(showOperationMessage(number1,operationSignal,number2), sum !== false ? sum(number1,number2): showErrorMessage(operationSignal))
})();
