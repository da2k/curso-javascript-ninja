<html>

<script>
//1
	var isTruthy = function(x) {
		if (x) {
			return true;
		} else {
			return false;
		}
	};	
// return x ? true : false;  ou return !!x

//2

isTruthy(false)
isTruthy(undefined)
isTruthy(null)
isTruthy('')
isTruthy(0)
isTruthy(-0)
isTruthy(NaN)

//3

isTruthy(1);
isTruthy('Leo');
isTruthy([]);
isTruthy({});
isTruthy(function(){});
isTruthy('Curso JS Ninja');
isTruthy(20*30);
isTruthy(10+10);
isTruthy([1,2,3])
isTruthy({a: 1, b: 2})

//4

var carro = {
	marca: 'Fiat',
	modelo: 'Uno',
	placa: 'IVC5202',
	ano: 2015,
	cor: 'red',
	quantasPortas: 5,
	assentos: 5,
	quantidadePessoas: 0

};

























</script>













</html>