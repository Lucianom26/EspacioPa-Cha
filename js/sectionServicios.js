function mostrarServicio(id) {
    // Oculta todos los detalles de servicios
    document.querySelectorAll('.servicio-detalle').forEach(sec => {
        sec.classList.remove('active');
    });

    // Muestra el servicio seleccionado (si existe)
    const servicioSeleccionado = document.getElementById(id);
    if (servicioSeleccionado) {
        servicioSeleccionado.classList.add('active');
        servicioSeleccionado.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    } else {
        console.error(`No se encontró el servicio con ID: ${id}`);
    }
}
/*document.addEventListener('click', (event) => {
    const servicios = document.querySelectorAll('.servicio-detalle');
    const clicDentroDeServicio = Array.from(servicios).some(servicio => servicio.contains(event.target));

    if (!clicDentroDeServicio) {
        servicios.forEach(sec => sec.classList.remove('active'));
    }
});*/