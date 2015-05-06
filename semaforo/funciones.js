var criterio;
function fijar () 
{
	nombre = document.getElementById('nombre');
	cirterio = document.getElementById('criterio');
	document.location.href = "semaforo.html";
}

function evaluar () 
{
	nombreEvaluacion = document.getElementById('nombreEvaluacion');
	datoEvaluacion = document.getElementById('datoEvaluacion');
	if (datoEvaluacion<criterio) 
	{
		semaforo.classList.add('yellow');
	}
	else if(datoEvaluacion=criterio)
	{
		semaforo.classList.add('red');	
	}
	else
	{ 
		semaforo.classList.add('green');
	}
}