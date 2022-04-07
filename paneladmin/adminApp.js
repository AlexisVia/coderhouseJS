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
    let usuarioIngresado = prompt("Ingresa tu nombre de usuario");
    while (!isNaN(usuarioIngresado)) 
    {
        alert("No se admiten Numeros. Intenta Nuevamente")
        usuarioIngresado = prompt("Ingresa tu nombre de usuario");
    }
    alert("Bienvenido " + usuarioIngresado + " Por favor, completa los siguientes datos de la propiedad");
    
// Ingreso de fecha
    let diaIngresado = parseInt(prompt("Ingresa el dia"));
    while (isNaN(diaIngresado)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        diaIngresado = prompt("Ingresa el mes");
    }
    while (diaIngresado>31 || diaIngresado<=0)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        dia = prompt("Ingresa el dia");
    }

    let mesIngresado = parseInt(prompt("Ingresa el mes"));
    while (isNaN(mesIngresado)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        mesIngresado = prompt("Ingresa el mes");
    }
    while (mesIngresado>12 || mesIngresado<=0)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        mesIngresado = prompt("Ingresa el mes");
    }

    let yearIngresado = parseInt(prompt("Ingresa el año"));
    while (isNaN(yearIngresado)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        yearIngresado = prompt("Ingresa el año");
    }
    while (yearIngresado<2022)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        yearIngresado = prompt("Ingresa el año");
    }

// Ingreso de nombre de operador inmobiliario

let operadorInmobiliarioIngresado = prompt("Ingresa el nombre del operador inmobiliario asignado");
    while (!isNaN(operadorInmobiliarioIngresado)) 
    {
        alert("No se admiten Numeros. Intenta Nuevamente")
        operadorInmobiliarioIngresado = prompt("Ingresa el nombre del operador inmobiliario asignado");
    }

// Ingreso de telefono de contacto de operador inmobiliario
    let telContactoIngresado = parseInt(prompt("Ingresa el telefono de contacto del operador inmobiliario asignado (Ej. 099123456)"));
    while (isNaN(telContactoIngresado)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        telContactoIngresado = prompt("Ingresa el telefono de contacto del operador inmobiliario asignado (Ej. 099123456)");
    }
    while (telContactoIngresado<091000000 || telContactoIngresado>099999999) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        telContactoIngresado = prompt("Ingresa el telefono de contacto del operador inmobiliario asignado");
    }

// Ingreso del nombre del propietario
    let propietarioIngresado = prompt("Ingresa el nombre del propietario");
    while (!isNaN(propietarioIngresado)) 
    {
        alert("No se admiten Numeros. Intenta Nuevamente")
        propietarioIngresado = prompt("Ingresa el nombre del propietario");
    }

// Ingreso de la dirreccion de la propiedad
    let direccionINgresada = prompt("Ingresa la direccion de la propiedad");

// Ingreso de Superficie Total de la Propiedad

    let superficieTotalIngresada = parseInt(prompt("Ingresa la superficie total de la propiedad en m2"));
    while (isNaN(superficieTotalIngresada)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        superficieTotalIngresada = prompt("Ingresa la superficie total de la propiedad en m2");
    }

// Ingreso de Area Privada
    let areaPrivadaIngresada = parseInt(prompt("Ingresa la superficie de area privada en m2"));
    while (isNaN(areaPrivadaIngresada)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        areaPrivadaIngresada = prompt("Ingresa la superficie de area privada en m2");
    }
    while (areaPrivadaIngresada>superficieTotalIngresada) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        areaPrivadaIngresada = prompt("Ingresa la superficie de area privada en m2");
    }

// Ingreso de Ambientes
    let ambientesIngresados = parseInt(prompt("Ingresa la cantidad de ambientes"));
    while (isNaN(ambientesIngresados)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        ambientesIngresados = prompt("Ingresa la cantidad de ambientes");
    }

// Ingreso de Dormitorios
    let dormitoriosIngresados = parseInt(prompt("Ingresa la cantidad de dormitorios"));
    while (isNaN(dormitoriosIngresados)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        dormitoriosIngresados = prompt("Ingresa la cantidad de dormitorios");
    }
    while (dormitoriosIngresados>ambientesIngresados) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        dormitoriosIngresados = prompt("Ingresa la cantidad de dormitorios");
    }

// Ingreso de Baños
    let banosIngresados = parseInt(prompt("Ingresa la cantidad de baños"));
    while (isNaN(banosIngresados)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        banosIngresados = prompt("Ingresa la cantidad de baños");
    }
    while (banosIngresados>(ambientesIngresados-dormitoriosIngresados)) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        banosIngresados = prompt("Ingresa la cantidad de baños");
    }

// Ingreso de Antiguedad
    let antiguedadIngresada = parseInt(prompt("Ingresa la cantidad de años de antiguedad"));
    while (isNaN(antiguedadIngresada)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        antiguedadIngresada = prompt("Ingresa la cantidad de años de antiguedad");
    }


// Ingreso de Gastos Comunes
    let gastoscomunesIngresados = parseInt(prompt("Ingresa el costo de los gastos comunes"));
    while (isNaN(gastoscomunesIngresados)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        gastoscomunesIngresados = prompt("Ingresa el costo de los gastos comunes");
    }

// Ingreso de Detalles Extras
    let notasIngresadas = prompt("Ingresa detalles extras que creas pertinentes");

    let nuevaPropiedad = new Propiedad(usuarioIngresado, diaIngresado,mesIngresado, yearIngresado,operadorInmobiliarioIngresado,telContactoIngresado,propietarioIngresado,direccionINgresada,superficieTotalIngresada,areaPrivadaIngresada,ambientesIngresados,dormitoriosIngresados,banosIngresados,antiguedadIngresada,gastoscomunesIngresados,notasIngresadas)
    ListadoPropiedades.push(nuevaPropiedad)
    render()
    console.log(nuevaPropiedad)
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

function render(){
  const cargando = document.createElement("h2");
  cargando.innerHTML = "<h2>LE INFORMAMOS QUE MUY PRONTO VERA AQUI SU PROPIEDAD</h2>";
document.body.append(cargando)
}
  



//****************************Llamado a funcion para AGREGAR PROPIEDAD**********************************************
//Dentro de esta funcion ya corre la opcion de MOSTRAR por alerta los ultimos datos ingresados
function agregar(){
    const agregar = document.getElementById("agregar");
    agregar.onclick = () =>{nuevaPropiedad()}
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




 