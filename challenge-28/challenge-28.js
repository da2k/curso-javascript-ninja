(function(DOM) {

  'use strict';

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function app() {

  	var $formCep = new DOM('[data-js="form-cep"]');  
	$formCep.on('submit', handleSubmitFormCep);

  	var $inputCep = new DOM('[data-js="cep"]');
  	var ajax = new XMLHttpRequest();
  	var $status = new DOM('[data-js="status"]');
  	var $logradouro = new DOM('[data-js="logradouro"]');
  	var $bairro = new DOM('[data-js="bairro"]');
  	var $estado = new DOM('[data-js="estado"]');
  	var $cidade = new DOM('[data-js="cidade"]');
  	var $cep = new DOM('[data-js="cep-result"]');

	function handleSubmitFormCep(event) {
		event.preventDefault();
		var url = getUrl();
		ajax.open('GET', url);
		ajax.send();
		getMessage('loading');
		ajax.addEventListener('readystatechange', handleReadyStateChange);
	}

	function getUrl() {
	  	return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
	  		   '[CEP]', 
	  		   $inputCep.get()[0].value.replace(/\D/g,'')
	  	);
	}

	function handleReadyStateChange() {
		if (isRequestOk()) {
	  		fillCepFields();
	  		getMessage('ok');
	  	}
	}	

	function isRequestOk() { 
	  	return ajax.readyState === 4 && ajax.status === 200;
	}

	function fillCepFields() {
		var data = parseData();
		console.log(data);

		if (!data) getMessage('error');

		$logradouro.get()[0].textContent = data.logradouro;
		$bairro.get()[0].textContent = data.bairro;
		$estado.get()[0].textContent = data.uf;
		$cidade.get()[0].textContent = data.localidade;
		$cep.get()[0].textContent = data.cep;
	}

	function parseData() {
		var result;
	  	try {
	  		result = JSON.parse(ajax.responseText);
	  	} catch(e) {
	  		result = null;
	  	}
	  	return result;
	}

	function getMessage(type) {
	  	var message = {
	  		'loading':'Buscando informações para o CEP [CEP]...',
	  		'ok':'Endereço referente ao CEP [CEP]:',
	  		'error':'Não encontramos o endereço para o CEP [CEP].'
	  	};  	
	  	$status.get()[0].textContent = message[type];
	}

  }

  app();

})(window.DOM);