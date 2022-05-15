//console.log('javaScript carregado');
function validaCpf(cpf) { 
    console.log(cpf.length);
    if (

    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
        
        ) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        // console.log('numero dos cpf ' + numeros );
        // console.log('digitos dos cpf ' + digitos );

        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        // console.log(soma);
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        // validaçao do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false
        } 
        
        // console.log(
        //     digitos.toString( ).charAt(0) + ' é a primeira posiçao da variavel soma'
        // );

        soma = 0;
        numeros = cpf.substring(0, 10);


        for (var k = 11; k > 1; k--) { 
            soma += numeros.charAt(11 - k) * k;
        }

       // console.log(soma);

        resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        // Validaçao segundo digito
        if (resultado != digitos.charAt(1)) {
            return  false;
        } 

        return true;
    }
}

function validacao ( ){
    console.log('iniciando a validação do CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

