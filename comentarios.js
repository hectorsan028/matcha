const listaComentarios = document.getElementById('lista-comentarios');
const nuevoComentario = document.getElementById('nuevo-comentario');
const botonPublicar = document.getElementById('publicar-comentario');

// Función para cargar comentarios guardados
function cargarComentarios() {
  const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
  const comentariosBorrados = JSON.parse(localStorage.getItem('comentariosBorrados')) || [];
  const comentariosFiltrados = comentariosGuardados.filter((comentario) => !comentariosBorrados.includes(comentario.texto));
  listaComentarios.innerHTML = comentariosFiltrados
    .map((comentario) => `<li>${comentario.texto} <button class="borrar-comentario">Borrar</button></li>`) // Agregar botón de borrar
    .join('');
}

// Función para guardar un nuevo comentario
function guardarComentario() {
  const texto = nuevoComentario.value.trim();
  if (texto) {
    const fecha = new Date().toLocaleString();
    const comentario = { texto, fecha };

    // Guardar en localStorage
    const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    comentariosGuardados.push(comentario);
    localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));

    // Limpiar el textarea y recargar los comentarios
    nuevoComentario.value = '';
    cargarComentarios();
  }
}

// Evento para publicar un comentario
botonPublicar.addEventListener('click', guardarComentario);

// Función para borrar un comentario
function borrarComentario(event) {
  if (event.target.classList.contains('borrar-comentario')) {
    const comentario = event.target.parentNode.textContent;
    const comentariosBorrados = JSON.parse(localStorage.getItem('comentariosBorrados')) || [];
    comentariosBorrados.push(comentario);
    localStorage.setItem('comentariosBorrados', JSON.stringify(comentariosBorrados));
    cargarComentarios();
  }
}

// Evento para borrar un comentario
listaComentarios.addEventListener('click', borrarComentario);

// Función para retroceder a la página principal
function volver() {
  window.history.back();
}

// Evento para el botón "Volver"
document.getElementById('boton-volver').addEventListener('click', volver);