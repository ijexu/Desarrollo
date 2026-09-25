const caja_desplegable = document.getElementById('caja_desplegable');
const boton_despliegue = document.getElementById('boton_despliegue');

boton_despliegue.addEventListener('click', () => {
	caja_desplegable.classList.toggle('collapsed');
});
