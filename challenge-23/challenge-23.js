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
(function(window, document){
	'use strict';

	var $visor = document.querySelector('[data-js="visor"]');
	var $numeros = document.querySelectorAll('[data-js="numero"]');
	var $operacoes = document.querySelectorAll('[data-js="operacao"]');
	var $ce = document.querySelector('[data-js="ce"]');
	var $igual = document.querySelector('[data-js="igual"]');
	
	$ce.addEventListener('click', function(){
		return ce();
	}, false);

    $igual.addEventListener('click', function(){
		return igual();
	}, false);

	Array.prototype.forEach.call( $numeros, function( numero ){
		numero.addEventListener('click', digitar, false);
	});
	Array.prototype.forEach.call( $operacoes, function( numero ){
		numero.addEventListener('click', digitarOp, false);
	});

	function digitar(){
		$visor.value += this.value; 
	}

	function digitarOp(){
		var ultimo = $visor.value.split('').pop();
        var operadores = ['+', '-', '/', 'x'];
		var result = operadores.some( function( item ){
			if ( item == ultimo ){
                return item;
            }            
		});
		if ( result ){
            $visor.value = $visor.value.slice(0,-1);
        }
        return $visor.value += this.value;
	}

    function igual() {
        var valores = $visor.value.match(/(?:\d+)|[x\-*\/\+]/g);
        while( valores.length != 1 ){
            valores.forEach( function( item, index, array ) {
                var result;
                if ( item == 'x' ){
                    result = multiplica( array[index-1], array[index+1] );
                    valores.splice( index-1, 3 );
                    valores.splice( index-1, 0, result );
                }                
                if ( item == '/' ){
                    result = divide( array[index-1], array[index+1] );
                    valores.splice( index-1, 3 );
                    valores.splice( index-1, 0, result );
                }                
            });
            valores.forEach( function( item, index, array ) {
                var result;
                if ( item == '+' ){
                    result = soma( array[index-1], array[index+1] );
                    valores.splice( index-1, 3 );
                    valores.splice( index-1, 0, result );
                }                
                if ( item == '-' ){
                    result = subtrai( array[index-1], array[index+1] );
                    valores.splice( index-1, 3 );
                    valores.splice( index-1, 0, result );
                }                
            });
        }
        valores.join('');
        return $visor.value = valores;
    }

	function ce(){
		return $visor.value = 0;
	}

    function soma(x,y) {
        x = +x;
        y = +y;
        return x+y;
    }

    function multiplica(x,y) {
        x = +x;
        y = +y;
        return x*y;
    }

    function divide(x,y) {
        x = +x;
        y = +y;
        return x/y;
    }

    function subtrai(x,y) {
        x = +x;
        y = +y;
        return x-y;
    }

})(window, document);
