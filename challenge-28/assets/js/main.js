;(function(win, doc, $) {
	'use strict';
	function app() {
	  let ajax;
		const apiCep = 'https://viacep.com.br/ws/[CEP]/json/';
		let $form;
		let $inputCep;
		let $status;
		let $cepData;
		let $logradouro;
		let $bairro;
		let $cidade;
		let $estado;

		function init() {
			$form = $('[data-js="form"]');
			$inputCep = $('[data-js="input-cep"]');
			$status = $('[data-js="status"]');
			$cepData = $('[data-js="cep-data"]');
			$logradouro = $('[data-js="logradouro"]');
			$bairro = $('[data-js="bairro"]');
			$cidade = $('[data-js="cidade"]');
			$estado = $('[data-js="estado"]');
			initEvents();
		}

		function initEvents() {
			$form.addEventListener('submit', handleSubmitForm);
		}

		function clear() {
			$logradouro.innerText = '';
			$bairro.innerText = '';
			$cidade.innerText = '';
			$estado.innerText = '';
		}

		function mostrarDados(data) {
      $status.innerText = `Endereço referente ao CEP ${data.cep}:`;
		  $cepData.style.display = 'block';
      $logradouro.innerText = data.logradouro;
      $bairro.innerText = data.bairro;
      $cidade.innerText = data.localidade;
      $estado.innerText = data.uf;
    }

		function isRequestOk(request) {
			return request.readyState === 4 && request.status === 200
		}

		function validateCep(cep) {
			if (! (!!cep.match(/\d\d((\d\d\d)|(\.\d\d\d-))\d\d\d/)) ) {
        throw Error('CEP inválido.');
      }
		}

		function sendRequestCep(cep) {
			clear();
      $cepData.style.display = 'none';
      $status.style.display = 'block';
      $status.innerText = `Buscando informações para o CEP ${cep}...`;
		  ajax = new XMLHttpRequest();
			ajax.open('GET', apiCep.replace('[CEP]', cep));
			ajax.addEventListener('readystatechange', handleAjaxResponse)
			ajax.send();
		}

		function handleSubmitForm(e) {
			e.preventDefault();
			try {
				validateCep($inputCep.value);
				sendRequestCep($inputCep.value);
			} catch (e) {
			  $status.style.display = 'block';
				$status.innerText = e.message;
			}
		}

    function handleAjaxResponse() {
      if (!isRequestOk(ajax)) {
        return;
      }
      let data = JSON.parse(ajax.responseText);
      if (data.cep === undefined) {
        $status.innerText = `Não encontramos o endereço para o CEP ${$inputCep.value}.`;
      } else {
        mostrarDados(data);
      }
    }

		return {
			init: init
		};
	}
	win.app = app();
	win.app.init();
})(window, document, window.DOM);
