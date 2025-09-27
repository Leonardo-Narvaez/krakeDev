calcularPromedioNotas=function(){
    let n1=recuperarFloat("nota1");
    let n2=recuperarFloat("nota2");
    let n3=recuperarFloat("nota3");
    let promedio=calcularPromedio(n1,n2,n3);
    promedio=promedio.toFixed(2);
    mostrarTexto("resultado",promedio);
    if(promedio>7){
        mostrarImagen("imgResultado","mn.gif");
    }else{
        mostrarImagen("imgResultado","fracaso.gif");
    }
}