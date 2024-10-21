
// Array para almacenar las tareas
let tareas = [];

const inputTarea = document.getElementById('nueva-tarea');
const listaTareas = document.getElementById('lista-tareas');
const botonAgregar = document.getElementById('agregar-tarea');


function agregarTarea(descripcionTarea) {
    if (descripcionTarea.trim() !== '') {
        const tarea = {
            id: Date.now(),
            descripcion: descripcionTarea,
            terminada: false
        };
        tareas.push(tarea);
        mostrarTareas();
        inputTarea.value = '';

    } else {
        alert('Por favor, escribe una tarea.');
    }        
}


function mostrarTareas() {
    listaTareas.innerHTML = '';
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea.descripcion;
        li.classList.toggle('completada', tarea.terminada);

        // Botón para eliminar tarea
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'eliminar';
        botonEliminar.onclick = () => eliminarTarea(tarea.id);
        
        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);
    });
}


function eliminarTarea(idTarea) {
    tareas = tareas.filter(tarea => tarea.id !== idTarea);
    mostrarTareas();
}

botonAgregar.addEventListener('click', () => agregarTarea(inputTarea.value));

inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea(inputTarea.value);
    }
});

// Mostrar tareas iniciales
mostrarTareas();