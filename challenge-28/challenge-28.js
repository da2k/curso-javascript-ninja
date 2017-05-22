 (function(win, doc){
  "use strict";
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

  var $cep = doc.querySelector('[data-js="cep"]');
  var $btnSubmit = doc.querySelector('[data-js="submit"]');
  var $logradouro = doc.querySelector('[data-js="logradouro"]');
  var $bairro = doc.querySelector('[data-js="bairro"]');
  var $estado = doc.querySelector('[data-js="estado"]');
  var $cidade = doc.querySelector('[data-js="cidade"]');
  var $cepreturned = doc.querySelector('[data-js="cepreturned"]');
  var $status = doc.querySelector('[data-js="status"]');
  var ajax = new XMLHttpRequest();

  function stateChanged(){
    if(this.readyState !== 4 || this.status !== 200){
      setStatus('Não encontramos o endereço para o CEP ' + $cep.value + '');
    }else{
      setStatus('Endereço referente ao CEP ' + $cep.value + '');
      setAddress(this.responseText);
    }
  }

  function getCep(){
    var cepClear = clearCep($cep.value);
    ajaxRequest(cepClear);
  }

  function ajaxRequest(cep){
    ajax.open('get', 'https://viacep.com.br/ws/' + cep + '/json/');
    ajax.send(null);
    setStatus('Buscando informações para o CEP ' + cep + '...');
  }

  function setStatus(message){
    $status.value = message;
  }

  function clearCep(cep){
    return cep.replace(/\D+/g, '');
  }

  function setAddress(address){
    address = JSON.parse(address);
    $logradouro.value = address.logradouro;
    $bairro.value = address.bairro;
    $estado.value = address.uf;
    $cidade.value = address.localidade;
    $cepreturned.value = address.cep;
  }

  $btnSubmit.addEventListener('click', getCep, false);
  ajax.addEventListener('readystatechange', stateChanged, false);

})(window, document);
