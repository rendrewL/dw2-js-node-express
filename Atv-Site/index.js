import express from "express";
const app = express();

import JogadoresController from "./controllers/JogadoresController.js";
import TitulosController from "./controllers/TitulosController.js";
import LendasController from "./controllers/LendasController.js";
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", JogadoresController);
app.use("/", TitulosController);
app.use("/", LendasController);
app.get("/", function (req, res) {
  res.render("index");
});

const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log(`Não foi possível iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
  }
});
