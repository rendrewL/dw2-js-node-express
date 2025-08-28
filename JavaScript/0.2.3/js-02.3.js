// Objetos literais possuem Atributos e Métodos

// Objetos literais não derivam de classes

const pessoa ={};
document.write(typeof pessoa);

const carro = {
    modelo: "gol",
    cor: "vermelho",
    acelerar(){
        return "Acelerando...";
    },
    frear(){
        return "Freando...";
    },

};

//Exibindo as propiedades do objeto 
document.write(`<p>O modelo do carro é : ${carro.modelo}</p>`)

document.write(`<p>A cor do carro é : ${carro.cor}</p>`)


document.write(`<p>${carro.acelerar()}</p>`)
document.write(`<p>${carro.frear()}</p>`)

const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desenmpenho"
}

document.write(`<p>O ${produto.nome} da marca ${produto.marca} custa apenas R$${produto.preco}!! ${produto.descricao }</p>`)

//ARRAY DE OBJETOS (lista de produtos)

const listaprodutos = [
    {
        nome: "Tablet",
    marca: "Samsumg",
    preco: 2000,
    descricao: "Ótima velocidade",
    },

    {
        nome: "Celular",
    marca: "Apple",
    preco: 7000,
    descricao: "Ultra mega hiper caro",
    },
    
    {
        nome: "TV",
    marca: "LG",
    preco: 2800,
    descricao: "TV inovadora"
    },
];

//Exibindo o array de objetos com  o foreach
listaprodutos.forEach(produto => {
    document.write(`
        Produto: ${produto.nome}<br>
        Marca: ${produto.marca}<br>
        Preco: ${produto.preco}<br>
        Descricao: ${produto.descricao}<br> <br>
        `)
})