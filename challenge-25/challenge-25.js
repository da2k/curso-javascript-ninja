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

Js inline, podemos passar pra um código HTML, uma funçcão
javaScript direto na linha, por exemplo:

	<a href="javascript:boom()">Boom!</a>
	<a href="javascript:" onclick="boom()">Boom!</a>
	<script>
		function boom ()
		{
			alert ( 'boom!' )
		}
	</script>

Nesta tag, quando se clicar na palavra "Boom!", que é um link, aparecerá um alert.

Para abstrair o código que se repete, pode-se utilizar de função para diminuir
a repetição de códio, por exemplo:

para pegar um elemento do html, usa-se:

	var $elem = documento.querySelector( '[data-js="elem"]' )
	$elem.addEventListener( 'click', callback(), false )

isso pode ser automatizado criando uma função.:

	function on ( element, event, callback ) {
		documento.querySelector( element )
		.addEventListener ( event, callback, false );
	}

	function off ( element, event, callback ) {
	documento.querySelector( element )
	.addEventListener ( event, callback, false );
	}

	on( '[data-js="element"]', 'click', handleClick);
	off( '[data-js="element"]', 'click', handleClick);

	function handleClick (event) {
		event.preventDefault();
		//qualquer ação ao clicar no element
	}

Evento 'input' é o valor atual do input, exemplo:

	on('[data-js="input"]', input, console)

	function console ()
	{
		console.log(this.value)
	}

Neste momento, será mostrado no console, em tempo real,
qualquer entrda no input com o atributo data-js="input"
(<input type="text" data-js="input"/>)

keyup - Faz a função de callback, depois que soltar uma tecla pressionada> (kkkkkkkkkkk)
keyup - Faz uma função de callback enquanto a tecla estiver pressionada> (k ,kk, kkk, kkkk...)

evento 'change' retorna o value de um select, exemplo:

html:
	<select data-js="select">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
	</select>

js:
	on('[data-js="select"]', 'change', function (){
		console.log(this.value)
	})

console:
(de acordo com a opção escolhida, retorno respectvos values (1, 2, 3))

outro exemplo:

html:
	<input type="text" data-js="input"/>
	<select data-js="select">
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
	</select>

js:
	on('[data-js="select"]', 'change', function (){
		document.querySelector('[data-js="input"]').value = this.value;
	})

retorno: na caixa de texto, será preenchido com o respectivo value.


*/

(function (doc, win){
  'use strict';

  function on (element, event, callback){
    doc.querySelector(element).addEventListener(event, callback, false)
  }
  var $input = doc.querySelector('[data-js="input"]')
  //on('[data-js="input"]', 'click', function (){})
  on('[data-js="select"]', 'change', showOnInput)

  function showOnInput (event){
    event.preventDefault();
    $input.value = this.value;
  }

})(document, window)

