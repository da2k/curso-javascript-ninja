


var $visor = doc.querySelector('[data-js="visor"]');
    var $clear = doc.querySelector('[data-js="clear"]');


    var $buttonNumbers = doc.querySelectorAll('[data-js="button-numbers"]');
    var $buttonOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $results = doc.querySelector('[data-js="results"]');



    Array.prototype.forEach.call($buttonNumbers, function(button) {
        button.addEventListener('click', concatNumber, false);
    });

    Array.prototype.forEach.call($buttonOperations, function(button) {
        button.addEventListener('click', operationNumber, false);
    })

    $results.addEventListener('click', resultSum, false);

    $clear.addEventListener('click', clearVisor, false);

    function concatNumber() {
        $visor.value += this.value;
    }

    function operationNumber() {
        $visor.value = removeLastItem($visor.value);
        $visor.value += this.value;
    }

    function isLastItemAnOperation(number) {
        var signs = ['+', '-', '/', 'x'];

        var lastItem = number.split('').pop();

        return signs.some(function(operator) {
            return operator === lastItem;
        });
    }

    function removeLastItem(number) {
        if (isLastItemAnOperation(number)) {
            return number.slice(0, -1);
        }

        return number;
    }


    function resultSum() {
        $visor.value = removeLastItem($visor.value);
        var allValues = $visor.value.match(/(\d+)([+x/-])?/g);
        $visor.value = allValues.reduce(function(prev, curr) {

            var firstValue = prev.slice(0, -1);
            var operator = prev.split('').pop();
            var lastValue = removeLastItem(curr);
            var lastOperator = isLastItemAnOperation(curr) ? curr.split('').pop() : '';

            console.log('soy jo', firstValue)
            console.log('soy ope', operator);
            console.log('soy actual', lastValue);


            switch (operator) {
                case '+':
                    return ( Number(firstValue) + Number(lastValue) ) + lastOperator;

                case '-':
                    return ( Number(firstValue) - Number(lastValue) ) + lastOperator;

                case '/':
                    return ( Number(firstValue) / Number(lastValue) ) + lastOperator;

                case 'x':
                    return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
            }
        });

    }

    function clearVisor(){
        $visor.value = 0;
    }




})(window, document);
