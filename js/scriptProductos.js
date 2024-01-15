let totalGeneral = 0,  contadorProductos = 0, listadoProductos = '\nListado de Productos';

function agregarProductos(){    
    let confirmar = confirm('Desea ingresar un producto?')
    
    while (confirmar){
        ingresarDatosProducto();

        confirmar = confirm('Desea ingresar otro producto?');
    }   
    
    if (contadorProductos > 0){ /* esto esta por si ingresas y no cargas nada entonces no muestra nada, sino t iba a mostrar las cosas vacias */
        mostrarInfoFinal();
    }
}

function ingresarDatosProducto(){
    let nombre_prod, precio, cantidad, total;
    
    nombre_prod = prompt('Ingrese el nombre del producto');
    while(nombre_prod === ''){
        alert('No ingreso ningun nombre de producto.')
        nombre_prod = prompt('Ingrese el nombre del producto');
    }
    
    precio = parseFloat(prompt('Ingrese el precio del producto'));
    
    while(isNaN(precio)){
        alert('No ingreso ningun precio de producto.')
        precio = parseFloat(prompt('Ingrese el precio del producto1'));
    }
    
    cantidad = parseInt(prompt('Ingrese la cantidad del producto'));
    while(isNaN(cantidad)){
        alert('No ingreso ninguna cantidad de producto.')
        cantidad = parseInt(prompt('Ingrese la cantidad del producto1'));
    }

    total = calcularPrecio(precio, cantidad);
    contadorProductos++;

    console.log({nombre_prod,precio,cantidad,total});
    listadoProductos += '\nProducto ' + contadorProductos + ' | Nombre: '+nombre_prod + ' | Precio: ' + precio + ' | Cantidad: ' + cantidad + ' | Total: $' + total;
    
}

function calcularPrecio (precio,cantidad) {
    let total = precio * cantidad;
    
    totalGeneral += total;
    
    return total;
};

function mostrarInfoFinal(){
    listadoProductos += '\n\n El total a pagar por todos los productos es de $'+totalGeneral;
    alert(listadoProductos);
    console.log(listadoProductos);
}

agregarProductos();


