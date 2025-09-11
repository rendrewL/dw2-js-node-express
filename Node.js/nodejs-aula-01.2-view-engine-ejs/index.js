//Importando o express (framework)
const express = require("express");
//Iniciando o express na variavel "app"
const app = express();

app.set('view engine', 'ejs')

// Criando a primeira rota do site (ROTA PRINCINPAL)
// Definindo a rota raiz "/"
// REQ -> Requisição (pedido do cliente)
// RES -> Resposta (resposta do servidor)
app.get("/homepage", (req, res) => {
  res.render("index")
});

//ROTA DOS PRODUTOS
app.get("/produtos", (req, res) => {
    res.render("produto")
})

//  ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
    res.render("clientes")
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
