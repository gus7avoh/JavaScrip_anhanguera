var enviar = document.getElementById('Enviar');  
var Button_reset = document.getElementById('reiniciar');
var resultado = document.getElementById('resultado');
var palpite = document.getElementById('palpite');
var last = document.getElementById('last');
var tabela = [];
var contagem = 0;
var win = false;
var numeroCorreto = aleatorio();

function send() {
    var NumeroDigitado = Number(document.getElementById('number').value);

    if (NumeroDigitado === numeroCorreto) {
        resultado.innerHTML = `🎉 Parabéns! Você acertou o número ${numeroCorreto}!`;
        resultado.style.backgroundColor = 'rgba(71, 217, 79, 0.8)';
        win = true;
    } else {
        resultado.innerHTML = `❌ Você errou!`;
        resultado.style.backgroundColor = 'rgba(252, 46, 46, 0.6)';
        tabela.push(NumeroDigitado);
        contagem++;
        last.innerHTML = `Últimos números digitados: ${tabela.join(', ')}`;
        palpite.innerHTML = `Palpite: ${palpites(NumeroDigitado, numeroCorreto)}`;
    }

    if (contagem >= 10 || win) {
        Button_reset.hidden = false;
        enviar.disabled = true; 
    }
}

function aleatorio() {
   // return Math.floor(Math.random() * 100) + 1;
   return 50;
}

function reiniciar() {
    tabela = [];
    contagem = 0;
    win = false;
    numeroCorreto = aleatorio();
    resultado.innerHTML = '';
    resultado.style.backgroundColor = '';
    last.innerHTML = '';
    palpite.innerHTML = '';
    document.getElementById('number').value = '';
    enviar.disabled = false;
    Button_reset.hidden = true;
}

function palpites(chute, correto) {
    let diff = Math.abs(correto - chute);//trasforma qulauqer numero em positivo
    if (diff <= 10) return '🔥 Quente!';
    if (diff <= 30) return '🌡️ Morno!';
    if (diff <= 50) return '😐 Mais ou menos morno!';
    if (diff <= 70) return '❄️ Frio!';
    return '🥶 Muito Frio!';
}

enviar.addEventListener('click', send);
Button_reset.addEventListener('click', reiniciar);