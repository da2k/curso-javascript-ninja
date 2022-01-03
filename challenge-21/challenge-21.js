
    var inicio = document.getElementById('cronometro')
    var start = document.getElementById('inicio')
    var parar = document.getElementById('parar')
    var resetar = document.getElementById('reset')
    var interval;

  start.addEventListener('click', startTimer, false);
 parar.addEventListener('click', pararTimer, false);
resetar.addEventListener('click', resetarTimer,false )

function startTimer() {
   inicio.value = +inicio.value  + 1;
   interval = setTimeout(startTimer, 1000)
}

function pararTimer() {
    clearTimeout(interval)
}

function resetarTimer(){
    inicio.value = 0;
    pararTimer()
}
