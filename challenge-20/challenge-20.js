/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Passe por parâmetro para a IIFE os objetos window e document.
4. Dessa vez não é necessário criar um HTML. Ele já existe, e vamos utilizar
a marcação criada nele para fazer nosso desafio ;)

O HTML NÃO PODE ser alterado!
*/

(function(win, doc){
  'use strict';

/*
Ao carregar a página, pergunte ao usuário "Qual o seu nome?". Atribua o
resultado à uma variável chamada `username`. Se o usuário não digitar um
nome, `username` deve receber "Desconhecido".
Com a resposta, mostre um alert com a mensagem "Bem vindo [USERNAME]!"
*/


var getUsers = {

  getName: function (paramAsking ){

    var asking = win.prompt(paramAsking );
    var userName = '';

    if (asking)
      userName = asking;
    else
      userName = 'Desconhecido';

    return userName;

  },

  getEmail: function ( paramAsking ) {

    var asking = win.prompt(paramAsking);
    var email = '';

    if (asking)
      email = asking;
    else
      email = 'Email não digitado';

    return email;

  }

};



var username = getUsers.getName('Qual seu nome?');

/*
Agora, pergunte ao usuário "Qual o seu e-mail?", atribuindo o resultado à
uma variável chamada `email`.
*/

var email = getUsers.getEmail('Qual seu e-mail?');

/*
- Selecione o input de "Nome", atribuindo-o à uma variável chamada
`$inputUsername`.
*/

var $inputUsername = doc.querySelector('input[type="text"]');
console.log($inputUsername);

/*
- Selecione o input de "Email", atribuindo-o à uma variável chamada
`$inputEmail`.
*/
var $inputEmail = doc.querySelector('input[type="email"]');
console.log($inputEmail);

/*
- Selecione o campo de "Mensagem", atribuindo-o à uma variável chamada
`$message`.
*/
var $inputMessage = doc.querySelector('textarea');
console.log($inputMessage);

/*
- Selecione o botão de envio do formulário, atribuindo-o à uma variável
chamada `$button`.
*/
var $button = doc.querySelector('button[type="submit"');
console.log($button);



/*
Preencha os campos de "Nome" e "Email" que estão no documento com os valores
entrados pelo usuário.
*/
 $inputUsername.value = username;
 $inputEmail.value = email;

/*
Adicione um listener de evento de click ao botão que faça o seguinte:
1. Verificar se todos os campos estão preenchidos:
- Mostrar um alert para cada campo não preenchido, como abaixo:
- Se o campo de "Nome" não estiver preenchido, mostrar:
    - "Preencha o nome do usuário!"
- Se o campo de "Email" não estiver preenchido, mostrar:
    - "Preencha o e-mail!"
- Se o campo de "Mensagem" não estiver preenchido, mostrar:
    - "Preencha a mensagem!"
- Se o campo de "Email" for inválido, mostrar:
    - "Entre com um e-mail válido!"

2. Para verificar se o e-mail é válido use a função `isValidEmail`, passando
o e-mail que foi entrado no campo de "Email" por parâmetro. (A função
`isValidEmail` será criada logo abaixo).

3. Se tudo estiver OK, pergunte ao usuário:
    - "Tem certeza que deseja enviar o formulário?"
Se for confirmado, mostre um alerta com a mensagem:
    - "Enviado com sucesso!"
Caso contrário, mostre um alerta com a mensagem:
    - "Não enviado."
*/
// ?

$button.addEventListener('click', function (event) {
  event.preventDefault();
  sendForm();
}, false)


function sendForm(){

  var $elementsForms = [$inputUsername, $inputEmail, $inputMessage];
  var checkFields = true;


  // Checks fields empty

  function isValidEmpty(target, messageAlert) {
    var regExpValidInput = new RegExp('[\\S]*', 'gim');

    if (regExpValidInput.test(target) || target === '') {
      alert(messageAlert);
      return false;
    }

    return true;

  }

  $elementsForms.forEach(function (item, index) {
    if (index === 0) {
      checkFields = isValidEmpty($elementsForms[index].value, "Preencha o nome do usuário!");
    }

    if (index === 1) {
      checkFields = isValidEmail($elementsForms[index].value);

    }

    if (index === 2) {
      checkFields = isValidEmpty($elementsForms[index].value, "Preencha a mensagem!");
    }
  });



  if (checkFields) {
    var confirmSend = win.prompt("Tem certeza que deseja enviar o formulário?");

    if ( confirmSend && confirmSend === 'Sim' || confirmSend && confirmSend === 'sim' )
      alert("Enviado com sucesso!");
    else {
      alert("Não enviado.");
    }

  }

}


/*
Crie uma função chamada `isValidEmail`, que será usada na validação do
envio do formulário.
Essa função deve receber o e-mail por parâmetro e verificar se é um e-mail
válido.
As regras para validação são:
    - O nome do usuário (antes do arroba), pode ser qualquer caractere
    alfanumérico, incluindo o underscore, sinal de "+" e o ponto;
    - Após o arroba, o domínio pode conter somente caracteres alfanuméricos
    e o underscore;
    - Para a extensão, o domínio deve vir seguido de um ponto, e no mínimo
    2 caracteres alfanuméricos;
    - O final do domínio é opcional, mas se existir, deve começar com um
    ponto, seguido de no máximo 2 caracteres alfanuméricos.

Alguns e-mails válidos que podem ser usados para testar:
    - "meu.email+categoria@gmail.com"
    - "juca_malandro@bol.com.br"
    - "pedrobala@hotmail.uy"
    - "sandro@culinaria.dahora"

Alguns e-mails inválidos:
    - "walter-da-silva@maraca.br"
    - "rita-marica@titica.a.b"
    - "agua_@evida.br.com"
*/

function isValidEmail(emailValue){
  var regexMail = /^[\w]*([\w])?([^-][\w+]*@)[\w]+.[\w]+.\w{0,2}$/;
  if (regexMail.test(emailValue) )
    return true;
  else
    alert("Preencha o e-mail!");
    return false;
}


})(window, document);
