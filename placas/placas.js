validarPlaca=function(){
    let placa = recuperarTexto("placa");
    let erroresEstructura = validarEstructura(placa);
    if (erroresEstructura === null){
        mostrarTexto("lblResultado", "Estructura Valida");
    }else{
        mostrarTexto("lblResultado", "Estructura Incorrecta");
    }
}