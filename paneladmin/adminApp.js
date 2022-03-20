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




// My Global Function

function datoIncorrecto(){
    alert("El dato ingresado no es correcto. Intenta Nuevamente")
}

function noNumeros()
{
    alert("No se admiten Numeros. Intenta Nuevamente")
}
function noTexto()
{
    alert("Solo se admiten Numeros. Intenta Nuevamente")
}
function mostrarDatos(){
    alert("En el dia "+dia+"/"+mes+"/"+year+" el usuario " +usuario+" le ha asignado al operador inmobiliario "+operadorInmobiliario+" quien tiene como telefono de contacto "+telContacto+" al propietario "+propietario+" quien posee una propiedad ubicada en "+direccion+" con una superficie total de "+superficieTotal+" mts2 y un area privada de "+areaPrivada+" mts2. Cuenta con "+dormitorios+" dormitorios, "+banos+" baños, y una antiguedad de "+antiguedad+" años. El valor de los gastos comunes es de $ "+gastosComunes+" Para esta propiedad el usuario ha agregado las siguientes notas: "+notas)
    alert("Hasta pronto "+usuario+" que tengas buen dia")
}

function noMostrarDatos(){
    alert("Hasta pronto "+usuario+" que tengas buen dia")
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
        dia = prompt("Ingresa el mes");
    }
    while (dia>31 || dia<=0)
    {
        datoIncorrecto()
        dia = prompt("Ingresa el dia");
    }
    return
}
function ingresarMes(){
    mes = parseInt(prompt("Ingresa el mes"));
    while (isNaN(mes)) 
    {
        noTexto()
        mes = prompt("Ingresa el mes");
    }
    while (mes>12 || mes<=0)
    {
        datoIncorrecto()
        mes = prompt("Ingresa el mes");
    }
    return
}
function ingresarYear(){
    year = parseInt(prompt("Ingresa el año"));
    while (isNaN(year)) 
    {
        noTexto()
        year = prompt("Ingresa el año");
    }
    while (year<2022)
    {
        datoIncorrecto()
        year = prompt("Ingresa el año");
    }
    return
}

// Ingreso de telefono de contacto de operador inmobiliario
function ingresarTelContacto(){
    telContacto = parseInt(prompt("Ingresa el telefono de contacto del operador inmobiliario asignado"));
    while (isNaN(telContacto)) 
    {
        noTexto()
        telContacto = prompt("Ingresa el telefono de contacto del operador inmobiliario asignado");
    }
    while (telContacto<091000000 || telContacto>099999999) 
    {
        datoIncorrecto()
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

// Ingreso de la dirreccion de la propiedad
function ingresarDireccion(){
    direccion = prompt("Ingresa la direccion de la propiedad");
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
    while (areaPrivada>superficieTotal) 
    {
        datoIncorrecto()
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
    while (dormitorios>ambientes) 
    {
        datoIncorrecto()
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
    while (banos>(ambientes-dormitorios)) 
    {
        datoIncorrecto()
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
                mostrarDatos()
                }
            else
            {
                noMostrarDatos()
                }
            alert("Gracias por utilizar nuestros servicios")
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


 
    
   
    
    


//La idea a futuro sera que la funcion de INGRESAR datos se active con un clik en un boton
ingresarDatos()



