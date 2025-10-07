import express from "express";
const router = express.Router();

// ROTA CLIENTES
router.get("/jogadores", function (req, res) {
  const jogadores = [
    {
      nome: "LeBron James",
      altura: "2,06m",
      idade:
        "40",
      //imgs : "public/imgs/avatar.png"
    },
    {
      nome: "Luka Dončić",
      altura: "1,98m",
      idade:
        "26",
    },
    {
      nome: "Austin Reaves",
      altura: "1,96m",
      idade:
        "27",
    },
    {
      nome: "Deandre Ayton",
      altura: "2,13m",
      idade:
        "27",
    },
    {
      nome: "Bronny James",
      altura: "1,91m",
      idade:
        "20",
    },
  ];
  res.render("jogadores", {
    jogadores: jogadores,
  });
});

export default router;
