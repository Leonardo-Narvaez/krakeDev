probarAtributos = function () {
    let persona = {
        nombre: "Paco",
        apellido: "Perez",
        edad: 25,
        estaVivo: true
    }
}
crearProducto = function () {
    let producto1 = { nombre: "Tomate", precio: 2.35, stock: 5 }
    let producto2 = { nombre: "Maiz", precio: 2.80, stock: 3 }
    console.log(producto1.nombre);
    console.log(producto2.nombre);
    if (producto1.stock > producto2.stock) {
        console.log("Prodcuto 1 tiene mayor stock");
    }
    if (producto2.stock > producto1.stock) {
        console.log("Prodcuto 2 tiene mayor stock");
    }
    if (producto1.stock == producto2.stock) {
        console.log("Ambos productos tienen el mismo stock");
    }
}