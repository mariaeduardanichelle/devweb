var preco_pago = 170;
var proposta = prompt("Digite a proposta: ");
var diferenca = preco_pago - proposta;
var parsedProposta = parseFloat(proposta);
alert("O valor pago foi R$" + preco_pago.toFixed(2) + "."+ " \nA proposta foi de R$" + parsedProposta.toFixed(2) + "."+ " \nA diferença foi de R$" + diferenca.toFixed(2) + ".");