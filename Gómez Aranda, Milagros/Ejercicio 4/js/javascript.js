function validarFormulario(){
	var crear = true;
	var titulo = document.getElementById("titulo").value;
	var descripcion = document.getElementById("descripcion").value;
	var archivo = document.getElementById("archivo").value;
	var terminos = document.getElementById("terminos").checked;

	if (titulo="") {
		alert("Ingrese título");
		return;
	}

	if(descripcion=""){
		alert("Ingrese descripción");
		return;
	}

	if(arhivos=""){
		alert("Ingrese un archivo");
		return;
	}

	if (!terminos) {
		alert("Para enviar el formulario, debe aceptar los Terminos y Condiciones");
		return;
	}
}