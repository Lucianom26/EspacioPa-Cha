function openWhatsApp() {
    const phoneNumber = "1162661506"; // Reemplaza con tu número
    const message = "Hola, me gustaría obtener más información."; // Mensaje predeterminado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}