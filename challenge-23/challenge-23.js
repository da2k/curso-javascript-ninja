(function(win,doc){

	'user strict';

/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
var $visor = doc.querySelector('[data-js="visor"]');
var $button = doc.querySelectorAll('[data-js="button-number"]');
var $buttonCe = doc.querySelector('[data-js="button-ce"]');
var $buttonIgual = doc.querySelector('[data-js="button-igual"]');
var $buttonOp = doc.querySelectorAll('[data-js="button-operacao"]');


// <<----- transforma linha button em array ---->>>
Array.prototype.forEach.call($button, function(button){
	button.addEventListener('click',aparaceVisor,false);
} );
Array.prototype.forEach.call($buttonOp,function(button){
	button.addEventListener('click',operacoes,false)
});
$buttonCe.addEventListener('click',limpar,false);
$buttonIgual.addEventListener('click',resultado,false);

function aparaceVisor(){
	($visor.value === "0") ? $visor.value = this.value : $visor.value += this.value;
};

function limpar(){
	$visor.value = 0;
};

function operacoes() {
	removeOperacao()
	$visor.value += this.value;
}

function isUltimoOp(){
	var operacoes = ['+', '-', '*', '/'];
	var lastItem = $visor.value.split('').pop();
	return operacoes.some(function(operacoes){
		return operacoes === lastItem;
	});
}

function removeOperacao(){
	if(isUltimoOp())
		$visor.value = $visor.value.slice(0,-1);	
}

function calculos(){
	removeOperacao();
	var allNumeros = $visor.value.split(/\D/);
	var allOperadores = $visor.value.match(/[+/*\-]/g);
	var i = 0 ;
	var resultado = allNumeros.reduce( function( acumulados,atual ){
			var valorAcumulado = acumulados
			var valorAtual = atual;
			while( i < allOperadores.length){
				switch(allOperadores[i]){
					case '+': 
						i++ 
						return +valorAcumulado + +valorAtual;
					break;
					case '-': 
						i++ 
						return +valorAcumulado - +valorAtual;
					break;
					case '*': 
						i++ 
						return +valorAcumulado * +valorAtual;
					break;
					case '/': 
						i++ 
						return +valorAcumulado / +valorAtual;
					break;
				};
				
			};
			 
	});
	return resultado;
}


function resultado(){
	
	console.log( calculos( ) );
	$visor.value = calculos( );
}


















})(window,document);