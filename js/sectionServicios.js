 // Función para mostrar detalles del servicio
 function mostrarServicio(id) {
    // Oculta todos los detalles de servicios
    document.querySelectorAll('.servicio-detalle').forEach(sec => {
        sec.classList.remove('active');
    });
    // Muestra el servicio seleccionado
    document.getElementById(id).classList.add('active');
}