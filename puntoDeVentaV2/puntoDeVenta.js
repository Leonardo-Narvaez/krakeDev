calcularValorTotal = function () {
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");
    if (esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2")
        & esPrecioValido(precioProducto, "lblError3")) {

        let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);
        let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);
        let valorIVA = calcularIva(valorSubtotal - valorDescuento);
        mostrarTexto("lblValorIVA", valorIVA);
        let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);
    }



}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
}
esProductoValido = function (nombreProducto, idError) {
    let caracter = nombreProducto.length;
    let error = true;
    if (caracter == 0) {
        mostrarTexto(idError, "CAMPO OBLIGATORIO");
        error = false;
    }
    if (caracter < 0 || caracter > 10) {
        mostrarTexto(idError, "MAXIMO 10 CARACTERES");
        error = false;
    }
    if (error == true) {
        mostrarTexto(idError, "");
    }
    return error;

}
esCantidadValida = function (cantidad, idError) {
    let error = true;
    if (isNaN(cantidad)) {
        mostrarTexto(idError, "CAMPO OBLIGATORIO");
        error = false;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idError, "INGRESE VALOR ENTRE 0 Y 100")
        error = false;
    }
    if (error == true) {
        mostrarTexto(idError, "");
    }
    return error;
}
esPrecioValido = function (precioProducto, idError) {
    let error = true;
    if (isNaN(precioProducto)) {
        mostrarTexto(idError, "CAMPO OBLIGATORIO");
        error = false;
    }
    if (precioProducto < 0 || precioProducto > 50) {
        mostrarTexto(idError, "INGRESE VALOR ENTRE 0 Y 50");
        error = false;
    }
    if (error == true) {
        mostrarTexto(idError, "");
    }
    return error;
}