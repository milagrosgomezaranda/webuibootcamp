function cambiarColor(){
	var x = Math.round(Math.random() * 255);
	var y = Math.round(Math.random() * 255);
	var z = Math.round(Math.random() * 255);
	var bg  = "background:rgb("+x+" , "+y+" , "+z+");";
	var element = document.getElementById("fondoAleatorio");
	element.style = bg;

} 