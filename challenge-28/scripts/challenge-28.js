(function(DOM){

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
  function app() {
    let $form = new DOM("#form");
    let $cepInput = new DOM("#form form input");
    let $addressField = new DOM('[data-js="street"]');
    let $districtField = new DOM('[data-js="district"]');
    let $cityField = new DOM('[data-js="city"]');
    let $stateField = new DOM('[data-js="state"]');
    let $cepField = new DOM('[data-js="cep"]');
    let $textArea = new DOM("textArea");

    $form.on("submit", handleSubmitFormCep, false);
    let ajax = new XMLHttpRequest();

    function handleSubmitFormCep(event) {
      event.preventDefault();
      let url = getURL();

      ajax.open("GET", url);
      ajax.send();
      getMessage("loading");
      ajax.addEventListener("readystatechange", getAjaxResponse, false);
    }

    function getURL() {
      return replaceCep("https://ws.apicep.com/cep/[CEP].json");
    }

    function clearCep() {
      return $cepInput.get()[0].value.replace(/\D/g, "");
    }

    function getAjaxResponse() {
      if (isRequestOk()) {
        getMessage("success");
        fillCepFields();
      }
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCepFields() {
      let data = parseData();

      if (data.message === "Blocked by flood") {
        getMessage("tryAgain");
        data = clearFields();
      }

      if (data.status === 400 || data.ok === false) {
        getMessage("error");
        data = clearFields();
      }

      $addressField.get()[0].value = data.address;
      $districtField.get()[0].value = data.district;
      $cityField.get()[0].value = data.city;
      $stateField.get()[0].value = data.state;
      $cepField.get()[0].value = data.code;
    }

    function clearFields() {
      return {
        address: "-",
        district: "-",
        city: "-",
        state: "-",
        code: "-",
      };
    }

    function parseData() {
      let result;
      try {
        result = JSON.parse(ajax.responseText);
      } catch (e) {
        result;
      }
      return result;
    }

    function getMessage(type) {
      let message = {
        loading: replaceCep("Buscando informações para o CEP...[CEP]:"),
        success: replaceCep("Abaixo, endereço referente ao CEP [CEP]: "),
        error: replaceCep("Não encontramos o endereço para o CEP [CEP]"),
        tryAgain:
          "Não possível completar a busca no momento.\nTente novamente mais tarde!",
      };
      return ($textArea.get()[0].value = message[type]);
    }

    function replaceCep(message) {
      return message
        .replace("[CEP]", clearCep())
        .replace(/(\d{5})(\d+)/g, "$1-$2");
    }

    return {
      getMessage: getMessage,
      replaceCep: replaceCep,
    };
  }

  window.app = app(); // estamos executando aqui para retornar/exportar somente os metodos no 'return'
  app();

})(window.DOM);
