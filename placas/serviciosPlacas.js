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
obtenerProvincia = function (placa) {
    let caracter = placa.charAt(0);
    let errores = null;
    if (caracter == "A") {
        mostrarTexto("provincia", "Provincia: Azuay");
        errores = undefined;
    }
    if (caracter == "B") {
        mostrarTexto("provincia", "Provincia: Bolívar");
        errores = undefined;
    }
    if (caracter == "U") {
        mostrarTexto("provincia", "Provincia: Cañar");
        errores = undefined;
    }
    if (caracter == "C") {
        mostrarTexto("provincia", "Provincia: Carchi");
        errores = undefined;
    }
    if (caracter == "X") {
        mostrarTexto("provincia", "Provincia: Cotopaxi");
        errores = undefined;
    }
    if (caracter == "H") {
        mostrarTexto("provincia", "Provincia: Chimborazo");
        errores = undefined;
    }
    if (caracter == "O") {
        mostrarTexto("provincia", "Provincia: El Oro");
        errores = undefined;
    }
    if (caracter == "E") {
        mostrarTexto("provincia", "Provincia: Esmeraldas");
        errores = undefined;
    }
    if (caracter == "W") {
        mostrarTexto("provincia", "Provincia: Galápagos");
        errores = undefined;
    }
    if (caracter == "G") {
        mostrarTexto("provincia", "Provincia: Guayas");
        errores = undefined;
    }
    if (caracter == "I") {
        mostrarTexto("provincia", "Provincia: Imbabura");
        errores = undefined;
    }
    if (caracter == "L") {
        mostrarTexto("provincia", "Provincia: Loja");
        errores = undefined;
    }
    if (caracter == "R") {
        mostrarTexto("provincia", "Provincia: Los Ríos");
        errores = undefined;
    }
    if (caracter == "M") {
        mostrarTexto("provincia", "Provincia: Manabí");
        errores = undefined;
    }
    if (caracter == "V") {
        mostrarTexto("provincia", "Provincia: Morona Santiago");
        errores = undefined;
    }
    if (caracter == "N") {
        mostrarTexto("provincia", "Provincia: Napo");
        errores = undefined;
    }
    if (caracter == "S") {
        mostrarTexto("provincia", "Provincia: Pastaza");
        errores = undefined;
    }
    if (caracter == "P") {
        mostrarTexto("provincia", "Provincia: Pichincha");
        errores = undefined;
    }
    if (caracter == "K") {
        mostrarTexto("provincia", "Provincia: Sucumbíos");
        errores = undefined;
    }
    if (caracter == "Q") {
        mostrarTexto("provincia", "Provincia: Orellana");
        errores = undefined;
    }
    if (caracter == "T") {
        mostrarTexto("provincia", "Provincia: Tungurahua");
        errores = undefined;
    }
    if (caracter == "Z") {
        mostrarTexto("provincia", "Provincia: Zamora Chinchipe");
        errores = undefined;
    }
    if (caracter == "Y") {
        mostrarTexto("provincia", "Provincia: Santa Elena");
        errores = undefined;
    }
    if (caracter == "J") {
        mostrarTexto("provincia", "Provincia: Santo Domingo de los Tsáchilas");
        errores = undefined;
    }
    return errores;
}
obtenerTipoVehiculo = function (placa) {
    let caracter = placa.charAt(1);
    let errores = null;
    if (caracter == "A" || caracter == "Z") {
        mostrarTexto("vehiculo", "Tipo: Comercial");
        errores = undefined;
    }
    if (caracter == "E") {
        mostrarTexto("vehiculo", "Tipo: Gubernamental");
        errores = undefined;
    }
    if (caracter == "X") {
        mostrarTexto("vehiculo", "Tipo: de Uso Oficial");
        errores = undefined;
    }
    if (caracter == "S") {
        mostrarTexto("vehiculo", "Tipo: Gobierno Provincial");
        errores = undefined;
    }
    if (caracter == "M") {
        mostrarTexto("vehiculo", "Tipo: Municipal");
        errores = undefined;
    }
    if (caracter != "A" && caracter != "Z" && caracter != "E" && caracter != "X" && caracter != "S" && caracter != "M") {
        mostrarTexto("vehiculo", "Tipo: Particular");
        errores = undefined;
    }
    return errores;
}

