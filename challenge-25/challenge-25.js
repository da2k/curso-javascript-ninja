( function() {
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

    var pedido = [];
            
    var rbs = document.querySelectorAll( '[data-js="rbItem"]' );
    var detalhes = document.querySelector( '[data-js="inDetalhes"]' );    
    var selects = document.querySelectorAll( 'select' );
    var btnAdicionar = document.querySelector( '[data-js="btnAdicionar"]' );

    Array.prototype.forEach.call( rbs, function( elem ) {
        elem.addEventListener( 'change', trocarSelect, false );
    } );

    detalhes.addEventListener( 'focus', mostrarNumSabores, false );
    detalhes.addEventListener( 'blur', function() {
        detalhes.placeholder = '';
    }, false );

    detalhes.addEventListener( 'keypress', function( evt) {
        if ( evt.keyCode === 13 ) {
            adicionar();
        }
    } );

    btnAdicionar.addEventListener( 'click', adicionar, false );

    function trocarSelect() {

        for ( var i = 0; i < rbs.length; i++ ) {
            if( rbs[ i ].checked ) {
                selects[ i ].className = 'exibe';

                continue;
            }
            
            selects[ i ].className = 'oculta';
        }        
    }

    function mostrarNumSabores() {
        for ( var i = 0; i < rbs.length; i++ ) {
            if ( rbs[ i ].checked && rbs[ i ].id === 'rbPizza' ) {
                var pizza = selects[ i ].value;
                
                var num =  pizza === 'pequena' ? 1 : pizza === 'media' ? 2 : 4;

                detalhes.placeholder = 'Até ' + num + ' sabor(es)...';

                break;
            }            
        }   
    }

    function adicionar() {
        var lista = '';

        for ( var i = 0; i < selects.length; i++ ) {
            if ( selects[i].className !== 'oculta') {
                var index = selects[ i ].selectedIndex;
                lista += selects[i].options[ index ].text;
                
                break;
            }
        }

        if ( !detalhes.value ) {
            alert( 'Informe os detalhes' );

            detalhes.focus();
            return;
        }
        
        lista += ' (' + detalhes.value + ')';

        pedido.push( lista );

        listarPedidos();

        rbs[ 0 ].checked = true;
        detalhes.value = '';
        trocarSelect();
    }

    function listarPedidos() {                      
        document.querySelector( '[data-js="outPedido"]' ).textContent = pedido.join('\n');
    }

} )();
