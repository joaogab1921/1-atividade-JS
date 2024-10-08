/*1-
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var peso1 = parseFloat(prompt("Digite o peso da primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var peso2 = parseFloat(prompt("Digite o peso da segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));
var peso3 = parseFloat(prompt("Digite o peso da terceira nota:"));

var mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log("A média ponderada é: " + mediaPonderada);

2-
var peso = parseFloat(prompt("Digite seu peso em kg:"));
var altura = parseFloat(prompt("Digite sua altura em metros:"));

var imc = peso / (altura * altura);
var classificacao;

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc < 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

console.log("Seu IMC é: " + imc.toFixed(2) + " e você está classificado como: " + classificacao);

3-
var valorReais = parseFloat(prompt("Digite um valor em reais:"));
var cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));
var cotacaoEuro = parseFloat(prompt("Digite a cotação do euro:"));

var valorDolares = valorReais / cotacaoDolar;
var valorEuros = valorReais / cotacaoEuro;

console.log("Valor em dólares: " + valorDolares.toFixed(2));
console.log("Valor em euros: " + valorEuros.toFixed(2));

4-
var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
var operacao = prompt("Escolha a operação (soma, subtração, multiplicação, divisão):").toLowerCase();
var resultado;

switch (operacao) {
    case "soma":
        resultado = num1 + num2;
        break;
    case "subtração":
        resultado = num1 - num2;
        break;
    case "multiplicação":
        resultado = num1 * num2;
        break;
    case "divisão":
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            console.log("Erro: Divisão por zero.");
            break;
        }
        break;
    default:
        console.log("Operação inválida.");
        break;
}

if (resultado !== undefined) {
    console.log("Resultado: " + resultado);
}
 
5-
var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
var valor2 = parseFloat(prompt("Digite o segundo valor:"));
var valor3 = parseFloat(prompt("Digite o terceiro valor:"));

var maiorValor = Math.max(valor1, valor2, valor3);

console.log("O maior valor é: " + maiorValor);
*/
