/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
(function (doc){
	'use strict';

	var $visor = doc.querySelector('input');
	var $buttonOver = doc.querySelector('[data-js="buttonOver"]');
	var $buttonOut = doc.querySelector('[data-js="buttonOut"]');
	var $buttonDouble = doc.querySelector('[data-js="buttonDouble"]');
	var $buttonClick = doc.querySelector('[data-js="buttonClick"]');
	var $selector = doc. querySelector('[data-js="selectOptions"]');

	
	function initialize(){
		initEvents();
	}


	function initEvents(){
		$buttonOver.addEventListener('mouseover', buttonPassou, false);
		$buttonOut.addEventListener('mouseout', buttonSaiu,false);
		$buttonDouble.addEventListener('dblclick', buttonDouble, false);
		$buttonClick.addEventListener('click', buttonClicou, false);
		$selector.addEventListener('change', selectorChange, false);
	}


	function buttonPassou(){
		alert('passou!')
	}

	function buttonSaiu() {
		alert('saiu!');
	}

	function buttonDouble(){
		alert('clicou 2x!')
	}

	function buttonClicou(){
		alert('clicou 1x!');
	}

	function selectorChange(){
		$visor.value = this.value;
	}


	initialize();


})(document)
