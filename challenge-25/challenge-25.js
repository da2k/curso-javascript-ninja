(function(doc){
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

    var $input = doc.querySelector('[data-js="input"]');
    var $span1 = doc.querySelector('[data-js="span1"]');
    var $span2 = doc.querySelector('[data-js="span2"]');

    $input.addEventListener('keyup', handleKeyUpInput, false);
    $input.addEventListener('keydown', handleKeyDownInput, false);
    $input.addEventListener('dblclick', handleDoubleClickInput, false);
    $input.addEventListener('click', handleClickInput, false);
    $input.addEventListener('contextmenu', handleContextMenuInput, false);

    function handleKeyUpInput(event){
        $span1.innerText = getKeyboardDescription(event);
        event.preventDefault();
    }

    function handleKeyDownInput(event){
        
        $span2.innerText = getKeyboardDescription(event);
    }

    function getKeyboardDescription(event){
        var r = '';
        if(event.ctrlKey && event.key !== 'Control')
            r += 'Ctrl+';
        if(event.altKey && event.key !== 'Alt')
            r += 'Alt+';
        if(event.shiftKey && event.key !== 'Shift')
            r += 'Shift+';
        return r + event.key;
    }

    function handleDoubleClickInput(){
        $input.style.backgroundColor = getRandomColor();
    }

    function handleClickInput(){
        $input.style.backgroundColor = '';
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function handleContextMenuInput(event, p){
        console.log(event);
        console.log(p);
    }

})(document);
