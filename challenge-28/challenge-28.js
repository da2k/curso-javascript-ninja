(function (document) {
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

  $input = getDOMElement("#cep")
  $button = getDOMElement("#button");
  $message = getDOMElement("#message");
  $street = getDOMElement("#street");
  $neighborhood = getDOMElement("#neighborhood");
  $state = getDOMElement("#state");
  $city = getDOMElement("#city");
  $zipCode = getDOMElement("#zipCode");

  function getDOMElement(selector) {
    return document.querySelector(selector);
  }

  $button.addEventListener("click", function (e) {
    e.preventDefault();
    _makeRequestAsync($input.value);
  });

  function _makeRequestAsync(zipCode) {
    var formattedZipCode = formatZipCode(zipCode);
    fillMessageField(`Buscando informações para o CEP ${zipCode}...`);
    var ajax = new XMLHttpRequest();
    ajax.open("GET", `https://ws.apicep.com/cep.json?code=${formattedZipCode}`);
    ajax.send();
    ajax.addEventListener("readystatechange", function (data) {
      getAddress(data, zipCode);
    });
  }

  function formatZipCode(zipCode) {
    return zipCode.split("").reduce(function (t, v) {
      if (/\d/.test(v)) {
        return t + v;
      }
      return t;
    });
  }

  function isNumber(value) {
    console.log(Object.prototype.toString.call(value));
    return Object.prototype.toString.call(value) === "[object Number]";
  }

  function getAddress(data, zipCode) {
    try {
      var fullData = JSON.parse(data.target.response);
      var addressData = {
        street: fullData.address,
        neighborhood: fullData.district,
        state: fullData.state,
        city: fullData.city,
        zipCode: fullData.code,
      };
      fillAddressInfo(addressData);
      fillMessageField(`Endereço referente ao CEP ${zipCode}: `);
    } catch (e) {
      console.log(e);
      fillMessageField(`Não encontramos o endereço para o CEP ${zipCode}.`);
    }
  }

  function fillAddressInfo(info) {
    $street.innerHTML = `Logradouro: ${info.street}`;
    $neighborhood.innerHTML = `Bairro: ${info.neighborhood}`;
    $state.innerHTML = `Estado: ${info.state}`;
    $city.innerHTML = `Cidade: ${info.city}`;
    $zipCode.innerHTML = `CEP: ${info.zipCode}`;
  }

  function fillMessageField(message) {
    $message.innerHTML = message;
  }
})(document);
