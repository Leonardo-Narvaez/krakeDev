validarPlaca=function(){
    let placa = recuperarTexto("placa");
    let erroresEstructura = validarEstructura(placa);
    if (erroresEstructura === null){
        mostrarTexto("lblResultado", "Estructura Valida");
        let erroresProvincia = obtenerProvincia(placa);
        if(erroresProvincia === null){
            mostrarTexto("provincia","Provincia Incorrecta");
        }
 

    }else{
        mostrarTexto("lblResultado", "Estructura Incorrecta");
        mostrarTexto("provincia", "");
    }
}
