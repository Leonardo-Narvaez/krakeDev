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