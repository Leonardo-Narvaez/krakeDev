let puntosUsuario = 0;
let puntosComputador = 0;
jugar = function (seleccionado) {
    if (puntosUsuario == 5 || puntosComputador == 5) {
        return;
    }
    let elemento = generarElemento();
    mostrarImagen("imgComputador", generarRuta(elemento));
    let ganador = determinarGanador(elemento, seleccionado);
    if (ganador == 0) {
        mostrarTexto("resultado", "EMPATE");
    }
    if (ganador == 1) {
        mostrarTexto("resultado", "PERDISTE LA PARTIDA");
        puntosComputador + 1;
    }
    if (ganador == 2) {
        mostrarTexto("resultado", "GANASTE LA PARTIDA");
        puntosUsuario + 1;
    }
    mostrarTexto("puntosU", puntosUsuario);
    mostrarTexto("puntosC", puntosComputador);

    if (puntosUsuario == 5) {
        mostrarTexto("ganador", "HAS GANADO EL JUEGO");

    }
    if (puntosComputador == 5) {
        mostrarTexto("ganador", "EL COMPUTADOR TE HA VENCIDO");
    }
}
limpiar = function () {
    puntosUsuario = 0;
    puntosComputador = 0;
    mostrarTexto("resultado", "");
    mostrarTexto("puntosU", "0");
    mostrarTexto("puntosC", "0");
    mostrarTexto("ganador", "");
    mostrarImagen("imgComputador", "");
}