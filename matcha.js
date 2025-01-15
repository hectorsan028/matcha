// Inicializar el nivel de cariño desde localStorage o en 0 si no existe
let nivelCariño = localStorage.getItem('nivelCariño') ? parseInt(localStorage.getItem('nivelCariño')) : 0;

// Seleccionar elementos del DOM
const botonAlimentar = document.getElementById('boton-alimentar');
const botonJugar = document.getElementById('boton-jugar');
const botonComentar = document.getElementById('boton-comentar');
const barraCariño = document.getElementById('barra-cariño');
const nivelCariñoTexto = document.getElementById('nivel-cariño');

// Función para actualizar la barra de progreso y el texto del porcentaje
function actualizarBarra() {
  barraCariño.style.width = `${nivelCariño}%`; // Actualiza el ancho de la barra
  nivelCariñoTexto.textContent = `${nivelCariño}%`; // Actualiza el texto del porcentaje
  localStorage.setItem('nivelCariño', nivelCariño); // Guarda el valor en localStorage
}

// Función para alimentar a Matcha
function alimentar() {
  nivelCariño += 10;
  if (nivelCariño > 100) {
    nivelCariño = 100;
  }
  actualizarBarra(); // Llama a la función para actualizar la barra
}

// Función para jugar con Matcha
function jugar() {
  nivelCariño += 20;
  if (nivelCariño > 100) {
    nivelCariño = 100;
  }
  actualizarBarra(); // Llama a la función para actualizar la barra
}

// Función para comentar sobre Matcha (redirige a otra página)
function comentar() {
  window.location.href = 'comentarios.html'; // Cambia 'comentarios.html' por la URL de la página de comentarios
}

// Función para disminuir el cariño con el tiempo (5% por hora)
function disminuirCariño() {
  nivelCariño -= 5; // Disminuye 5% cada vez que se ejecuta
  if (nivelCariño < 0) {
    nivelCariño = 0;
  }
  actualizarBarra(); // Llama a la función para actualizar la barra
}

// Eventos de los botones
botonAlimentar.addEventListener('click', alimentar);
botonJugar.addEventListener('click', jugar);
botonComentar.addEventListener('click', comentar);

// Intervalo para disminuir el cariño con el tiempo (5% por hora)
setInterval(disminuirCariño, 3600000); // 3600000 ms = 1 hora

// Inicializar la barra al cargar la página
actualizarBarra();