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

(function(win, doc){
	'use strict';

	var $password = document.querySelector('input[data-js="pass"]');
	var $user = document.querySelector('input[data-js="user"]');
	var $buttonGetScreenResolution = document.querySelector('button[data-js="getScreenResolution"]');

	$password.addEventListener('focus', handeClickInput, false);
	$password.addEventListener('blur', handleLeaveInput, false);
	$user.addEventListener('focus', handeClickInput, false);
	$user.addEventListener('blur', handleLeaveInput, false);
	$buttonGetScreenResolution.addEventListener('click', getScreenResolution, false);

	function handeClickInput(){
		this.style.background = 'yellow';
	}

	function handleLeaveInput(){
		this.style.background = ''; 
	}

	function getScreenResolution(){
		alert(window.innerWidth +'px de largura por ' +window.innerHeight +'px de altura');
	}

}(window, document));
