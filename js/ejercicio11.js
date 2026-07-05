function convertir() {
    var kilometros = document.getElementById('kilometros').value;

    if (kilometros === '' || isNaN(kilometros)) {
        document.getElementById('millas').value = 'Ingresa un valor numérico válido';
        return;
    }
    if (kilometros < 0){
        document.getElementById('millas').value = 'Ingresa valores postivos';
        return;
    }else{
        var millas = parseFloat(kilometros) * 0.621371;
        document.getElementById('millas').value = millas;
    }
}