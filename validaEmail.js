
var email = prompt("Digite o e-mail :)")


function validaEmail(email){

    var verificacao = email.indexOf("@");
    if ( verificacao < 0){
       return false
    } else {
        return true
    }
}

var resultado = validaEmail(email);

function exibeResultadoValidacao(resultado){

    if (validaEmail(resultado) == true){
        return document.write("<h3> Email válido!</h3> ");
    } else {
        return document.write("<h3> Email inválido!</h3> ");
    }

}
