const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => (b !== 0 ? a / b : 'Error: División por cero');

const mostrarError = mensaje => {
    Swal.fire({
        icon: 'error',
        title: 'Ocurrió un error',
        text: mensaje
    });
};

const calcularOperacion = operacion => {
    const numero1 = document.getElementById('numero1').value.trim();
    const numero2 = document.getElementById('numero2').value.trim();
    const campoResultado = document.getElementById('resultado');

    if (numero1 === '' || numero2 === '') {
        mostrarError('Debe ingresar ambos números.');
        return;
    }

    const a = parseFloat(numero1);
    const b = parseFloat(numero2);

    if (isNaN(a) || isNaN(b)) {
        mostrarError('Los valores ingresados deben ser números válidos.');
        return;
    }

    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = sumar(a, b);
            break;
        case 'resta':
            resultado = restar(a, b);
            break;
        case 'multiplicacion':
            resultado = multiplicar(a, b);
            break;
        case 'division':
            resultado = dividir(a, b);
            if (resultado === 'Error: División por cero') {
                mostrarError('No es posible dividir por cero.');
                return;
            }
            break;
        default:
            mostrarError('Operación no reconocida.');
            return;
    }

    campoResultado.value = resultado;
};
