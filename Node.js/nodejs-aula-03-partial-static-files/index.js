5//Importando o express (framework)
const express = require("express");
//Iniciando o express na variavel "app"
const app = express();

app.set("view engine", "ejs");

//Definindo a pasta PUBLIC para arquivos estaticos
app.use(express.static("public"));

// Criando a primeira rota do site (ROTA PRINCINPAL)
// Definindo a rota raiz "/"
// REQ -> Requisição (pedido do cliente)
// RES -> Resposta (resposta do servidor)
app.get("/", (req, res) => {
  res.render("index");
});

//ROTA DOS PRODUTOS
app.get("/produtos", (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // Array de objetos com os produtos
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 40000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3800 },
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

//ROTA DO PERFIL
//:user -> è o parametro da rota (OBRIGATORIO)
//:user? -> É um parametro da rota (OPCIONAL)
app.get("/perfil/:user?", (req, res) => {
  //Criando a variavel que será enviada para página
  const user = req.params.user;
  res.render("perfil", {
    //Enviando variaves para a pagina EJS (HTML)
    user: user,
  });
});

//  ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    {nome : "Ricardo", cpf: "123.456.789-10", endereco: "Rua das Flores, 34"},
    {nome : "Isaac", cpf: "123.456.789-10", endereco: "Rua Diamante, 100"},
    {nome : "Ana Flavia", cpf: "123.456.789-10", endereco: "Rua Ceará, 30"},
    {nome : "Renan", cpf: "123.456.789-10", endereco: "Rua Curitiba, 28"},
  ] ;
  res.render("clientes", {
    clientes : clientes
  });
});
  
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
