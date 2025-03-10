function toggleMenu() {
  const menu = document.querySelector('.navbar .menu');
  const hamburguesa = document.querySelector('.hamburguesa .fa-bars');
  const cerrarMenu = document.querySelector('.hamburguesa .fa-close');

  // Alternar la clase 'active' en el menú
  menu.classList.toggle('active');

  // Alternar la visibilidad de los íconos
  if (menu.classList.contains('active')) {
      hamburguesa.style.display = 'none'; // Oculta el ícono de hamburguesa
      cerrarMenu.style.display = 'block'; // Muestra el ícono de cerrar
  } else {
      hamburguesa.style.display = 'block'; // Muestra el ícono de hamburguesa
      cerrarMenu.style.display = 'none'; // Oculta el ícono de cerrar
  }
}

// Manejar submenús en móviles
document.querySelectorAll('.navbar .menu > ul > li').forEach(item => {
  item.addEventListener('click', () => {
      item.classList.toggle('active');
  });
});
document.querySelectorAll('.navbar .menu a').forEach(enlace => {
  enlace.addEventListener('click', () => {
      const menu = document.querySelector('.navbar .menu');
      const hamburguesa = document.querySelector('.hamburguesa .fa-bars');
      const cerrarMenu = document.querySelector('.hamburguesa .fa-close');

      menu.classList.remove('active');
      hamburguesa.style.display = 'block';
      cerrarMenu.style.display = 'none';
  });
});
document.querySelectorAll('.navbar .menu > ul > li').forEach(item => {
  item.addEventListener('click', () => {
      item.classList.toggle('submenu-active');
  });
});