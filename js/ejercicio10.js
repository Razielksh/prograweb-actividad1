function convertir() {
    var celsius = document.getElementById('celsius').value;

    if (celsius === '' || isNaN(celsius)) {
        alert('Ingresa un valor numérico válido.');
        return;
    }

    var farenheit = parseFloat(celsius) * 9/5 + 32;
    document.getElementById('farenheit').value = farenheit + '°F';
}