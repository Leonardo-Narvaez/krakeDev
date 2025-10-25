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
esCaracterEsp = function (caracteres) {               //ESTA MODIFICADO PARA CARACTERES ESPECIALES
    let error = false;
    for (i = 0; i < caracteres.length; i++) {
        let caracter = caracteres.charAt(i);
        let esp = caracter.charCodeAt(0)
        if (esp == 45 || esp == 42 || esp == 95) {
            error = true;
            break
        } else {
            error = false
        }
    }
    return error;
}
esArroba = function (caracteres) {
    let error = false;             //ESTA MODIFICADO PARA CARACTERES ESPECIALES
    for (i = 0; i < caracteres.length; i++) {
        let caracter = caracteres.charAt(i);
        let esp = caracter.charCodeAt(0)
        if (esp == 64) {
            error = true;
            break
        } else {
            error = false
        }

    }
    return error;
}

