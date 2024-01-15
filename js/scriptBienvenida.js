function bienvenida() {
    let nombre = prompt('Ingrese su nombre:')
    let apellido = prompt('Ingrese su apellido:')
    let genero = prompt('Ingrese su Genero con M -> Masculino o F->Femenino o X -> Otr@s:').toLowerCase(); //toLowerCase transpasa todo a minuscula
    let mensaje;

    let nombreCompleto = nombre + ' ' + apellido;
    
    switch (genero) {
        case ('m'):
            mensaje ='Bienvenido ' + nombreCompleto + '!'
            break;
        case ('f'):
            mensaje = 'Bienvenida ' + nombreCompleto + '!'
            break;
        case ('x'):
            mensaje = 'Bienvenida ' + nombreCompleto + '!'
            break;
        default:
            mensaje = 'No ingreso ningun genero valido, por favor, vuelva a intentarlo con M -> Masculino o F->Femenino o X -> Otr@s';
            break;
    }
    alert(mensaje);
}

bienvenida();





