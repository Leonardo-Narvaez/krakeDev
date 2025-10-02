let puntos=0;
let lanzamientos=5;

jugar=function(){
    let resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}
lanzarDado=function(){
    let aleatorio=Math.random();
    let aleatorioMultiplicado=aleatorio*6;
    let aleatorioEntero=parseInt(aleatorioMultiplicado);
    let valorDado=aleatorioEntero+1;
    return valorDado;
}
mostrarCara=function(resultado){
if(resultado == 1){
cambiarImagen("imgDado","dados1.png");
}else if(resultado == 2){
    cambiarImagen("imgDado","dados2.png");
}else if(resultado == 3){
    cambiarImagen("imgDado","dados3.png");
}else if(resultado == 4){
    cambiarImagen("imgDado","dados4.png");
}else if(resultado == 5){
    cambiarImagen("imgDado","dados5.png");
}else if(resultado == 6){
    cambiarImagen("imgDado","dados6.png");
}
}
modificarPuntos=function(resultado){
    puntos=puntos+resultado;
    cambiarTexto("puntos",puntos);
     if(puntos>=20){
        cambiarTexto("gano","GANASTE")
        setTimeout(limpiar,1000)
    }
}
    
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lanzamientos",lanzamientos);
    if(lanzamientos==0 && puntos<20){
        cambiarTexto("gano","GAME OVER");
        setTimeout(limpiar,1000);       
    }
           
}

limpiar=function(){
    puntos=0;
    cambiarTexto("puntos",0)
    lanzamientos=5;
    cambiarTexto("lanzamientos",5)
    cambiarImagen("imgDado","");
    cambiarTexto("gano","");
}   
    