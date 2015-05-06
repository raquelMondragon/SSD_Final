
function determinar () 
{
	nombre = document.getElementById('nombre').value;
	monto = document.getElementById('monto').value;
	localStorage.setItem('nombre',nombre);
	localStorage.setItem('monto',monto);
	localStorage.setItem("contador", 0);
	totalPorciento = 0;
}
function agregar () 
{
	porciento = document.getElementById('porciento').value;
	concepto = document.getElementById('concepto').value;

	contador = localStorage.getItem('contador');
	
	if (totalPorciento<= 100) 
	{
		marco = document.getElementById('contador' + ' porciento',porciento + 'concepto',concepto);
		contador ++;
		totalPorciento = totalPorciento+porciento;

		localStorage.setItem('contador',contador);
		
		localStorage.setItem('porciento', porciento);
		localStorage.setItem('concepto', concepto);

	};
	// this.form.reset();
}