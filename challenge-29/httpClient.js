(function(win){
    var httpClient = function() {
        this.get = function(aUrl, aCallback){
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() {
                if(anHttpRequest.readyState == 4 && anHttpRequest.status == 200) {
                    aCallback(anHttpRequest.responseText);
                }
            };
            anHttpRequest.open( "GET", aUrl, true);
            anHttpRequest.send(null);
        }
    }
    win.httpClient = httpClient;
})(window);