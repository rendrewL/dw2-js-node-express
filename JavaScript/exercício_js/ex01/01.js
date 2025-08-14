const user = "Endrew"

function saudacaoPersonalizada(user){
    document.write(`<p>Olá, ${user}! Bem-vindo(a) à Calculadora Universal! </p>`);
}

saudacaoPersonalizada(user);

function operacaoMatematica(num1, operador, num2) {
    const resultado = eval(`${num1} ${operador} ${num2}`);
document.write(`<h2>O resultado da operação ${num1} ${operador} ${num2} é ${resultado}.</h2>`);
}
operacaoMatematica(10, '*', 10);