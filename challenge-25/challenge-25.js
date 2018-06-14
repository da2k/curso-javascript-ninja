(function(win, doc) {

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

	'use strict';

	var $txtNome = doc.querySelector('[data-js="txtNome"]');

	function addEvent(evento, componente, callback) {
		doc.querySelector(componente).addEventListener(evento, callback, false);
	}

	addEvent('focus', '[data-js="txtNome"]', function() {
		console.log('entrou no txtNome');
	});

	addEvent('blur', '[data-js="txtNome"]', function() {
		console.log('saiu do txtNome');
	});

	addEvent('dblclick', '[data-js="btn1"]', function() {
		console.log('executou duplo clique no botão1.');
	});

	addEvent('mouseover', '[data-js="btn1"]', function() {
		console.log('mouse sobre o botão1.');
	});

	addEvent('change', '[data-js="cmbStatus"]', function() {
		console.log('valor do combo:', this.value);
		$txtNome.value = this.value;
		$txtNome.readOnly = this.value === 'true' ? false : true;
	});


})(window, document);