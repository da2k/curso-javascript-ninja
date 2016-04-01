(function(win, doc){
	'use strict';

	function initialize(){
		initGame();
	}

	function initGame(){

		var $cards = doc.querySelectorAll('[data-js="card"]');
		var $inputMoves = doc.querySelector('[data-js="moves"]');
		var $buttonReset = doc.querySelector('[data-js="reset"]');

		var allCards = [];
		var lastCard = null;
		var currentCard = null;
		var moves = 0;
		var isMoveFinished = true;

		$buttonReset.addEventListener('click', resetGame, false);

		Array.prototype.forEach.call($cards, function(card){
			card.addEventListener('click', toogleClick, false);
			card.dataset.opened = false;
			card.dataset.matched = false;
			allCards.push(card);
		});

		function toogleClick(){
			if(isIrregularMove(this)) return false;

			if(isTheFirstMove()){
				lastCard = this;
				lastCard.dataset.opened = true;
				toogleClass(this, 'active');
				return false;
			}

			if(isMoveMatched(this, lastCard)){
				setCardAlreadyChosen(this, lastCard);
				increaseMoves();
				isTheGameWon();
				lastCard = null;
				currentCard = null;
				return false;
			}

			isMoveWrong(this, lastCard);
			increaseMoves();
			lastCard = null;
			currentCard = null;
		}

		function isIrregularMove(card){
			if(JSON.parse(card.dataset.matched) || JSON.parse(card.dataset.opened) || !isMoveFinished)
				return true;
		}

		function isTheFirstMove(){
			if(lastCard === null) return true;
		}

		function isMoveMatched(currentCard, lastCard){
			return currentCard.dataset.value === lastCard.dataset.value;
		}

		function setCardAlreadyChosen(currentCard, lastCard){
			lastCard.dataset.matched = true;
			currentCard.dataset.matched = true;
			lastCard.dataset.opened = true;
			currentCard.dataset.opened = true;
			toogleClass(currentCard, 'active');
		}

		function isMoveWrong(currentCard, lastCard){
			isMoveFinished = false;
			currentCard.dataset.opened = true;
			toogleClass(currentCard, 'active');
			setTimeout(function(){
				toogleClass(lastCard, 'active');
				toogleClass(currentCard, 'active');
				lastCard.dataset.opened = false;
				currentCard.dataset.opened = false;
				isMoveFinished = true;
			}, 1200);
		}

		function increaseMoves(){
			$inputMoves.value = ++moves;
		}

		function isTheGameWon(){
			var result = allCards.every(function(card){
				return JSON.parse(card.dataset.matched);
			});
			if(result)
				alert('Você venceu com ' + moves + ' movimentos!');
			return false;
		}

		function resetGame(){
			var ask = confirm('Tem certeza que deseja reiniciar o jogo?');
			if(ask){
				allCards.forEach(function(card){
					card.dataset.opened = false;
					card.dataset.matched = false;
					removeClass(card, 'active');
				});

				lastCard = null;
				currentCard = null;
				moves = 0;
				$inputMoves.value = moves;
				isMoveFinished = true;
			}
			return false;
		}

		function toogleClass(el, style){
			if(existsClass(el, style)){
				removeClass(el, style);
				return false;
			}
			addClass(el, style);
		}

		function existsClass(el, style){
			var regex = new RegExp('\\b' + style + '\\b', 'g');
			return regex.test(el.className);
		}

		function addClass(el, style){
			el.classList.add(style);
		}

		function removeClass(el, style){
			var regex = new RegExp('\\b' + style + '\\b', 'g');
			el.className = el.className.replace(regex,'');
		}
	}

	initialize();

})(window, document);