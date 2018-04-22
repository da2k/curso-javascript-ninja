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

	var $cep = doc.querySelector('#cep'),
		$sendButton = doc.querySelector('#enviar'),
		$cepValue,
		regexNumbers,
		$inputLogradouro = doc.querySelector('#logradouro'),
		$inputBairro = doc.querySelector('#bairro'),
		$inputCidade = doc.querySelector('#cidade'),
		$inputEstado = doc.querySelector('#estado'),
		$mensagem = doc.querySelector('#mensagem');

	function ajaxListener () {
		if (this.readyState == 4 && this.status == 200) {
			$mensagem.innerHTML = 'Endereço referente ao CEP ' + regexNumbers + ':';
		} else {
			$mensagem.innerHTML = 'Buscando informações para o CEP ' + regexNumbers + '...';
		}
	};


	$sendButton.addEventListener("click", function(e){
		e.preventDefault();
		$cepValue = $cep.value;
		regexNumbers = $cepValue.match(/\d/g).join('');
		var url = 'https://viacep.com.br/ws/' + regexNumbers + '/json/';

		var ajax = new XMLHttpRequest;

		ajax.onload = ajaxListener;

		ajax.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var retorno = JSON.parse(this.responseText);
				var bairro = retorno.bairro;
				var cidade = retorno.localidade;
				var logradouro = retorno.logradouro;
				var estado = retorno.uf;
				$inputLogradouro.value = logradouro;
				$inputBairro.value = bairro;
				$inputCidade.value = cidade;
				$inputEstado.value = estado;
			} else {
				$mensagem.innerHTML = 'Não encontramos o endereço para o CEP ' + regexNumbers + '.';
			}
		};

		ajax.open('GET', url, true);
		ajax.send();

	}, false);


})(document);
