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
    constructor(nombre, sueldo){
        this.nombre = nombre
        this.sueldo = sueldo        
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

function interesProducto (meses){
    // valor total * 0.02 = valor del interés mensual
    // valor interes mensual * número de meses = valor del interés total
    // valor total con interes = valor total + valor del interés total
    // cuota mensual = (valor total / numero de meses) + valor del interés mensual 
}

//Inventario de productos

const producto1 = new Productos ('Dulce de leche', 100)
const producto2 = new Productos ('Gomitas frutales', 200)
const producto3 = new Productos ('Chocolates rellenos', 350)
const producto4 = new Productos ('Chicles', 150)
const producto5 = new Productos ('Gelatinas', 450)
const producto6 = new Productos ('Galletas de sabores', 600)

const inventarioProductos = [producto1, producto2, producto3, producto4, producto5, producto6]

//Inventario de servicios

const servicio1 = new Servicios ('Fiestas infantiles', 5000)
const servicio2 = new Servicios ('Cumpleaños', 10000)
const servicio3 = new Servicios ('Tour por la fabrica', 20000)

const inventarioServicios = [servicio1, servicio2, servicio3]

//Inventario de empleados

const empleado1 = new Empleados ('Juan Álvarez', 1200)
const empleado2 = new Empleados ('Andrés Rodriguez', 2350)
const empleado3 = new Empleados ('Leonardo Camacho', 1500)
const empleado4 = new Empleados ('Zayra Pulido', 3800)
const empleado5 = new Empleados ('Nora Astaiza', 2600)

const inventarioEmpleados = [empleado1, empleado2, empleado3, empleado4, empleado5]

//Bienvenida al usuario

console.log('Bienvenido a la página de PD Gummies')
console.log('Los mejores dulces de Latinoamérica')

//Condición de elección inicial de la página

console.log('¿Eres un cliente o un miembro del personal?')

let usuario = parseInt(prompt('Escribe: (1) para clientes o (2) para el personal'))

//Inicio de interacción con el cliente

if (usuario == 1){

    console.log('Estimado cliente, siempre es un placer atenderte')
    let seleccionCliente = prompt('¿Deseas averiguar sobre productos o servicios?').toLowerCase()
    if (seleccionCliente == 'productos'){
        let seleccionClienteProductos = prompt('¿Buscar o comprar?').toLowerCase()
        switch(seleccionClienteProductos){
            case 'buscar':
                const busquedaProductos = prompt('¿Qué producto desea buscar?')
                const resultadoBusquedaP = inventarioProductos.find(elementoResultanteP => elementoResultanteP.nombre === busquedaProductos)
                console.log('El producto que busca es: ')
                console.log(resultadoBusquedaP)
            case 'comprar':

            default:
                console.log('¡Disfruta de la página!')
                break

        }

        //mostrar listado de productos
        //Preguntar si desea comprar
        //ciclo de compra
        //Desea comprar varios del mismo producto
        //Desea añadir o retirar productos
        //pago de contado o por cuotas
        //cálculos de pago por cuotas
        //Mostrar el precio final

    }
    else if (seleccionCliente == 'servicios'){
        let seleccionClienteServicios = prompt()
        switch(seleccionClienteServicios){
            case 'buscar':
                
            case 'comprar':

            default:
                console.log('¡Disfruta de la página!')
                break

        }
        //mostrar listado de servicios
        //Preguntar si desea comprar
        //ciclo de compra
        //Añadir una fecha
        //Mostrar el precio final
        //Mostrar el agendamiento del servicio
    }

    else {
        console.log('¡Disfruta de la página!')
    }

}

//Inicio de interacción con el personal

else if (usuario == 2){

    let seleccionPersonal = prompt('Opciones para empleados: inventario de productos; listado de empleados; pagos').toLocaleLowerCase()

    switch(seleccionPersonal){
        case 'inventario':
            console.log('si')
        case 'listado':
            console.log('si')
        case 'pagos':
            console.log('si')
        default:
            console.log('¡Disfruta de la página!')
            break
    }

    //Desea ver el inventario de productos
    //Desea modificar el inventario
    //Añadir productos
    //Eliminar productos

    //Desea ver el listado de empleados
    //Desea modificar el listado
    //Buscar un empleado en el listado

    //Desea recibir su pago

}

//Cierre del simulador

else {
    console.log('¡Disfruta de la página!')
}



/* 
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

// el interés se hace con un for

//for (meses = 0; meses <=mesesdeuda; meses++)


























