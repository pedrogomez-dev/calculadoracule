function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function tocar(value) {
    document.querySelector('.pantalla').value += value;
    console.log(value);
}
function resultado(){
    document.querySelector('.pantalla').value = 6;
}
function clearDisplay() {
    document.querySelector('.pantalla').value = '';
}

let sonido = new Audio();
sonido.src = './sonido.mp3';