(function(win, doc){
	'use strict';

	function initialize(){
		initGame();
	}

	function initGame(){

		var $cards = doc.querySelectorAll('[data-js="card"]');
		var $inputMoves = doc.querySelector('[data-js="moves"]');

		var allCards = [];
		var lastCard = null;
		var currentCard = null;
		var moves = 0;
		var isMoveFinished = true;

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
				this.dataset.opened = true;
				toogleClass(this, 'active');
				return false;
			}

			if(isMoveMatched(this, lastCard)){
				currentCard = this;
				setCardAlreadyChosen(currentCard, lastCard);
				increaseMoves();
				isTheGameWon();
				return false;
			}

			isMoveFinished = false;

			currentCard = this;
			currentCard.dataset.opened = true;
			toogleClass(currentCard, 'active');
			increaseMoves()

			setTimeout(function(){

				toogleClass(lastCard, 'active');
				toogleClass(currentCard, 'active');

				lastCard.dataset.opened = false;
				currentCard.dataset.opened = false;

				//lastCard.dataset.matched = false;
				//currentCard.dataset.matched = false;

				lastCard = null;
				currentCard = null;

				isMoveFinished = true;
			}, 1200);
		}

		function isIrregularMove(card){
			if(card.dataset.matched === 'true' || card.dataset.opened === 'true' || !isMoveFinished)
				return true;
		}

		function isTheFirstMove(){
			if(lastCard === null) return true;
		}

		function setCardAlreadyChosen(currentCard, lastCard){
			lastCard.dataset.matched = true;
			currentCard.dataset.matched = true;
			lastCard.dataset.opened = true;
			currentCard.dataset.opened = true;
			lastCard = null;
			toogleClass(currentCard, 'active');
		}

		function isMoveMatched(currentCard, lastCard){
			return currentCard.dataset.value === lastCard.dataset.value;
		}

		function isMoveWrong(){
			
		}

		function increaseMoves(){
			$inputMoves.value = ++moves;
		}

		function isTheGameWon(){
			var result = allCards.every(function(card){
				return card.dataset.matched === 'true';
			});
			if(result)
				return console.log('Ganhou com ' + moves + ' movimentos!');
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