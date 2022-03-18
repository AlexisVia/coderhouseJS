// My Global Var
let dia = 1
let mes = 1
let year = 1111
let fecha = dia+"/"+mes+"/"+year
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




// My Global Function

function noNumeros()
{
    alert("No se admiten Numeros. Intenta Nuevamente")
}
function noTexto()
{
    alert("Solo se admiten Numeros. Intenta Nuevamente")
}

// Ingreso de datos generales
function ingresarDatos(){
    usuario = prompt("Ingresa tu nombre de usuario");
    while (!isNaN(usuario)) 
    {
        noNumeros()
        usuario = prompt("Ingresa tu nombre de usuario");
    }
    alert("Bienvenido " + usuario + " Por favor, completa los siguientes datos de la propiedad");
    ingresarOperadorInmobiliario()
    ingresarTelContacto()
    ingresarPropietario()
    ingresarSuperficieTotal()
    ingresarAreaPrivada()
    ingresarAmbientes()
    ingresarDormitorios()
    ingresarbanos()
    ingresarAntiguedad()
    ingresarGastosComunes()
    ingresarNotas()
} 
// Ingreso de nombre de operador inmobiliario
function ingresarOperadorInmobiliario(){
    operadorInmobiliario = prompt("Ingresa el nombre del operador inmobiliario asignado");
    while (!isNaN(operadorInmobiliario)) 
    {
        noNumeros()
        operadorInmobiliario = prompt("Ingresa el nombre del operador inmobiliario asignado");
    }
}

// Ingreso de fecha
function ingresarDia(){
    dia = parseInt(prompt("Ingresa el dia"));
    while (isNaN(dia)) 
    {
        noTexto()
        dia = prompt("Ingresa el dia");
    }
}
function ingresarMes(){
    mes = parseInt(prompt("Ingresa el mes"));
    while (isNaN(mes)) 
    {
        noTexto()
        mes = prompt("Ingresa el mes");
    }
}
function ingresarYear(){
    year = parseInt(prompt("Ingresa el año"));
    while (isNaN(year)) 
    {
        noTexto()
        dia = prompt("Ingresa el año");
    }
}

// Ingreso de telefono de contacto de operador inmobiliario
function ingresarTelContacto(){
    telContacto = parseInt(prompt("Ingresa el telefono de contacto del operador inmobiliario asignado"));
    while (isNaN(telContacto)) 
    {
        noTexto()
        telContacto = prompt("Ingresa el telefono de contacto del operador inmobiliario asignado");
    }
}

// Ingreso del nombre del propietario
function ingresarPropietario(){
    propietario = prompt("Ingresa el nombre del propietario");
    while (!isNaN(propietario)) 
    {
        noNumeros()
        propietario = prompt("Ingresa el nombre del propietario");
    }
}

// Ingreso de Superficie Total de la Propiedad
function ingresarSuperficieTotal(){
    superficieTotal = parseInt(prompt("Ingresa la superficie total de la propiedad en m2"));
    while (isNaN(superficieTotal)) 
    {
        noTexto()
        superficieTotal = prompt("Ingresa la superficie total de la propiedad en m2");
    }
}

// Ingreso de Area Privada
function ingresarAreaPrivada(){
    areaPrivada = parseInt(prompt("Ingresa la superficie de area privada en m2"));
    while (isNaN(areaPrivada)) 
    {
        noTexto()
        areaPrivada = prompt("Ingresa la superficie de area privada en m2");
    }
}



// Ingreso de Ambientes
function ingresarAmbientes(){
    ambientes = parseInt(prompt("Ingresa la cantidad de ambientes"));
    while (isNaN(ambientes)) 
    {
        noTexto()
        ambientes = prompt("Ingresa la cantidad de ambientes");
    }
}

// Ingreso de Dormitorios
function ingresarDormitorios(){
    dormitorios = parseInt(prompt("Ingresa la cantidad de dormitorios"));
    while (isNaN(dormitorios)) 
    {
        noTexto()
        dormitorios = prompt("Ingresa la cantidad de dormitorios");
    }
}

// Ingreso de Baños
function ingresarbanos(){
    banos = parseInt(prompt("Ingresa la cantidad de baños"));
    while (isNaN(banos)) 
    {
        noTexto()
        banos = prompt("Ingresa la cantidad de baños");
    }
}

// Ingreso de Antiguedad
function ingresarAntiguedad(){
    antiguedad = parseInt(prompt("Ingresa la cantidad de años de antiguedad"));
    while (isNaN(antiguedad)) 
    {
        noTexto()
        antiguedad = prompt("Ingresa la cantidad de años de antiguedad");
    }
}

// Ingreso de Gastos Comunes
function ingresarGastosComunes(){
    gastosComunes = parseInt(prompt("Ingresa el costo de los gastos comunes"));
    while (isNaN(gastosComunes)) 
    {
        noTexto()
        gastosComunes = prompt("Ingresa el costo de los gastos comunes");
    }
}

// Ingreso de Detalles Extras
function ingresarNotas(){
    notas = prompt("Ingresa detalles extras que creas pertinentes");
}
console.log("hasta aqui llego")

function mostrarDatos(){    
    
    let respuesta = prompt("Desea comprobar los datos ingresados? SI / NO").toUpperCase();
    
    while (

        respuesta != "SI" &&
        
        respuesta != "NO" &&
        
        respuesta != "S" &&
        
        respuesta != "N"
        
        ){
        alert("Respuesta Incorrecta. Seleccione SI o NO")
        respuesta = prompt("Desea comprobar los datos ingresados? SI / NO").toUpperCase;
    }
    if (respuesta === "SI" || respuesta === "S"  ){
        alert("En el dia "+fecha+" el usuario "+" le ha asignado al operador inmobiliario "+operadorInmobiliario+" quien tiene como telefono de contacto "+telContacto+" al propietario"+propietario+" quien tiene una propiedad con una propiedad ubicada en "+direccion+" con una superficie total de "+superficieTotal+" mts2 y un area privada de "+" mts2. Cuenta con "+dormitorios+" dormitorios, "+banos+" baños, y una antiguedad de "+antiguedad+" años. El valor de los gastos comunes es de $ "+gastosComunes+" Para esta propiedad el usuario ha agregado las siguientes notas: "+notas)
        alert("Hasta pronto "+usuario+" que tengas buen dia")
        }
    else if (respuesta === "NO" || respuesta === "N" ){
        alert("Hasta pronto "+usuario+" que tengas buen dia")
        } 
    else {
        alert("Respuesta Incorrecta. Seleccione SI o NO")
        respuesta = prompt("Desea comprobar los datos ingresados? SI / NO").toUpperCase();
        }
    }   
        
    
    


//La idea a futuro sera que la funcion de INGRESAR datos se active con un clik en un boton
ingresarDatos()

//La idea a futuro sera que la funcion de MOSTRAR datos se active con un clik en un boton

mostrarDatos()

