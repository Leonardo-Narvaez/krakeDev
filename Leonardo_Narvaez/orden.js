let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
]
guardar = function () {
    agregarPersona();
}
agregarPersona = function () {
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarTexto("txtEdad");
    let error = true;
    if (nombre.length < 3) {
        mostrarTexto("lblErrorNombre", "DEBE TENER AL MENOS 3 CARACTERES");
        error = false;
    }
    if (edad < 0 || edad > 100) {
        mostrarTexto("lblErrorEdad", "DEBE SER UN VALOR ENTRE 0 Y 100");
        error = false;
    }
    if (error == true) {
        let persona = {}
        persona.nombre = nombre;
        persona.edad = edad;
        personas.push(persona);
        alert("PERSONAS AGREGADA CORRECTAMENTE");
        mostrarTablaPersonas();
    }

}
mostrarTablaPersonas = function () {
    let tabla = "<table><tr><th>Nombre</th><th>EDAD</th>";
    let idTabla = document.getElementById("tablaPersonas");
    for (i = 0; i < personas.length; i++) {
        let posicion = personas[i];
        tabla += "<tr><td>" + posicion.nombre + "</td><td>" + posicion.edad + "</td></tr>";
    }
    tabla += "</table>";
    idTabla.innerHTML = tabla;
}
determinarMayor = function () {
    let mayor = encontrarMayor();
    mostrarTexto("lblPersonaMayor", mayor.nombre + " con " + mayor.edad + " años es la persona mayor")
}
encontrarMayor = function () {
    let personaMayor = personas[0];
    let elmPersona;
    for (i = 1; i < personas.length; i++) {
        elmPersona = personas[i];
        if (elmPersona.edad > personaMayor.edad) {
            personaMayor = elmPersona;
        }
    }
    return personaMayor;

}
determinarMenor = function () {
    let menor = encontrarMenor();
    mostrarTexto("lblPersonaMenor", menor.nombre + " con " + menor.edad + " años es la persona menor")

}
encontrarMenor = function () {
    let personaMenor = personas[0];
    let elmPersona;
    for (i = 1; i < personas.length; i++) {
        elmPersona = personas[i];
        if (elmPersona.edad < personaMenor.edad) {
            personaMenor = elmPersona;
        }
    }
    return personaMenor;
}