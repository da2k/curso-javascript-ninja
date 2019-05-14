((DOM) => {
  function app() {
		var xhr = new XMLHttpRequest();
		var $formRegistration = new DOM('[data-js="form-registration"]');
		var $table = new DOM('[data-js="tbody"]');

		function init() {
			getCompanyInfo();
			getStoredCars();
			initEvents();
		}

		function initEvents() {
			$formRegistration.get().addEventListener('submit', addData, false);
		}

		function addData(event) {
			event.preventDefault();
			storeData();
		}

		function storeData() {
			var xhr = new XMLHttpRequest();
			var data = getFormData();

			xhr.open('POST', 'http://localhost:3000/car');
			xhr.setRequestHeader('Content-Type', 'application/json');

			xhr.addEventListener('readystatechange', function () {
				if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					clearTable();
					getStoredCars();
				}
			}, false);

			var dataString = JSON.stringify(data);
			xhr.send(dataString);
		}

		function getFormData() {
			return {
				image: new DOM('[data-js="img-url"]').get().value,
				brandModel: new DOM('[data-js="brand-model"]').get().value,
				year: new DOM('[data-js="year"]').get().value,
				plate: new DOM('[data-js="plate"]').get().value,
				color: new DOM('[data-js="color"]').get().value
			}
		}

		function generateTableRow(data) {
			var $fragment = document.createDocumentFragment();
			var $row = document.createElement('tr');
			$fragment.appendChild($row);

			$row.appendChild(createImgTd(data.image));
			$row.appendChild(createTd(data.brandModel));
			$row.appendChild(createTd(data.year));
			$row.appendChild(createTd(data.plate));
			$row.appendChild(createTd(data.color));
			$row.appendChild(createRemoveBtnTd());

			return $fragment;
		}

		function createTd(textContent) {
			var $fragment = document.createDocumentFragment();
			var $td = document.createElement('td');
			$td.textContent = textContent;

			$fragment.append($td);
			return $fragment;
		}

		function createImgTd(url) {
			var $fragment = document.createDocumentFragment();
			var $td = document.createElement('td');
			var $img = document.createElement('img');
			$img.setAttribute('src', url);
			$img.setAttribute('width', '300');
			$td.appendChild($img);
			$fragment.appendChild($td);

			return $fragment;
		}

		function getCompanyInfo() {
			var xhr = new XMLHttpRequest();
			xhr.addEventListener('readystatechange', function () {
				if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					var companyInfo = JSON.parse(xhr.responseText);
					var $companyName = new DOM('[data-js="company-name"]');
					var $companyPhone = new DOM('[data-js="company-phone"]');

					$companyName.get().textContent = companyInfo.name;
					$companyPhone.get().textContent = companyInfo.phone;
				}
			}, false);

			xhr.open('GET', 'company.json');
			xhr.send();
		}

		function getStoredCars() {
			var xhr = new XMLHttpRequest();
			xhr.addEventListener('readystatechange', function () {
				if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					var data = JSON.parse(xhr.responseText);
					clearTable();
					setStoredCars(data);
				}
			}, false);

			xhr.open('GET', 'http://localhost:3000/car');
			xhr.send();
		}

		function remove() {
			var xhr = new XMLHttpRequest();
			var $table = this.closest('tbody');
			var $row = this.closest('tr');

			var car = {
				plate: $row.children[3].textContent
			};
			var carString = JSON.stringify(car);
			xhr.open('DELETE', 'http://localhost:3000/car');
			xhr.setRequestHeader('Content-Type', 'application/json');

			xhr.addEventListener('readystatechange', function () {
				if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
					$table.removeChild($row);
				}
			}, false);

			xhr.send(carString);
		}

		function createRemoveBtnTd() {
			var $fragment = document.createDocumentFragment();
			var $td = document.createElement('td');
			var $button = document.createElement('button');

			$button.textContent = 'Remover';
			$button.setAttribute('data-js', 'remove-btn');
			$button.addEventListener('click', remove, false);

			$td.appendChild($button);
			$fragment.appendChild($td);

			return $fragment;
		}

		function clearTable() {
			Array.prototype.forEach.call($table.get().children, function (item) {
				$table.get().removeChild(item);
			});
		}

		function setStoredCars(cars) {
			cars.forEach(function (car) {
					$table.get().appendChild(generateTableRow(car));
			});

			if (!isTableEmpty())
				revealTable();
		}

		function isTableEmpty() {
			return $table.get().childElementCount === 0;
		}

		function revealTable() {
			$table.get().closest('table').classList.remove('hidden');
		}

		return {
			init
		};
  }

  app().init();
})(window.DOM); 