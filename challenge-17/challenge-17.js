(function(){
	'use strict';
	/*
	1. Envolva todo o conteúdo desse desafio em uma IIFE.
	2. Adicione a diretiva 'use strict';
	3. Crie um arquivo index.html e adicione esse script à ele.
	*/

	/*
	Em todos os exercícios desse desafio, nós vamos utilizar expressões
	regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
	variável chamada `text`:
	"Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
	*/
	var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

	/*
	Vamos começar com umas brincadeiras fáceis :D
	Troque o nome "Manuel Marques de Souza" pelo seu nome, e mostre o resultado
	no console:
	*/
	console.log( 'Adicionando seu nome no texto:' );
	console.log(text.replace(/(Manuel Marques de Sousa)/, 'Fabio Aguirre'));

	/*
	Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
	console.
	Ex: Se você for da São Paulo, substitua por "paulista".
	*/
	console.log( '\nTrocando naturalidade:' );
	console.log(text.replace(/(brasileiro)/, 'paulista'));

	/*
	Substitua todos os números por um traço `-`. Cada caractere de número deve
	ser um traço. Mostre o resultado no console:
	*/
	console.log( '\nTrocando números por -:' );
	console.log(text.replace(/\d/g, '-'));

	/*
	Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
	minúsculo por "0" (número zero). Mostre o resultado no console:
	*/
	console.log( '\nTrocando de "D" a "h" por "0":' );
	console.log(text.replace(/[D-Za-h]/g, '0'));

	/*
	Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
	Mostre o resultado no console:
	*/
	console.log( '\nTrocando "A" e "a" por "4":' );
	console.log(text.replace(/[Aa]/g, '4'));

	/*
	Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
	o método `toUpperCase()`. Mostre o resultado no console:
	*/
	console.log( '\n"O Centauro de Luvas" em caixa alta:' );
	console.log(text.replace(/(O Centauro de Luvas)/g, function(capturaTotal){
		return capturaTotal.toUpperCase();
	}));

	/*
	Agora iremos substituir as datas no formato "13 de junho de 1804" para
	"13/06/1804". A primeira coisa a fazer é criar uma função chamada
	`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
	retornar o número correspondente a esse mês.
	Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
	Números com menos de dois dígitos devem ter um zero na frente.
	Crie então a função e mostre no console os retornos para os meses de março,
	setembro e dezembro.
	Use um console.log para cada mês, usando a frase:
	"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
	*/
	console.log( '\nMeses representados por números:' );
	function getMonthNumber(monthName){
		switch(monthName) {
	        case 'janeiro':
	            var convertedMonth = '01';
	            break;
	        case 'fevereiro':
	            var convertedMonth = '02';
	            break;
	        case 'março':
	            var convertedMonth = '03';
	            break;
	        case 'abril':
	            var convertedMonth = '04';
	            break;
	        case 'maio':
	            var convertedMonth = '05';
	            break;
	        case 'junho':
	            var convertedMonth = '06';
	            break;
	        case 'julho':
	            var convertedMonth = '07';
	            break;
	        case 'agosto':
	            var convertedMonth = '08';
	            break;
	        case 'setembro':
	            var convertedMonth = '09';
	            break;
	        case 'outubro':
	            var convertedMonth = '10';
	            break;
	        case 'novembro':
	            var convertedMonth = '11';
	            break;
	        case 'dezembro':
	            var convertedMonth = '12';
	            break;
	        default:
	            return monthName+' não é um mês válido nesta função.';  
	                }
	        return convertedMonth;
	}
	var month1 = 'março';
	var month2 = 'setembro';
	var month3 = 'dezembro';
	console.log('O mês de '+month1+' é representado pelo número '+getMonthNumber(month1)+'.');
	console.log('O mês de '+month2+' é representado pelo número '+getMonthNumber(month2)+'.');
	console.log('O mês de '+month3+' é representado pelo número '+getMonthNumber(month3)+'.');

	/*
	Agora, declare uma variável chamada `regexDate` que irá receber a expressão
	regular que irá fazer o match com as datas. Crie grupos de captura para o
	dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
	meses que estão no texto, não precisa adicionar todos.
	Com o que vimos até agora, você consegue fazer :D
	Mostre a regex no console.
	*/
	console.log( '\nRegex que vai fazer o match com as datas do texto:' );
	var regexDate = /(\d\d de )(junho|julho)( de \d\d\d\d)/g;
	console.log(regexDate);

	/*
	Agora crie a função que irá fazer o replace dos dados. A função será chamada
	de `replaceDate`. Ela deve retornar a data no formato:
	"[DIA]/[MÊS]/[ANO]"
	Após criar a função, faça o replace das datas no texto, mostrando no
	console o resultado.
	*/
	console.log( '\nReplace de datas:' );
	function replaceDate (){
		return text.replace(regexDate, function(total, dia, mes, ano){
			return dia.slice(0,2)+'/'+getMonthNumber(mes)+'/'+ano.substring(8,4);
		});
	}
	console.log(replaceDate());
})();
