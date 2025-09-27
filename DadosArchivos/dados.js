jugar=function(){ 
    let valorAl=lanzarDado();
    mostrarTexto("lblNumero",valorAl);
    if(valorAl>3){
        mostrarTexto("msj1","ES MAYOR A 3");
        mostrarTexto("msj2","GANASTE");
    }else{
        mostrarTexto("msj1","PERDISTE");
        mostrarTexto("msj2","ESTAS DE MALAS");
    }
}
lanzarDado=function(){
    let aleatorio=Math.random()*6+1;
    aleatorio=parseInt(aleatorio);
    return aleatorio;
}