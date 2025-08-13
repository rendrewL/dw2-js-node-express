// SHIFT + ALT + F = Prettier

// VARIÁVEIS PODER SER DECLARADAS DE 3 FORMAS:
// VAR, LET e CONST
// VAR: No geral evite seu uso, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando não for necessário reatribuir o valor da variável.

// var nome = "Diego"
// var nome = "Maria"
// let cidade = "Registro"
// let cidade = "Pariquera-Açu" // Não pode
// let endereco
// endereco = "Rua Tal..."
// const idade // Não pode
// const idade = 18
// idade = 20 // Não pode

//TIPOS DE FUNÇÕES

// FUNÇÃO SIMPLES
const message = "<h2>Olá! Bem-vindo! Essa é sua primeira função!<h2>";
function showMessage() {
  document.write(message);
}
//invocando a função
showMessage();

// FUNÇÃO COM PARÂMETROS

const user = "Endrew Lemos";

function userMessage(user) {
  // Essa funçõ agora tem parâmetros
  document.write(`<h3>Oque deseja fazer hoje, ${user} ?</h3>`);
  //${} -> Template Strings / Literal Strings
  //É usadon para inserir variáveis dentro de STRINGS (CRASE)
}

userMessage(user); // ARGUMENTO

//FUNÇÃO COM MAIS DE UM PARÂMETROS
const n1 = 10;
const n2 = 20;

function mult(n1,n2) {
  //essa função recebe dois parâmetros
  let result = n1 * n2
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`)
}

mult(n1,n2)

//FUNÇÃO COM RETORNO
const num1 = 1000;
const num2 = 5;

function div(num1, num2) {
  return num1 / num2
}
document.write(`<p>A divisão de ${num1} por ${num2} é igual a ${div(num1, num2)}.</p>`)

//FUNÇÃO COM DIFERENTES RETORNOS
const number = 7;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
document.write(`<p>O número $number é <strong>${parImpar(number)}</strong></p>`)
 