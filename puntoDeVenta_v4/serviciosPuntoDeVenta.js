calcularValorDescuento=function(monto,porcentajeDescuento){
let descuento;
descuento=(monto*porcentajeDescuento)/100;
return descuento;
}
calcularIva=function(monto){
    let valor1;
    let valorIVA
    valor1=(monto*1.12)-monto;
    valorIVA=valor1.toFixed(3);
    valorIVA=parseFloat(valorIVA);
    return valorIVA;
}
calcularSubtotal=function(precio,cantidad){
    let subtotal;
    subtotal=precio*cantidad;
    return subtotal;
}
calcularTotal=function(subtotal,descuento,iva){
    let total;
    total=subtotal+iva-descuento;
    return total;
}
