(function(win, doc){
	'use strict';

	function initialize(){
		initSearch();
	}

	function initSearch(){
		var $btnSearch = doc.querySelector('[data-js="btn-search"]');
		var $btnSearchMobile = doc.querySelector('[data-mobile="btn-search"]');
		var $inputSearch = doc.querySelector('input[name="search"]');
		var $formSearch = doc.querySelector('form[name="search"]');
		var isSearchOpened = false;

		$btnSearch.addEventListener('click', validateSearch, false);
		$btnSearchMobile.addEventListener('click', showResponsiveSearch, false);
		$formSearch.addEventListener('submit', validateSearch, false);

		function validateSearch(event){

			if(getWiewportWidth()>1139){
				event.preventDefault();
				if($inputSearch.value.length>1){
					$formSearch.submit();
					return false;
				}
				$inputSearch.classList.add('error-search');
				setTimeout(function(){
					$inputSearch.className = "";
				}, 500);
				$inputSearch.focus();
			}
		}

		function showResponsiveSearch(event){
			event.preventDefault();
			if(isSearchOpened){
				isSearchOpened = false;
				removeClass($inputSearch, 'show');
				return false;
			}
			isSearchOpened = true;
			addClass($inputSearch, 'show');
		}

		function getWiewportWidth(){
			return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		}

	}

	function addClass(el, class){
		el.classList.add(class);
	}

	function removeClass(el, class){
		var regex = new RegExp('\\b' + class + '\\b', 'g');
		el.className = el.className.replace(regex,'');
	}

	initialize();

})(window, document);