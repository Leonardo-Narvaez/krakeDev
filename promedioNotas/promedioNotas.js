calcularPromedioNotas=function(){
    let n1=recuperarFloat("nota1");
    let n2=recuperarFloat("nota2");
    let n3=recuperarFloat("nota3");
    let promedio=calcularPromedio(n1,n2,n3);
    promedio=promedio.toFixed(2);
    mostrarTexto("resultado",promedio);
    if(promedio>=0 && promedio<5){
        mostrarImagen("imgResultado","fracaso.gif");
    }else if(promedio>=5 && promedio<=8){
        mostrarImagen("imgResultado","bt.gif");
    }else if(promedio>8 && promedio<=10){
        mostrarImagen("imgResultado","mn.gif")
    }else{
        mostrarTexto("resultado","DATOS INCORRECTOS")
        mostrarImagen("imgResultado","error.gif")
    }
}