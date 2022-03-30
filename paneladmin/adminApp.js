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
console.log(ListadoPropiedades)

//Constructor del Objeto Propiedad

class Propiedad{ 
    constructor(dia, mes, year, direccion, usuario, operadorInmobiliario, telContacto, propietario, superficieTotal, areaPrivada, ambientes, dormitorios, banos, antiguedad, gastosComunes, notas){ 
        this.dia = dia, 
        this.mes = mes,
        this.year = year,
        this.direccion = direccion,
        this.usuario = usuario, 
        this.operadorInmobiliario = operadorInmobiliario,
        this.telContacto = telContacto,
        this.propietario = propietario,
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

// Ingreso de fecha
function ingresarDia(){
    dia = parseInt(prompt("Ingresa el dia"));
    while (isNaN(dia)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        dia = prompt("Ingresa el mes");
    }
    while (dia>31 || dia<=0)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        dia = prompt("Ingresa el dia");
    }
    return
}
function ingresarMes(){
    mes = parseInt(prompt("Ingresa el mes"));
    while (isNaN(mes)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        mes = prompt("Ingresa el mes");
    }
    while (mes>12 || mes<=0)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        mes = prompt("Ingresa el mes");
    }
    return
}
function ingresarYear(){
    year = parseInt(prompt("Ingresa el año"));
    while (isNaN(year)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        year = prompt("Ingresa el año");
    }
    while (year<2022)
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        year = prompt("Ingresa el año");
    }
    return
}
// Ingreso de nombre de operador inmobiliario
function ingresarOperadorInmobiliario(){
    operadorInmobiliario = prompt("Ingresa el nombre del operador inmobiliario asignado");
    while (!isNaN(operadorInmobiliario)) 
    {
        alert("No se admiten Numeros. Intenta Nuevamente")
        operadorInmobiliario = prompt("Ingresa el nombre del operador inmobiliario asignado");
    }
}

// Ingreso de telefono de contacto de operador inmobiliario
function ingresarTelContacto(){
    telContacto = parseInt(prompt("Ingresa el telefono de contacto del operador inmobiliario asignado"));
    while (isNaN(telContacto)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        telContacto = prompt("Ingresa el telefono de contacto del operador inmobiliario asignado");
    }
    while (telContacto<091000000 || telContacto>099999999) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        telContacto = prompt("Ingresa el telefono de contacto del operador inmobiliario asignado");
    }
}

// Ingreso del nombre del propietario
function ingresarPropietario(){
    propietario = prompt("Ingresa el nombre del propietario");
    while (!isNaN(propietario)) 
    {
        alert("No se admiten Numeros. Intenta Nuevamente")
        propietario = prompt("Ingresa el nombre del propietario");
    }
}

// Ingreso de la dirreccion de la propiedad
function ingresarDireccion(){
    direccion = prompt("Ingresa la direccion de la propiedad");
}

// Ingreso de Superficie Total de la Propiedad
function ingresarSuperficieTotal(){
    superficieTotal = parseInt(prompt("Ingresa la superficie total de la propiedad en m2"));
    while (isNaN(superficieTotal)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        superficieTotal = prompt("Ingresa la superficie total de la propiedad en m2");
    }
}

// Ingreso de Area Privada
function ingresarAreaPrivada(){
    areaPrivada = parseInt(prompt("Ingresa la superficie de area privada en m2"));
    while (isNaN(areaPrivada)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        areaPrivada = prompt("Ingresa la superficie de area privada en m2");
    }
    while (areaPrivada>superficieTotal) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        areaPrivada = prompt("Ingresa la superficie de area privada en m2");
    }
}
// Ingreso de Ambientes
function ingresarAmbientes(){
    ambientes = parseInt(prompt("Ingresa la cantidad de ambientes"));
    while (isNaN(ambientes)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        ambientes = prompt("Ingresa la cantidad de ambientes");
    }
}

// Ingreso de Dormitorios
function ingresarDormitorios(){
    dormitorios = parseInt(prompt("Ingresa la cantidad de dormitorios"));
    while (isNaN(dormitorios)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        dormitorios = prompt("Ingresa la cantidad de dormitorios");
    }
    while (dormitorios>ambientes) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        dormitorios = prompt("Ingresa la cantidad de dormitorios");
    }
}

// Ingreso de Baños
function ingresarbanos(){
    banos = parseInt(prompt("Ingresa la cantidad de baños"));
    while (isNaN(banos)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        banos = prompt("Ingresa la cantidad de baños");
    }
    while (banos>(ambientes-dormitorios)) 
    {
        alert("El dato ingresado no es correcto. Intenta Nuevamente")
        banos = prompt("Ingresa la cantidad de baños");
    }
}

// Ingreso de Antiguedad
function ingresarAntiguedad(){
    antiguedad = parseInt(prompt("Ingresa la cantidad de años de antiguedad"));
    while (isNaN(antiguedad)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        antiguedad = prompt("Ingresa la cantidad de años de antiguedad");
    }
}

// Ingreso de Gastos Comunes
function ingresarGastosComunes(){
    gastosComunes = parseInt(prompt("Ingresa el costo de los gastos comunes"));
    while (isNaN(gastosComunes)) 
    {
        alert("Solo se admiten Numeros. Intenta Nuevamente")
        gastosComunes = prompt("Ingresa el costo de los gastos comunes");
    }
}

// Ingreso de Detalles Extras
function ingresarNotas(){
    notas = prompt("Ingresa detalles extras que creas pertinentes");
} 

// Ingreso de datos generales para el inicio del programa + llamada a funciones
function ingresarDatos(){
    usuario = prompt("Ingresa tu nombre de usuario");
    while (!isNaN(usuario)) 
    {
        noNumeros()
        usuario = prompt("Ingresa tu nombre de usuario");
    }
    alert("Bienvenido " + usuario + " Por favor, completa los siguientes datos de la propiedad");
    ingresarDia()
    ingresarMes()
    ingresarYear()
    ingresarOperadorInmobiliario()
    ingresarTelContacto()
    ingresarPropietario()
    ingresarDireccion()
    ingresarSuperficieTotal()
    ingresarAreaPrivada()
    ingresarAmbientes()
    ingresarDormitorios()
    ingresarbanos()
    ingresarAntiguedad()
    ingresarGastosComunes()
    ingresarNotas()
    opcionMostrar()
}



//****************************Llamado a funcion para INGRESAR DATOS Y  CREAR EL OBJETO (el inicio del Programa)**********************************************
//Dentro de esta funcion ya corre la de MOSTRAR por alerta y consola los datos ingresados
ingresarDatos()
//****************************Llamado a funcion para el inicio del Programa**********************************************

const propiedad = new Propiedad(propiedad.length + 1, dia, mes, year, direccion, usuario, operadorInmobiliario, telContacto, propietario, superficieTotal, areaPrivada, ambientes, dormitorios, banos, antiguedad, gastosComunes, notas);
ListadoPropiedades.push(propiedad)

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
                alert("En el dia "+dia+"/"+mes+"/"+year+" el usuario " +usuario+" le ha asignado al operador inmobiliario "+operadorInmobiliario+" quien tiene como telefono de contacto "+telContacto+" al propietario "+propietario+" quien posee una propiedad ubicada en "+direccion+" con una superficie total de "+superficieTotal+" mts2 y un area privada de "+areaPrivada+" mts2. Cuenta con "+dormitorios+" dormitorios, "+banos+" baños, y una antiguedad de "+antiguedad+" años. El valor de los gastos comunes es de $ "+gastosComunes+" Para esta propiedad el usuario ha agregado las siguientes notas: "+notas)
                volverInicializar() 
                }
            else
            {
                volverInicializar()
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
                ingresarDatos()
                }
            else
            {alert("Gracias por utilizar nuestros servicios") 
                return                    
                }                                
    }


    

    // Leer - una function para leer mi array de objetos - imprimir en consola o alert

    // Actualizar- otra function para actualizar mi array de objetos, que me van a mandar algo para cambiar en alguno de los objetos de mi array

    // Eliminar - una function para eliminar ese objeto que me envian