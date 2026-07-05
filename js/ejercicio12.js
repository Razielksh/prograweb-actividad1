function convertir() {
    var pesos = document.getElementById('pesos').value;

    if (pesos === '' || isNaN(pesos)) {
        document.getElementById('dolares').value = 'Ingresa un valor numérico válido';
        return;
    }
    if (pesos < 0){
        document.getElementById('dolares').value = 'Ingresa valores postivos';
        return;
    }else{
        var dolares = parseFloat(pesos) * 0.057;
        document.getElementById('dolares').value = dolares;
    }
}