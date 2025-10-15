ejecutarPrueba1 = function () {
    let cadena = recuperarTexto("txtCadena");
    recorrerCadena(cadena);
}
ejecutarPrueba2 = function () {
    let cadena = recuperarTexto("txtCadena");
    let palabra = cadenaInvertida(cadena);

}
recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}
cadenaInvertida = function (cadena) {
    let caracter = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter += cadena.charAt(posicion);
        mostrarTexto("resultadoPrueba2", caracter);
    }
}