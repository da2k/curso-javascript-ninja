(function(win, doc){
	'use strict';

	function initialize(){
		initMenu();
		initResponsive();
		initResponsiveSubMenu();
	}

	function initMenu(){
		var $linksMenu = doc.querySelectorAll('[data-js="menu-content"]');
		var timeout = null;

		Array.prototype.forEach.call($linksMenu, function(link){
			link.addEventListener('mouseenter', handleMouseEnter, false);
			link.addEventListener('mouseleave', handleMouseLeave, false);
		});

		function handleMouseEnter(event){
			showMenu(this);
		}

		function handleMouseLeave(event){
			clearTimeout(timeout);
			hideMenu(this);
		}

		function showMenu(el){
			timeout = setTimeout(function(){
				var nextLink = el.childNodes[1];
				var nextSubMenu = el.childNodes[3];

				addClass(nextSubMenu, 'active-desktop');
				addClass(nextLink, 'active-desktop');
			}, 200);
		}

		function hideMenu(el){
			timeout = setTimeout(function(){
				var nextLink = el.childNodes[1];
				var nextSubMenu = el.childNodes[3];

				removeClass(nextSubMenu, 'active-desktop');
				removeClass(nextLink, 'active-desktop');

			}, 200);
		}
	}

	function initResponsive(){
		var $toogleMenu = doc.querySelector('[data-js="toogle-menu"]');
		var $mainMenu = doc.querySelector('[data-js="main-menu"]');
		var isMenuOpened = false;

		$toogleMenu.addEventListener('click', handleToogle, false);

		function handleToogle(){
			if(isMenuOpened){
				isMenuOpened = false;
				removeClass(this, 'active');
				removeClass($mainMenu, 'show');
				initResponsiveSubMenu(true);
				return false;
			}
			isMenuOpened = true;
			addClass(this, 'active');
			addClass($mainMenu, 'show');
		}

	}

	function initResponsiveSubMenu(reset){
		var $linksMenuMobile = doc.querySelectorAll('[data-js="link-menu"]');
		var linkOpened = null;
		var allMenus = [];

		Array.prototype.forEach.call($linksMenuMobile, function(item){
			item.addEventListener('click', handleClickLink, false);
			allMenus.push(item);
		});

		function handleClickLink(event){
			console.log(this);
			event.preventDefault();
			if(linkOpened === null){
				console.log('this === null', this);
				linkOpened = this;
				addClass(this, 'active-mobile');
				addClass(this.nextElementSibling, 'active-mobile');
				return false;
			}
			if(linkOpened === this){
				closeMenu(this);
				console.log('linkOpened === this', this);
				return false;
			}
			closeAllMenus();
			addClass(this, 'active-mobile');
			addClass(this.nextElementSibling, 'active-mobile');
			linkOpened = this;
		}

		function closeMenu(item){
			removeClass(item, 'active-mobile');
			removeClass(item.nextElementSibling, 'active-mobile');
			linkOpened = null;
		}

		function closeAllMenus(){
			allMenus.forEach(function(item){
				removeClass(item, 'active-mobile');
				removeClass(item.nextElementSibling, 'active-mobile');
			});
		}

		if(reset){
			closeAllMenus();
			linkOpened = null;
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
