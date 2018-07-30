(function() {
    'use strict';

    var dragged;

    document.addEventListener('dragstart', function(event) {
        dragged = event.target;
        event.target.style.opacity = .5;
    }, false);

    document.addEventListener('dragend', function(event) {
        event.target.style.opacity = '';
    }, false);

    document.addEventListener('dragover', function(event) {
        event.preventDefault();
    }, false);

    document.addEventListener('dragenter', function(event) {
        if (event.target.className === 'dropzone')
            event.target.style.background = 'purple';
    }, false);

    document.addEventListener('dragleave', function(event) {
        if (event.target.className === 'dropzone')
            event.target.style.background = '';
    }, false);


    document.addEventListener('drop', function(event) {
        event.preventDefault();
        if (event.target.className == 'dropzone') {
            event.target.style.background = '';
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }, false);

})();