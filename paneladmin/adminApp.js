// My Global Var
let dia = 1
let mes = 1
let year = 1111
let direccion = "admin"
let usuario = "admin"
let operadorInmobiliario = "admin"
let telContacto = 0
let propietario = "admin"
let superficieTotal = 0
let areaPrivada = 0
let ambientes = 0
let dormitorios = 0
let banos = 0
let antiguedad = 0
let gastosComunes = 0
let notas = "notas"

//Array con todas las propiedades
const ListadoPropiedades = []

//Constructor del Objeto Propiedad

class Propiedad{ 
    constructor(usuario, dia, mes, year, operadorInmobiliario, telContacto, propietario, direccion, superficieTotal, areaPrivada, ambientes, dormitorios, banos, antiguedad, gastosComunes, notas){ 
        this.usuario = usuario, 
        this.dia = dia, 
        this.mes = mes,
        this.year = year,
        this.operadorInmobiliario = operadorInmobiliario,
        this.telContacto = telContacto,
        this.propietario = propietario,
        this.direccion = direccion,
        this.superficieTotal = superficieTotal, 
        this.areaPrivada = areaPrivada,
        this.ambientes = ambientes,
        this.dormitorios = dormitorios,
        this.banos = banos,
        this.antiguedad = antiguedad,
        this.gastosComunes = gastosComunes,
        this.notas = notas
    }  
}
new Propiedad


// Ingreso de datos generales para el inicio del programa
function nuevaPropiedad(){
//Ingreso Usuario
    let usuarioIngresado = document.getElementById("usuario").value;
    if (!isNaN(usuarioIngresado)) 
    {
        let usuario = document.getElementById("usuarioLabel");
        usuario.innerHTML = `<label>No se admiten numeros. Por favor intenta nuevamente</label>`;
        usuarioIngresado = document.getElementById("usuario").value;
    }
    
// Ingreso de fecha
    let diaIngresado = parseInt(document.getElementById("dia").value);
    while (isNaN(diaIngresado)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        diaIngresado = parseInt(document.getElementById("dia").value);
    }
    while (diaIngresado>31 || diaIngresado<=0)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        diaIngresado = parseInt(document.getElementById("dia").value);
    }

    let mesIngresado = parseInt(document.getElementById("mes").value);
    while (isNaN(mesIngresado)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        mesIngresado = parseInt(document.getElementById("mes").value);
    }
    while (mesIngresado>12 || mesIngresado<=0)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        mesIngresado = parseInt(document.getElementById("mes").value);
    }

    let yearIngresado = parseInt(document.getElementById("anio").value);
    while (isNaN(yearIngresado)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        yearIngresado = parseInt(document.getElementById("anio").value);
    }
    while (yearIngresado<2022)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        yearIngresado = parseInt(document.getElementById("anio").value);
    }

// Ingreso de nombre de operador inmobiliario

let operadorInmobiliarioIngresado = document.getElementById("opInmobiliario").value;
    while (!isNaN(operadorInmobiliarioIngresado)) 
    {
        alert("No se admiten Numeros. Intenta Nuevamente")
        operadorInmobiliarioIngresado = document.getElementById("opInmobiliario").value;
    }

// Ingreso de telefono de contacto de operador inmobiliario
    let telContactoIngresado = parseInt(document.getElementById("telContacto").value);
    while (isNaN(telContactoIngresado)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        telContactoIngresado = document.getElementById("telContacto").value;
    }
    while (telContactoIngresado<091000000 || telContactoIngresado>099999999) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        telContactoIngresado = document.getElementById("telContacto").value;
    }

// Ingreso del nombre del propietario
    let propietarioIngresado = document.getElementById("propietario").value;
    while (!isNaN(propietarioIngresado)) 
    {
        alert("No se admiten Numeros. Intenta Nuevamente")
        propietarioIngresado = document.getElementById("propietario").value;
    }

// Ingreso de la dirreccion de la propiedad
    let direccionINgresada = document.getElementById("direccion").value;


// Ingreso de Superficie Total de la Propiedad

    let superficieTotalIngresada = parseInt(document.getElementById("supTotal").value);
    while (isNaN(superficieTotalIngresada)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        superficieTotalIngresada = parseInt(document.getElementById("supTotal").value)
    }

// Ingreso de Area Privada
    let areaPrivadaIngresada = parseInt(document.getElementById("areaPrivada").value);
    while (isNaN(areaPrivadaIngresada)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        areaPrivadaIngresada = document.getElementById("areaPrivada").value;
    }
    while (areaPrivadaIngresada>superficieTotalIngresada) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        areaPrivadaIngresada = document.getElementById("areaPrivada").value;
    }

// Ingreso de Ambientes
    let ambientesIngresados = parseInt(document.getElementById("ambientes").value);
    while (isNaN(ambientesIngresados)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        ambientesIngresados = parseInt(document.getElementById("ambientes").value);
    }

// Ingreso de Dormitorios
    let dormitoriosIngresados = parseInt(document.getElementById("dormitorios").value);
    while (isNaN(dormitoriosIngresados)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        dormitoriosIngresados = parseInt(document.getElementById("dormitorios").value);
    }
    while (dormitoriosIngresados>ambientesIngresados) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        dormitoriosIngresados = parseInt(document.getElementById("dormitorios").value);
    }

// Ingreso de Baños
    let banosIngresados = parseInt(document.getElementById("banos").value);
    while (isNaN(banosIngresados)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        banosIngresados = document.getElementById("banos").value;
    }
    while (banosIngresados>(ambientesIngresados-dormitoriosIngresados)) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        banosIngresados = document.getElementById("banos").value;
    }

// Ingreso de Antiguedad
    let antiguedadIngresada = parseInt(document.getElementById("antiguedad").value);
    while (isNaN(antiguedadIngresada)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        antiguedadIngresada = parseInt(document.getElementById("antiguedad").value);
    }


// Ingreso de Gastos Comunes
    let gastoscomunesIngresados = parseInt(document.getElementById("gastosComunes").value);
    while (isNaN(gastoscomunesIngresados)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        gastoscomunesIngresados = parseInt(document.getElementById("gastosComunes").value);
    }

// Ingreso de Detalles Extras
    let notasIngresadas = document.getElementById("notas").value;

    let nuevaPropiedad = new Propiedad(usuarioIngresado, diaIngresado,mesIngresado, yearIngresado,operadorInmobiliarioIngresado,telContactoIngresado,propietarioIngresado,direccionINgresada,superficieTotalIngresada,areaPrivadaIngresada,ambientesIngresados,dormitoriosIngresados,banosIngresados,antiguedadIngresada,gastoscomunesIngresados,notasIngresadas)
    ListadoPropiedades.push(nuevaPropiedad)
    console.log(nuevaPropiedad)
    function render(){
        let cargando = document.getElementById("render")
        cargando.innerHTML = `<div class= "card-css col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
        <div class="card content-card">
            <div class="card-body">
              <h5 class="card-title">Propiedad en ${direccionINgresada}</h5>
              <p class="card-text">Agregada el ${diaIngresado}/${mesIngresado}/${yearIngresado} por: ${usuarioIngresado}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><i class="fa-thin fa-person"></i> Operador Inmobiliario asignado ${operadorInmobiliarioIngresado}</li>
              <li class="list-group-item"><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span><span class="fa-solid fa-star"></span></li>
              <li class="list-group-item"><i class="fa-thin fa-mobile-screen-button"></i></i> Telefono de Contacto: ${telContactoIngresado}</li>
              <li class="list-group-item"><i class="fa-solid fa-house-chimney"></i> Propietario: ${propietarioIngresado}</li>
              <li class="list-group-item"><i class="fa-thin fa-check-double"></i> Superficie Total: ${superficieTotalIngresada}</li>
              <li class="list-group-item"><i class="fa-thin fa-check-double"></i> Area Privada: ${areaPrivadaIngresada} m2</li>
              <li class="list-group-item"><i class="fa-thin fa-check-double"></i> Ambientes: ${ambientesIngresados}</li>
              <li class="list-group-item"><i class="fa-thin fa-check-double"></i> Dormitorios: ${dormitoriosIngresados}</li>
              <li class="list-group-item"><i class="fa-thin fa-check-double"></i> Baños: ${banosIngresados}</li>
              <li class="list-group-item"><i class="fa-thin fa-check-double"></i> Antiguedad: ${antiguedadIngresada}</li>
              <li class="list-group-item"><i class="fa-thin fa-check-double"></i> Gastos Comunes: ${gastoscomunesIngresados}</li>
              <li class="list-group-item"><i class="fa-thin fa-notebook"></i> Notas: ${notasIngresadas}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-success">Publicar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
            </div>
          </div>
    </div>`
    }
    render()
    console.log("Paso")
    opcionMostrar()
    function opcionMostrar(){ 
        let respuesta = ""
        respuesta = prompt("Desea comprobar los datos ingresados? SI / NO").toUpperCase();          
            while (
                (respuesta != "SI") &&
                        
                (respuesta != "NO") &&
                        
                (respuesta != "S") &&
                        
                (respuesta != "N")
                        
                )
                {
                    alert("Respuesta Incorrecta. Seleccione SI o NO")
                    respuesta = prompt("Desea comprobar los datos ingresados? SI / NO").toUpperCase();
                }
                if (respuesta === "SI" || respuesta === "S")         
                {
                    
                    alert("En el dia "+diaIngresado+"/"+mesIngresado+"/"+yearIngresado+" el usuario " +usuarioIngresado+" le ha asignado al operador inmobiliario "+operadorInmobiliarioIngresado+" quien tiene como telefono de contacto "+telContactoIngresado+" al propietario "+propietarioIngresado+" quien posee una propiedad ubicada en "+direccionINgresada+" con una superficie total de "+superficieTotalIngresada+" mts2 y un area privada de "+areaPrivadaIngresada+" mts2. Cuenta con "+dormitoriosIngresados+" dormitorios, "+banosIngresados+" baños, y una antiguedad de "+antiguedadIngresada+" años. El valor de los gastos comunes es de $ "+gastoscomunesIngresados+" Para esta propiedad el usuario ha agregado las siguientes notas: "+notasIngresadas)
                    volverInicializar()
                    }
                else
                {
                    volverInicializar()
                    }
          
        } 
}
    function volverInicializar(){
        let respuesta = ""
        respuesta = prompt("Desea agregar una nueva propiedad? SI / NO").toUpperCase();          
            while (
                (respuesta != "SI") &&
                            
                (respuesta != "NO") &&
                            
                (respuesta != "S") &&
                            
                (respuesta != "N")
                            
                )
                {
                    alert("Respuesta Incorrecta. Seleccione SI o NO")
                    respuesta = prompt("Desea comprobar los datos ingresados? SI / NO").toUpperCase();
                }
                if (respuesta === "SI" || respuesta === "S")         
                {
                    nuevaPropiedad()
                    }
                else
                {alert("Gracias por utilizar nuestros servicios") 
                    return                    
                    }                                
        }
function filtrarPropiedad(){
    busqueda = prompt("Ingrese la palabra a buscar")
    const encontrados = ListadoPropiedades.filter(x => x.Propiedad == busqueda)
    console.log(encontrados)
}

//****************************Llamado a funcion para AGREGAR PROPIEDAD**********************************************
//Dentro de esta funcion ya corre la opcion de MOSTRAR por alerta los ultimos datos ingresados
function agregar(){
    const guardarPropiedad = document.getElementById("guardarPropiedad");
    guardarPropiedad.onclick = () =>{nuevaPropiedad()}
}
//****************************Llamado a funcion para VER PROPIEDAD**********************************************
// function mostrar(){
//     const agregar = document.getElementById("ver");
//     agregar.onclick = () =>{filtrarPropiedad()}   
// }
//****************************Llamado a funcion para ELIMINAR PROPIEDAD**********************************************



//****************************Llamado a funciones cargadas en el BODY**********************************************
function loadBody(){
    agregar()
}




 