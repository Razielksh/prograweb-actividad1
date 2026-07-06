const CLAVE_STORAGE = 'tareas';

const obtenerTareas = () => {
    const tareasJSON = localStorage.getItem(CLAVE_STORAGE); // string en formato JSON
    return tareasJSON ? JSON.parse(tareasJSON) : [];
};

const manejarTareas = (() => {
    let tareas = obtenerTareas();

    const guardarEnStorage = () => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };

    const agregar = texto => {
        const nuevaTarea = {
            id: Date.now(),
            texto: texto
        };
        tareas.push(nuevaTarea);
        guardarEnStorage();
    };

    const eliminar = id => {
        tareas = tareas.filter(tarea => tarea.id !== id);
        guardarEnStorage();
    };

    // copia del array de tareas actual
    const obtener = () => tareas;

    // funciones fuera del closure
    return { agregar, eliminar, obtener };
})();

// renderizarTareas(): dibuja en el DOM las tareas guardadas
const renderizarTareas = () => {
    const lista = document.getElementById('lista-tareas');
    const tareas = manejarTareas.obtener();

    lista.innerHTML = '';

    if (tareas.length === 0) {
        lista.innerHTML = '<li class="lista-vacia">No hay tareas pendientes</li>';
        return;
    }

    tareas.forEach(tarea => {
        const item = document.createElement('li');
        item.className = 'tarea-item';
        item.innerHTML = `
            <span class="tarea-texto">${tarea.texto}</span>
            <button type="button" class="boton-eliminar" onclick="confirmarEliminarTarea(${tarea.id})">Eliminar</button>
        `;
        lista.appendChild(item);
    });
};

// agregarTarea(): toma el valor del input, valida y llama al closure para agregar
const agregarTarea = () => {
    const input = document.getElementById('nueva-tarea');
    const texto = input.value.trim(); // scope local a esta función

    if (texto === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Debes escribir una tarea antes de agregarla.'
        });
        return;
    }

    manejarTareas.agregar(texto);
    input.value = '';
    renderizarTareas();

    Swal.fire({
        icon: 'success',
        title: 'Tarea agregada',
        text: 'La tarea se guardó correctamente.',
        timer: 1200,
        showConfirmButton: false
    });
};

// confirmarEliminarTarea(): pide confirmación con SweetAlert2 antes de eliminar
const confirmarEliminarTarea = id => {
    Swal.fire({
        icon: 'question',
        title: '¿Eliminar tarea?',
        text: 'Esta acción no se puede deshacer.',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then(resultado => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(id);
            renderizarTareas();
            Swal.fire({
                icon: 'success',
                title: 'Eliminada',
                text: 'La tarea fue eliminada correctamente.',
                timer: 1200,
                showConfirmButton: false
            });
        }
    });
};

// Variable global de ejemplo para mostrar el scope global
const nombreApp = 'Gestión de Tareas';

// Al cargar la página, se renderizan las tareas que ya existían en el Local Storage
window.onload = () => {
    console.log(nombreApp); // accede a la variable global desde dentro de la función
    renderizarTareas();
};
