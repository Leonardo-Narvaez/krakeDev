let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "5025649837", nombre: "Hector", apellido: "Lavoe", sueldo: 460.0 }
]
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}
mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}
mostrarEmpleados = function () {
    let idTabla = document.getElementById("tablaEmpleados");
    let empleadoRecibido;
    let contenidoTabla = "<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th>"
        + "<th>SUELDO</th>";
    for (let i = 0; i < empleados.length; i++) {
        empleadoRecibido = empleados[i];
        contenidoTabla += "<tr><td>" + empleadoRecibido.cedula + "</td><td>"
            + empleadoRecibido.nombre + "</td><td>" + empleadoRecibido.apellido
            + "</td><td>" + empleadoRecibido.sueldo + "</td></tr>";
    }
    contenidoTabla += "</table>";
    idTabla.innerHTML = contenidoTabla;
}

