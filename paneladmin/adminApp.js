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
if (opInmobiliarioingresado != "" & nombrePropietarioIngresado != "" & telefonoPropietarioIngresado != "" & direccionPropiedadIngresado != ""){
    let nuevaPropiedad = new Propiedad(opInmobiliarioingresado, nombrePropietarioIngresado,telefonoPropietarioIngresado, direccionPropiedadIngresado)
    ListadoPropiedades.push(nuevaPropiedad)
    function render(){
        let cargando = document.getElementById("render")
        cargando.innerHTML = `<div class= "card-css col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xl-3">
        <div class="card content-card renderPropiedadEncontrada">
            <div class="card-body">
              <h5 class="black card-title"><i class="fa-solid fa-location-dot"></i> Propiedad en:<br><span class="var">${direccionPropiedadIngresado}</span></h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="black list-group-item"><i class="fa-solid fa-user-check"></i> Operador Inmobiliario asignado:<br><span class="var">${opInmobiliarioingresado}</span></li>
              <li class="black list-group-item"><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span></li>
              <li class="black list-group-item"><i class="fa-solid fa-phone"></i> Telefono de Contacto:<br><span class="var">${telefonoPropietarioIngresado}</span></li>
              <li class="black list-group-item"><i class="fa-solid fa-user"></i> Propietario:<br><span class="var">${nombrePropietarioIngresado}</span></li>
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
else{
    Swal.fire({
        title: 'Incompleto',
        text: 'Completa todos los campos',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    })
}
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

    if (qBuscar == ""){
        Swal.fire({
            title: 'Vacio',
            text: 'Debe escribir un nombre para efectuar la busqueda',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
    }

    else{
        if (propiedad == undefined){
            Swal.fire({
                title: 'Sin propiedades',
                text: 'Todavia no hay propiedades agregados',
                icon: 'info',
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
                <div class="card content-card renderPropiedadEncontrada">
                    <div class="card-body">
                    <h3 class="infoEncontradas">LAS SIGUIENTES PROPIEDADES COINCIDEN CON SU BUSQUEDA</h3>
                      <h5 class="card-title"><i class="fa-solid fa-location-dot"></i> Propiedad en: <span class="var">${direccionPropiedadEncontrada}</span></h5>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="black list-group-item"><i class="fa-solid fa-user-check"></i> Operador Inmobiliario asignado: <span class="var">${opInmobiliarioEncontrado}</span></li>
                      <li class="black list-group-item"><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span></li>
                      <li class="black list-group-item"><i class="fa-solid fa-phone"></i> Telefono de Contacto: <span class="var">${telefonoPropietarioEncontrado}</span></li>
                      <li class="black list-group-item"><i class="fa-solid fa-user"></i> Propietario: <span class="var">${nombrePropietarioEncontrado}</span></li>
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


} 


//****************************Funcion para ELIMINAR PROPIEDAD**********************************************





//****************************Funcion para COMPROBAR ULTIMA PROPIEDAD AGREGADA**********************************************

function comprobacion(){
    const ultimaPropiedad = JSON.parse( localStorage.getItem('PROPIEDAD_AGREGADA') ) || []
    let comprobacionOp = ultimaPropiedad.opInmobiliario;
    // var busquedaNombre = propiedad.nombrePropietario;
    // var busquedaTelefono = propiedad.;
    // var busquedaDireccion = propiedad.direccionPropiedad;
    let renderUltimaPropiedad = document.getElementById("ultimaPropiedadAgregada");
    renderUltimaPropiedad.innerHTML = comprobacionOp
    ? ` <h5 class="renderUltimaPropiedad">La ultima propiedad ha sido agregada por <span class="badge bg-info">${comprobacionOp}</span></h5> `
    : `<h5 class="renderUltimaPropiedad">Aun no hay propiedades agregadas</h5>`;
}

//****************************Funcion para LISTAR OPERADORES INMOBILIARIOS AGREGADOS**********************************************
function listarOp(){    
    const mostrarOp = document.getElementById("listarOp");
    mostrarOp.addEventListener("click", (e) =>{
        
    var mostrar = false
    console.log(mostrar)
    const comprobacionListar = JSON.parse( localStorage.getItem('PROPIEDAD_AGREGADA') )    
    if ( comprobacionListar != null){
        switch (mostrar){
            case false:
                
                    var opInmobiliarioListado = comprobacionListar.opInmobiliario;
                    opListados = document.getElementById("opListados")
                    opListados.innerHTML = `
                    <table class="table info table-listar">
                        <tr clas>
                            <td><strong>${opInmobiliarioListado}</strong></td>
                        </tr>
                    </table>`
                    mostrar = true
                    console.log("Se mostro")
                    
                
                
                
            case true:
                
                    opListados = document.getElementById("opListados")
                    opListados.innerHTML = ``
                    mostrar = false
                    console.log("Se oculto")
                    
                   
                
        }

    }
    else {
        Swal.fire({
                     title: 'Todavia no hay operadores inmobiliarios agregados',
                     icon: 'info',
                     confirmButtonText: 'Aceptar'
             })
    }
    // console.log(listar)
//     const nombresObj = {
//     ...listar
// }
// console.log(nombresObj)
})
}



//****************************Llamado a funciones cargadas en el BODY**********************************************
function loadBody(){
    agregar()
    comprobacion()
    listarOp()  
}
loadBody()



