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

  var $form = doc.querySelector('[data-js="send-cep"]');
  var $inputCep = doc.querySelector('[data-js="cep"]');
  var $status = doc.querySelector('[data-js="status"]');
  var $session_response = doc.querySelector('[data-js="section-address"]');
  var ajax;
  var elements;
  var data;
  var cep;

  function clearInput(value){
    return value.match(/[0-9]+/g).join('');
  }

  function ajaxCep(cep){
    ajax = new XMLHttpRequest();
    ajax.open("GET", "https://viacep.com.br/ws/"+cep+"/json/");
    ajax.send();

    $status.appendChild(document.createTextNode("Buscando informações para o cep "+ cep));

    ajax.addEventListener('readystatechange', function(){
      if(isRequestOk(ajax)){

        elements = $session_response.children;
        data = JSON.parse(ajax.responseText);
        clearAddress(elements);

        if(!data.erro){
          elements[0].appendChild(document.createTextNode("Endereço referente ao CEP " + cep))
          elements[1].appendChild(document.createTextNode("Endereço: " + data.logradouro + " " + data.complemento))
          elements[2].appendChild(document.createTextNode("Bairro: " + data.bairro))
          elements[3].appendChild(document.createTextNode("Estado: " + data.uf))
          elements[4].appendChild(document.createTextNode("Cidade: " + data.localidade))
          elements[5].appendChild(document.createTextNode("CEP: " + cep))
        }else{
          elements[0].appendChild(document.createTextNode("Não encontramos o endereço para o CEP " + cep))
        }
      }
    }, false);
  }

  function clearAddress(elements){
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "";
    }
  }
  function isRequestOk(ajax){
    return ajax.readyState === 4 && ajax.status === 200
  }

  $form.addEventListener('submit', function(e){
    e.preventDefault();
    if($inputCep.value === "")
      return alert("Deve preencher com um cep");
    cep = clearInput($inputCep.value);
    ajaxCep(cep);
  }, false);

})(window, document);
