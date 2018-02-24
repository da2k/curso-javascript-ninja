(function(win, doc){
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


  var $cepForm = doc.querySelector('[data-js=cep-form]')
  var $message = doc.querySelector('[data-js=cep-message]');
  var $cepNumber = doc.querySelector('[data-js=cep-number]');
  var $cepButton = doc.querySelector('[data-js=cep-button]');
  var $logradouro = doc.querySelector('[data-js=logradouro]');
  var $bairro = doc.querySelector('[data-js=bairro]');
  var $estado = doc.querySelector('[data-js=estado]');
  var $cidade = doc.querySelector('[data-js=cidade]');
  var $cep = doc.querySelector('[data-js=cep]');
  var $logradouro = doc.querySelector('[data-js=logradouro]');

  $cepForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var myCep = $cepNumber.value.match(/\d/g).join('');
    var ajax = new XMLHttpRequest();
    var cep = 'https://viacep.com.br/ws/'+ myCep +'/json/';
    $message.innerText = 'Buscando informações para o CEP '+ myCep +' ...'

    ajax.open('GET', cep);
    ajax.send();
    ajax.addEventListener('readystatechange', function () {
      try {
        if (isRequestReady()) {
          var data = JSON.parse(ajax.responseText);
          clearFields(data);
          if (data.erro) {
            $message.innerText = 'Não encontramos o endereço para o CEP ' + myCep + '.';
            return false;
          }
          fillFields(data);
          $message.innerText = 'Endereço referente ao CEP ' + myCep;
        } else {
          $message.innerText = 'Não encontramos o endereço para o CEP ' + myCep + '.';
        }
      } catch (error) {
        console.log(error);
      }
    });

    function isRequestReady() {
      return ajax.status === 200 && ajax.readyState === 4;
    }

    function clearFields(data) {
      $logradouro.value = '';
      $bairro.value = '';
      $estado.value = '';
      $cidade.value = '';
      $cep.value = '';
    }

    function fillFields(data) {
      $logradouro.value = data.logradouro;
      $bairro.value = data.bairro;
      $estado.value = data.uf;
      $cidade.value = data.localidade;
      $cep.value = data.cep;
    }

  });

})(window, document);
