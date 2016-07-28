(function(window, document){
	'use strict';

/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

	var $visor = document.querySelector('[data-js="visor"]');
	var $numeros = document.querySelectorAll('[data-js="numero"]');
	var $operacoes = document.querySelectorAll('[data-js="operacao"]');
	var $ce = document.querySelector('[data-js="ce"]');
	var $igual = document.querySelector('[data-js="igual"]');

    function initialize() {
        eventos();
    }

    function eventos() {
        $ce.addEventListener('click', limpaVisor, false);

        $igual.addEventListener('click', calculaResultado, false);

        Array.prototype.forEach.call( $numeros, function( numero ){
            numero.addEventListener('click', digitarNumero, false);
        });
        Array.prototype.forEach.call( $operacoes, function( numero ){
            numero.addEventListener('click', digitarOperacao, false);
        });
    }
	
	function digitarNumero(){
		$visor.value += this.value; 
	}

    function ultimoCaractere( numero ){
        var ultimo = $visor.value.split('').pop();
        var operadores = recebeOperadores();
		return operadores.some( function( item ){
			if ( item == ultimo )
                return item;            
		});
    }

    function recebeOperadores() {
        return Array.prototype.map.call($operacoes, function (button) {
           return button.value; 
        });
    }

	function digitarOperacao(){
		if ( ultimoCaractere( $visor.value ) ){
            $visor.value = $visor.value.slice(0,-1);
        }
        return $visor.value += this.value;
	}

    function calculaResultado() {
        var valores = $visor.value.match(/(?:\d+)|[x\-*\/\+]/g);
        while( valores.length != 1 ){
            valores.forEach( calculaMultiplicaDivide );
            valores.forEach( calculaSomaSubtrai );
        }
        valores.join('');
        return $visor.value = valores;
    }

    function calculaMultiplicaDivide( item, index, array ) {
        var result;
        if ( item == 'x' ){
            result = multiplica( array[index-1], array[index+1] );
            array.splice( index-1, 3 );
            array.splice( index-1, 0, result );
        }                
        if ( item == '/' ){
            result = divide( array[index-1], array[index+1] );
            array.splice( index-1, 3 );
            array.splice( index-1, 0, result );
        }                
    }

    function calculaSomaSubtrai( item, index, array ) {
        var result;
        if ( item == '+' ){
            result = soma( array[index-1], array[index+1] );
            array.splice( index-1, 3 );
            array.splice( index-1, 0, result );
        }                
        if ( item == '-' ){
            result = subtrai( array[index-1], array[index+1] );
            array.splice( index-1, 3 );
            array.splice( index-1, 0, result );
        }                
    }

	function limpaVisor(){
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

    initialize();

})(window, document);
