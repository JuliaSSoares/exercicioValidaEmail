
var email = prompt("Digite o e-mail :)");

exibeResultadoValidacao();


function validaEmail(email){

    var verificacao = email.indexOf("@");

    if (verificacao < 0) {
        return false
    } else {
        return true
    }
}


function exibeResultadoValidacao(){

    if (validaEmail(email) == true) {
        return document.write("<h3> Email válido!</h3>");
    } else {
        return document.write("<h3> Email inválido!</h3> ");
    }

}
