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

(function(doc){
	'use strict';

	function DOM( elements ) {
		this.element = doc.querySelectorAll(elements);
	}

	DOM.prototype.on = function on(eventType, callback) {
	Array.prototype.forEach.call(this.element, function(element){
		element.addEventListener(eventType, callback, false);
	});
	}

	DOM.prototype.off = function off(eventType, callback) {
	Array.prototype.forEach.call(this.element, function(element){
		element.removeEventListener(eventType, callback, false);
	});
	}

	DOM.prototype.get = function get() {
	return this.element;
	}

	DOM.prototype.forEach = function forEach() {
	return Array.prototype.forEach.apply(this.element, arguments);
	}

	DOM.prototype.map = function map() {
	return Array.prototype.map.apply(this.element, arguments);
	}

	DOM.prototype.filter = function filter() {
	return Array.prototype.filter.apply(this.element, arguments);
	}

	DOM.prototype.reduce = function reduce() {
	return Array.prototype.reduce.apply(this.element, arguments)
	}

	DOM.prototype.reduce = function reduce() {
	return Array.prototype.reduce.apply(this.element, arguments);
	}

	DOM.prototype.reduceRight = function reduceRight() {
	return Array.prototype.reduceRight.apply(this.element, arguments);
	}

	DOM.prototype.every = function every() {
	return Array.prototype.every.apply(this.element, arguments);
	}

	DOM.prototype.some = function some() {
	return Array.prototype.some.apply(this.element, arguments);
	}

	DOM.prototype.isArray = function isArray( param ) {
	return Object.prototype.toString.call(param) === '[object Array]';
	}

	DOM.prototype.isObject = function isObject( param ) {
	return Object.prototype.toString.call(param) === '[object Object]';
	}

	DOM.prototype.isFunction = function isFunction( param ) {
	return Object.prototype.toString.call(param) === '[object Function]';
	}

	DOM.prototype.isNumber = function isNumber( param ) {
	return Object.prototype.toString.call(param) === '[object Number]';
	}

	DOM.prototype.isString = function isString( param ) {
	return Object.prototype.toString.call(param) === '[object String]';
	}

	DOM.prototype.isBoolean = function isBoolean( param ) {
	return Object.prototype.toString.call(param) === '[object Boolean]';
	}

	DOM.prototype.isNull = function isNull( param ) {
	return Object.prototype.toString.call(param) === '[object Null]' ||
			Object.prototype.toString.call(param) === '[object Undefined]';
	}

	var $formCep = new DOM('[data-js="form-cep"]');
	var $cep = new DOM('[data-js="cep"]').get()[0];

	var $logradouro = new DOM('[data-js="logradouro"]').get()[0];
	var $bairro = new DOM('[data-js="bairro"]').get()[0];
	var $estado = new DOM('[data-js="estado"]').get()[0];
	var $cidade = new DOM('[data-js="cidade"]').get()[0];
	var $status = new DOM('[data-js="status"]').get()[0];

	var $cepValue, regex;

	$formCep.on('submit', handleSumitForm);

	var ajax = new XMLHttpRequest();

	function handleSumitForm(e) {
		e.preventDefault();

		var url = 'https://viacep.com.br/ws/'+ getCep() + '/json/';

		ajax.open("GET", url, true);
		ajax.send();

		getStatus('loading');

		ajax.onreadystatechange = handleReadyStateChage;
	}

	function getCep() {
		$cepValue = $cep.value;
		regex = $cepValue.match(/\d/g).join('');
		return regex;
	}

	function isRequestOk() {
		return ajax.readyState == 4 && ajax.status == 200
	}

	function parseData(){
		var result;

		try {
			result = JSON.parse(ajax.responseText)
		}
		catch {
			result = null;
		}

		return result;
	}

	function fillCepFields(){
		var data = parseData();

		if( !data ) {
			getStatus('error');
			data = clearData();
		}

		console.log(data);

		$logradouro.value = data.logradouro;
		$bairro.value = data.bairro;
		$cidade.value = data.localidade;
		$estado.value = data.uf;
	}

	function clearData() {
		return {
			logradouro: '-',
			bairro: '-',
			cidade: '-',
			uf: '-'
		}
	}

	function handleReadyStateChage() {
		if ( isRequestOk() ) {
			debugger;
			fillCepFields();
			getStatus('ok');
		}
	  };


	function maskCep() {
		var mask = regex.match(/(\d{5})(\d{3}$)/);
		var result =  mask[1] + '-' + mask[2]
		$cep.value = result;
	}

	function getStatus(type){
		var status = {
			loading: 'Buscando informações para o CEP: ' +  getCep() + '.',
			ok: 'Endereço referente ao CEP: ' +  getCep() + '.',
			error: 'Não encontramos o endereço para o CEP: ' +  getCep() + '.',
		};
		$status.textContent = status[type];
	}


})(document);
