var soma_alturas = 0;

for (let i = 1; i <= 20; i++) {
    var altura = parseFloat(prompt("Digite a altura: "));
    soma_alturas += altura;
}

var media = soma_alturas / 20;
alert("A altura média foi " + media.toFixed(2) + "m");