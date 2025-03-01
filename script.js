function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function tocar(value) {
    document.querySelector('.pantalla').value += value;
    console.log(value);
}
function resultado(){
    const resultField = document.querySelector('.pantalla');
    try {
        resultField.value = eval(resultField.value);
        if (resultField.value == 15){
            document.querySelector('.pantalla').value = '15💰';
            let ladron = new Audio();
            ladron.src = './robamadrid.mp3';
            ladron.play();
        }
        else{
            document.querySelector('.pantalla').value = 6;
            let sonido = new Audio();
            sonido.src = './sonido.mp3';
            sonido.play();
        }
    } catch (error) {
        resultField.value = 'Error';
    }
}
function clearDisplay() {
    document.querySelector('.pantalla').value = '';
}
