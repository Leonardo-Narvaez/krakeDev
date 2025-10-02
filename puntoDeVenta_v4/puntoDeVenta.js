calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto=recuperarTexto("txtProducto");
    let precioProducto=recuperarFloat("txtPrecio");
    let cantidad=recuperarInt("txtCantidad"); 
    let porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");

    //variables para almacenar los retornos de las funciones
    let valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblSubtotal",valorSubtotal);
    let valorDescuento=calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    mostrarTexto("lblDescuento",valorDescuento);
    let valorIVA=calcularIva(valorSubtotal-valorDescuento);
    mostrarTexto("lblValorIVA",valorIVA);
    let valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA); 
    mostrarTexto("lblTotal",valorTotal);
    let mensaje=" Valor a pagar por "+cantidad+" "+nombreProducto+" con "+porcentajeDescuento+"% de descuento: USD "+valorTotal
    let resumen=mostrarTexto("lblResumen",mensaje);
}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto","");
   mostrarTextoEnCaja("txtPrecio","");
   mostrarTextoEnCaja("txtCantidad","");
   mostrarTextoEnCaja("txtPorcentajeDescuento","")
   mostrarTexto("lblSubtotal","0.0");
   mostrarTexto("lblDescuento","0.0");
   mostrarTexto("lblValorIVA","0.0");
   mostrarTexto("lblTotal","0.0");
   mostrarTexto("lblResumen","");

}
