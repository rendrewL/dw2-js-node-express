import express from "express";
const router = express.Router();
// Importando o model cliente
import Produto from "../models/Produto.js";

// ROTA CLIENTES
router.get("/produtos", function (req, res) {
  Produto.findAll().then(produtos =>{
      res.render("produtos", {
        produtos: produtos,
    });
  });
});

export default router;