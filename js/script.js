// constantees  y precios 
const preciosentradageneral = 3000;
const precioentrada3D = 4000;
const preciocombocomida = 2500;

// Función para pedir número de personas 
function pedircantidadpersonas() {
    let cantidad;
    do {
        cantidad = parseInt(prompt("¿Cuántas personas van al cine?"));
    } while (isNaN(cantidad) || cantidad <= 0);
    return cantidad;
}

// Función para elegir tipo de entradas 
function elegirtipoentrada() {
    return confirm("¿Quieres entradas en 3D? (Aceptar = Sí / Cancelar = No)");
}

// Función para confirmar el combo 
function quierecombo() {
    return confirm("¿Quieres incluir combo de comida por persona? (Aceptar = Sí / Cancelar = No)");
}

// Función principal 
function calcularcostototal() {
    const personas = pedircantidadpersonas();
    const es3D = elegirtipoentrada();
    const incluyecomida = quierecombo();

    const precioentrada = es3D ? precioentrada3D : preciosentradageneral;
    const totalentradas = precioentrada * personas;
    const totalcomida = incluyecomida ? preciocombocomida * personas : 0;
    const total = totalentradas + totalcomida;

    alert(`Costo total: $${total}`);

    console.log("---- DETALLE DEL CÁLCULO ----");
    console.log(`Cantidad de personas: ${personas}`);
    console.log("Tipo de entrada: " + (es3D ? "3D" : "General"));
    console.log("Incluye combo: " + (incluyecomida ? "Sí" : "No"));
    console.log(`Total a pagar: $${total}`);
}

// Llamada a la función principal 
calcularcostototal();
