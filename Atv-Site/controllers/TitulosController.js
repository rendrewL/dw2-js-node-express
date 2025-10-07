import express from "express";
const router = express.Router();

// ROTA PRODUTOS
router.get("/titulos", function (req, res) {
  const titulos = [
    { ano: "1948-49", MVP: "Sem dados", PF: "4-2" },
    { ano: "1949-50", MVP: "Sem dados", PF: "4-2" },
    { ano: "1951-52", MVP: "Sem dados", PF: "4-3" },
    { ano: "1952-53", MVP: "Sem dados", PF: "4-1" },
    { ano: "1953-54", MVP: "Sem dados", PF: "4-3" },
    { ano: "1971-72", MVP: "Wilt Chamberlain", PF: "4-1" },
    { ano: "1979-80", MVP: "Magic Johnson", PF: "4-2" },
    { ano: "1981-82", MVP: "Magic Johnson", PF: "4-2" },
    { ano: "1984-85", MVP: "Kareem Abdul-Jabbar", PF: "4-2" },
    { ano: "1986-87", MVP: "Magic Johnson", PF: "4-2" },
    { ano: "1987-88", MVP: "James Worthy", PF: "4-3" },
    { ano: "1999-00", MVP: "Shaquille O'Neal", PF: "4-2" },
    { ano: "2000-01", MVP: "Shaquille O'Neal", PF: "4-1" },
    { ano: "2001-02", MVP: "Shaquille O'Neal", PF: "4-0" },
    { ano: "2008-09", MVP: "Kobe Bryant", PF: "4-1" },
    { ano: "2009-10", MVP: "Kobe Bryant", PF: "4-3" },
    { ano: "2019-20", MVP: "LeBron James", PF: "4-2" },
    
  ];
  res.render("titulos", {
    titulos: titulos,
  });
});

export default router;