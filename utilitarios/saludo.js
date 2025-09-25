saludar=function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
    let mensaje="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblMensaje",mensaje);
    mostrarImagen("imgPrueba","./imagenes/hola.gif")
    mostrarTextoEnCaja("txtNombre","");
}
