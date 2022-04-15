//Función constructora de Productos

class Productos {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }   
}

//Función constructora de Servicios

class Servicios {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }   
}

//Función constructora de Empleados

class Empleados {
    constructor(nombre, sueldo, deducciones){
        this.nombre = nombre
        this.sueldo = sueldo
        this.deducciones = deducciones
    }   
}

//Función calculadora de IVA

const calculoIva = a => a * 0.21

//Funciones de operaciones básicas

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b

//Función del interés

function impuesto (a, b){

}

//Bienvenida al usuario

console.log('Bienvenido a la página de PD Gummies')
console.log('Los mejores dulces y gomitas del país')

//Condición de elección inicial de la página

console.log('¿Eres un cliente o un miembro del personal?')

let usuario = parseInt(prompt('Escribe: (1) para clientes o (2) para el personal'))

//Inicio de interacción con el cliente

if (usuario == 1){

    console.log('Estimado cliente, siempre es un placer atenderte')

//Comprar

//agregar o quitar productos

//pedir en grandes cantidades

//Dividir el pago a cuotas + intereses

//Contratar

}

//Inicio de interacción con el personal

else if (usuario == 2){

    console.log('prueba 2')

    //listado de productos

    //cambios al listado

    //datos personales

    //recibir sueldo

}

//Cierre del simulador

else {
    console.log('¡Disfruta de la página!')
}

/*

Funciones:
Construcción de productos
Construcción de servicios
Construcción de empleados
Calculadoras
Cálculo de impuestos

Arrays:
Empleados (Objetos)
Productos (Objetos)
Servicios (Objetos)



*/

/* function cantidadPago (cantidadArticulo, coste, impuesto) {
    let costoTotal = cantidadArticulo * coste - impuesto
    return costoTotal
}

alert('Bienvenido a la página de PD Gummies')
alert('Los mejores dulces y gomitas del país')
let opcion = prompt('¿Desea comprar productos?').toLowerCase()

if (opcion == 'si'){
        let cantidadProducto = parseInt(prompt ('¿Cuántos productos desea?'))
        if(cantidadProducto != 0){
            let precioProducto = parseInt(prompt ('¿Cuál es el precio del producto?'))
            let gravamen = parseInt(prompt ('¿Cuánto es el gravamen del producto?'))
            let calculoImpuesto = (precioProducto * gravamen)/100
            let precioTotal = cantidadPago(cantidadProducto,precioProducto,calculoImpuesto)
            alert('El precio total a pagar es: ' + precioTotal)     
        }
        let comprarMas = prompt('¿Desea comprar otros productos?')
        while (comprarMas == 'si'){
            let cantidadProducto = parseInt(prompt ('¿Cuántos productos desea?'))
        if(cantidadProducto != 0){
            let precioProducto = parseInt(prompt ('¿Cuál es el precio del producto?'))
            let gravamen = parseInt(prompt ('¿Cuánto es el gravamen del producto?'))
            let calculoImpuesto = (precioProducto * gravamen)/100
            let precioTotal = cantidadPago(cantidadProducto,precioProducto,calculoImpuesto)
            alert('El precio total a pagar es: ' + precioTotal)     
        }
        let comprarMas = prompt('¿Desea comprar otros productos')
        if (comprarMas != 'si'){
            break
        }
        }
        alert('¡¡Gracias por su compra!!')           
}
else{
    alert('Disfrute de la página')
} */


























