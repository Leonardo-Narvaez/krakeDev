let palabraSecreta = "";
esMayuscula = function (caracter) {
    let mayuscula = caracter.charCodeAt(0);
    if ((mayuscula == 209) || mayuscula >= 65 && mayuscula <= 90) {
        return true;
    } else {
        return false;
    }
}
guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    if (palabra.length == 5) {
        let cont = 0;
        for (i = 0; i <= palabra.length - 1; i++) {
            let caracter = palabra.charAt(i);
            if (!esMayuscula(caracter)) {
                cont++;
            }
        }
        if (cont == 0) {
            palabraSecreta = palabra;
            console.log(palabra);

        } else {
            alert("Debe ingresar una palabra de 5 letras mayusculas");

        }

    } else {
        alert("Debe ingresar una palabra de 5 letras mayusculas");
    }
}