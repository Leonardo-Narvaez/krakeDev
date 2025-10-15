obtenerAleatorio = function () {
    let aleatorio = Math.random() * 3 + 1;
    aleatorio = parseInt(aleatorio);
    return aleatorio;
}
generarElemento = function () {
    let aleatorio = obtenerAleatorio();
    if (aleatorio == 1) {
        return "piedra";
    }
    if (aleatorio == 2) {
        return "papel";
    }
    if (aleatorio == 3) {
        return "tijera";
    }
}
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0;
    }
    if ((eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
        (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
        (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")) {
        return 1;
    } else {
        return 2;
    }
}
generarRuta = function (eleccion) {
    if (eleccion == "piedra") {
        return "./imagenes/piedra.png";
    }
    if (eleccion == "papel") {
        return "./imagenes/papel.png";
    }
    if (eleccion == "tijera") {
        return "./imagenes/tijera.png";
    }
}