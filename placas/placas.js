validarPlaca = function () {
    let placa = recuperarTexto("placa");
    let erroresEstructura = validarEstructura(placa);
    if (erroresEstructura === null) {
        mostrarTexto("lblResultado", "Estructura Valida");
        let erroresProvincia = obtenerProvincia(placa);
        if (erroresProvincia === null) {
            mostrarTexto("provincia", "Provincia Incorrecta");
        }
        let tipoVehiculo = obtenerTipoVehiculo(placa);
        if (tipoVehiculo === null) {
            mostrarTexto("vehiculo", "Tipo de vehiculo incorrecto")
        }
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(placa);


    } else {
        mostrarTexto("lblResultado", "Estructura Incorrecta");
        mostrarTexto("provincia", "");
        mostrarTexto("vehiculo", "");
        mostrarTexto("dia", "");
    }
}
limpiar = function () {
    mostrarTextoEnCaja("placa", "");
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblErrores", "");
    mostrarTexto("provincia", "");
    mostrarTexto("vehiculo", "");
    mostrarTexto("dia", "");
}
