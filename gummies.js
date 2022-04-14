function cantidadPago (cantidadArticulo, coste, impuesto) {
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
}

