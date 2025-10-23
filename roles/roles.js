let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "5025649837", nombre: "Hector", apellido: "Lavoe", sueldo: 460.0 }
]
let esNuevo = false;
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarCajasYBoton();
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
ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}
buscarEmpleado = function (cedula) {
    let empleadoEnc;
    let empleado = null;
    for (let i = 0; i < empleados.length; i++) {
        empleadoEnc = empleados[i];
        if (cedula == empleadoEnc.cedula) {
            empleado = empleadoEnc;
            break
        }
    }
    return empleado;
}
agregarEmpleado = function (empleado) {
    let validar = buscarEmpleado(empleado.cedula);
    let error = false;
    if (validar == null) {
        empleados.push(empleado);
        error = true;
    }
    return error;
}
guardar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");
    let error = true;
    if (cedula === "") {
        mostrarTexto("lblErrorCedula", "CAMPO OBLIGATORIO")
        error = false;
    } else {
        if (cedula.length != 10) {
            mostrarTexto("lblErrorCedula", "Debe tener 10 caracteres");
            error = false;
        }
        if (!esDigito(cedula)) {
            mostrarTexto("lblErrorCedula", "La cedula debe contener solo digitos");
            error = false;
        }
        if (error == true) {
            mostrarTexto("lblErrorCedula", "");
        }
    }
    if (nombre === "") {
        mostrarTexto("lblErrorNombre", "CAMPO OBLIGATORIO");
        error = false;
    } else {
        error = true;
        if (nombre.length < 3) {
            mostrarTexto("lblErrorNombre", "Debe tener al menos 3 caracteres");
            error = false;
        }
        if (!esMayuscula(nombre) && nombre.length >= 3) {
            mostrarTexto("lblErrorNombre", "El nombre debe ser en mayusculas");
            error = false;
        }
        if (error == true) {
            mostrarTexto("lblErrorNombre", "");
        }
    }
    if (apellido === "") {
        mostrarTexto("lblErrorApellido", "CAMPO OBLIGATORIO");
        error = false;
    } else {
        if (apellido.length < 3) {
            mostrarTexto("lblErrorApellido", "Debe tener al menos 3 caracteres");
            error = false
        }
        if (!esMayuscula(apellido) && apellido.length >= 3) {
            mostrarTexto("lblErrorApellido", "El apellido debe ser en mayusculas");
            error = false;
        }
        if (error == true) {
            mostrarTexto("lblErrorApellido", "");
        }
    }
    if (isNaN(sueldo)) {

        mostrarTexto("lblErrorSueldo", "CAMPO OBLIGATORIO");
        error = false;
    } else {
        if ((sueldo < 400 || sueldo > 5000)) {
            mostrarTexto("lblErrorSueldo", "Debe ser un valor entre 400 y 5000");
            error = false;
        }
        if (error == true) {
            mostrarTexto("lblErrorSueldo", "");
        }
    }
    if (error == true) {
        if (esNuevo == true) {
            let empleado = {};
            empleado.cedula = cedula;
            empleado.nombre = nombre;
            empleado.apellido = apellido;
            empleado.sueldo = sueldo;
            let validar = agregarEmpleado(empleado);
            if (validar == true) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarCajasYBoton();
                esNuevo = false;
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + cedula);
                let empleadoExistente = buscarEmpleado(cedula);
                empleadoExistente.nombre = nombre;
                empleadoExistente.apellido = apellido;
                empleadoExistente.sueldo = sueldo;
                alert("EMPLEADO MODIFICADO EXITOSAMENTE");
                mostrarEmpleados();
                deshabilitarCajasYBoton();
            }
        }
    }
}
ejecutarBusqueda = function () {
    let empleado = buscarEmpleado(recuperarTexto("txtBusquedaCedula"));
    if (empleado != null) {
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
    } else {
        alert("EL EMPLEADO NO EXISTE");
    }
}
deshabilitarCajasYBoton = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

