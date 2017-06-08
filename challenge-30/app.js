(function($) {
    'use strict';

    var app = (function() {
        return {
            init: function init() {
                console.log('app init');
                this.companyInfo();
                this.initEvents();
            },


            initEvents: function initEvents() {


                $('[data-js="form-register"]').on('submit', this.handleSubmit)

            },

            handleSubmit: function handleSubmit(e) {
                e.preventDefault();

                var $tableCar = $('[data-js="table-car"]').get();
                $tableCar.appendChild(app.createNewCar());
            },

            createNewCar: function createNewCar() {

                var $fragment = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $tdImage = document.createElement('td');
                var $image = document.createElement('img')
                var $tdBrand = document.createElement('td');
                var $tdYear = document.createElement('td');
                var $tdPlate = document.createElement('td');
                var $tdColor = document.createElement('td');

                $image.src = $('[data-js="image"]').get().value;
                $tdImage.appendChild($image);
                $tdBrand.textContent = $('[data-js="brand-model"]').get().value;
                $tdYear.textContent = $('[data-js="year"]').get().value;
                $tdPlate.textContent = $('[data-js="plate"]').get().value;
                $tdColor.textContent = $('[data-js="color"]').get().value;

                $tr.appendChild($tdImage);
                $tr.appendChild($tdBrand);
                $tr.appendChild($tdYear);
                $tr.appendChild($tdPlate);
                $tr.appendChild($tdColor);

                return $fragment.appendChild($tr);
            },

            companyInfo: function companyInfo() {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', '/company.json', true);
                ajax.send();

                ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
            },

            getCompanyInfo: function getCompanyInfo() {

                if (!app.isReady.call(this))
                    return;

                var data = JSON.parse(this.responseText);
                var $companyName = $('[data-js="company-name"]').get();
                var $companyPhone = $('[data-js="company-phone"]').get();
                $companyName.textContent = data.name;
                $companyPhone.textContent = data.phone;
            },


            isReady: function isReady() {
                return this.readyState === 4 & this.status === 200
            }
        };
    })();

    app.init();
})(window.DOM);