ejecutarValidacion = function () {
    let password = recuperarTexto("txtPassword");
    validarPassword(password);
}
validarPassword = function (password) {
    let errores = true;
    let mensajes = [];
    if (password.length < 8 || password.length > 16) {
        mensajes.push("La longitud debe ser entre 8 y 16 caracteres")
        errores = false;
    }
    let cont1 = 0;
    for (i = 0; i <= password.length - 1; i++) {
        let caracter = password.charAt(i);
        if (!esMayuscula(caracter)) {
            cont1++;
            errores = false;
        }
    }
    if (cont1 == password.length) {
        mensajes.push("Debe contener al menos una letra en mayuscula");
    }

    let cont2 = 0;
    for (i = 0; i <= password.length - 1; i++) {
        let caracter = password.charAt(i);
        if (!esDigito(caracter)) {
            cont2++;
            errores = false;
        }
    }
    if (cont2 == password.length) {
        mensajes.push("Debe contener al menos un dígito")
    }

    let cont3 = 0;
    for (i = 0; i <= password.length - 1; i++) {
        let caracter = password.charAt(i);
        if (!esCaracterEsp(caracter)) {
            cont3++;
            errores = false;
        }
    }
    if (cont3 == password.length) {
        mensajes.push("Debe contener al menos un caracter especial (*)(-)(_)")
    }
    if (!errores) {
        mostrarTexto("lblErrores", mensajes.join("\n"));
    }

}