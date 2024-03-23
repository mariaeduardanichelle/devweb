function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    return media;
}

function verificarAprovacao(media) {
    if (media >= 6.0) {
        alert("PARABÉNS! Você foi aprovado!");
    } else {
        alert("Infelizmente, você não atingiu a média mínima para aprovação.");
    }
}

const nota1 = 7.5; 
const nota2 = 8.0; 

const mediaSemestral = calcularMedia(nota1, nota2);
verificarAprovacao(mediaSemestral);