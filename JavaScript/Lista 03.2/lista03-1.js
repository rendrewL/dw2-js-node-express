const dataAtual = new Date();
document.write("<h2>Data e Hora de agora:</h2>");
document.write(dataAtual + "<br><br>");

const compraInter = 500.75;
const valorUSD = compraInter.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});
document.write("<h2>Compra Internacional:</h2>");
document.write(`Valor em Dólar: ${valorUSD}<br><br>`);

const cotacaoDolar = 5.25;
const valorBRL = (compraInter * cotacaoDolar).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
document.write("<h2>Conversão para Real:</h2>");
document.write(`Valor em Real: ${valorBRL}<br><br>`);

const dataEntrega = new Date(dataAtual);
dataEntrega.setDate(dataAtual.getDate() + 12);
const dia = String(dataEntrega.getDate()).padStart(2, '0');
const mes = String(dataEntrega.getMonth() + 1).padStart(2, '0');
const ano = dataEntrega.getFullYear();
document.write("<h2>Data de Entrega:</h2>");
document.write(`Previsão de entrega: ${dia}/${mes}/${ano}<br><br>`);