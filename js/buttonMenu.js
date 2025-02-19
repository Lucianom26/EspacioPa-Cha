function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    const hamburguesa = document.querySelector('.hamburguesa .fa-bars');
    const cerrarMenu = document.getElementById('close-menu');
  
    menu.classList.toggle('active');
  
    if (menu.classList.contains('active')) {
      hamburguesa.style.display = 'none';
      cerrarMenu.style.display = 'block';
    } else {
      hamburguesa.style.display = 'block';
      cerrarMenu.style.display = 'none';
    }
  }