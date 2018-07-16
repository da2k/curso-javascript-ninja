(function (win, doc) {
  'use strict';
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
  var $inputJogo = doc.querySelector('[data-js="inputJogo"]');
  var $btnProcurar = doc.querySelector('[data-js="btnProcurar"]');

  var $inputNome = doc.querySelector('[data-js="inputNome"]');
  var $selectGenero = doc.querySelector('[data-js="selectGenero"]');
  var $inputPlataforma = doc.querySelector('[data-js="inputPlataforma"]');

  var $save = doc.querySelector('[data-js="save"]');

  var temporizador;

  function initialize() {
    initEvents();
    limparCampos();
  }

  function initEvents() {
    addEvent($btnProcurar, 'click', procurarJogo);
    addEvent($inputNome, 'input', savingFunction);
    addEvent($selectGenero, 'change', savingFunction);
    addEvent($inputPlataforma, 'input', savingFunction);
  }

  function addEvent(element, event, func) {
    element.addEventListener(event, func, false);
  }

  function procurarJogo() {
    limparCampos();
    getJogos().forEach(function (item) {
      if (item.nome === $inputJogo.value) {
        $inputJogo.value = "";

        $inputNome.value = item.nome;
        $selectGenero.value = item.genero;
        $inputPlataforma.value = item.plataforma;

        return true;
      }
    });

    if ($inputNome.value !== "") {
      return alert("Jogo encontrado!");
    }
    return alert("Jogo não encontrado!");
  }

  function limparCampos() {
    $inputNome.value = "";
    $selectGenero.value = "";
    $inputPlataforma.value = "";
    $save.textContent = "";
  }

  function getJogos() {
    return [{ nome: 'CS:GO', genero: 'Tiro', plataforma: 'PC' }, { nome: 'World of Warcraft', genero: 'RPG', plataforma: 'PC' }, { nome: 'Forza Horizon', genero: 'Corrida', plataforma: 'XBOX' }];
  }

  function savingFunction() {
    clearTimeout(temporizador);
    $save.textContent = "Salvando...";
    temporizador = setTimeout(function () {
      $save.textContent = "Informações Salvas!";
    }, 1000);
  }

  initialize();

})(window, document);
