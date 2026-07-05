let estudiantes = [];

function agregar() {
    let nombre = document.getElementById('estudiante').value;
    let calificacion = document.getElementById('calif').value;

    // Validación: que no estén vacíos
    if (nombre === '' || calificacion === '') {
        alert('Por favor completa el nombre y la calificación');
        return;
    }

    const letrasPermitidas = 'abcdefghijklmnopqrstuvwxyzáéíóúñü ';

    for (let i = 0; i < nombre.length; i++) {
        let caracter = nombre[i].toLowerCase();

        if (letrasPermitidas.indexOf(caracter) === -1) {
             alert('Por favor ingresa caracteres válidos');
            return;
        }
    }

    if (isNaN(calificacion)) {
        alert('La calificación debe ser un número válido');
        return;
    }else if (calificacion < 0){
        alert('La calificación debe ser un número válido');
        return;
    }

    let nuevoEstudiante = {
        nombre: nombre,
        calificacion: Number(calificacion)
    };

    estudiantes.push(nuevoEstudiante);

    document.getElementById('estudiante').value = '';
    document.getElementById('calif').value = '';

    alert('Estudiante agregado: ' + nuevoEstudiante.nombre);
}

function calcular() {
    if (estudiantes.length === 0) {
        alert('Agrega al menos un estudiante antes de calcular');
        return;
    }

    let suma = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        suma = suma + estudiantes[i].calificacion;
    }
    let promedio = suma / estudiantes.length;
    let estudianteMayor = estudiantes[0];
    let estudianteMenor = estudiantes[0];

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].calificacion > estudianteMayor.calificacion) {
            estudianteMayor = estudiantes[i];
        }
        if (estudiantes[i].calificacion < estudianteMenor.calificacion) {
            estudianteMenor = estudiantes[i];
        }
    }

    document.getElementById('promedio').value = promedio;
    document.getElementById('mayor').value = estudianteMayor.nombre;
    document.getElementById('menor').value = estudianteMenor.nombre;
}