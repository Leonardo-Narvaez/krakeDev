let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;
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
            alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");

        }

    } else {
        alert("DEBE INGRESAR UNA PALABRA DE 5 LETRAS MAYUSCULAS");
    }
}
mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra);
    }
    if (posicion == 1) {
        mostrarTexto("div1", letra);
    }
    if (posicion == 2) {
        mostrarTexto("div2", letra);
    }
    if (posicion == 3) {
        mostrarTexto("div3", letra);
    }
    if (posicion == 4) {
        mostrarTexto("div4", letra);
    }

}
validar = function (letra) {
    let letrasEncontradas = 0;
    for (i = 0; i <= palabraSecreta.length; i++) {
        let caracter = palabraSecreta.charAt(i);
        if (caracter == letra) {
            mostrarLetra(caracter, i);
            letrasEncontradas++;
            coincidencias++;
        }
    }
    if (letrasEncontradas == 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }
}
ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    intentos++;
    if (!esMayuscula(letra)) {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    } else {
        validar(letra);
        if (coincidencias == 5) {
            mostrarImagen("ahorcadoImagen", "ganador.gif");
        }
        if (intentos == 10) {
            mostrarImagen("ahorcadoImagen", "gameOver.gif");
        }
    }
}
mostrarAhorcado = function () {
    if (errores == 1) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    }
    if (errores == 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    }
    if (errores == 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    }
    if (errores == 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    }
    if (errores == 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    }
    if (errores == 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    }
    if (errores == 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    }
    if (errores == 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    }
    if (errores == 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }
}