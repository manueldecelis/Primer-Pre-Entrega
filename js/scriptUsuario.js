const usuarios = [];
let contador=0;

const mensaje = (texto, usuario, error = false) => {
    if (error){
        alert(texto + usuario + "', el mismo ya esta dentro de la lista de usuarios o puede haber un usuario no valido.");
    }else{
        alert(texto + usuario + "'");
    }
}

function IngresarDatos(){
    let usuario, existe ;
    usuario = prompt('Ingrese el nombre de un usuario');
    if (usuario !== null){        
        
        usuario = usuario.trim().toLowerCase();

        while(usuario === ''){
            alert('No ingreso ningun nombre de usuario');
            usuario = prompt('Ingrese el nombre de un usuario');
        }
        
        for (let index = 0; index < usuarios.length; index++) {
            if (usuarios.includes(usuario)){                
                mensaje(" :( Error al agregar el usuario '", usuario, true);
                existe=true;
                break
            }
        }
        
        if (existe==true){
            IngresarDatos()
        }else{
            agregarusuario(usuario);    
        }
    }
}

function agregarusuario(usuario){
    let newusuario = (usuario);    
    usuarios.push(newusuario)
    mensaje("Se agrego un usuario '", usuario);
    console.log(usuarios)
    contador++
}

function AgregarOtroUsu(){
    let confirmar = confirm('Quieres ingresar otro Usuario?')
        
    while(confirmar){
        IngresarDatos();
        confirmar = confirm('Quieres ingresar otro Usuario?');
    }
}

debugger
IngresarDatos();
AgregarOtroUsu();

console.table(usuarios)




