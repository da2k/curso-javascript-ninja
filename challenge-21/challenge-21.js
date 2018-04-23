(function(win,doc){
    'use strict';

var $la = doc.querySelector('.la');
var interval;
var $inputCounter = doc.querySelector('[data-js="input-counter"]');
var $start = doc.querySelector('[data-js="btn-start"]');
var $stop = doc.querySelector('[data-js="btn-stop"]');
var $reset = doc.querySelector('[data-js="btn-reset"]');

$start.addEventListener('click', startTimer , false);

function startTimer(){
    if (interval){
        return false;
    }

    interval = setInterval(function(){
        var counter = +$inputCounter.value + 1;
        $inputCounter.value = counter;
        $la.style.transform = 'rotate('+ (counter) + 'deg)';
    },1000);
}

$stop.addEventListener('click', stopTimer, false);
function stopTimer(){
    interval = clearInterval(interval);
}

$reset.addEventListener('click', resetTimer, false);
function resetTimer(){
    stopTimer();
    $la.style.transform = 'rotate(0deg)';
    $inputCounter.value = 0;
}


})(window,document);
