calcularTasaInteres=function(ingresoAnual){
 let tasa;
    if(ingresoAnual<300000){
        tasa=0.16;
    }else if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasa=0.15;
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasa=0.14;
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasa=0.13;
    }else if(ingresoAnual>=2000000){
        tasa=0.12;
    }
    return tasa;
}
calcularCapacidadPago=function(edad,ingresos,egresos){
    let valorCuota;
    if(edad>50){
        valorCuota=(egresos-ingresos)*0.30;
    }else if(edad<=50){
        valorCuota=(egresos-ingresos)*0.40;
    }
    return valorCuota
}
calcularDescuento=function(precio,cantidad){
    let valorDescuento;
    if(cantidad>3){
        valorDescuento=precio-0;
    }else if(cantidad>=3 && cantidad<=5){
        valorDescuento=(precio*0.02)-precio;
    }else if(cantidad>=6 && cantidad<=11){
        valorDescuento=(precio*0.03)-precio;
    }else if(cantidad>=12){
        valorDescuento=(precio*0.04)-precio;
    }
    return valorDescuento;
}
determinarColesterolLDL=function(nivelColesterol){
    let nivelC;
    if(nivelColesterol>100){
        nivelC="OPTIMO";
    }else if(nivelColesterol>=100 && nivelColesterol<=129){
        nivelC="CASI OPTIMO";
    }else if(nivelColesterol>=130 && nivelColesterol<=159){
        nivelC="LIMITE ALTO";
    }else if(nivelColesterol>=160){
        nivelC="ALTO";
    }
    return nivelC;
}
validarClave=function(clave){
    let ext=clave.lenght;
    if(ext>=8 && ext<=16){
        return true; 
    }else{
        return false;
    }
}
esMayuscula=function(caracter){
    let ascii=caracter.charCodeAt(0);
    if(ascii>=65 && ascii<=90){
        return true;
    }else{
        return false;
    }
}
esMinuscula=function(caracter){
    let ascii=caracter.charCodeAt(0);
    if(ascii>=97 && ascii<=122 || ascii==160,130,161,162,163){
        return true;
        }else{
            return false;
        }
}
esDigito=function(caracter){
    let ascii=caracter.charCodeAt(0);
    if(ascii>=48 && ascii<=57){
        return true;
    }else{
        return false;
    }
}
darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }else{
        return false;
    }
}
otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
    if(notaMatematica>90 || notaFisica>90 && notaGeometria>80){
        return true;
    }else{
        return false
    }
}
dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    let permiso;
    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90 && notaFisica>notaMatematica){
        return true;
    }else{
        return false;
    }
}

