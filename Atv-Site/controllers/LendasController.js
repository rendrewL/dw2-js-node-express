import express from 'express'
const router = express.Router()

// ROTA PEDIDOS
router.get("/lendas", function (req,res){
    const lendas = [
        {nome: "Kobe Bryant", titulos: "5 (2000, 2001, 2002, 2009, 2010)", temporadas : 20,},
        {nome: "Magic Johnson", titulos: "5 (1980, 1982, 1985, 1987, 1988)", temporadas : 13,},
        {nome: "Kareem Abdul-Jabbar", titulos: "5 (1980, 1982, 1985, 1987, 1988)", temporadas : 14,},
        {nome: "Jerry West", titulos: "1 (1972)", temporadas : 14,},
        {nome: " Wilt Chamberlain", titulos: "1 (1972)", temporadas : 5,},
        {nome: "George Mikan", titulos: "5 (1949, 1950, 1952, 1953, 1954)", temporadas : 7,},
        {nome: "Shaquille O'Neal", titulos: "3 (2000, 2001, 2002)", temporadas : 8,},
        {nome: "Elgin Baylor", titulos: 0, temporadas : 14,},
        {nome: "LeBron James", titulos: "1 (2020)", temporadas : 7,},

    ]
    res.render("lendas", {
        lendas: lendas
    })
})

export default router