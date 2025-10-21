recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado;
}
recuperarInt=function(idComponente){
    let valorInt=recuperarTexto(idComponente);
    valorInt=parseInt(valorInt);
    return valorInt;
}
recuperarFloat=function(idComponente){
    let valorFloat=recuperarTexto(idComponente);
    valorFloat=parseFloat(valorFloat);
    return valorFloat;
}
mostrarTexto=function(idComponente,mensaje){
    let cmpTxt=document.getElementById(idComponente);
    cmpTxt.innerText=mensaje;

}
mostrarImagen=function(idComponente,imagen){
    let cmpimagen=document.getElementById(idComponente);
    cmpimagen.src=imagen;
}
mostrarTextoEnCaja=function(idComponente,txt){
    let cmpTxt=document.getElementById(idComponente);
    cmpTxt.value=txt;
}