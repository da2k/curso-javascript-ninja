(function () {
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

    let counter = 0;

    const $botao = document.querySelector('[data-count="count"]')
    const $campo = document.querySelector('[data-campo="campo"]')
    $botao.addEventListener('click', function () {
        counter += 1
        $campo.value = counter
    })

    const $password = document.querySelector('[data-psw="psw" ]');

    $password.addEventListener('focus', (event) => {
        event.target.style.background = 'green';
    });

    $password.addEventListener('blur', (event) => {
        event.target.style.background = '';
    });



    let dragged;

    document.addEventListener("drag", function (event) {

    }, false);

    document.addEventListener("dragstart", function (event) {
        dragged = event.target;
        event.target.style.opacity = .5;
    }, false);

    document.addEventListener("dragend", function (event) {
        event.target.style.opacity = "";
    }, false);

    document.addEventListener("dragover", function (event) {
        event.preventDefault();
    }, false);

    document.addEventListener("dragenter", function (event) {
        if (event.target.className == "zona") {
            event.target.style.background = "green";
        }

    }, false);

    document.addEventListener("dragleave", function (event) {
        if (event.target.className == "zona") {
            event.target.style.background = "";
        }

    }, false);

    document.addEventListener("drop", function (event) {
        event.preventDefault();
        if (event.target.className == "zona") {
            event.target.style.background = "";
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }, false);




})();