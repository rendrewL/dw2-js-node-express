document.write("<h3>Manipulando datas:</h3>")

const dataAtual = new Date();
document.write(dataAtual)

const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia} </p>`)

const mês = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês: ${mês}</p>`)

const ano = dataAtual.getFullYear();
document.write(`<p>Estamos no ano: ${ano}</p>`)

const diaSemana = dataAtual.getDay() ;
document.write(`<p>Estamos no dia da semana: ${dia}</p>`)