let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
probarAgregar = function () {
    let nota = recuperarInt("txtNota");
    agregarNota(nota);
}
agregarNota = function (nota) {
    notas.push(nota);
    mostrarNotas();
}
recorrerArreglo = function () {
    let notaR = 0;
    for (i = 0; i <= notas.length - 1; i++) {
        notaR = notas[i];
        console.log(notaR);
    }
}
ejecutarPromedio = function () {
    let resultado = calcularPromedio();
    mostrarTexto("lblResultado", resultado);
}
calcularPromedio = function () {
    let sumarNotas = 0;
    let promedio;
    for (i = 0; i <= notas.length - 1; i++) {
        sumarNotas += notas[i];
    }
    promedio = sumarNotas / notas.length;
    return promedio;
}
agregarTabla = function () {
    let tabla = "";
    let cmpTabla = document.getElementById("divTabla");
    tabla += "<table><tr><td>UNKNOWN</td></tr>" +
        "<tr><td>DOS</td><td>TRES</td></tr></table>";
    cmpTabla.innerHTML = tabla;
}
mostrarNotas = function () {
    let cmpTabla = document.getElementById("divTabla");
    let tabla = "<table><tr><th>NOTAS</th></tr>";
    let miNota;
    for (i = 0; i <= notas.length - 1; i++) {
        miNota = notas[i];
        tabla += "<tr><td>" + miNota + "</tr></td>"
    }
    tabla += "</table>";
    cmpTabla.innerHTML = tabla;
}