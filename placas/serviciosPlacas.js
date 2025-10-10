validarEstructura = function (placa) {
    let longitud = placa.length;
    let errores = null;
    let mensajes = [];
    if (longitud < 7 || longitud > 8) {
        mensajes.push("La placa debe tener 7 u 8 caracteres");
        errores = undefined;
    }
    let car1 = placa.charAt(0);
    if (!esMayuscula(car1)) {
        mensajes.push("El primer caracter debe ser una mayuscula");
        errores = undefined;
    }
    let car2 = placa.charAt(1);
    if (!esMayuscula(car2)) {
        mensajes.push("El segundo caracter debe ser una mayuscula");
        errores = undefined;
    }
    let car3 = placa.charAt(2);
    if (!esMayuscula(car3)) {
        mensajes.push("El tercer caracter debe ser una mayuscula");
        errores = undefined;
    }
    let car4 = placa.charAt(3);
    if (!esGuion(car4)) {
        mensajes.push("El cuarto caracter debe ser un guion");
        errores = undefined
    }
    let car5 = placa.charAt(4);
    if (!esDigito(car5)) {
        mensajes.push("El quinto caracter debe ser un digito");
        errores = undefined;
    }
    let car6 = placa.charAt(5);
    if (!esDigito(car6)) {
        mensajes.push("El sexto caracter debe ser un digito");
        errores = undefined;
    }
    let car7 = placa.charAt(6);
    if (!esDigito(car7)) {
        mensajes.push("El septimo caracter debe ser un digito");
        errores = undefined;
    }
    if (longitud == 8) {
        let car8 = placa.charAt(7);
        if (!esDigito(car8)) {
            mensajes.push("El octavo caracter debe ser un digito");
            errores = undefined;
        }
    }
    if (errores == undefined) {
        mostrarTexto("lblErrores", mensajes.join("\n"));
    } else {
        mostrarTexto("lblErrores", "");
    }
    return errores
}