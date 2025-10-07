import express from "express";
const router = express.Router();
// Importando o model cliente
import Pedido from "../models/Pedido.js";

// ROTA CLIENTES
router.get("/pedidos", function (req, res) {
  Pedido.findAll().then(pedidos =>{
      res.render("pedidos", {
        pedidos: pedidos,
    });
  });
});

export default router;