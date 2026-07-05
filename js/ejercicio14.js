function calcular() {
    let cadena = document.getElementById('cadena').value;

    if (cadena === '' || isNaN(cadena.split(',')[0])) {
        document.getElementById('ver').value = 'Ingresa un valor numérico válido';
        return;
    }else{
        let numeros=cadena.split(',').map(Number);

        let maximo = Math.max(...numeros);
        let minimo = Math.min(...numeros);
        let suma = numeros.reduce((acc, valor) => acc + valor, 0);
        let promedio = suma / numeros.length;

        document.getElementById('mayor').value = maximo;
        document.getElementById('menor').value = minimo;
        document.getElementById('promedio').value = promedio;
    }
}
