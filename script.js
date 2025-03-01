function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function tocar(value) {
    document.querySelector('.pantalla').value += value;
    console.log(value);
}
async function resultado(){
    const display = document.querySelector('.pantalla');
    a = true;
    while (a == true){
        a = false;
        document.querySelector('.pantalla').value = 6;
        await esperar(3000);
        document.querySelector('.pantalla').value = 'Ese no es el resultado real.';
        await esperar(1000);
    }
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function clearDisplay() {
    document.querySelector('.pantalla').value = '';
}