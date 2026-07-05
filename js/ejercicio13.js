function comprobar() {
    var edad = document.getElementById('edad').value;

    if (edad === '' || isNaN(edad)) {
        document.getElementById('ver').value = 'Ingresa un valor numérico válido';
        return;
    }else if (edad <= 0 || edad >= 100){
        document.getElementById('ver').value = 'Ingresa valores válidos';
        return;
    }else if (edad > 0 && edad <= 17){
        document.getElementById('ver').value = 'No puedes votar';
    }else{
        document.getElementById('ver').value = 'Puedes votar';
    }
}