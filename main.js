// Desenvolvido por Geilson Silva (@geilsonfidelis) - 15/10/2023
// Calculadora de Média de Notas
// Este programa solicita que o usuário insira três notas, verifica se estão dentro do intervalo válido
// e calcula a média das notas, exibindo o resultado no console.

// O construtor "Number" não é comumente utilizado para converter valores de entrada obtidos do usuário. 
// ...em vez disso, geralmente é usado a função "parseFloat" para fazer essa conversão.

// Solicitando que o usuário insira três notas
var nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10):"));
var nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10):"));
var nota3 = parseFloat(prompt("Digite a terceira nota (entre 0 e 10):"));

// Verificando se as notas estão dentro do intervalo válido
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log("Por favor, insira notas válidas entre 0 e 10.");
} else {
    // Calculando a média das notas e limitando a duas casas decimais
    var media = (nota1 + nota2 + nota3) / 3;
    media = media.toFixed(2);  // Limitando a duas casas decimais

    // Exibindo a média no console
    console.log("A média das notas é: " + media);
}
