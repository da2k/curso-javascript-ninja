(function(win, doc, DOM) {
  'use strict';

  function app() {
    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = new DOM('[data-js="input-cep"]');
    var $status = new DOM('[data-js="status-msg"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var ajax = new XMLHttpRequest();
    $formCep.on('submit', handleFormSubmit);

    function handleFormSubmit(e) {
      e.preventDefault();
      ajax.open('GET', replaceCep('https://viacep.com.br/ws/[CEP]/json/'));
      ajax.send();
      getMsg('loading');
      ajax.addEventListener('readystatechange', handleStateChange);
    }

    function handleStateChange() {
      if(isRequestOk()) {
        getMsg('ok');
        fillCepFields();
      }
    }

    function fillCepFields() {
      var data = parseData();
      if(!data) {
        getMsg('error');
        data = clearData();
        console.log('data error', data);
      }
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData() {
      return {
        logradouro: '*',
        bairro: '*',
        uf: '*',
        localidade: '*',
        cep: '*'
      };
    }

    function parseData() {
      var result;
      try {
        result = JSON.parse(ajax.responseText);
      }
      catch(e) {
        result = null;
      }
      return result;
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function getMsg(type) {
      var messages = {
        error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
        ok: replaceCep('Endereço referente ao CEP [CEP]:'),
        loading: replaceCep('Buscando informações para o CEP [CEP]...')
      };
      $status.get()[0].textContent = messages[type];
    }

    function replaceCep(str) {
      return str.replace('[CEP]', clearCep());
    }

    function clearCep() {
      return $inputCep.get()[0].value.replace(/\D+/g, '');
    }

    return {
      getMsg: getMsg,
      replaceCep: replaceCep
    };

  }

  win.app = app();
  app();

})(window, document, window.DOM);
