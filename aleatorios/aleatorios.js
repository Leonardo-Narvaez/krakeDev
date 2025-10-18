numeroAleatorio = function () {
    let aleatorio = (Math.random() * 100) + 1;
    aleatorio = parseInt(aleatorio);
    return aleatorio;
}
generarAleatorios = function () {
    let aleatorios = [];
    let numero = recuperarInt("txtNumero");
    if (numero < 5 || numero > 20) {
        alert("DEBE INGRESAR UN NUMERO ENTRE 5 Y 20");
    } else {
        for (i = 0; i <= numero - 1; i++) {
            console.log(i);
            let numR = numeroAleatorio();
            aleatorios.push(numR);
        }
    }
    mostrarResultados(aleatorios);
}
mostrarResultados = function (arregloNumeros) {
    let cmpNum = document.getElementById("array")
    let tabla = "<table><tr><th>ARRAY ALEATORIO</th></tr>"
    let num;
    for (i = 0; i <= arregloNumeros.length - 1; i++) {
        num = arregloNumeros[i];
        tabla += "<tr><th>" + num + "</th></tr>";
    }
    tabla += "</table>"
    cmpNum.innerHTML = tabla;


}
