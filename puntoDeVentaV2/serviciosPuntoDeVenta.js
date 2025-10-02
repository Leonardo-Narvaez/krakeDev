calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let descuento;
    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * 0.04;
    } else if (cantidad >= 12) {
        descuento = subtotal * 0.05;
    }
    descuento=descuento.toFixed(2)
    return descuento
}
calcularIva = function (monto) {
    let valor1;
    let valorIVA
    valor1 = (monto * 1.12) - monto;
    valorIVA = valor1.toFixed(2);
    valorIVA = parseFloat(valorIVA)
    return valorIVA;
}
calcularSubtotal = function (precio, cantidad) {
    let subtotal;
    subtotal = precio * cantidad;
    subtotal = subtotal.toFixed(2)
    return subtotal;
}
calcularTotal = function (subtotal, descuento, iva) {
    let total = subtotal - descuento + iva;
    total = total.toFixed(2);
    return total;
}
