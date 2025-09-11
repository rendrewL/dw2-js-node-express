//Importando o express (framework)
const express = require("express");
//Iniciando o express na variavel "app"
const app = express();

app.set('view engine', 'ejs')

// Criando a primeira rota do site (ROTA PRINCINPAL)
// Definindo a rota raiz "/"
// REQ -> Requisição (pedido do cliente)
// RES -> Resposta (resposta do servidor)
app.get("/", (req, res) => {
res.render("index")
});

//ROTA DOS PRODUTOS
app.get("/produtos", (req, res) => {
    res.send("<h1>Bem-vindo a página de Produtos!</h1>")
})

//  ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
    res.send("<h1>Bem-vindo a página de Clientes!</h1>")
})

// Iniciando o Servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possivel iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
