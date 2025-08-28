// CLASSES JAVASCRPIT

//Criando uma classe

// Nomes de classes devem iniciar com a primeira letra maiúscula
class Carro {
    //Para criar ATRIBUTOS da classe deve-se utilizar o método "constructor"
    constructor(marca, modelo, ano){
     
     //this representa a instância (objeto)
     // O valor que for enviado a classe será atribuido a instância
        //ATRIBUTOS
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

//MÉTODOS
buzinar() {
    return "Beep! Beep!";
    }
}

//Criando instâncias derivadas da classe carro
const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(
    `<p>O carro ${carroPopular.marca} Modelo ${carroPopular.modelo} é do ano ${carroPopular.ano}. Quando buzina faz ${carroPopular.buzinar()}</p>`
)
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo =  "Camaro"
carroEsportivo.ano = 2024

document.write(
    `<p>O carro ${carroEsportivo.marca} Modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano}. Quando buzina faz ${carroEsportivo.buzinar()}</p>`
)

// Adicionando novo atributo
carroEsportivo.corNeon = "Azul";

// Adicionando um novo método
carroEsportivo.turbo = () => {
    return "Vrummmmmm! O carro está acelerando muito!!!";
};

document.write(
    `<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tambem possui a neon da cor ${carroEsportivo.corNeon}. E quando usa turbo${carroEsportivo.turbo()} </p>`
)