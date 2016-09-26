(function(doc){
  'use strict';

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
  "http://cep.correiocontrol.com.br/[CEP].json", onde [CEP] será o CEP passado
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
  var $msg = doc.querySelector('[data-js="resMsg"]');

  function requestAjax(url) {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url);
    ajax.send();

    console.log('carregando ...');
    ajax.addEventListener('readystatechange', function() {
      // if(isRequestOk(ajax)){
        var response;
        try {
          response = JSON.parse(ajax.responseText);
          showResponse(response, fillHTML);
          $msg.innerHTML = ajax.readyState;
        }
        catch(e) {
          $msg.innerHTML = 'CEP não encontrado! ' + ajax.status;
        }
      // }
    }, false);
  }

  function isRequestOk(ajax) {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function showResponse(obj, arr) {
    arr.forEach(function(item){
      doc.querySelector('[data-js="' + item.datajs + '"]').innerHTML = obj[item.nomeProp];
    });
  }

  var fillHTML = [
    {datajs: 'resRua', nomeProp: 'logradouro'},
    {datajs: 'resBairro', nomeProp: 'bairro'},
    {datajs: 'resEstado', nomeProp: 'uf'},
    {datajs: 'resCidade', nomeProp: 'localidade'},
    {datajs: 'resCep', nomeProp: 'cep'}
  ];

  function formatCep(cep) {
    var regex = /\D+/g;
    return cep.replace(regex, function(item){
      return '';
    });
  }

  function isValidCep(cep) {
    return cep.length === 8;
  }

  var $inputCEP = doc.querySelector('[data-js="cep"]');
  var $form = doc.querySelector('[data-js="form"]');

  $form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log($inputCEP.value);
    console.log(formatCep($inputCEP.value));
    if (isValidCep(formatCep($inputCEP.value))) {
      requestAjax('https://viacep.com.br/ws/' + formatCep($inputCEP.value) + '/json/');
    } else {
      $msg.innerHTML = 'CEP inválido, o CEP deve possuir pelo 8 caracteres numéricos';
    }

  }, false);

}(document));
