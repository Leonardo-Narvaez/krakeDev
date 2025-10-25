let estudiantes = [
    { nombre: "Leonardo Narvaez", correo: "leonardonarvaez12@gmail.com", id: "1050447273" },
    { nombre: "Juan Perez", correo: "juanitoperez54@hotmail.com", id: "9999999999" },
];

agregarEstudiante = function () {
    let nombre = recuperarTexto("txtNombre");
    let correo = recuperarTexto("txtCorreo");
    let id = recuperarTexto("txtId");
    let error = true;

    if (nombre === "") {
        mostrarTexto("lblErrorNombre", "El nombre es obligatorio");
        error = false;
    } else {
        if (esDigito(nombre)) {
            mostrarTexto("lblErrorNombre", "El nombre solo puede contener letras y espacios")
            error = false;
        } else {
            mostrarTexto("lblErrorNombre", "")
        }
    }
    if (correo === "" || !esArroba(correo)) {
        mostrarTexto("lblErrorCorreo", "Ingrese un correo valido");
        error = false;
    } else {
        mostrarTexto("lblErrorCorreo", "");
    }
    if (id == "") {
        mostrarTexto("lblErrorId", "El ID es obligatorio");
        error = false;

    } else {
        if (!esDigito(id)) {
            mostrarTexto("lblErrorId", "El ID debe contener solo numeros")
            error = false;
        } else {
            mostrarTexto("lblErrorId", "");
        }
        if (error == true) {
            let estudianteEnc = buscarEstudiante(id);
            if (estudianteEnc != null) {
                estudianteEnc.nombre = nombre;
                estudianteEnc.correo = correo;
                alert("Estudiante Actualizado con exito");
            } else {
                let estudiante = {};
                estudiante.nombre = nombre;
                estudiante.correo = correo;
                estudiante.id = id;
                estudiantes.push(estudiante);
                alert("Estudiante creado con exito");
            }
            mostrarEstudiantes();
            limpiar();
        }

    }
}
buscarEstudiante = function (id) {
    let estudianteEnc;
    let estudiante = null;
    for (let i = 0; i < estudiantes.length; i++) {
        estudianteEnc = estudiantes[i];
        if (id == estudianteEnc.id) {
            estudiante = estudianteEnc;
            break
        }
    }
    return estudiante;
}
eliminarEstudiante = function () {
    let id = recuperarTexto("txtId");
    let error = true;
    if (id == "") {
        mostrarTexto("Ingrese un Id para eliminar");
        error = false;
    } else {
        mostrarTexto("lblErrorId", "")
    }
    if (error == true); {
        let estudiante = buscarEstudiante(id);
        if (estudiante != null) {
            eliminar(id),
                mostrarEstudiantes();
        }
    }
    limpiar();
}
limpiar = function () {
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtCorreo", "");
    mostrarTextoEnCaja("txtId", "");
    mostrarEstudiantes();

}
mostrarEstudiantes = function () {
    let idTabla = document.getElementById("tablaEstudiantes");
    let estudianteRecibido;
    let contenidoTabla = "<table><tr><th>ID</th><th>NOMBRE</th><th>CORREO</th></tr>";
    for (let i = 0; i < estudiantes.length; i++) {
        estudianteRecibido = estudiantes[i];
        contenidoTabla += "<tr><td>" + estudianteRecibido.id + "</td><td>"
            + estudianteRecibido.nombre + "</td><td>" + estudianteRecibido.correo
            + "</td><td></tr>";
    }
    contenidoTabla += "</table>";
    idTabla.innerHTML = contenidoTabla;
}
eliminar = function (id) {
    let estudianteEnc;
    let estudiante = null;
    for (let i = 0; i < estudiantes.length; i++) {
        estudianteEnc = estudiantes[i];
        if (id == estudianteEnc.id) {
            estudiantes.splice(i, 1);
            alert("Estudiante eliminado correctamente");
            break
        }
    }
    return estudiante;
}