// My Global Var
let opInmobiliario = 1
let nombrePropietario = 0
let telefonoPropietario = "admin"
let direccionPropiedad = 0

//Array con todas las propiedades
const ListadoPropiedades = []

//Constructor del Objeto Propiedad

class Propiedad{ 
    constructor(opInmobiliario, nombrePropietario, telefonoPropietario,direccionPropiedad){ 
        this.opInmobiliario = opInmobiliario, 
        this.nombrePropietario = nombrePropietario, 
        this.telefonoPropietario = telefonoPropietario,
        this.direccionPropiedad = direccionPropiedad
    }  
}



// Ingreso de datos generales para el inicio del programa
function nuevaPropiedad(){
    let opInmobiliarioingresado = document.getElementById("opInmobiliario").value
    let nombrePropietarioIngresado = document.getElementById("nombrePropietario").value
    let telefonoPropietarioIngresado = document.getElementById("telefonoPropietario").value
    let direccionPropiedadIngresado = document.getElementById("direccionPropiedad").value

    let nuevaPropiedad = new Propiedad(opInmobiliarioingresado, nombrePropietarioIngresado,telefonoPropietarioIngresado, direccionPropiedadIngresado)
    ListadoPropiedades.push(nuevaPropiedad)
    console.log(nuevaPropiedad)
    function render(){
        let cargando = document.getElementById("render")
        cargando.innerHTML = `<div class= "card-css col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xl-3">
        <div class="card content-card">
            <div class="card-body">
              <h5 class="card-title">Propiedad en ${direccionPropiedadIngresado}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fa-thin fa-person"></i> Operador Inmobiliario asignado ${opInmobiliarioingresado}</li>
              <li class="list-group-item"><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span></li>
              <li class="list-group-item"><i class="fa-thin fa-mobile-screen-button"></i></i> Telefono de Contacto: ${telefonoPropietarioIngresado}</li>
              <li class="list-group-item"><i class="fa-solid fa-house-chimney"></i> Propietario: ${nombrePropietarioIngresado}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-success">Publicar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
            </div>
          </div>
    </div>`
    }
    render()
    const nuevaPropiedadJSON = JSON.stringify(nuevaPropiedad)
    localStorage.setItem("PROPIEDAD_AGREGADA", nuevaPropiedadJSON)
    Swal.fire({
        title: 'Propiedad Agregada',
        text: `Haz Agregado correctamente la propiedad ubicada en ${direccionPropiedadIngresado}!`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
})
    
    
}
//****************************Llamado a funcion para AGREGAR PROPIEDAD**********************************************
//Dentro de esta funcion ya corre la opcion de MOSTRAR por alerta los ultimos datos ingresados
function agregar(){
    const guardarPropiedad = document.getElementById("guardarPropiedad");
    guardarPropiedad.onclick = () =>{nuevaPropiedad()}
}
//****************************Llamado a funcion para BUSCAR PROPIEDAD**********************************************

function buscar(){
    const qBuscar = document.getElementById("qBuscar").value
    const buscarPropiedad = document.getElementById("buscando");
    
    buscarPropiedad.onclick = () => {
        const resultado = JSON.parse(localStorage.getItem(qBuscar)); 
        console.log(resultado)
        console.log(qBuscar)
        if (resultado == null){
            Swal.fire({
                title: 'No encontrado',
                text: 'La Propiedad Buscada no existe',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            }) 
        }
        else{
            alert(resultado)
        }
    }
}
buscar()

// let busqueda = document.getElementById("qBuscar").value
// function buscarPropiedad(){
//      const qbuscar = document.getElementById("qBuscar");
//      console.log("paso1")
//     const buscar = document.getElementById("buscar")
//     console.log("paso2")
//      buscar.onclick = () =>{
//         console.log("paso3")
//         const busqueda = localStorage.getItem(qbuscar);
//         if (busqueda != null){
//             alert(busqueda)
//             console.log("paso4")
//         }
//         else {
//             alert("Propiedad no encontrada")
//             console.log("paso5")
//         }
//         console.log("fin")
//      }
// }





//****************************Llamado a funcion para ELIMINAR PROPIEDAD**********************************************


//****************************Llamado a funciones cargadas en el BODY**********************************************
function loadBody(){
    agregar()
}
loadBody()

