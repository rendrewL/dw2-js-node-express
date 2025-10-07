//Importando o Express
import express from "express";
// Carregando na variavél router o express.Router() que é responsável por gerenciar as rotas de aplicação
const router = express.Router();

//ROTA CLIENTES
router.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Ricardo", cpf: "123.456.789-00", endereco: "Rua das Flores,34" },
    { nome: "Isaac", cpf: "123.456.789-00", endereco: "Rua Diamante,100" },
    { nome: "Amanda", cpf: "123.456.789-00", endereco: "Rua Ceará,30" },
    { nome: "Renan", cpf: "123.456.789-00", endereco: "Rua Curitiba,22" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

//Exportando o objeto router
export default router;