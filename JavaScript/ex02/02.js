function operacaoMatematica(num1, op, num2) {

    const resultado = eval(`${num1} ${op} ${num2}`);
document.write(`<h2>O resultado da operação ${num1} ${op} ${num2} é ${resultado}.</h2>`);
}
operacaoMatematica(10, '*', 10);