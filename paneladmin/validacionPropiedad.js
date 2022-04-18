const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	opInmobiliario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nombrePropietario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	telefonoPropietario: /^.{9}$/, // 9 digitos.
	direccionPropiedad: /^[a-zA-Z0-9_.+-]/, // Letras y espacios, pueden llevar acentos y numeros.
}

const campos = {
	opInmobiliario: false,
	nombrePropietario: false,
	telefonoPropietario: false,
	direccionPropiedad: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "opInmobiliario":
			validarCampo(expresiones.opInmobiliario, e.target, 'opInmobiliario');
		break;
		case "nombrePropietario":
			validarCampo(expresiones.nombrePropietario, e.target, 'nombrePropietario');
		break;
		case "telefonoPropietario":
			validarCampo(expresiones.telefonoPropietario, e.target, 'telefonoPropietario');
		break;
		case "direccionPropiedad":
			validarCampo(expresiones.direccionPropiedad, e.target, 'direccionPropiedad');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.opInmobiliario && campos.nombrePropietario && campos.telefonoPropietario && campos.direccionPropiedad){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});


