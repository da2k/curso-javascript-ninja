	(function(win, doc){

		'use strict';

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

	var $caixaSaida = doc.querySelector("[data-js='caixaSaida']");
	var $caixaEntrada = doc.querySelector("[data-js='caixaEntrada']");	

	function realizarEvento(element, event, callback){
		doc.querySelector(element)
			.addEventListener(event, callback, false);
	}

	function handleClick(event){
		event.preventDefault();
		alert("Dados enviados com sucesso!");
	}
	
	function logReset(event) {	 		
	 	alert("Resetado com sucesso!");
	}

	realizarEvento("[data-js='caixaEntrada']",'keydown',function(){
		$caixaSaida.value = this.value;
	});

	realizarEvento("[data-js='form']", 'reset', logReset);
	realizarEvento("[data-js='submit']", 'click', handleClick);
	

})(window, document);