saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
    
}
recuperarTexto=function(idComponente){
    let componente=document.getElementById(idComponente);
    let valorIngresado=componente.value;
    return valorIngresado;
}
recuperarInt=function(idComponente){
    let valorInt=recuperarTexto(idComponente);
    valorInt=parseInt(valorInt)
    return valorInt;
}
recuperarFloat=function(idComponente){
    let valorFloat=recuperarTexto(idComponente);
    valorFloat=parseFloat(valorFloat);
    return valorFloat;
}