(function(DOM){
  var $companyName = new DOM('[data-js="companyName"]');
  var $companyNumber = new DOM('[data-js="companyNumber"]');

  var ajax = new XMLHttpRequest();
  ajax.open('GET', './company.json');
  ajax.send();

  ajax.addEventListener('readystatechange', fillCompanyData, false);

  function isRequestOK() {
    return ajax.status === 200 && ajax.readyState === 4;
  }

  function fillCompanyData() {
    $companyName.get()[0].textContent = JSON.parse(ajax.responseText).name;
    $companyNumber.get()[0].textContent = JSON.parse(ajax.responseText).phone;
  }

}(window.DOM));
