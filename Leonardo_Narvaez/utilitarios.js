
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

recuperarTextoDiv = function (idComponente) {
    let componente = document.getElementById(idComponente);
    let texto = componente.textContent;
    return texto;
}

recuperarFloatDiv = function (idComponente) {
    let valorFlotante = recuperarTextoDiv(idComponente);
    valorFlotante = parseFloat(valorFlotante);
    return valorFlotante;
}

recuperarIntDiv = function (idComponente) {
    let valorEntero = recuperarTextoDiv(idComponente);
    valorEntero = parseInt(valorEntero);
    return valorEntero;
}

mostrarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = false;
}
esMayuscula = function (caracteres) {
    let error = false;
    for (let i = 0; i < caracteres.length; i++) {
        let caracter = caracteres.charAt(i);
        let mayuscula = caracter.charCodeAt(0)
        if ((mayuscula == 209) || mayuscula >= 65 && mayuscula <= 90) {
            error = true;

        } else {
            error = false
            break
        }
    }
    return error;
}
esDigito = function (caracteres) {  //se modifica para strings
    let error = false;
    for (i = 0; i < caracteres.length; i++) {
        let caracter = caracteres.charAt(i);
        let digito = caracter.charCodeAt(0)
        if (digito >= 48 && digito <= 57) {
            error = true;
        } else {
            error = false
            break
        }
    }
    return error;
}
