const abrirMenu = document.querySelector("#open-menu");
const cerrarMenu = document.querySelector("#close-menu");
const nav = document.querySelector("nav")

abrirMenu.addEventListener("click", () => {
  nav.classList.add("nav-visible");
})

cerrarMenu.addEventListener("click", () => {
  nav.classList.remove("nav-visible");
})


document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('spotify-player');
  const trackSelectors = document.querySelectorAll('.track-selector');
  const mainTrackButton = document.getElementById('main-track-button');

  // Guardamos la URL inicial del iframe (canción principal)
  const mainTrackSrc = iframe.getAttribute('src');

  // Función para mostrar el botón con una clase
  const showMainTrackButton = () => {
    mainTrackButton.classList.add('show');
    mainTrackButton.classList.remove('hidden');
  };

  // Función para ocultar el botón
  const hideMainTrackButton = () => {
    mainTrackButton.classList.add('hidden');
    mainTrackButton.classList.remove('show');
  };

  // Evento para los botones de otros tracks
  trackSelectors.forEach(button => {
    button.addEventListener('click', () => {
      const newSrc = button.getAttribute('data-src'); // Obtén la URL del botón seleccionado
      iframe.src = newSrc; // Actualiza el iframe

      // Mostrar el botón para regresar al track principal
      showMainTrackButton();
    });
  });

  // Evento para el botón "Volver al track principal"
  mainTrackButton.addEventListener('click', () => {
    iframe.src = mainTrackSrc; // Restablece la URL principal

    // Ocultar el botón de volver
    hideMainTrackButton();
  });
});