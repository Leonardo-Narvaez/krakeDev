esMayuscula = function (caracter) {
    let mayuscula = caracter.charCodeAt(0);
    if ((mayuscula == 209) || mayuscula >= 65 && mayuscula <= 90) {
        return true;
    } else {
        return false;
    }
}
esDigito = function (caracter) {
    let digito = caracter.charCodeAt(0);
    if (digito >= 48 && digito <= 57) {
        return true;
    } else {
        return false;
    }
}
esCaracterEsp = function (caracter) {               //ESTA MODIFICADO PARA CARACTERES ESPECIALES
    let esp = caracter.charCodeAt(0); 
    if (esp == 45 || esp == 42 || esp == 95){
        return true;
    }else{
        return false;
    }
}
