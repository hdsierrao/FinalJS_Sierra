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

const interesProducto = a => a * 0.02

//Función de las deducciones de los empleados

function deduccionesEmpleados (a){
    if (a<2500){
        let resultado = a * 0.04
        return resultado
    }
    else if(a>=2500){
        let resultado = a * 0.06
        return resultado
    }
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

const empleado1 = new Empleados ('Juan Alvarez', 1200)
const empleado2 = new Empleados ('Andres Rodriguez', 2350)
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

    // interaccion con los productos de la empresa
    if (seleccionCliente == 'productos'){
        let seleccionClienteProductos = prompt('¿Buscar, comprar o pagar?').toLowerCase()
        switch(seleccionClienteProductos){
            case 'buscar':
                const busquedaProductos = prompt('¿Qué producto desea buscar?')
                const resultadoBusquedaP = inventarioProductos.find(elementoResultanteP => elementoResultanteP.nombre === busquedaProductos)
                console.log('El producto que busca es: ')
                console.log(resultadoBusquedaP)
                break
            case 'comprar':
                console.log('Tenemos disponibles los siguientes productos: ')
                console.log(inventarioProductos)
                let compraProductos = prompt('¿Qué producto desea comprar?')
                let cantidadProductosComprados = parseInt(prompt('¿Cuántas unidades desea comprar?'))
                let resultadoProductoComprado = inventarioProductos.find(elementoResultanteP => elementoResultanteP.nombre === compraProductos)
                let precioProductoComprado = multiplicacion(resultadoProductoComprado.precio, cantidadProductosComprados)
                let precioIvaProducto = calculoIva(precioProductoComprado)
                let precioProductoTotal = suma(precioProductoComprado, precioIvaProducto)
                console.log('El producto comprado es: ')
                console.log(resultadoProductoComprado)
                console.log('El total a pagar es $' + precioProductoTotal)
                let comprarMas = prompt('¿Desea comprar otros productos?')
                while (comprarMas == 'si'){
                    let compraProductos = prompt('¿Qué producto desea comprar?')
                    let cantidadProductosComprados = parseInt(prompt('¿Cuántas unidades desea comprar?'))
                    let resultadoProductoComprado = inventarioProductos.find(elementoResultanteP => elementoResultanteP.nombre === compraProductos)
                    let precioProductoComprado = multiplicacion(resultadoProductoComprado.precio, cantidadProductosComprados)
                    let precioIvaProducto = calculoIva(precioProductoComprado)
                    let precioProductoTotal = suma(precioProductoComprado, precioIvaProducto)
                    console.log('El producto comprado es: ')
                    console.log(resultadoProductoComprado)
                    console.log('El total a pagar es $' + precioProductoTotal)
                    let comprarMas = prompt('¿Desea comprar otros productos')
                    if (comprarMas != 'si'){
                    break
                    }                              
                }                        
                    console.log('¡¡Gracias por su compra!!')
                    console.log('¡Disfrute de la página!')
                    break   
            case 'pagar':
                let cantidadDeuda = parseInt(prompt('¿Cuánto debe?'))
                let seleccionSobreDeuda = prompt('Desea hacer un: abono, pago total o dividir en cuotas').toLowerCase()
                switch(seleccionSobreDeuda){
                    case 'abono':
                        let abonoDeuda = parseInt(prompt('¿Cuánto desea abonar?'))
                        let saldoSobreDeuda = resta(cantidadDeuda, abonoDeuda)
                        if(saldoSobreDeuda<=0){
                            console.log('Su deuda se pagó totalmente')
                        }
                        else{
                            console.log('Todavía debe: $' + saldoSobreDeuda)  
                        } 
                        break
                    case 'pago total':
                        console.log('Su deuda de $' +cantidadDeuda + ' se pagó totalmente')
                        break
                    case 'dividir en cuotas':
                        let cantidadCuotas = parseInt(prompt('¿En cuántas cuotas desea dividir el pago?'))
                        let pagoPorCuotas = division(cantidadDeuda, cantidadCuotas)
                        let interesDeCuotas = interesProducto(pagoPorCuotas)
                        let cuotaMensual = suma(pagoPorCuotas, interesDeCuotas)
                        console.log('Sus cuotas mensuales son de $' +cuotaMensual)
                        let pagoTotalIntereses = multiplicacion(cantidadCuotas, cuotaMensual)
                        console.log('Su pago total es de $' +pagoTotalIntereses)
                        break
                    default:
                        console.log('¡Disfrute de la página!')
                        break
                }
            default:
                console.log('¡Disfrute de la página!')
                break

        }
    }
    //Interaccion con los servicios de la empresa
    else if (seleccionCliente == 'servicios'){
        let seleccionClienteServicios = prompt('¿Buscar, comprar o pagar?').toLowerCase()
        switch(seleccionClienteServicios){
            case 'buscar':
                const busquedaServicios = prompt('¿Qué servicio desea buscar?')
                const resultadoBusquedaS = inventarioServicios.find(elementoResultanteS => elementoResultanteS.nombre === busquedaServicios)
                console.log('El servicio que busca es: ')
                console.log(resultadoBusquedaS)
                break
                case 'comprar':
                    console.log('Tenemos disponibles los siguientes servicios: ')
                    console.log(inventarioServicios)
                    let compraServicios = prompt('¿Qué servicio desea adquirir?')
                    let resultadoServicioComprado = inventarioServicios.find(elementoResultanteS => elementoResultanteS.nombre === compraServicios)
                    let precioIvaServicio = calculoIva(resultadoServicioComprado.precio)
                    let precioServicioTotal = suma(resultadoServicioComprado.precio, precioIvaServicio)
                    console.log('El servicio comprado es: ')
                    console.log(resultadoServicioComprado)
                    console.log('El total a pagar es $' + precioServicioTotal)
                    console.log('Ingrese la fecha para recibir el servicio')
                    let añoServicio = prompt('Ingrese el año')
                    let mesServicio = prompt('Ingrese el mes')
                    let diaServicio = prompt('Ingrese el día')
                    let horaServicio = prompt('Ingrese la hora')
                    fechaServicio = new Date(añoServicio, mesServicio, diaServicio, horaServicio)
                    console.log('El servicio fue contratado para el ' +fechaServicio)
                    let comprarMas = prompt('¿Desea adquirir otros servicios?')
                    while (comprarMas == 'si'){
                        let compraServicios = prompt('¿Qué servicio desea adquirir?')
                        let resultadoServicioComprado = inventarioServicios.find(elementoResultanteS => elementoResultanteS.nombre === compraServicios)
                        let precioIvaServicio = calculoIva(resultadoServicioComprado.precio)
                        let precioServicioTotal = suma(resultadoServicioComprado.precio, precioIvaServicio)
                        console.log('El servicio comprado es: ')
                        console.log(resultadoServicioComprado)
                        console.log('El total a pagar es $' + precioServicioTotal)
                        console.log('Ingrese la fecha para recibir el servicio')
                        let añoServicio = prompt('Ingrese el año')
                        let mesServicio = prompt('Ingrese el mes')
                        let diaServicio = prompt('Ingrese el día')
                        let horaServicio = prompt('Ingrese la hora')
                        fechaServicio = new Date(añoServicio, mesServicio, diaServicio, horaServicio)
                        console.log('El servicio fue contratado para el ' +fechaServicio)
                        let comprarMas = prompt('¿Desea comprar otros productos')
                        if (comprarMas != 'si'){
                        break
                        }                              
                    }                        
                        console.log('¡¡Gracias por su compra!!')
                        console.log('¡Disfrute de la página!')
                        break   
                case 'pagar':
                    let cantidadDeuda = parseInt(prompt('¿Cuánto debe?'))
                    let seleccionSobreDeuda = prompt('Desea hacer un: abono, pago total o dividir en cuotas').toLowerCase()
                    switch(seleccionSobreDeuda){
                        case 'abono':
                            let abonoDeuda = parseInt(prompt('¿Cuánto desea abonar?'))
                            let saldoSobreDeuda = resta(cantidadDeuda, abonoDeuda)
                            if(saldoSobreDeuda<=0){
                                console.log('Su deuda se pagó totalmente')
                            }
                            else{
                                console.log('Todavía debe: $' + saldoSobreDeuda)  
                            } 
                            break
                        case 'pago total':
                            console.log('Su deuda de $' +cantidadDeuda + ' se pagó totalmente')
                            break
                        case 'dividir en cuotas':
                            let cantidadCuotas = parseInt(prompt('¿En cuántas cuotas desea dividir el pago?'))
                            let pagoPorCuotas = division(cantidadDeuda, cantidadCuotas)
                            let interesDeCuotas = interesProducto(pagoPorCuotas)
                            let cuotaMensual = suma(pagoPorCuotas, interesDeCuotas)
                            console.log('Sus cuotas mensuales son de $' +cuotaMensual)
                            let pagoTotalIntereses = multiplicacion(cantidadCuotas, cuotaMensual)
                            console.log('Su pago total es de $' +pagoTotalIntereses)
                            break
                        default:
                            console.log('¡Disfrute de la página!')
                            break
                    }
            default:
                console.log('¡Disfrute de la página!')
                break
        }
    }
    else {
        console.log('¡Disfruta de la página!')
    }
}

//Inicio de interacción con el personal

else if (usuario == 2){

    let seleccionPersonal = prompt('Opciones para empleados: inventario de productos; inventario de servicios; listado de empleados; pagos').toLocaleLowerCase()

    switch(seleccionPersonal){
        case 'inventario de productos':
            console.log('El inventario de productos es:')
            console.log(inventarioProductos)
            console.log('En su inventario hay la siguiente cantidad de productos: ')
            console.log(inventarioProductos.length)
            let seleccionInventarioP = prompt('¿Desea eliminar o añadir un producto?').toLowerCase()
            if(seleccionInventarioP == 'eliminar'){
                eliminarProducto = prompt('¿Qué producto desea eliminar?')
                let resultadoProductoEliminar = inventarioProductos.find(elementoResultanteP => elementoResultanteP.nombre === eliminarProducto)
                let indiceDelProducto = inventarioProductos.indexOf(resultadoProductoEliminar)
                let productoEliminado = inventarioProductos.splice(indiceDelProducto, 1)
                console.log('El inventario actualizado de sus productos es: ')
                console.log(inventarioProductos)
                let eliminarMas = prompt('¿Desea eliminar otros productos?')
                    while(eliminarMas == 'si'){
                        eliminarProducto = prompt('¿Qué producto desea eliminar?')
                        let resultadoProductoEliminar = inventarioProductos.find(elementoResultanteP => elementoResultanteP.nombre === eliminarProducto)
                        let indiceDelProducto = inventarioProductos.indexOf(resultadoProductoEliminar)
                        let productoEliminado = inventarioProductos.splice(indiceDelProducto, 1)
                        console.log('El inventario actualizado de sus productos es: ')
                        console.log(inventarioProductos)
                        let eliminarMas = prompt('¿Desea eliminar otros productos?')
                        if (eliminarMas != 'si'){
                            break
                        } 
                    }
                    console.log('¡Disfrute de la página!')
            }
            else if(seleccionInventarioP == 'añadir'){
                const nuevoProducto = new Productos (prompt('Ingrese el nombre del producto'), parseInt(prompt('Ingrese el precio del producto')))
                let productoAñadido = inventarioProductos.push(nuevoProducto)
                console.log('El inventario actualizado de sus productos es: ')
                console.log(inventarioProductos)
                let añadirMas = prompt('¿Desea añadir más productos?')
                while(añadirMas == 'si'){
                    const nuevoProducto = new Productos (prompt('Ingrese el nombre del producto'), parseInt(prompt('Ingrese el precio del producto')))
                    let productoAñadido = inventarioProductos.push(nuevoProducto)
                    console.log('El inventario actualizado de sus productos es: ')
                    console.log(inventarioProductos)
                    let añadirMas = prompt('¿Desea añadir más productos?')
                    if (añadirMas != 'si'){
                        break
                    }  
                }
            }
            console.log('¡Disfrute de la página!')            
            break
        case 'inventario de servicios':
            console.log('El inventario de servicios es:')
            console.log(inventarioServicios)
            let seleccionInventarioS = prompt('¿Desea eliminar o añadir un servicio?').toLowerCase()
            if(seleccionInventarioS == 'eliminar'){
                eliminarServicio = prompt('¿Qué servicio desea eliminar?')
                let resultadoServicioEliminar = inventarioServicios.find(elementoResultanteS => elementoResultanteS.nombre === eliminarServicio)
                let indiceDelServicio = inventarioServicios.indexOf(resultadoServicioEliminar)
                let ServicioEliminado = inventarioServicios.splice(indiceDelServicio, 1)
                console.log('El inventario actualizado de sus servicios es: ')
                console.log(inventarioServicios)
                let eliminarMas = prompt('¿Desea eliminar otros servicios?')
                    while(eliminarMas == 'si'){
                        eliminarServicio = prompt('¿Qué servicio desea eliminar?')
                        let resultadoServicioEliminar = inventarioServicios.find(elementoResultanteS => elementoResultanteS.nombre === eliminarServicio)
                        let indiceDelServicio = inventarioServicios.indexOf(resultadoServicioEliminar)
                        let servicioEliminado = inventarioServicios.splice(indiceDelServicio, 1)
                        console.log('El inventario actualizado de sus servicios es: ')
                        console.log(inventarioServicios)
                        let eliminarMas = prompt('¿Desea eliminar otros servicios?')
                        if (eliminarMas != 'si'){
                            break
                        } 
                    }
                    console.log('¡Disfrute de la página!')
            }
            else if(seleccionInventarioS == 'añadir'){
                const nuevoServicio = new Servicios (prompt('Ingrese el nombre del servicio'), parseInt(prompt('Ingrese el precio del servicio')))
                let servicioAñadido = inventarioServicios.push(nuevoServicio)
                console.log('El inventario actualizado de sus servicios es: ')
                console.log(inventarioServicios)
                let añadirMas = prompt('¿Desea añadir más servicios?')
                while(añadirMas == 'si'){
                    const nuevoServicio = new Servicios (prompt('Ingrese el nombre del servicio'), parseInt(prompt('Ingrese el precio del servicio')))
                    let servicioAñadido = inventarioServicios.push(nuevoServicio)
                    console.log('El inventario actualizado de sus servicios es: ')
                    console.log(inventarioServicios)
                    let añadirMas = prompt('¿Desea añadir más servicios?')
                    if (añadirMas != 'si'){
                        break
                    }  
                }
            }
            console.log('¡Disfrute de la página!')
            break
        case 'listado de empleados':
            console.log('La nómina de empleados es:')
            console.log(inventarioEmpleados)
            let seleccionInventarioE = prompt('Se va a despedir o a contratar a un empleado')
            if (seleccionInventarioE == 'despedir'){
                despedirEmpleado = prompt('¿Cuál empleado se despedirá?')
                let resultadoDespedirEmpleado = inventarioEmpleados.find(elementoResultanteE => elementoResultanteE.nombre === despedirEmpleado)
                let indiceDelEmpleado = inventarioEmpleados.indexOf(resultadoDespedirEmpleado)
                let empleadoDespedido= inventarioEmpleados.splice(indiceDelEmpleado, 1)
                console.log('El empleado despedido es: ' +resultadoDespedirEmpleado.nombre)
                console.log('La nómina actualizada es: ')
                console.log(inventarioEmpleados)
                let eliminarMas = prompt('¿Se ha despedido a otros empleados?')
                    while(eliminarMas == 'si'){
                        despedirEmpleado = prompt('¿Cuál empleado se despedirá?')
                        let resultadoDespedirEmpleado = inventarioEmpleados.find(elementoResultanteE => elementoResultanteE.nombre === despedirEmpleado)
                        let indiceDelEmpleado = inventarioEmpleados.indexOf(resultadoDespedirEmpleado)
                        let empleadoDespedido= inventarioEmpleados.splice(indiceDelEmpleado, 1)
                        console.log('El empleado despedido es: ' +resultadoDespedirEmpleado.nombre)
                        console.log('La nómina actualizada es: ')
                        console.log(inventarioEmpleados)
                        let eliminarMas = prompt('¿Se ha despedido a otros empleados?')
                        if (eliminarMas != 'si'){
                            break
                        } 
                    }
                    console.log('¡Disfrute de la página!') 
            }
            else if (seleccionInventarioE == 'contratar'){
                const nuevoEmpleado = new Empleados (prompt('Ingrese el nombre del empleado'), parseInt(prompt('Ingrese el sueldo del empleado')))
                let empleadoContratado = inventarioEmpleados.push(nuevoEmpleado)
                console.log('La nómina actualizada es: ')
                console.log(inventarioEmpleados)
                let añadirMas = prompt('¿Se ha contratado a otros empleados?')
                while(añadirMas == 'si'){
                    const nuevoEmpleado = new Empleados (prompt('Ingrese el nombre del empleado'), parseInt(prompt('Ingrese el sueldo del empleado')))
                    let empleadoContratado = inventarioEmpleados.push(nuevoEmpleado)
                    console.log('La nómina actualizada es: ')
                    console.log(inventarioEmpleados)
                    let añadirMas = prompt('¿Se ha contratado a otros empleados?')
                    if (añadirMas != 'si'){
                        break
                    }  
                }
            } 
            console.log('¡Disfrute de la página!')
            break
        case 'pagos':
            let nombreEmpleado = prompt('Estimado empleado ¿Cuál es su nombre?')
            let resultadoNombreEmpleado = inventarioEmpleados.find(elementoResultanteE => elementoResultanteE.nombre === nombreEmpleado)
            if(inventarioEmpleados.includes(resultadoNombreEmpleado)){
                console.log('Su sueldo base es $' +resultadoNombreEmpleado.sueldo)
                let deduccionEmpleadoPago = deduccionesEmpleados(resultadoNombreEmpleado.sueldo)
                console.log('Sus deducciones equivalen a $' +deduccionEmpleadoPago) 
                let pagoEmpleado = resta(resultadoNombreEmpleado.sueldo, deduccionEmpleadoPago)
                console.log('Se ha debitado a su cuenta $' +pagoEmpleado)
            }
            else {
                console.log('Usted no hace parte del personal')
                }
            console.log('¡Disfrute de la página!')
            break
        default:
            console.log('¡Disfrute de la página!')
            break
    }
}