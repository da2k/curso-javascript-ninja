(function (win, doc) {
/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
var form = $('[data-id="form"]');
var inputName = $('[data-id="name"]');
var nameDisplay = $('[data-id="nameDisplay"]');
var submitButton = $('[data-id="btnSubmit"]');
var keyMap = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'a', 'b'];
// var konamiCode = ['up', 'up', 'a', 'b'];
var konamiCodePosition = 0;

function init() {
  on(win, 'load', function() {
    alert('Tente descobrir o código secreto dessa página, para poder digitar nos campos...\n Talvez tenha algo que possa te ajudar no console.');
    console.log('Já ouviu falar de Konami code?');
  })

  on(doc, 'keydown', function(e) {
    var key = keyMap[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key == requiredKey) {
      konamiCodePosition++;

      if (konamiCodePosition == konamiCode.length)
        freesKeys();
      } else {
        konamiCodePosition = 0;
      }
  })

  on(inputName, 'input', function() {
    nameDisplay.value = inputName.value;
  });

  on(form, 'submit', function() {
    event.preventDefault();
    alert('Seu nome:' + inputName.value);
  });
}

function freesKeys() {
  alert("Você desobriu! Agora pode editar os campos a vontade! :D");
  doc.body.className += " konamiPassed";
  setTimeout(function() {
    inputName.readOnly = false;
    inputName.focus();
  }, 3000);
}

function $(elem) {
  return doc.querySelector(elem);
}

function on(elem, event, cb) {
  elem.addEventListener(event, cb, false);
}

init();
})(window, document);
