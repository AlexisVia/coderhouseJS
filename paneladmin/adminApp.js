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
document.getElementById("formulario").reset();
comprobacion()
    
}
//****************************Funcion para AGREGAR PROPIEDAD**********************************************
//Dentro de esta funcion ya corre la opcion de MOSTRAR por alerta los ultimos datos ingresados
function agregar(){
    const guardarPropiedad = document.getElementById("guardarPropiedad");
    guardarPropiedad.onclick = () =>{nuevaPropiedad()}
}
//****************************Funcion para BUSCAR PROPIEDAD**********************************************

const buscarPropiedad = document.getElementById("buscando");
buscarPropiedad.addEventListener("click", (e) =>{
    buscar()
}
)

function buscar(){
    const qBuscar = document.getElementById("qBuscar").value;
    let propiedad = JSON.parse(localStorage.getItem("PROPIEDAD_AGREGADA")) ;
if (propiedad == undefined){
    Swal.fire({
        title: 'Vacio',
        text: 'No se ha agregado ninguna propiedad',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    })
}
else{
    const { opInmobiliario:opInmobiliarioEncontrado,
         nombrePropietario:nombrePropietarioEncontrado,
         direccionPropiedad:direccionPropiedadEncontrada,
         telefonoPropietario:telefonoPropietarioEncontrado } = propiedad //desestructurizado y alias
    // var busquedaOp = propiedad.opInmobiliario;
    // var busquedaNombre = propiedad.nombrePropietario;
    // var busquedaTelefono = propiedad.direccionPropiedad;
    // var busquedaDireccion = propiedad.telefonoPropietario;
 
    if (qBuscar != opInmobiliarioEncontrado){
        Swal.fire({
            title: 'No encontrado',
            text: 'La Propiedad Buscada no existe',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
    }
    else {
        opInmobiliarioEncontrado != null ? Swal.fire({
                    title: 'Propiedad Encontrada',
                    icon: 'success',
                    confirmButtonText: 'Ver'
                    }) &&
                    renderPropiedadEncontrada() 
                    :
                    Swal.fire({
                    title: 'No encontrado',
                    text: 'La Propiedad Buscada no existe',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                    })

        // IDEM ARRIBA SIN OPERADOR TERNARIO NI LOGICO
        // if (busquedaOp != null){
        //     Swal.fire({
        //         title: 'Propiedad Encontrada',
        //         icon: 'success',
        //         confirmButtonText: 'Ver'
        // })
        // renderPropiedadEncontrada()
        // }
        // else{
        //     Swal.fire({
        //         title: 'No encontrado',
        //         text: 'La Propiedad Buscada no existe',
        //         icon: 'error',
        //         confirmButtonText: 'Cerrar'
        //     })
        // }
}
function renderPropiedadEncontrada(){
    let propiedadEncontrada = document.getElementById("render")
        propiedadEncontrada.innerHTML = `<div class= "card-css col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xl-3">
        <div class="card content-card">
            <div class="card-body">
            <h3>Las siguientes propiedades coinciden con su busqueda</h3>
              <h5 class="card-title">Propiedad en ${direccionPropiedadEncontrada}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fa-thin fa-person"></i> Operador Inmobiliario asignado ${opInmobiliarioEncontrado}</li>
              <li class="list-group-item"><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span></li>
              <li class="list-group-item"><i class="fa-thin fa-mobile-screen-button"></i></i> Telefono de Contacto: ${telefonoPropietarioEncontrado}</li>
              <li class="list-group-item"><i class="fa-solid fa-house-chimney"></i> Propietario: ${nombrePropietarioEncontrado}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-success">Publicar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
            </div>
          </div>
    </div>`
    }
}
}

//****************************Funcion para ELIMINAR PROPIEDAD**********************************************





//****************************Funcion para COMPROBAR ULTIMA PROPIEDAD AGREGADA**********************************************

function comprobacion(){
    const ultimaPropiedad = JSON.parse( localStorage.getItem('PROPIEDAD_AGREGADA') ) || []
    var comprobacionOp = ultimaPropiedad.opInmobiliario;
    // var busquedaNombre = propiedad.nombrePropietario;
    // var busquedaTelefono = propiedad.direccionPropiedad;
    // var busquedaDireccion = propiedad.direccionPropiedad;
    let renderUltimaPropiedad = document.getElementById("ultimaPropiedadAgregada");
    renderUltimaPropiedad.innerHTML = ` <h5>La ultima propiedad ha sido agregada por <span class="badge bg-info">${comprobacionOp}</span></h5> `
}

//****************************Funcion para LISTAR OPERADORES INMOBILIARIOS AGREGADOS**********************************************
function listarOp(){
    const proximamente = document.getElementById("listarOp");
    proximamente.addEventListener("click", (e) =>{
    const comprobacionListar = JSON.parse( localStorage.getItem('PROPIEDAD_AGREGADA') )
    // console.log(comprobacionListar)
    var listar = comprobacionListar.opInmobiliario;
    // console.log(listar)
    const nombresObj = {
    ...listar
}
console.log(nombresObj)
console.log("Proximamente se podra listar en DOM")
})
}



//****************************Llamado a funciones cargadas en el BODY**********************************************
function loadBody(){
    agregar()
    comprobacion()
    listarOp()  
}
loadBody()



