let clientes = [{ cedula: 11111, nombre: "Leonardo", edad: 24 },
{ cedula: 22222, nombre: "Pamela", edad: 22 },
{ cedula: 33333, nombre: "Hector", edad: 45 }];

mostrarClientes = function () {
    let idMostrar = document.getElementById("tablaClientes")
    let elmCliente;
    let contenido = "<table><tr><th>Cedula</th><th>Nombre</th><th>Edad</th></tr>";
    for (let i = 0; i < clientes.length; i++) {
        elmCliente = clientes[i];
        contenido += "<tr><td>" + elmCliente.cedula + "</td>"
            + "<td>" + elmCliente.nombre + "</td>"
            + "<td>" + elmCliente.edad + "</td></tr>";
    }
    contenido += "</table>";
    idMostrar.innerHTML = contenido;

}
buscarCliente = function (cedula) {
    let clienteRegistrado = null;
    let elmCliente;
    for (let i = 0; i < clientes.length; i++) {
        elmCliente = clientes[i];
        if (cedula == elmCliente.cedula) {
            clienteRegistrado = elmCliente;
            break;
        }
    }
    return clienteRegistrado;
}
agregarCliente = function (cliente) {
    let resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("Cliente registrado exitosamente");
        mostrarClientes();
    } else {
        alert("La cedula ingresada ya pertenece a un cliente");
    }
}
crearCliente = function () {
    let nuevoCliente = {};
    nuevoCliente.cedula = recuperarTexto("txtCedula");
    nuevoCliente.nombre = recuperarTexto("txtNombre");
    nuevoCliente.edad = recuperarInt("txtEdad");
    agregarCliente(nuevoCliente);

}
ejecutarBusqueda = function () {
    let cedula = recuperarTexto("expCedula");
    let cliente = buscarCliente(cedula);
    if (cliente == null) {
        alert("Cliente no encontrado");
    } else {
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
    }
}
ejecutarModificacion = function () {
    let cliente = {};
    cliente.cedula = recuperarTexto("txtCedula");
    cliente.nombre = recuperarTexto("txtNombre");
    cliente.edad = recuperarTexto("txtEdad");
    modificarCliente(cliente);
}
modificarCliente = function (cliente) {
    let clienteExistente = buscarCliente(cliente.cedula);
    if (clienteExistente != null) {
        clienteExistente.nombre = cliente.nombre;
        clienteExistente.edad = cliente.edad;
        mostrarClientes();
    }
}